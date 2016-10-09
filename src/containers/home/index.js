import angular from 'angular';
import template from './home.html';
import slider from './partials/slider.html';
import slickConfig from './slick.config';
import './home.styl';
import './partials/slider.styl';

function sliderBody() {
  return {
    template: slider,
  };
}

function homeComponent($log, $timeout, $mdDialog) {

  'ngInject';

  const slickSlider = angular.element('.slick-slider');

  this.openContactModal = () => {
    $mdDialog.show({
      template: '<app-contact></app-contact>',
      parent: angular.element(document.body),
      clickOutsideToClose:true,
      openFrom: '.contact-bubble',
      closeTo: angular.element(document.querySelector('.contact-bubble')),
    });
  };

  this.$onInit = () => {
    $timeout(() => {
      this.fade1 = true;
      slickSlider.slick(slickConfig);
    }, 150);
    $timeout(() => {
      this.fade2 = true;
    }, 400);
  };
}

export default {
  template,
  controller: homeComponent,
  sliderComponent: sliderBody,
};
