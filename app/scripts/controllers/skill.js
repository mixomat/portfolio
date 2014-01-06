'use strict';

angular.module('portfolioApp').controller('SkillCtrl', function ($scope) {
  $scope.skills = [
    {id: 'java', skill: 'Java/JEE', knowledge: 90},
    {id: 'spring', skill: 'Spring', knowledge: 95},
    {id: 'ios', skill: 'iOS', knowledge: 70},
    {id: 'ruby', skill: 'Ruby', knowledge: 50},
    {id: 'javascript', skill: 'Javascript', knowledge: 80},
    {id: 'htmlcss', skill: 'HTML/CSS', knowledge: 90}
  ];
});
