'use strict';

/**
 * @ngdoc function
 * @name movieFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieFinderApp
 */
angular
.module('movieFinderApp')
.factory('MainService', ['$http', '$q', function($http, $q) {

        var instance = {};

        instance.findMovieDetailsService = function(searchParam){
            var deferred = $q.defer();

            var config = {
                method: 'get',
                url: 'http://www.omdbapi.com/?t='+searchParam+'&r=json'
            };

            $http(config)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        return instance;
}])
.controller('MainCtrl', function ($scope, MainService) {

    $scope.successCallback = function(data){

        if(data.Title){
            $scope.isDataAvailable = true;
            $scope.searchResult = data;
        }else{
            $scope.isDataAvailable = false;
        }
    };

    $scope.failureCallback = function(data){
        console.log("error in data");
    };

    $scope.findMovie = function(){
        MainService
            .findMovieDetailsService($scope.searchText)
            .then($scope.successCallback, $scope.failureCallback);
        ;
    };
});
