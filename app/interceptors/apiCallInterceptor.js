(function () {
    'use strict';
    angular.module('OpenBook').factory('reqInterceptor', reqInterceptor)

    function reqInterceptor($rootScope,store) {
        
        return {
            request: function (config) {
                var token = store.get('token');
                if(token)
                    config.headers.Authorization = 'Bearer ' + token;
                return config;
            }
        }
    }
    angular.module('OpenBook').config(['$httpProvider', function($httpProvider) {  
        $httpProvider.interceptors.push('reqInterceptor');
    }]);

})();