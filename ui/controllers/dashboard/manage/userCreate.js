import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  constructor(...args) {
    super(...args);
    this.user = {
      username: '',
      password: '',
      privilege: {
        MANAGE_USER: false,
        MANAGE_STAFF: false,
      },
    };
  }

  async doCreate() {
    await this.User.create(this.user);
    this.toastr.success(this.$translate.instant('用户创建成功'));
    this.$state.go('manage_user');
  }

  togglePrivilege(privName) {
    this.user.privilege[privName] = !this.user.privilege[privName];
  }
}

Controller.$inject = ['toastr', '$translate', '$state', 'User'];

angular
  .module('baixin.dashboard')
  .controller('manageUserCreateController', Controller);
