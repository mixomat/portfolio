'use strict';

describe('Controller: ProjectCtrl', function () {
  // load the app module
  beforeEach(module('portfolioApp'));

  describe('ProjectCtrl', function () {
    var createController, $scope, $httpBackend;

    beforeEach(inject(function ($controller, _$rootScope_, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $scope = _$rootScope_.$new();

      // register the $httpBackend mock
      $httpBackend.when('GET', 'http://localhost:3000/api/projects').respond([
        {projects: {title: 'test'}}
      ]);

      // Initialize the controller and a mock $scope
      createController = function () {
        return $controller('ProjectCtrl', {$scope: $scope});
      };
    }));

    it('should attach projects to the $scope', function () {
      $httpBackend.expectGET('http://localhost:3000/api/projects');
      createController();
      $httpBackend.flush();

      expect($scope.projects.length).toBe(1);
    });
  });
});
