export function PageHomeDirective(CONST) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/pageHome/pageHome.html',
    scope: {
      accounts: '=',
    },
    link: linkFunc
  };

  function linkFunc(scope) {

    scope.setCurrentAccount = (account) => {
      scope.$emit(CONST.EVENT.SET_CURRENT_ACCOUNT, account);
    }

  }

  return directive;
}
