angular.module('OpenBook').controller("snippetCtrl", function ($scope, $http,auth,store,snippetService,storyService,submissionPeriodService) {
    /* Define Scope */
    $scope.snippetMaxLength = 500;
    $scope.snippetMinLength = 8;
    $scope.getSnippets = getSnippets;
    $scope.showDiv = showDiv;
    $scope.submit = submit;
    
    /* Init */
    getSnippets();
    
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
        storyService.getLatestStory().success(function(data){
        $scope.story = data;
        snippetService.getChosenSnippetsForStory(data.Id).success(function(data){
            $scope.snippets = data;
        }).error(function (data, status, headers, config) {
            alert("Unable to get snippets");
        });
        submissionPeriodService.getCurrentSubmissionPeriod(data.Id).success(function(data){
            $scope.submission = data;
            snippetService.getSnippetsForSubmissionPeriod(data.Id).success(function(data){
                $scope.subittedSnippets = data;
            }).error(function(error){
                alert("Unable to get submitted snippets");
            });
        }).error(function(error){
            alert("Unable to get current submission");
        });
    }).error(function(error){
        alert("Unable to get story");
    });
    }
    

    function submit() {
        var snippet = {
            'Content': $scope.snippetContent,
            'NewParagraph': $scope.newParagraph,
            'SubmissionPeriodId':$scope.submission.Id,
            'StoryId':$scope.story.Id
        }

        snippetService.createSnippetForSubmission($scope.submission.Id,snippet).success(function (data, status, headers, config) {
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

