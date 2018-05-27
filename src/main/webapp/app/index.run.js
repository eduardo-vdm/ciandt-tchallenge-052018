export function runBlock ($log, $rootScope, LegacyDataApi) {
  'ngInject';

  // optimistic start to avoid blinking dialog
  $rootScope.apiIsUnreachable = false;

  // fire api availablity check
  LegacyDataApi.checkAvailability();

  //
  $log.debug('runBlock end');
}
