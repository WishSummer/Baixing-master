import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
}

Controller.$inject = ['staffs'];

angular
  .module('baixin.dashboard')
  .controller('manageStaffListController', Controller);
