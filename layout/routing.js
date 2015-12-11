openBookApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'homeCtrl'
        }).when('/login', {
            templateUrl: '/views/login.html',
            controller: 'loginCtrl'
        })
});