import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import InfoPage from './movie-section/info-page/get-infos';
import LatestMovies from './movie-section/trending-section/trending';
import UpComingMovies from './movie-section/upcoming-section/upcoming';
import SearchMovies from './movie-section/search-movies/search_movies';
import Popular from './movie-section/popular-section/popular';

export default function App() {
  return(
    <Router>
      <Switch>
        
        <Route path="/popular" component={Popular} exact />

        <Route path="/trending" component={LatestMovies} />

        <Route path="/upcoming" component={UpComingMovies} />
        
        <Route path="/movie/" component={InfoPage} />

        <Route path="/search" component={SearchMovies} />

      </Switch>
    </Router>
  )
}




