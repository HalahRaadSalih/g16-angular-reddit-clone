var app = angular.module('app', ['angularMoment','ngAnimate']);

app.controller('myController', function($scope,$timeout){
  //posts initially ordered by title
  $scope.sortBy = '-vote';
  // posts need to be empty for on page load animation
  $scope.posts = [];
  // $timeout is for on page load animation
  // popultaed with one post for testing
  $timeout(function(){
    $scope.posts = [{
          title: 'The Three Musketeers + 1 duck',
          description: 'A story of love, death and fowl betrayal',
          photoURL: 'https://placebear.com/100/100',
          userName: 'The Mother Goose',
          createdAt: Date.now(),
          vote: 0
      },
      {
            title: 'The  Musketeers ',
            description: 'A story of love, death and fowl betrayal',
            photoURL: 'https://placebear.com/100/100',
            userName: 'The Mother Goose',
            createdAt: Date.now(),
            vote: 0
        },
        {
              title: 'The Three Musketeers ',
              description: 'Simply put, there are two ways to make use of animations when ngAnimate is used: by using CSS and JavaScript. The former works purely based using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via module.animation(). For both CSS and JS animations the sole requirement is to have a matching CSS class that exists both in the registered animation and within the HTML element that the animation will be triggered on.',
              photoURL: 'https://placebear.com/100/100',
              userName: 'The Mother Goose',
              createdAt: Date.now(),
              vote: 0
          },
          {
                title: 'The ',
                description: 'A story of love, death and fowl betrayal',
                photoURL: 'https://placebear.com/100/100',
                userName: 'The Mother Goose',
                createdAt: Date.now(),
                vote: 0
            }];
  });

  // initial post is empty
  $scope.post = {
    photoURL: "https://placebear.com/100/100"
  };

  // post submission
  $scope.submit = function(post){
    if($scope.post){
        // set initial vote to zero
        post.vote = 0;
        // get the current date
        post.createdAt = Date.now();
        // add post
        $scope.posts.push(post);
        console.log(post.createdAt);
    }
    // reset post after adding
    $scope.post = {

    };

  }
  //down voting
  $scope.downVote = function(post) {
      post.vote = post.vote - 1;
      console.log(post.vote);
  }
  //up voting
  $scope.upVote = function(post) {
      post.vote = post.vote + 1;
      console.log($scope.post.vote);
  }
  // parseing vote
  $scope.$watch('post.vote',function(val,old){
      $scope.post.vote = parseInt(val);
  });

  //up/down voting colors
  $scope.getColor = function(post) {
       if (post.vote > 0) {
           return "green";
       } else if (post.vote < 0) {
           return "red";
       }
   }
   // ordering posts
   $scope.orderPostsBy = function(item){
     console.log(item);
     $scope.sortBy = item;
   }
});
