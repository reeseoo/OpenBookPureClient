angular.module('OpenBook').service("voteService", VoteService);

VoteService.$inject = ['$http', 'APIURL']

function VoteService($http, APIURL) {
    return{
        upVote:upVote,
        downVote:downVote
    }
    function getApiUrl(id){
        return APIURL+'snippet/'+id+'/'
    }
    function upVote(id){
        return $http.post(getApiUrl(id)+'upVote',{});
    }
    function downVote(id)
    {
        return $http.post(getApiUrl(id)+'downVote',{});
    }
};