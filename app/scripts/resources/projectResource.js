'use strict';

angular.module('portfolioApp').factory('Project', function ($resource) {
    return $resource('http://localhost:8080/projects/:projectId', {projectId: '@id'},
      {
        all: {method: 'GET', isArray: false}
      }
    )
  }
);
