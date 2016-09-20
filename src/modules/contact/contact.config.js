const contactConfig = ($stateProvider) => {

  'ngInject';

  $stateProvider
    .state('contact', {
      url: '/contact',
      template: '<app-contact></app-contact>',
      resolve: {
        $title: () => 'Contact',
      },
    });
};

export default contactConfig;
