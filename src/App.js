import React from 'react';
import './App.css';
import SearchMovies from './movie-section/search-movies/search_movies';
import LatestMovies from './movie-section/latest-section/latest';

function App() {
  return (
    <div>
      <SearchMovies />
      <LatestMovies />
    </div>
  );
}

export default App;
