import { ADD_MOVIES, ADD_TO_FAVOURITES } from '../actions';

const initialMoviesState = {
  list: [],
  favourites: []
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
    default:
      return state;
  }
}
