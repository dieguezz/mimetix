import template from './header.html';
import menuItems from './header.menu.items';
import './header.styl';

function headerComponent($location) {

  'ngInject';

  this.menuItems = menuItems();

  this.$onInit = () => {
    this.currentMenuItem = $location.url().split('/')[1] || '';
  };
}

export default {
  template,
  controller: headerComponent,
};
