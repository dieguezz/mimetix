/* eslint no-console:0 */
const webpack = require('webpack');
const argv    = require('yargs').argv;
const config  = require('../config');
const WebpackDevServer = require('webpack-dev-server');
const makeCompiler = require('../index');

const QUIET_MODE = !!argv.quiet;

const server = new WebpackDevServer(webpack(makeCompiler()), {
  contentBase : config.inProject(config.SRC_DIRNAME),
  hot    : true,
  quiet  : QUIET_MODE,
  noInfo : QUIET_MODE,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

server.listen(config.WEBPACK_PORT, '0.0.0.0', function() {
  console.log('Webpack dev server running at localhost:' + config.WEBPACK_PORT);
});

module.exports = exports = server;
