'use strict';

describe('Controller: SkillCtrl', function () {
  beforeEach(module('portfolioApp'));

  var SkillCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillCtrl = $controller('SkillCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of skills', function () {
    var skills = scope.skills;
    expect(skills.length).toBe(7);
    expect(skills[0].skill).toBe('Java/JEE');
  });
});
