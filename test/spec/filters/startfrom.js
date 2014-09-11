'use strict';

describe('Filter: startFrom', function () {
// initialize a new instance of the filter before each test
  var startFrom;

  beforeEach(module('portfolioApp'));

  beforeEach(inject(function ($filter) {
    startFrom = $filter('startFrom');
  }));

  it('should start from the beginning 0', function () {
    expect(startFrom([1,2,3,4],0)).toEqual([1,2,3,4]);
  });

  it('should start from index 1', function () {
    expect(startFrom([1,2,3,4],1)).toEqual([2,3,4]);
  });

  it('should be empty', function () {
    expect(startFrom([1,2,3,4],4)).toEqual([]);
  });

});
