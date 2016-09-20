const webpack = require('webpack');
const projectConfig = require('../config');
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = function makeClientProductionConfig() {

  const config = {

    devtool: projectConfig.__GC_ENV__ === 'prod' ? 'hidden-source-map' : 'source-map',

    plugins: [
      new NyanProgressPlugin(),
      new StatsWriterPlugin({
        filename: 'stats.json',
        fields: [
          'errors',
          'warnings',
          'version',
          'hash',
          'time',
          'publicPath',
          'assetsByChunkName',
          'assets',
          'chunks',
          'modules',
          'filteredModules',
          'children',
        ]
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          unused: true,
          dead_code: true,
          screw_ie8: true,
          warnings: false
        }
      })
    ]
  };

  return config;
};
