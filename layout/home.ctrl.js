openBookApp.controller("homeCtrl", function ($scope, $http, auth, store) {
      $scope.auth = auth;
      $scope.logout = function () {
            auth.signout();
            store.remove('profile');
            store.remove('token');
      }

      $scope.login = function () {
            auth.signin({}, function (profile, token) {
                  // Success callback
                  store.set('profile', profile);
                  store.set('token', token);
                  $location.path('/');
            }, function () {
                  // Error callback
            });
      }
});