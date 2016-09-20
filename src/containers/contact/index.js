import template from './contact.html';
import './contact.styl';

function contactComponent() {

  'ngInject';
  this.someText = 'The contact view';
}

export default {
  template,
  controller: contactComponent,
};
