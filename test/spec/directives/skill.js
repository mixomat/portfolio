'use strict';

describe('Directive: skill', function () {
  beforeEach(module('portfolioApp'));


  var element, $scope, $compile;

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  it('should create a donut chart', function () {
    $scope.skill = {id: 'javascript', desc: 'javascript', knowledge: 80};

    element = $compile('<div id="javascript" skill="Javascript"></div>')($scope);

    expect(element.text()).toBe('{{skill}}');
  });

});
