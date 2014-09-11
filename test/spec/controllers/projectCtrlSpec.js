'use strict';

describe('Controller: ProjectCtrl', function () {
  beforeEach(module('portfolioApp'));

  var createController, $scope, $httpBackend;

  beforeEach(inject(function ($controller, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    // register the $httpBackend mock calls
    $httpBackend.when('GET', 'http://localhost:3000/api/projects').respond([
      {projects: {title: 'test'}}
    ]);
    $httpBackend.expectGET('http://localhost:3000/api/projects');

    // Initialize the controller and a mock $scope
    createController = function () {
      return $controller('ProjectCtrl', {$scope: $scope});
    };
  }));

  it('should attach projects to the $scope', function () {
    createController();
    $httpBackend.flush();

    expect($scope.projects.length).toBe(1);
  });
});
