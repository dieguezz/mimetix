import angular from 'angular';

import header from './header/header.module';

const componentsModule = angular.module('mimetix.components', [
  header.name,
]);

export default componentsModule;
