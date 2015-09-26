function moviesFactory($http) {
  return {
  	getMovies: function(callback) {
  		$http.get("/movies").success(callback);
  	}
  };
}

moviesFactory.$inject = ['$http'];

app.factory('movies', moviesFactory);