'use strict'

angular.module('portfolioApp').controller('ProjectCtrl', function ($scope, $http) {
  $http.get('http://localhost:3000/api/projects')
    .success(function (projects) {
      $scope.projects = projects;
    });
});
