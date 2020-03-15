import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';
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

  render() {
    const { list } = this.props.store.getState();
    console.log('this.props.store.getState()', this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div id="list">
            {list.map(movie => (
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
