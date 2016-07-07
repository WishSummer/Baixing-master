import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  async doUpdate() {
    await this.Staff.update(this.staff._id, this.staff);
    this.toastr.success(this.$translate.instant('员工更新成功'));
    this.$state.go('manage_staff');
  }
  async doDelete() {
    try {
      await (this.dialogs.confirm(
        '删除员工',
        '您确认要删除该员工吗？该操作无法恢复！'
      ).result);
    } catch (ignore) {
      // rejected
      return;
    }
    await this.Staff.delete(this.staff._id);
    this.toastr.success(this.$translate.instant('删除员工成功'));
    this.$state.go('manage_staff');
  }
}

Controller.$inject = ['staff', 'toastr', 'dialogs', '$translate', '$state', 'Staff'];

angular
  .module('baixin.dashboard')
  .controller('manageStaffEditController', Controller);
