var app = angular.module('app', ['angularMoment','ngAnimate']);

app.controller('myController', function($scope,$timeout){
  //posts initially ordered by title
  $scope.sortBy = {
    display: 'Votes',
     use:'-vote'
  }
  // posts need to be empty for on page load animation
  $scope.posts = [];


  // $timeout is for on page load animation
  // popultaed with one post for testing
  $scope.posts = [{
        title: 'The Three Musketeers + 1 duck',
        description: 'A story of love, death and fowl betrayal',
        photoURL: 'https://placebear.com/100/100',
        userName: 'The Mother Goose',
        createdAt: Date.now(),
        vote: 0,
        comments : [{
            author: "Billy Joe",
            content: "This is awesome."
        }]
    }];

  $timeout(function(){
    $scope.posts = [{
          title: 'The Three Musketeers + 1 duck',
          description: 'A story of love, death and fowl betrayal',
          photoURL: 'https://placebear.com/100/100',
          userName: 'The Mother Goose',
          createdAt: Date.now(),
          comments: [{
              author: "Jane",
              content: "blah blah blah blah"
          }],
          vote: 0
      },
      {
            title: 'The  Musketeers ',
            description: 'A story of love, death and fowl betrayal',
            photoURL: 'https://placebear.com/100/100',
            userName: 'The Mother Goose',
            createdAt: Date.now(),
            comments: [{
                author: "Billy Bob Joe",
                content: "I'm a redneck"
            },
            {
                author: "Obama",
                content: "Hope, change, whatevs..."
            }],
            vote: 0
        },
        {
              title: 'The Three Musketeers ',
              description: 'Simply put, there are two ways to make use of animations when ngAnimate is used: by using CSS and JavaScript. The former works purely based using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via module.animation(). For both CSS and JS animations the sole requirement is to have a matching CSS class that exists both in the registered animation and within the HTML element that the animation will be triggered on.',
              photoURL: 'https://placebear.com/100/100',
              userName: 'The Mother Goose',
              createdAt: Date.now(),
              comments: [],
              vote: 0
          },
          {
                title: 'The ',
                description: 'A story of love, death and fowl betrayal',
                photoURL: 'https://placebear.com/100/100',
                userName: 'The Mother Goose',
                createdAt: Date.now(),
                comments: [],
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
        post.comments = [];
        $scope.posts.push(post);
    }
    // reset post after adding
    console.log("done");
    $scope.post = {

    };

  }

  // comment submission
  $scope.submitComment = function(comments, post) {
      post.comments.push(comments);
  }


  //down voting
  $scope.downVote = function(post) {
      post.vote = post.vote - 1;
  }
  //up voting
  $scope.upVote = function(post) {
      post.vote = post.vote + 1;
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
     $scope.sortBy.use = item;
     if(item === '-vote'){
       $scope.sortBy.display = "Votes"
     }
     else if (item === 'createdAt') {
       $scope.sortBy.display = "Date"
     }
     else{
       $scope.sortBy.display = "Title"
     }
   }
});
