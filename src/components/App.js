import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from '../data';

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addMovies(moviesList));
  }

  isMovieInFavourites = movie => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  changeTab = val => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { list, showFavourites, favourites } = this.props.store.getState();
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div id="list">
            {displayMovies.map(movie => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
