angular.module('OpenBook').config(function ($httpProvider, jwtInterceptorProvider) {
    // We're annotating this function so that the `store` is injected correctly when this file is minified
    jwtInterceptorProvider.tokenGetter = function(store) {
        // Return the saved token
        return store.get('token');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
});