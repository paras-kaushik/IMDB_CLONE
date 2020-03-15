import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data as moviesList } from '../data';

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch({
      type: 'ADD_MOVIES',
      movies: moviesList
    });
  }

  render() {
    const data = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div id="list">
            {data.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
