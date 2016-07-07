import 'angular-datepicker/dist/index.min.css';

import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import angularAnimate from 'angular-animate';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularDialog from 'angular-dialog-service';
import angularToastr from 'angular-toastr';
import angularDatePicker from 'angular-datepicker/index.js';
import 'angular-moment';

import configToastr from 'config/toastr';
import configAjax from 'config/ajax';
import configTranslation from 'config/translation';

const app = angular
  .module('baixin.shared', [
    angularTranslate,
    angularSanitize,
    angularAnimate,
    angularUiRouter,
    angularUiBootstrap,
    angularDialog,
    angularToastr,
    angularDatePicker,
    'angularMoment',
    'baixin.services',
  ])
  .run(['amMoment', amMoment => {
    amMoment.changeLocale('zh-cn');
  }])
  .config(configToastr)
  .config(configAjax)
  .config(configTranslation)
  ;

export default app;
