'use strict';

angular.module('portfolioApp').controller('ProjectCtrl', function ($scope, Project) {
  $scope.projects = Project.query();
});
