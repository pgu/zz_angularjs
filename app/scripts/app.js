'use strict';

angular.module('zzAngularjsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/persons/:personId', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .when('/persons/:personId/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl'
      })
      .otherwise({
        redirectTo: '/persons/new'
      });
  })

;
