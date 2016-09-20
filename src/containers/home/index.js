import template from './home.html';
import slider from './partials/slider.html';
import './home.styl';
import './partials/slider.styl';
import angular from 'angular';
/* eslint-disable no-console,no-unused-vars */
function sliderBody() {
  return {
    template: slider,
  };
}

function homeComponent($log, $mdDialog, $timeout, $http, $interval, $mdColorPalette) {

  'ngInject';
  const slickSlider = angular.element('.slick-slider');
  const slickConfig = {
    enabled: true,
    autoplay: false,
    draggable: true,
    autoplaySpeed: 3000,
    responsive: false,
    infinite: true,
    speed: 500,
    dots: true,
    arrows: true,
    lazyLoad: true,
    nextArrow: `<button type="button" class="slick-next">
                <i class="material-icons">arrow_forward</i></button>`,
    prevArrow: `<button type="button" class="slick-prev">
                <i class="material-icons">arrow_back</i></button>`,
  };

  let originatorEv;
  this.number1 = [1];
  this.currentIndex = 0;
  this.openMenu = ($mdOpenMenu, ev) => {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  const colours = Object.keys($mdColorPalette);
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
