import angular from 'angular';
import contactConfig from './contact.config';

import contact from '../../containers/contact';

const contactModule = angular.module('mimetix.contact', [])
  .component('appContact', contact)
  .config(contactConfig);

export default contactModule;
