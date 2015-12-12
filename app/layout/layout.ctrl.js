openBookApp.controller("layoutCtrl", function ($scope, $http, auth, store) {
      $scope.auth = auth;
      $scope.logout = logout;
      $scope.login = login;
      
      function logout() {
            auth.signout();
            store.remove('profile');
            store.remove('token');
      }

      function login() {
            auth.signin({}, function (profile, token) {
                  // Success callback
                  store.set('profile', profile);
                  store.set('token', token);
            }, function () {
                  // Error callback
            });
      }
});