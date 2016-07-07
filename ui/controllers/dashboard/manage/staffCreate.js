import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Controller extends ServiceInjector {
  constructor(...args) {
    super(...args);
    this.staff = {
      enter_date: Date.now(),
    };
  }

  async doCreate() {
    await this.Staff.create(this.staff);
    this.toastr.success(this.$translate.instant('员工创建成功'));
    this.$state.go('manage_staff');
  }
}

Controller.$inject = ['toastr', '$translate', '$state', 'Staff'];

angular
  .module('baixin.dashboard')
  .controller('manageStaffCreateController', Controller);
