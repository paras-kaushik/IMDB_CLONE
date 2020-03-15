import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  SET_SHOW_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from '../actions';

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false
};
export default function movies(state = initialMoviesState, action) {
  // // fetch movies and save in store, for now we are getting it from a file
  // // later we will get it from an API
  // if (action.type === ADD_MOVIES) {
  //   // movies coming from action obj, explain we can add any props to action obj
  //   return {
  //     ...state,
  //     list: action.movies
  //   }; // returning a new array not changing in state
  // }

  // // if no action type matches
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      }; // returning a new array not changing in state
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        movie => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filteredArray
      };
    default:
      return state;
  }
}
