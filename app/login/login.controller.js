restApp.controller('loginController', function($scope, $location, $http, loginFactory, sessionService) {
    'use strict';
    $scope.username = sessionService.get('name');


    $scope.isLogged = function isLogged() {
        loginFactory.isLogged();
    };
    $scope.login = function(user) {
        loginFactory.login(user);

    }

    $scope.register = function(user) {
        loginFactory.register(user);
    }

    $scope.logout = function() {
        loginFactory.logout();
    }
});