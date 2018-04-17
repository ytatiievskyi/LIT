'use strict';

// Declare app level module which depends on views, and components
var restApp = angular.module('restApp', [
    'ui.router',
    'ngResource',
]);

restApp
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/#');

        $stateProvider
            .state('product', {
                url: '/product/:id',
                templateUrl: 'product/product.template.html',
                controller: 'productController'
            })
            .state('auth', {
                url: '/login',
                // templateUrl: 'login/login.template.html',
                controller: 'loginController'
            })
    });

restApp.run(['$rootScope', 'productsService', 'sessionService', 'loginFactory',
    function($rootScope, productsService, sessionService, loginFactory, $scope) {
        $rootScope.getUser = sessionService.get('name');
        $rootScope.getStatus = sessionService.get('user');
        console.log($rootScope.getUser, $rootScope.getStatus)
    }
]);