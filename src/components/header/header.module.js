import angular from 'angular';

import header from './';

const headerModule = angular.module('mimetix.components.appHeader', [])
  .component('appHeader', header);

export default headerModule;
