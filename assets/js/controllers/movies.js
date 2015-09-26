function moviesController(movies) {
  var vm = this;
  movies.getMovies(function(data) {
  	vm.movies = data;
  });
};

moviesController.$inject = ['movies'];

app.controller("MoviesController", moviesController);