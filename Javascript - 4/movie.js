function Movie() {
  this.http = new XMLHttpRequest();
}

// Make and HTTP GET Request
Movie.prototype.getMovies = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error : ' + this.http.status);
    }
  };
  this.http.send();
};

Movie.prototype.getTopRatedMovies = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error : ' + this.http.status);
    }
  };
  this.http.send();
};

Movie.prototype.getMovieById = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error : ' + this.http.status);
    }
  };
  this.http.send();
};
