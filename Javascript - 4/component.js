function Render() {
  this.movie = {
    posterPath: 'https://ak1.picdn.net/shutterstock/videos/23800711/thumb/1.jpg'
  };
}
Render.prototype.init = movie => {
  this.movie = {
    title: movie.title,
    overview: movie.overview,
    posterPath: function() {
      if (movie.poster_path == null) {
        return 'https://st2.depositphotos.com/8511412/11363/v/950/depositphotos_113638050-stock-illustration-loading-icon-loading-icon-vector.jpg';
      } else {
        return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      }
    },
    releaseDate: movie.release_date,
    voteCount: movie.vote_average,
    movieId: movie.id
  };

  return this.movie;
};

Render.prototype.card = movie => {
  output = `<div class="col-lg-6">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary"><i class='fas fa-star'></i>  ${
          movie.voteCount
        }</strong>
        <h3 class="mb-0">${movie.title}</h3>
        <div class="mb-1 text-muted">${movie.releaseDate}</div>
        <p class="card-text mb-auto">${movie.overview.substring(0, 150)}</p>
        <button class='btn btn-primary modal-launch' value="${
          movie.movieId
        }">View More</button>
      </div>
      <div class="col-auto d-none d-lg-block clip">
        <img src="${movie.posterPath()}" class="img-fluid w-150">
      </div>
    </div>
  </div>`;

  return output;
};

Render.prototype.topCard = movie => {
  var output = `   <div class="top-rated mt-">
        <div class="img">
          <img
            src="${movie.posterPath()}"
            alt=""
            
          />
        </div>
        <div class="name bg-lig">
          <p>${movie.title}</p>
          <small><i class="fas fa-star"></i>${movie.voteCount}</small>
        </div>
      </div>`;
  return output;
};

Render.prototype.modalView = movie => {
  console.log(movie);
  var output = `<div class="card mb-3">
  <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${
    movie.backdrop_path
  }" alt="Card image cap">
  <div class="card-body">
    <div class='row'>
    <div class='col-lg-6'>
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.overview}</p>
    <p class="card-text"><small class="text-muted">Release Date : <span class='text-success'>${
      movie.release_date
    }</span></small></p>
    </div>
    <div class='col-lg-6 text-center'>
      <img src='https://image.tmdb.org/t/p/w500/${
        movie.poster_path
      }' class='img-fluid img-modal'>
     <ul class='list-group'>
     <li class='list-group-item'>Runtime : <span class='text-success'>${
       movie.runtime
     }</span></li>
     <li class='list-group-item'>Popularity : <span class='text-success'>${
       movie.popularity
     }</span></li>
     <li class='list-group-item'>Language : <span class='text-success'>${
       movie.original_language
     }</span></li>
     <li class='list-group-item'>Tagline : <span class='text-success'>${
       movie.tagline
     }</span></li>
     <li class='list-group-item'>Revenue : <span class='text-success'>${Math.round(
       movie.revenue / 10000
     )} Cr</span></li>
     </ul>
    </div>
    </row>
  </div>
</div>
`;
  return output;
};
