import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
}

Controller.$inject = ['users'];

angular
  .module('baixin.dashboard')
  .controller('manageUserListController', Controller);
