'use strict';

angular.module('portfolioApp').controller('ProjectCtrl', function ($scope, Project) {

  loadProjects();

  function loadProjects() {
    Project.all(function (data) {
      $scope.projects = _.get(data, '_embedded.projects', []);
    });
  }
});
