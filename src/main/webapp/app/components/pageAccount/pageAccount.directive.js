export function PageAccountDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/pageAccount/pageAccount.html',
    scope: {
      account: '=',
    },
    link: linkFunc
  };

  function linkFunc(scope) {

  }

  return directive;
}
