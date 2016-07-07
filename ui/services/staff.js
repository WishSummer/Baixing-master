import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Service extends ServiceInjector {
  query() {
    return this.$http.get('/api/staff');
  }

  create(staff) {
    return this.$http.post('/api/staff', staff);
  }

  get(id) {
    return this.$http.get(`/api/staff/${id}`);
  }

  update(id, staff) {
    return this.$http.put(`/api/staff/${id}`, staff);
  }

  delete(id) {
    return this.$http.delete(`/api/staff/${id}`);
  }
}

Service.$inject = ['$http'];

angular
  .module('baixin.services')
  .service('Staff', Service);
