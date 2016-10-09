const projectConfig = require('./config');
const webpack = require('webpack');
const _ = require('lodash');

function makeBaseConfig() {
  const config = {
    name: 'mimetix',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(projectConfig.NODE_ENV)
        },
        '__DEBUG__'  : projectConfig.__DEBUG__,
        '__DEV__'    : projectConfig.__DEV__,
        '__PROD__'   : projectConfig.__PROD__,
        '__API__'    : JSON.stringify(projectConfig.__API__),
        '__GC_ENV__' : JSON.stringify(projectConfig.__GC_ENV__)
      })
    ],
    resolve: {
      root: projectConfig.inSrc(),
      extensions: ['', '.webpack.js', '.web.js', '.js', '.styl'],
      alias: {
        'core' : 'styles/src/core',
        'img'  : 'styles/img'
      }
    },
    module : {
      loaders : [
        {
          test: /\.(js)$/,
          loaders: ['ng-annotate', 'babel'],
          exclude: [/node_modules/]
        },
        {
          test: /\.(html)$/,
          loader:  'html?attrs[]=img:src&attrs[]=img:gc-src-fallback&attrs[]=md-icon:data-md-svg-src&root='+projectConfig.inSrc('assets'),
          exclude: [/node_modules/]
        },
        {
          test: /\.(tmpl)$/,
          loader: 'underscore-template-loader',
          query: {
            root: projectConfig.inSrc('assets'),
            parseDynamicRoutes: true,
            attributes: ['link:href', 'img:src']
          },
          exclude: [/node_modules/]
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(gif|jpg|jpeg|png|ico)$/,
          loader: 'url-loader?limit=2000'
        }
      ]
    },
    eslint : {
      configFile  : projectConfig.inProject('.eslintrc'),
      failOnError : projectConfig.__PROD__
    }
  };

  return config;
}

module.exports = function makeConfig(configModifier, envModifier) {
  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  };

  return _.mergeWith({}, makeBaseConfig(), configModifier, envModifier, customizer);
};
