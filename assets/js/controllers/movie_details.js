function movieDetailsController(movies, $stateParams) {
  var vm = this;
  var _movies = [];
  movies.getMovies(function(data) {
  	_movies = data;
  	
  	vm.movie = _.find(_movies, function(m) {
    	return m.id == $stateParams.id;
  	});

  	var currentIndex = _movies.indexOf(vm.movie);

  	vm.nextMovie = _movies[currentIndex + 1];
  	vm.prevMovie = _movies[currentIndex - 1];
  });

};

movieDetailsController.$inject = ['movies', '$stateParams'];

app.controller("MovieDetailsController", movieDetailsController);