angular.module('OpenBook').controller("snippetCtrl", function ($scope, $http,auth,store,snippetService) {
    /* Define Scope */
    $scope.snippetMaxLength = 500;
    $scope.snippetMinLength = 8;
    $scope.getSnippets = getSnippets;
    $scope.showDiv = showDiv;
    $scope.submit = submit;
    
    /* Init */
    getSnippets();
    //TODO get storySofar vm from story provider
    
    /* Function Defs */
    function showDiv(){
        if(auth.isAuthenticated)
            $scope.showSnippet = $scope.showSnippet ? false : true;
        else
        {
            auth.signin({authParams: {
                    scope: 'openid profile'
                }
            }, 
            function (profile, token,token2,another) {
                // Success callback
                store.set('profile', profile);
                store.set('token', token);
                $scope.showSnippet = $scope.showSnippet ? false : true;
            }, 
            function () {
                // Error callback
            });
            $scope.$apply();
        }
    }
    
    function getSnippets(){
        
        snippetService.getSnippets().success(function (data, status, headers, config) {
            $scope.snippets = data;
        }).error(function (data, status, headers, config) {
            alert("Unable to get snippets");
        });
    }
    

    function submit() {
        var snippet = {
            'Content': $scope.snippetContent,
            'NewParagraph': $scope.newParagraph
        }

        snippetService.createSnippet(snippet).success(function (data, status, headers, config) {
            console.log("Snippet Saved");
             $scope.snippets = [];
            $scope.snippetContent = '';
            $scope.newParagraph = false;
            $scope.showSnippet = false;
            $scope.getSnippets();
        }).error(function (data, status, headers, config) {
            alert("Error");
        });
    }
});

