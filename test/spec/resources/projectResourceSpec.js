'use strict';

describe('Resource: Project', function () {

  // load the service's module
  beforeEach(module('portfolioApp'));

  var Project;

  beforeEach(inject(function (_Project_) {
    Project = _Project_;
  }));

  it('should be defined', function () {
    expect(Project).toBeDefined();
  });

});
