import angular from 'angular';

import scrolling from './';

const scrollingModule = angular.module('mimetix.components.appScrolling', [])
  .directive('appScrolling', scrolling);

export default scrollingModule;
