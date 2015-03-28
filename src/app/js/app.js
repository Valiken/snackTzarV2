'use strict';

/**
 * @ngdoc overview
 * @name snackTzarApp
 * @description
 * # snackTzarApp
 *
 * Main module of the application.
*/

var app = angular.module('snackTzarApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/homeView.html',
      controller: 'HomeCtrl'
    })
    .when('/snackList', {
      templateUrl: 'views/snackListView.html',
      controller: 'SnackListCtrl'
    })
    .when('/supplyList', {
      templateUrl: 'views/supplyListView.html',
      controller: 'SupplyListCtrl'
    })
    .when('/cart', {
      templateUrl: 'views/cartView.html',
      controller: 'CartCtrl'
    })
    .when('/about', {
      templateUrl: 'views/aboutView.html',
      controller: 'AboutCtrl'
    })
    .when('/fulfilledSnacks', {
      templateUrl: 'views/fulfilledSnackListView.html',
      controller: 'FulfilledSnacksCtrl'
    })
    .when('/fulfilledSupplies', {
      templateUrl: 'views/fulfilledSupplyListView.html',
      controller: 'FulfilledSuppliesCtrl'
    })
    .when('/requestedSnacks', {
      templateUrl: 'views/requestedSnacks.html',
      controller: 'RequestedSnacksCtrl'
    })
    .when('/requestedSupplies', {
      templateUrl: 'views/requestedSupplies.html',
      controller: 'RequestedSuppliesCtrl'
    })
    .when('/admin', {
      templateUrl: 'views/adminView.html',
      controller: 'AdminCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
