openBookApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'homeCtrl'
        })
});