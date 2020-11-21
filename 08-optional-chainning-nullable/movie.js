const moviesSmall = [
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
];

const moviesFull = [
  {
    title: 'Movie 1',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 2',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 3',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
  },
  {
    title: 'Movie 4',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
  {
    title: 'Movie 5',
    director: { name: 'Ridley Scott' },
    actors: [{ name: 'Actor one' }],
  },
];

// Recomendation use :any as a movie type
function getDirector(movie) {
  if (movie.director != null) {
    return movie.director.name;
  }

  return 'Unknown Director';
}

// Recomendation use :any as a movie type
function getActors(movie) {
  if (movie.actors != null) {
    return movie.actors;
  }

  return 'Unknown actors';
}

// Recomendation use :any as a movie type
function getLeadingActor(movie) {
  if (movie.actors != null && movie.actors.length >= 0) {
    if (movie.actors[0] && movie.actors[0].name) {
      return movie.actors[0].name;
    }
  }

  return 'Unknown actor';
}

// Recomendation use :any as a movie type
function getSecondaryActor(movie) {
  if (movie.actors != null && movie.actors.length >= 0) {
    if (movie.actors[1] && movie.actors[1].name) {
      return movie.actors[1].name;
    }
  }

  return 'Unknown actor';
}

// Recomendation use :any as a movie type
function logMovie(movie) {
  console.log('Director:', getDirector(movie));
  console.log('Actors:', getActors(movie));
  console.log('Lead actor', getLeadingActor(movie));
  console.log('Second actor', getSecondaryActor(movie));
}

// Recomendation use :any as a movie type
function logSmallMovies(movie) {
  logMovie(movie);
}

// Recomendation use :any as a movie type
function logFullMovies(movie) {
  logMovie(movie);
}

moviesSmall.forEach((movie) => {
  console.group('Small movies');
  logSmallMovies(movie);
  console.groupEnd();
});

moviesFull.forEach((movie) => {
  console.group('Full movies');
  logFullMovies(movie);
  console.groupEnd();
});
