export class LegacyDataApiService {
  constructor ($log, $http, CONST) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.CONST = CONST;
  }

  checkAvailability() {
    return this.$http.get(this.CONST.API.HOST)
//       .then((response) => {
// debugger;
//         return response;
//       })
//       .catch((error) => {
//         debugger;
//         this.$log.error(`Failed to reach LegacyDataApi at ${this.CONST.API.HOST}.\n ${angular.toJson(error.data, true)}`);
//       })
  }
}
