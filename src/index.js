// ----------------------------------
// App main module (entry point):
// the app will be bootstrapped here
// ----------------------------------

// vendor dependencies
import angular from 'angular';
import router from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngScroll from 'angular-scroll';
// app components/directives
import app from './containers/app/app';
import components from './components/components.module';
// import models from './models/models.module';
// app styles
import './styles/src/main.styl';

// register app component and models
import home from './modules/home/home.module';
import contact from './modules/contact/contact.module';
import footer from './modules/footer/footer.module';
// app main module definition
const mimetix = angular.module('mimetix', [
  router,
  ngMaterial,
  ngScroll,
  components.name,
  home.name,
  contact.name,
  footer.name,
]);

mimetix
  .component('angularApp', app)
  .config(($logProvider, $compileProvider, $urlRouterProvider, $locationProvider) => {

    'ngInject';

    // ui-router config
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    // __DEV__ is a "magic" environment var, see webpack/config.js
    /* eslint-disable no-undef */
    $compileProvider.debugInfoEnabled(__DEV__);
    $logProvider.debugEnabled(__DEV__);
    /* eslint-enable no-undef */
  });

export default mimetix;
