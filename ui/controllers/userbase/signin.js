import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  constructor(...args) {
    super(...args);
    this.username = '';
    this.password = '';
  }

  async doSignIn() {
    await this.User.signIn(this.username, this.password);
    window.location = '/dashboard';
  }
}

Controller.$inject = ['User'];

angular
  .module('baixin.userbase')
  .controller('signInController', Controller);
