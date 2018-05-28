export class AccountUtilService {
  constructor ($log, lodash) {
    'ngInject';

    this.$log = $log;
    this.lodash = lodash;
  }

  /**
   * Returns the most recent transaction.
   * @param account
   * @returns {*}
   */
  getLastTransaction(account) {
    let lastTransaction = null;
    if (account && account.transactions && account.transactions.length) {
      lastTransaction = this.lodash.last(this.lodash.sortBy(account.transactions, (t) => Date.parse(t.datetime)));
    }

    return lastTransaction;
  }

  /**
   * Calculates and returns the total amount of transactions values.
   * @param account
   * @returns {Document.account|string|*|number}
   */
  getTotal(account) {
    return account && account.transactions && this.lodash.reduce(account.transactions, (total, t) => {
      return total + ((t.operation === 'debt' && -1 || 1) * t.value);
    }, 0.00) || 0.00;
  }

  /**
   * Returns true value considering the transaction operation.
   * @param transaction
   * @returns {number}
   */
  getTransactionOperationValue(transaction) {
    return (Number)((transaction.operation === 'debt' && -1 || 1) * transaction.value);
  }
}
