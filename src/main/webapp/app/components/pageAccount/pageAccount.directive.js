export function PageAccountDirective(AccountUtil) {
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

    // transactions listing sorting
    scope.orderTransactions = {
      id: 'id',
      source: 'source',
      datetime: (t) => Date.parse(t.datetime),
      value: (t) => AccountUtil.getTransactionOperationValue(t),
    };
    scope.orderTransactionsBy = 'datetime';
    scope.orderTransactionsByReverse = true;

    //
    scope.lastTransaction = AccountUtil.getLastTransaction(scope.account);

    // Set a watcher to recalculate total everytime transactions change
    scope.$watch('account.transactions', () => {
      scope.total = AccountUtil.getTotal(scope.account);
    }, true);

    // to return operation value
    scope.getOperationValue = (transaction) => AccountUtil.getTransactionOperationValue(transaction)

  }

  return directive;
}
