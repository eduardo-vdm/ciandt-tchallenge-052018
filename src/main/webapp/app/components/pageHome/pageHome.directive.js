export function PageHomeDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/pageHome/pageHome.html',
    scope: {
      accounts: '=',
    }
  };


  return directive;
}
