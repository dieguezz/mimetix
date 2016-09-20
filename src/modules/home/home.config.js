const homeConfig = ($stateProvider) => {

  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      template: '<app-home></app-home>',
    });
};

export default homeConfig;
