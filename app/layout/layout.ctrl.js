openBookApp.controller("layoutCtrl", function ($scope, $http, auth, store,$mdSidenav) {
      $scope.auth = auth;
      $scope.logout = logout;
      $scope.login = login;
      $scope.toggleNav = toggleNav;
      
      function toggleNav() {
            $mdSidenav("left")
                .toggle()
                .then(function () {         
                });
      }
      
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