var app = angular.module('app', []);

app.controller('myController', function($scope){
  $scope.hello = "hellow world";
  $scope.hidden = true;

  $scope.posts = [{
        title: 'The Three Musketeers + 1 duck',
        description: 'A story of love, death and fowl betrayal',
        photoURL: 'http://thumbs.dreamstime.com/x/angry-duck-clipping-path-620949.jpg',
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
      $scope.posts.push(post);

    }
    $scope.post = {

    };

  }
  $scope.downVote = function(post) {
      post.vote = post.vote - 1;
      console.log($scope.post.vote);
  }
  $scope.upVote = function(post) {
      post.vote = post.vote + 1;
      console.log($scope.post.vote);
  }
  $scope.$watch('post.vote',function(val,old){
      $scope.post.vote = parseInt(val);
   });
});
