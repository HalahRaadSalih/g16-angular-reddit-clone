var app = angular.module('app', []);

app.controller('myController', function($scope){
  $scope.hello = "hellow world";
  $scope.hidden = true;

  $scope.showForm = function(){
     $scope.hidden = !$scope.hidden;
  }
});
