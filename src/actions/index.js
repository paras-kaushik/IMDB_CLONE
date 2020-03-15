// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}

export function addToFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie
  };
}
