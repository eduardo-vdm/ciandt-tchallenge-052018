export function AccountCardDirective(CONST, AccountUtil) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/accountCard/accountCard.html',
    scope: {
      account: '=',
    },
    link: linkFunc
  };

  function linkFunc(scope) {

    scope.lastTransaction = AccountUtil.getLastTransaction(scope.account);
    scope.total = AccountUtil.getTotal(scope.account);

    /**
     * Sets currentAccount in parent scope.
     */
    scope.setCurrentAccount = () => {
      scope.$emit(CONST.EVENT.SET_CURRENT_ACCOUNT, scope.account);
    };
  }

  return directive;
}
