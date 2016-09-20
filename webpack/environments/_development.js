const projectConfig = require('../config');
const webpack = require('webpack');
const NotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function makeClientDevelopmentConfig() {

  const url = 'http://localhost:' + projectConfig.WEBPACK_PORT;

  const config = {

    devtool: 'inline-source-map',

    entry: {
      app: [
        'webpack-dev-server/client?' + url,
        'webpack/hot/dev-server'
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new NotifierPlugin(),
      new BrowserSyncPlugin({
          // proxy the Webpack Dev Server endpoint through BrowserSync
          proxy: url
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
        }
      )
    ]
  };

  return config;
};
