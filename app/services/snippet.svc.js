angular.module('OpenBook').service("snippetService", SnippetService);

SnippetService.$inject = ['$http', 'APIURL']

function SnippetService($http, APIURL) {
    return{
        getSnippets:getSnippets,
        getSnippet:getSnippet,
        getChosenSnippetsForStory:getChosenSnippetsForStory,
        getSnippetsForSubmissionPeriod:getSnippetsForSubmissionPeriod,
        deleteSnippet:deleteSnippet,
        createSnippet:createSnippet,
    }
    
    function getApiUrl(){
        return APIURL+'snippet'
    }
    function getSnippets()
    {
        return $http.get(getApiUrl());
    }
    function getSnippetsForSubmissionPeriod(id)
    {
        return $http.get(APIURL+'submissionPeriod/'+id+'/snippet');
    }
    function getChosenSnippetsForStory(id)
    {
        return $http.get(APIURL+'story/'+id+'/chosensnippets');
    }
    function getSnippet(id)
    {
        return $http.get(getApiUrl()+'/'+id);
    }
    
    function createSnippet(snippet)
    {
        return $http.post(getApiUrl(),snippet);
    }
    
    function deleteSnippet(id) 
    {
        return $http.delete(getApiUrl()+'/'+id);
    };
};