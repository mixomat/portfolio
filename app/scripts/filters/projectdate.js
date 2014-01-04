'use strict';

angular.module('portfolioApp')
  .filter('projectDate', function ($filter) {
    return function (input) {
      return $filter('date')(input, 'MMMM yyyy');
    };
  });
