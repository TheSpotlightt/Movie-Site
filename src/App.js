import React from 'react';
import './App.css';
import SearchMovies from './movie-section/search-movies/search_movies';
import PopularMovies from './movie-section/popular-section/popular';

function App() {
  return (
    <div>
      <SearchMovies />
      <PopularMovies />
    </div>
  );
}

export default App;
