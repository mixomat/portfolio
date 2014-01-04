'use strict'

describe('Controller: ProjectCtrl', function () {
  // load the app module
  beforeEach(module('portfolioApp'));

  describe('ProjectCtrl', function () {
    var createController, scope, httpBackend;

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
      // register the httpBackend mock
      httpBackend = $httpBackend;
      httpBackend.when('GET', 'http://localhost:3000/api/projects').respond([
        {projects: {title: 'test'}}
      ]);

      // Initialize the controller and a mock scope
      scope = $rootScope.$new();
      createController = function () {
        return $controller('ProjectCtrl', {$scope: scope});
      };

    }));

    it('should attach projects to the scope', function () {
      httpBackend.expectGET('http://localhost:3000/api/projects');
      createController();
      httpBackend.flush();

      expect(scope.projects.length).toBe(1);
    });
  });
});
