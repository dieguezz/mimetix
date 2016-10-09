process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

const resolve = require('path').resolve;
const _slice  = [].slice;
const yargs   = require('yargs')
      .choices('app_env', ['local', 'dev', 'qa', 'uat', 'prod'])
      .choices('api',        ['local', 'dev', 'qa', 'uat', 'prod'])
      .default('app_env', 'local')
      .default('api',        'local')
      .default('base_tag',   '/')
      .argv;

const SRC_DIRNAME  = 'src';
const DIST_DIRNAME = 'dist';
const PROJECT_PATH = resolve(__dirname, '../');

function inProject() {
  return resolve.apply(resolve, [PROJECT_PATH].concat(_slice.apply(arguments)));
}

// ------------------------------------
// Configuration Definition
// ------------------------------------
module.exports = exports = {

  // environment
  NODE_ENV   : process.env.NODE_ENV,
  __DEBUG__  : !!yargs.debug,
  __API__    : yargs.api,
  __GC_ENV__ : yargs.app_env,
  __DEV__    : process.env.NODE_ENV === 'development',
  __PROD__   : process.env.NODE_ENV === 'production',

  // path helpers__
  SRC_DIRNAME  : SRC_DIRNAME,
  DIST_DIRNAME : DIST_DIRNAME,
  PROJECT_PATH : PROJECT_PATH,
  BASE_TAG     : yargs.base_tag,
  inProject    : inProject,
  inSrc        : inProject.bind(undefined, SRC_DIRNAME),
  inDist       : inProject.bind(undefined, DIST_DIRNAME),

  // build system
  VENDOR_DEPENDENCIES: [
    'angular',
    'angular-scroll',
    'angular-aria',
    'angular-material',
    'angular-material/angular-material.css',
    'angular-ui-router',
    'slick-carousel',
  ],

  // server configuration
  WEBPACK_PORT : 3000,
  SERVER_PORT  : process.env.PORT || 4000
};
