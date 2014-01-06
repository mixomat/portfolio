'use strict';

angular.module('portfolioApp').controller('SkillCtrl', function ($scope) {
  $scope.skills = [
    {skill: 'Java/JEE', value: 90},
    {skill: 'Spring', value: 95},
    {skill: 'iOS', value: 70},
    {skill: 'Ruby', value: 50},
    {skill: 'javascript', value: 80},
    {skill: 'HTML/CSS', value: 90}
  ];
});
