'use strict';

angular.module('portfolioApp').controller('SkillCtrl', function ($scope) {
  $scope.skills = [
    {id: 'java', skill: 'Java/JEE', knowledge: 90},
    {id: 'spring', skill: 'Spring', knowledge: 97},
    {id: 'ruby', skill: 'Ruby', knowledge: 55},
    {id: 'javascript', skill: 'Javascript', knowledge: 80},
    {id: 'htmlcss', skill: 'HTML/CSS', knowledge: 90},
    {id: 'ios', skill: 'iOS', knowledge: 80},
    {id: 'android', skill: 'Android', knowledge: 65},
    {id: 'hadoop', skill: 'Hadoop', knowledge: 40}
  ];
  $scope.pageSize = $scope.skills.length;
  $scope.pages = [0,1];
});
