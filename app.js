var app = angular.module('app', ['angularMoment']);

app.controller('myController', function($scope){
  $scope.hello = "hellow world";
  $scope.hidden = true;

  $scope.posts = [{
        title: 'The Three Musketeers + 1 duck',
        description: 'A story of love, death and fowl betrayal',
        photoURL: 'https://placebear.com/100/100',
        userName: 'The Mother Goose',
        createdAt: Date.now(),
        vote: 0
    }];

  $scope.post = {

  };


  $scope.showForm = function(){
     $scope.hidden = !$scope.hidden;
  }

  $scope.submit = function(post){
    if($scope.post){
        post.vote = 0;
        post.createdAt = Date.now();
      $scope.posts.push(post);
      console.log(post.createdAt);
    }
    $scope.post = {

    };

  }
  $scope.downVote = function(post) {
      post.vote = post.vote - 1;
      console.log(post.vote);
  }
  $scope.upVote = function(post) {
      post.vote = post.vote + 1;
      console.log($scope.post.vote);
  }
  $scope.$watch('post.vote',function(val,old){
      $scope.post.vote = parseInt(val);
   });
   $scope.getColor = function(post) {
       if (post.vote > 0) {
           return "green";
       } else if (post.vote < 0) {
           return "red";
       }
   }
});
