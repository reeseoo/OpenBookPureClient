openBookApp.config(function (authProvider) {
  authProvider.init({
    domain: 'openbook.eu.auth0.com',
    clientID: '6Ax1d9qDK2k2OFT2iPu9JSvhdaEwaNXT'
  });
}).config(routing)
  .config(authConfig)
  .run(authRun)


function routing($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/home/home.html',
      controller: 'homeCtrl'
    }).otherwise({redirectTo : '/'})
};

function authConfig(authProvider, jwtInterceptorProvider, $httpProvider) {
  jwtInterceptorProvider.tokenGetter = ['store', function (store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');

}
function authRun(auth, $rootScope, $location, store, jwtHelper) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();

  $rootScope.$on('$locationChangeStart', function () {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });

}