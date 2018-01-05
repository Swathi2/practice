'use strict';
angular.module('sublimeApp')
.controller('buyCtrl', function ($scope) {
    $scope.hidelicenses = false;
    $scope.licenseKey = true;
    $scope.disabled = true;
    $scope.bsnssLicenseFunc = function () {
        $scope.disabled = false;
        $scope.hidelicenses = true;
        $scope.licenseKey = false;
    }
    $scope.selfLicenseFunc = function () {
        $scope.hidelicenses = false;
        $scope.licenseKey = true;
    }
})