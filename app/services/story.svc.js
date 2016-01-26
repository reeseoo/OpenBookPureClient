angular.module('OpenBook').service("storyService", StoryService);

StoryService.$inject = ['$http', 'APIURL']

function StoryService($http, APIURL) {
    return{
        getStories:getStories,
        getStory:getStory,
        getLatestStory:getLatestStory,
        deleteStory:deleteStory,
        createStory:createStory,
    }
    
    function getApiUrl(){
        return APIURL+'story'
    }
    function getStories()
    {
        return $http.get(getApiUrl());
    }
    
    function getStory(id)
    {
        if(id)
        {
            return $http.get(getApiUrl()+'/'+id);    
        }
        else{
            return $http.get(getApiUrl());
        }
        
    }
    
    function createStory(story)
    {
        return $http.post(getApiUrl(),story);
    }
    
    function deleteStory(id) 
    {
        return $http.delete(getApiUrl()+'/'+id);
    };
    
    function getLatestStory(){
        return $http.get(getApiUrl()+'/latest');
    }
};