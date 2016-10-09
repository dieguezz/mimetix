import angular from 'angular';

import contact from '../../containers/contact';

const contactModule = angular.module('mimetix.contact', [])
  .component('appContact', contact);

export default contactModule;
