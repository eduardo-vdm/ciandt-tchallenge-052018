export function WaitingDataConnectionDlgDirective(
  $rootScope,
  $document,
  LegacyDataApi,
  $mdDialog) {
  'ngInject';

  let directive = {
    restrict: 'E',
    link: linkFunc
  };

  function linkFunc(scope) {
    // the dialog object
    scope.dialog = null;
    // check connection interval id
    scope.checkInterval = null;

    // Watch at $rootScope if API is available
    $rootScope.$watch('apiIsUnreachable', toggleDialog);

    /**
     * Show/hide dialog depending on current connection availability.
     * If shown, sets a timer to re-check availability from time to time.
     * @param showDialog
     */
    function toggleDialog(showDialog) {
      if (!showDialog && scope.dialog) {
        clearInterval(scope.checkInterval);
        scope.checkInterval = null;
        $mdDialog.hide();
        scope.dialog = null;
      } else if (!!showDialog && !scope.dialog) {
        scope.dialog = createDialog();

        // Start interval to check connection every x seconds and set it on $rootScope to trigger the watcher
        scope.checkInterval = setInterval(() => {
          LegacyDataApi.checkAvailability()
            .then(() => {
              console.log('LegacyDataApi.checkAvailability.then');
              $rootScope.apiIsUnreachable = false;
            })
            .catch(() => {
              console.log('LegacyDataApi.checkAvailability.catch');
              $rootScope.apiIsUnreachable = true;
            })
        }, 2000);
      }
    }

    /**
     * Creates and return the dialog.
     * @returns {*}
     */
    function createDialog() {
      return $mdDialog.show({
        templateUrl: 'app/components/waitingDataConnectionDlg/waitingDataConnectionDlg.html',
        parent: angular.element($document.body),
        // targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true
      });
    }
  }

  return directive;
}
