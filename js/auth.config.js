openBookApp.config(function (authProvider) {
  authProvider.init({
    domain: 'openbook.eu.auth0.com',
    clientID: '6Ax1d9qDK2k2OFT2iPu9JSvhdaEwaNXT'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});;