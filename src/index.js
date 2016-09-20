// ----------------------------------
// App main module (entry point):
// the app will be bootstrapped here
// ----------------------------------

// vendor dependencies
import angular from 'angular';
import { isFunction } from 'lodash';
import router from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
// app components/directives
import app from './containers/app/app';
import components from './components/components.module';
// import models from './models/models.module';
// app styles
import './styles/src/main.styl';

// register app component and models
import home from './modules/home/home.module';
import contact from './modules/contact/contact.module';
// app main module definition
const mimetix = angular.module('mimetix', [
  router,
  ngResource,
  ngCookies,
  ngMaterial,
  ngMessages,
  'ngAnimate',
  components.name,
  home.name,
  contact.name,
  // models.name,
]);

mimetix
  .component('angularApp', app)
  .config(($logProvider, $compileProvider, $urlRouterProvider, $locationProvider) => {

    'ngInject';

    // ui-router config
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true);

    // __DEV__ is a "magic" environment var, see webpack/config.js
    /* eslint-disable no-undef */
    $compileProvider.debugInfoEnabled(__DEV__);
    $logProvider.debugEnabled(__DEV__);
    /* eslint-enable no-undef */
  })
  .run(($rootScope, $state) => {
    $rootScope.$on('$stateChangeSuccess', () => {
      // change the page title
      const title = $state.$current.locals.globals.$title;
      /* eslint-disable no-param-reassign */
      $rootScope.$title = isFunction(title) ? title() : title;
      /* eslint-enable no-param-reassign */
    });
  });

export default mimetix;
