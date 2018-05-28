export class LegacyDataApiService {
  constructor ($log, $http, CONST) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.CONST = CONST;
  }

  /**
   * Checks api availability by pinging the root url.
   * @returns {Promise}
   */
  checkAvailability() {
    return this.$http.get(this.CONST.API.HOST);
//       .then((response) => {
// debugger;
//         return response;
//       })
//       .catch((error) => {
//         debugger;
//         this.$log.error(`Failed to reach LegacyDataApi at ${this.CONST.API.HOST}.\n ${angular.toJson(error.data, true)}`);
//       })
  }

  /**
   * Lists available accounts.
   * @returns {Promise}
   */
  getAccounts() {
    return this.$http.get(this.CONST.API.HOST + 'accounts');
  }
}
