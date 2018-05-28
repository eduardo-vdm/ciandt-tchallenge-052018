/* global moment:false */

import { CONSTANTS } from './index.constants';
import { config } from './index.config';
import { interceptorsConfig } from './index.interceptors';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';

import { LegacyDataApiService } from "./components/legacyDataApi/legacyDataApi.service";

import { WaitingDataConnectionDlgDirective } from "./components/waitingDataConnectionDlg/waitingDataConnectionDlg.directive";
import { PageHomeDirective } from "./components/pageHome/pageHome.directive";
import { PageAccountDirective } from "./components/pageAccount/pageAccount.directive";

angular.module('desafioCiandtMvp',
  ['ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial',
    'cgBusy']
) .constant('moment', moment)
  .constant('CONST', CONSTANTS)
  .config(config)
  .config(interceptorsConfig)
  .config(routerConfig)
  .run(runBlock)
  .service('LegacyDataApi', LegacyDataApiService)
  .controller('MainController', MainController)
  .directive('waitingDataConnectionDlg', WaitingDataConnectionDlgDirective)
  .directive('pageHome', PageHomeDirective)
  .directive('pageAccount', PageAccountDirective);
