type MovieSmall = {
  title: string;
};

const moviesSmall: MovieSmall[] = [
  { title: 'Movie 1' },
  { title: 'Movie 2' },
  { title: 'Movie 3' },
  { title: 'Movie 4' },
  { title: 'Movie 5' },
];

type Person = {
  name: String;
};
type Director = Person;
type Actor = Person;

type MovieFull = {
  title: string;
  director: Director;
  actors: Actor[];
};

const moviesFull: MovieFull[] = [
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

function getDirector(movie: any) {
  return movie.director?.name ?? 'Unknown Director';
}

function getActors(movie: any) {
  return movie.actors ?? 'Unknown actors';
}

function getLeadingActor(movie: any) {
  return movie.actors?.[0]?.name ?? 'Unknown actor';
}

function getSecondaryActor(movie: any) {
  return movie.actors?.[1]?.name ?? 'Unknown actor';
}

function logMovie(movie: any) {
  console.log('Director:', getDirector(movie));
  console.log('Actors:', getActors(movie));
  console.log('Lead actor', getLeadingActor(movie));
  console.log('Second actor', getSecondaryActor(movie));
}

function logSmallMovies(movie: any) {
  logMovie(movie);
}

function logFullMovies(movie: any) {
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
