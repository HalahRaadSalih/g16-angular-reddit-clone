var app = angular.module('app', []);

app.controller('myController', function($scope){
  $scope.hello = "hellow world";
  $scope.hidden = true;
  $scope.posts = [];
  $scope.post = {};

  $scope.showForm = function(){
     $scope.hidden = !$scope.hidden;
  }

  $scope.submit = function(){
    if($scope.post){
      $scope.posts.push($scope.post);
      $scope.post = {};
    }
  }
});
