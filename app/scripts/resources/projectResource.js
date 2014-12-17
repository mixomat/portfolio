'use strict';

angular.module('portfolioApp').factory('Project', function ($resource) {
    return $resource('http://localhost:3000/api/projects/:projectId', {projectId: '@id'})
  }
);
