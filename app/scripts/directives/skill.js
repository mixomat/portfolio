'use strict';

angular.module('portfolioApp').directive('skill', function () {
  return {
    scope: {
      id: "@",
      skill: "@"
    },
    template: '<canvas id="{{id}}" height="130" width="130"></canvas><p>{{skill}}</p><br>',
    link: function (scope, element, attrs) {
      var knowledge = parseInt(attrs.knowledge);
      var donutData = [
        {
          value: knowledge,
          color: '#74cfae'
        },
        {
          value: 100 - knowledge,
          color: '#3c3c3c'
        }
      ];

      var donutOpts = {
        segmentStrokeColor: '#4e4e4e',
        segmentStrokeWidth: 1,
        percentageInnerCutout: 75
      };
      new Chart(element.find('canvas')[0].getContext('2d')).Doughnut(donutData, donutOpts);
    }
  };
});
