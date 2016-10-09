import angular from 'angular';

import scrolling from './scrolling/scrolling.module';

const componentsModule = angular.module('mimetix.components', [
  scrolling.name,
]);

export default componentsModule;
