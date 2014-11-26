'use strict';

/**
 * @ngdoc overview
 * @name movieFinderApp
 * @description created for demo purpose
 * # movieFinderApp
 *
 * Main module of the application.
 */
angular
  .module('movieFinderApp', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
