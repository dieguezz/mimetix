import template from './contact.html';
import './contact.styl';

function contactComponent($http, $log) {

  'ngInject';

  this.contactForm = {};
  this.contactForm.email = '';
  this.contactForm.message = '';

  this.sendEmail = () => {
    const domain = 'mimetix.com';
    const data = {
      from: this.contactForm.email,
      to: 'diego.segura@mimetix.com',
      subject: 'Contacto Web Mimetix',
      text: this.contactForm.message,
    };
    const mailgunApiKey = 'api:key-deb367be4c2450889fd03e2bed223027';
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${mailgunApiKey}`,
      },
      method: 'POST',
    };
    const emailEndpoint = `https://api.mailgun.net/v3/${domain}/messages`;

    $http.post(emailEndpoint, data, config).then((response) => {
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
