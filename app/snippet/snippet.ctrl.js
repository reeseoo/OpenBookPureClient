angular.module('OpenBook').controller("snippetCtrl", function ($scope, $http,auth,store) {
    var vm = this;

    vm.title = 'OpenBook';

    vm.snippetContent = '';
    vm.snippetAuthor = '';
    
    $scope.showSnippet = false;
    
    $scope.showDiv = function(){
        if(auth.isAuthenticated)
            $scope.showSnippet = $scope.showSnippet ? false : true;
        else{
            auth.signin({}, function (profile, token) {
                  // Success callback
                  store.set('profile', profile);
                  store.set('token', token);
            }, function () {
                  // Error callback
            });
        }
    }

    $http.get('http://openbookapi.azurewebsites.net/api/snippet').success(function (data, status, headers, config) {
        alert("successsssss");
        $scope.snippets = data;
    }).error(function (data, status, headers, config) {
        alert("Unable to get snippets");
    });

    $scope.submit = function () {
        debugger;

        var snippet = {
            'SnippetContent': $scope.snippetContent,
            'SnippetAuthor': $scope.snippetAuthor
        }

        $http.post('http://openbookapi.azurewebsites.net/api/snippet', snippet, {
        }).success(function (data, status, headers, config) {
            alert("Snippet added successfully");
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }
});

