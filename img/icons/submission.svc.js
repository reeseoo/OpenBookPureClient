angular.module('OpenBook').service("submissionPeriodService", SubmissionPeriodService);

SubmissionPeriodService.$inject = ['$http', 'APIURL']

function SubmissionPeriodService($http, APIURL) {
    return{
        getSubmissionPeriods:getSubmissionPeriods,
        getSubmissionPeriod:getSubmissionPeriod,
        getCurrentSubmissionPeriod:getCurrentSubmissionPeriod,
        deleteSubmissionPeriod:deleteSubmissionPeriod,
        createSubmissionPeriod:createSubmissionPeriod,
    }
    
    function getApiUrl(){
        return APIURL+'SubmissionPeriod'
    }
    function getSubmissionPeriods()
    {
        return $http.get(getApiUrl());
    }
    function getCurrentSubmissionPeriod(id)
    {
        return $http.get(APIURL+'story/'+id+'/currentsubmission');
    }
    
    function getSubmissionPeriod(id)
    {
        return $http.get(getApiUrl()+'/'+id);
    }
    
    function createSubmissionPeriod(SubmissionPeriod)
    {
        return $http.post(getApiUrl(),SubmissionPeriod);
    }
    
    function deleteSubmissionPeriod(id) 
    {
        return $http.delete(getApiUrl()+'/'+id);
    };
};