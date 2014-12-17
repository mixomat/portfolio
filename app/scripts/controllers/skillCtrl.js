'use strict';

angular.module('portfolioApp').controller('SkillCtrl', function ($scope) {
  $scope.skills = [
    {id: 'java', skill: 'Java/JEE', knowledge: 95},
    {id: 'spring', skill: 'Spring', knowledge: 99},
    {id: 'ios', skill: 'iOS', knowledge: 80},
    {id: 'android', skill: 'Android', knowledge: 65},
    {id: 'ruby', skill: 'Ruby', knowledge: 65},
    {id: 'hadoop', skill: 'Hadoop', knowledge: 53},
    {id: 'javascript', skill: 'Javascript', knowledge: 80},
    {id: 'angular', skill: 'AngularJS', knowledge: 75}
  ];
  $scope.pageSize = 4;
  $scope.pages = [0,1,2];
});
