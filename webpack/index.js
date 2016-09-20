const makeConfig = require('./make-config');
const projectConfig = require('./config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// helper function to load any CSS flavour
function stylesLoaders(extract, include = [], exclude = []) {
  const loaders = {
    'css'       : '',
    'less'      : '!less-loader',
    'scss|sass' : '!sass-loader',
    'styl'      : '!stylus-loader'
  };

  return Object.keys(loaders).map(function(ext) {
    const prefix = 'css-loader!postcss-loader';
    const extLoaders = prefix + loaders[ext];
    const loader = (!extract) ? 'style-loader!' + extLoaders
                              : ExtractTextPlugin.extract('style-loader', extLoaders);
    return {
      test    : new RegExp('\\.(' + ext + ')$'),
      loader  : loader,
      include : include,
      exclude : exclude
    };
  });
}

const config = {
  target: 'web',
  entry: {
    app: [
      projectConfig.inSrc('index')
    ],
    vendor: projectConfig.VENDOR_DEPENDENCIES
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: projectConfig.inDist(),
    publicPath: ''
  },
  module: {
    noParse: [/moment.js/],
    preLoaders : [
      {
        test : /\.(js)$/,
        loaders : ['eslint-loader'],
        include : projectConfig.inProject(projectConfig.SRC_DIRNAME)
      }
    ],
    loaders: [
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: projectConfig.inSrc('index.html.tmpl'),
      templateOptions: {
        baseTag: projectConfig.BASE_TAG
      },
      hash: true,
      minify: projectConfig.__PROD__ ? {
        // for more options see: https://github.com/kangax/html-minifier#options-quick-reference
        removeComments : true,
        minifyJS       : true,
        minifyCSS      : true
      } : false,
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash].js'
    }),
    new ExtractTextPlugin('[name].[hash].css', {
      allChunks: true
    })
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions']})
  ]
};

const modulesPath = projectConfig.inSrc('modules');
const containersPath = projectConfig.inSrc('containers');

// configure styles loaders:
// - module and container specific styles will be inlined
// - app commons and vendor related styles will be bundled into its specific files
config.module.loaders = config.module.loaders.concat(
  stylesLoaders(true, projectConfig.inProject(), [modulesPath, containersPath]),
  stylesLoaders(false, modulesPath),
  stylesLoaders(false, containersPath)
);

module.exports = function makeClientConfig(type = projectConfig.NODE_ENV) {
  const envConfig = require('./environments/_' + type);
  return makeConfig(config, envConfig());
};
