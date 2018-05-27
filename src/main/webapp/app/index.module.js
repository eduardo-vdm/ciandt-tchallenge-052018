/* global moment:false */

import { CONSTANTS } from './index.constants';
import { config } from './index.config';
import { interceptorsConfig } from './index.interceptors';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';

import { LegacyDataApiService } from "./components/legacyDataApi/legacyDataApi.service";

import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { WaitingDataConnectionDlgDirective } from "./components/waitingDataConnectionDlg/waitingDataConnectionDlg.directive";


angular.module('desafioCiandtMvp',
  ['ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial',
    'toastr']
) .constant('moment', moment)
  .constant('CONST', CONSTANTS)
  .config(config)
  .config(interceptorsConfig)
  .config(routerConfig)
  .run(runBlock)
  .service('LegacyDataApi', LegacyDataApiService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('waitingDataConnectionDlg', WaitingDataConnectionDlgDirective);
