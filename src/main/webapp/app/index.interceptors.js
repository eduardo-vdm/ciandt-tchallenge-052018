export function interceptorsConfig ($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(function($rootScope, $q, CONST) {
    return {
      // called whenever a $http response error
      'responseError': function(rejection) {
        // set if api is reachable
        $rootScope.apiIsUnreachable = rejection
          && rejection.config
          && rejection.config.url
          && rejection.config.url === CONST.API.HOST;

        return $q.reject(rejection);
      }
    };
  });
}
