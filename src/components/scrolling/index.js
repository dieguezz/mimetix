import angular from 'angular';

function appScrolling($log, $window, $timeout) {
  'ngInject';

  const linkFn = (scope, elem) => {

    angular.element($window).on('scroll', () => {
      elem.addClass('scrolling');
      $timeout(() => {
        elem.removeClass('scrolling');
      }, 600);
    });
  };

  return {
    restrict: 'A',
    link: linkFn,
  };
}
export default appScrolling;
