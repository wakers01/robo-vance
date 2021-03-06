﻿var app = angular.module('RoboVance', ['ngRoute', 'angularSpinner']) // TODO switch to UI router
app.value('$', $);
app.value('signalRServer', 'http://localhost:58028/');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'deviceConnectionCtrl',
            templateUrl: '/app/views/deviceConnection.html'
        }).when('/connection/', {
            controller: 'deviceConnectionCtrl',
            templateUrl: '/app/views/deviceConnection.html'
        }).when('/command/:agentId/device/:deviceName', {
            controller: 'deviceCommandCtrl',
            templateUrl: '/app/views/deviceCommand.html'
        })

    .otherwise({ redirectTo: '/' });

}]);