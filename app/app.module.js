var openBookApp = angular.module('OpenBook', ['ui.router', 'ngMaterial','ngMessages','auth0', 'angular-storage', 'angular-jwt'])
/* DEV
 
.constant('APIURL','http://localhost:5000/api/');*/
/* TEST */
.constant('APIURL','http://openbookapi.azurewebsites.net/api/');
