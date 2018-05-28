export function AccountCardDirective(CONST, lodash) {
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

    // console.log('acc-card', scope.account);

    scope.lastTransaction = getLastTransaction();
    scope.total = getTotal();

    scope.setCurrentAccount = () => {
      scope.$emit(CONST.EVENT.SET_CURRENT_ACCOUNT, scope.account);
    };


    function getLastTransaction() {
      let lastDatetime = null;
      if (scope.account && scope.account.transactions && scope.account.transactions.length) {
        lastDatetime = lodash.last(lodash.sortBy(scope.account.transactions, (t) => Date.parse(t.datetime)));
      }

      return lastDatetime;
    }

    function getTotal() {
      return scope.account && scope.account.transactions && lodash.reduce(scope.account.transactions, (total, t) => {
        return total + ((t.operation === 'debt' && -1 || 1) * t.value);
      }, 0.00) || 0.00;
    }

  }

  return directive;
}
