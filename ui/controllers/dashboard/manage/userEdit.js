import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  async doUpdate() {
    await this.User.update(this.user._id, this.user);
    this.toastr.success(this.$translate.instant('用户更新成功'));
    this.$state.go('manage_user');
  }
  async doDelete() {
    try {
      await (this.dialogs.confirm(
        '删除用户',
        '您确认要删除该用户吗？该操作无法恢复！'
      ).result);
    } catch (ignore) {
      // rejected
      return;
    }
    await this.User.delete(this.user._id);
    this.toastr.success(this.$translate.instant('删除用户成功'));
    this.$state.go('manage_user');
  }

  togglePrivilege(privName) {
    this.user.privilege[privName] = !this.user.privilege[privName];
  }
}

Controller.$inject = ['user', 'toastr', 'dialogs', '$translate', '$state', 'User'];

angular
  .module('baixin.dashboard')
  .controller('manageUserEditController', Controller);
