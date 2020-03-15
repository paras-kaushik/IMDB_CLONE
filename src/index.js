import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import movies from './reducers/movies';
import { data as moviesList } from './data';
import './index.css';

const store = createStore(movies);
// console.log(store);
console.log('state', store.getState());

// update store by dispatching actions
store.dispatch({
  type: 'ADD_MOVIES',
  movies: moviesList
});
console.log('state', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
