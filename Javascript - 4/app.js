const http = new Movie();
const render = new Render();
// Create data
const API_KEY = '909ef032214eef2cb4256f4d4cf7fc91';
$(document).ready(function() {
  http.getTopRatedMovies(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    function(err, movies) {
      if (err) {
        console.log(err);
      } else {
        showTopRated(JSON.parse(movies));
      }
    }
  );
});
$('#search').keyup(function() {
  if ($(this).val() == '') {
    $('#loading').html(
      '<p class="lead text-center">Enter Query to Search Movies</p>'
    );
    $('#movies-display').html('');
  } else {
    $('#loading').html('');
    $('#movies-display').html('');
    http.getMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${$(
        this
      ).val()}&adult=true`,
      function(err, movies) {
        if (err) {
          console.log(err);
        } else {
          showMovies(JSON.parse(movies));
        }
      }
    );
  }
});

// show Top rated movies
function showTopRated(movies) {
  document.getElementById('movie-display');

  var output = '';
  movies.results.forEach(function(movie) {
    output = render.init(movie);
    $('.tpr').append(render.topCard(output));
  });
}

// show Movies
function showMovies(movies) {
  document.getElementById('movie-display');

  var output = '';
  movies.results.forEach(function(movie) {
    output = render.init(movie);
    $('#movies-display').append(render.card(output));
    addListner();
  });
}

function addListner() {
  document.querySelectorAll('.modal-launch').forEach(function(val) {
    val.addEventListener('click', launchModal);
  });
}

function launchModal(e) {
  e.preventDefault();
  http.getMovieById(
    `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${API_KEY}&language=en-US`,
    function(err, movies) {
      if (err) {
        console.log(err);
      } else {
        showModal(JSON.parse(movies));
      }
    }
  );
  // $('#exampleModal').modal('show');
}

function showModal(movie) {
  var output = render.modalView(movie);
  $('.modal-body').html('');
  $('.modal-body').append(output);
  $('#exampleModal').modal('show');
}
