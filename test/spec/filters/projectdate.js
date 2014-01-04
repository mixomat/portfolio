'use strict';

describe('Filter: projectDate', function () {

  // load the filter's module
  beforeEach(module('portfolioApp'));

  // initialize a new instance of the filter before each test
  var projectDate;
  beforeEach(inject(function ($filter) {
    projectDate = $filter('projectDate');
  }));

  it('should format the date', function () {
    expect(projectDate('1288323623006')).toBe('October 2010');
  });

});
