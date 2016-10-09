import template from './footer.html';

function footerComponent() {

  'ngInject';

  this.openMenu = ($mdOpenMenu, ev) => {
    $mdOpenMenu(ev);
  };
}

export default {
  template,
  controller: footerComponent,
};
