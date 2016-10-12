import template from './contact.html';
import './contact.styl';

function contactComponent($http, $log) {

  'ngInject';

  this.contactForm = {};
  this.contactForm.email = '';
  this.contactForm.message = '';

  this.sendEmail = () => {
    const domain = 'http://localhost:8081';
    const data = {
      email: JSON.stringify(this.contactForm.email),
      message: JSON.stringify(this.contactForm.message),
    };

    const emailEndpoint = `${domain}/sendmail/${data.email}/${data.message}`;

    $http.get(emailEndpoint, data).then((response) => {
      $log.log(response);
    }).catch((err) => {
      $log.log(err);
    });
  };
}

export default {
  template,
  controller: contactComponent,
};
