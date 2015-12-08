angular.module('OpenBook').controller("storyCtrl", function ($scope, $http) {
    var vm = this;

    vm.title = $scope.story;
});