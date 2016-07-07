import angular from 'angular';
import ServiceInjector from 'utils/ServiceInjector';

export default class Service extends ServiceInjector {
  signIn(username, password) {
    return this.$http.post('/api/login', {
      username,
      password,
    });
  }

  logout() {
    return this.$http.post('/api/logout');
  }

  query() {
    return this.$http.get('/api/user');
  }

  create(user) {
    return this.$http.post('/api/user', user);
  }

  get(id) {
    return this.$http.get(`/api/user/${id}`);
  }

  update(id, user) {
    return this.$http.put(`/api/user/${id}`, user);
  }

  delete(id) {
    return this.$http.delete(`/api/user/${id}`);
  }
}

Service.$inject = ['$http'];

angular
  .module('baixin.services')
  .service('User', Service);
