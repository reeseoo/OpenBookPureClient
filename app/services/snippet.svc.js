angular.module('OpenBook').service("snippetService", SnippetService);

SnippetService.$inject = ['$http', 'APIURL']

function SnippetService($http, APIURL) {
    return{
        getSnippets:getSnippets,
        getSnippet:getSnippet,
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