const resolveUserQuery = ['User', async (User) => {
  return (await User.query()).data;
}];
const resolveUserGet = ['User', '$stateParams', async (User, $stateParams) => {
  return (await User.get($stateParams.id)).data;
}];
const resolveStaffQuery = ['Staff', async (Staff) => {
  return (await Staff.query()).data;
}];
const resolveStaffGet = ['Staff', '$stateParams', async (Staff, $stateParams) => {
  return (await Staff.get($stateParams.id)).data;
}];

export default function router ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/manage');

  $stateProvider
    .state('manage', {
      url: '/manage',
      templateUrl: '/static/angular-views/manage/index.html',
      controller: 'manageController as ctrl',
    })
    .state('manage_user', {
      url: '/manage/users',
      templateUrl: '/static/angular-views/manage/user_list.html',
      controller: 'manageUserListController as ctrl',
      resolve: {
        users: resolveUserQuery,
      },
    })
    .state('manage_user_edit', {
      url: '/manage/users/:id/edit',
      templateUrl: '/static/angular-views/manage/user_edit.html',
      controller: 'manageUserEditController as ctrl',
      resolve: {
        user: resolveUserGet,
      },
    })
    .state('manage_user_create', {
      url: '/manage/users/create',
      templateUrl: '/static/angular-views/manage/user_create.html',
      controller: 'manageUserCreateController as ctrl',
    })
    .state('manage_staff', {
      url: '/manage/staffs',
      templateUrl: '/static/angular-views/manage/staff_list.html',
      controller: 'manageStaffListController as ctrl',
      resolve: {
        staffs: resolveStaffQuery,
      },
    })
    .state('manage_staff_create', {
      url: '/manage/staffs/create',
      templateUrl: '/static/angular-views/manage/staff_create.html',
      controller: 'manageStaffCreateController as ctrl',
    })
    .state('manage_staff_edit', {
      url: '/manage/staffs/:id/edit',
      templateUrl: '/static/angular-views/manage/staff_edit.html',
      controller: 'manageStaffEditController as ctrl',
      resolve: {
        staff: resolveStaffGet,
      },
    })
  ;
}

router.$inject = ['$urlRouterProvider', '$stateProvider'];
