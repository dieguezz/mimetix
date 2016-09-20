import angular from 'angular';
import homeConfig from './home.config';

import home from '../../containers/home';

const homeModule = angular.module('mimetix.home', [])
  .component('appHome', home)
  .directive('homeSlider', home.sliderComponent)
  .config(homeConfig);

export default homeModule;
