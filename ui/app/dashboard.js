import angular from 'angular';
import NProgress from 'nprogress';

import configRouter from 'config/router';

const app = angular
  .module('baixin.dashboard', ['baixin.shared'])
  .config(configRouter)
  .run(['$rootScope', '$window', ($rootScope, $window) => {
    $rootScope.goBack = () => $window.history.back();
  }])
  .run(['$transitions', $transitions => {
    $transitions.onEnter({}, function () { NProgress.start(); });
    $transitions.onFinish({}, function () { NProgress.done(); });
  }]);

const dashboardCtrlCtx = require.context('controllers/dashboard/', true, /\.js$/);
dashboardCtrlCtx.keys().map(dashboardCtrlCtx);

export default app;
