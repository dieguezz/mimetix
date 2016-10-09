import angular from 'angular';

import footer from '../../containers/footer';

const footerModule = angular.module('mimetix.footer', [])
  .component('appFooter', footer);

export default footerModule;
