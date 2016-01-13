openBookApp.controller("layoutCtrl", function ($scope, $http, auth, store,$mdSidenav) {
      $scope.auth = auth;
      $scope.logout = logout;
      $scope.login = login;
      $scope.toggleNav = toggleNav;
      $scope.navigate = navigate;
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
      function navigate(location){
          window.location = "/index.html#/"+location;
      }

      function login() {
            auth.signin({authParams: {
                scope: 'openid profile'
            }
        }, 
        function (profile, token,token2,another) {
            // Success callback
            store.set('profile', profile);
            store.set('token', token);
        }, 
        function () {
            // Error callback
        });
      }
});