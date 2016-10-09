import template from './contact.html';
import './contact.styl';

function contactComponent($http) {

  'ngInject';

  this.contactForm = {};
  this.contactForm.email = '';
  this.contactForm.message = '';

  this.sendEmail = () => {
    const data = this.contactForm;
    const emailEndpoint = '';
    $http.post(emailEndpoint, data).then(() => {
      // TODO
    }).catch(() => {
      // TODO
    });
  };
}

export default {
  template,
  controller: contactComponent,
};
