var app = angular.module('app', []);

app.controller('myController', function($scope){
  $scope.hello = "hellow world";
  $scope.hidden = true;
  $scope.post = {};

  $scope.showForm = function(){
     $scope.hidden = !$scope.hidden;
  }

  $scope.submit = function(){
  }
});
