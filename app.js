var app = angular.module('app', ['angularMoment']);

app.controller('myController', function($scope){
  $scope.hidden = true;
  // popultaed with one post for testing
  $scope.posts = [{
        title: 'The Three Musketeers + 1 duck',
        description: 'A story of love, death and fowl betrayal',
        photoURL: 'https://placebear.com/100/100',
        userName: 'The Mother Goose',
        createdAt: Date.now(),
        vote: 0
    }];
  // initial post is empty
  $scope.post = {
    photoURL: "https://placebear.com/100/100"
  };


  $scope.submit = function(post){
    if($scope.post){
        // set initial vote to zero
        post.vote = 0;
        // get the current date
        post.createdAt = Date.now();
        // add post
        $scope.posts.push(post);
    }
    // reset post after adding
    console.log("done");
    $scope.post = {

    };

  }
  $scope.downVote = function(post) {
      post.vote = post.vote - 1;
  }
  $scope.upVote = function(post) {
      post.vote = post.vote + 1;
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
