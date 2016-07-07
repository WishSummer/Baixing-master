import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  async doLogout() {
    await this.User.logout();
    window.location = '/';
  }
}

Controller.$inject = ['User'];

angular
  .module('baixin.dashboard')
  .controller('navController', Controller);
