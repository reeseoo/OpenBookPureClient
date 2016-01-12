angular.module('OpenBook').controller("snippetCtrl", function ($scope, $http,auth,store) {
    $scope.snippetMaxLength = 500;
    $scope.snippetMinLength = 8;
    
    
    $scope.showDiv = function(){
        if(auth.isAuthenticated)
            $scope.showSnippet = $scope.showSnippet ? false : true;
        else
        {
            auth.signin({}, function (profile, token) {
                  // Success callback
                  store.set('profile', profile);
                  store.set('token', token);
            }, function () {
                  console.log('Login Error');
            });
            $scope.$apply();
        }
    }

    $http.get('http://openbookapi.azurewebsites.net/api/snippet').success(function (data, status, headers, config) {
        $scope.snippets = data;
    }).error(function (data, status, headers, config) {
        alert("Unable to get snippets");
    });

    $scope.submit = function () {
        var snippet = {
            'SnippetContent': $scope.snippetContent,
            'SnippetAuthor': $scope.snippetAuthor
        }

        $http.post('http://openbookapi.azurewebsites.net/api/snippet', snippet, {
        }).success(function (data, status, headers, config) {
            console.log("Snippet Saved");
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }
});

