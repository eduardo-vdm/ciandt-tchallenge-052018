export class MainController {
  constructor (
    CONST,
    $scope,
    $q,
    $log,
    LegacyDataApi) {
    'ngInject';

    function init() {
      $scope.loading = initScope()
        .then(fetchAccounts)
        .catch((error) => {
          $log.debug(`[main-init] error: ${error}`);
        })
        .finally(() => {
          $log.debug('[main-init] end');
        })
    }

    function initScope() {
      return $q((resolve) => {
        // current page
        $scope.currentPage = $scope.currentPage || 'home';

        // all available accounts
        $scope.allAccounts = null;

        // selected account
        $scope.currentAccount = null;

        // event by emission
        $scope.$on(CONST.EVENT.SET_CURRENT_ACCOUNT, setCurrentAccountFromEvent);

        // loading promise
        $scope.loading = null;

        resolve();
      });
    }

    function fetchAccounts() {
      return $q((resolve, reject) => {
        LegacyDataApi.getAccounts()
          .then((response) => {
            $scope.allAccounts = response.data;
            resolve();
          }).catch(reject);
      });
    }

    function setCurrentAccountFromEvent(event, account) {
      $scope.currentAccount = account;
      // change page to account
      $scope.currentPage = 'account';
    }

    // init
    init();
  }
}
