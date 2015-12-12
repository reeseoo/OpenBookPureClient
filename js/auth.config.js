openBookApp.config(function (authProvider) {
  authProvider.init({
    domain: 'openbook.eu.auth0.com',
    clientID: '6Ax1d9qDK2k2OFT2iPu9JSvhdaEwaNXT'
  });
}).config(function (authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
  // ...

  // We're annotating this function so that the `store` is injected correctly when this file is minified
  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');
  // ...
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});;