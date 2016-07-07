import angular from 'angular';

const app = angular
  .module('baixin.userbase', ['baixin.shared']);

const userbaseCtrlCtx = require.context('controllers/userbase/', true, /\.js$/);
userbaseCtrlCtx.keys().map(userbaseCtrlCtx);

export default app;
