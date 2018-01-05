'use strict';
angular.module('sublimeApp')
.controller('forumCtrl', function ($scope, $http) {
     $http.get('forumData.json')
   .then(function (res) {
       $scope.forumData = res.data;
   });
})