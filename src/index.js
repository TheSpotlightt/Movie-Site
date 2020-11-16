import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import InfoPage from './movie-section/info-page/get-infos';
import LatestMovies from './movie-section/latest-section/trending';
import UpComingMovies from './movie-section/upcoming-section/upcoming';
import SearchMovies from './movie-section/search-movies/search_movies';

import { BrowserRouter, Switch, Route} from 'react-router-dom';





ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/popular" component={App} exact />

      <Route path="/trending" component={LatestMovies} />

      <Route path="/upcoming" component={UpComingMovies} />
      
      <Route path="/movie/" component={InfoPage} />

      <Route path="/search" component={SearchMovies} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);