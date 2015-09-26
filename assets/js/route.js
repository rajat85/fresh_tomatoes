app.config(function($stateProvider, $urlRouterProvider) {
	  // For any unmatched url
	  $urlRouterProvider.otherwise("/movies");
	  //
	  // Now set up the states
	  $stateProvider
	  .state('movies', {
	  	url: "/movies",
	  	templateUrl: "partials/movies.html",
	  	controller: "MoviesController",
	  	controllerAs: "vm"
	  })
	  .state('movies.details', {
	  	url: "/:id",
	  	templateUrl: "partials/movies.details.html",
	  	controller: "MovieDetailsController",
	  	controllerAs: "vm"
	  });
});