import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import InfoPage from './movie-section/info-page/get-infos';
import PopularMovies from './movie-section/popular-section/popular';
import LatestMovies from './movie-section/latest-section/trending';
import UpComingMovies from './movie-section/upcoming-section/upcoming';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/popular" component={PopularMovies} exact />

      <Route path="/trending" component={LatestMovies} />

      <Route path="/upcoming" component={UpComingMovies} />
      
      <Route path="/movie/" component={InfoPage} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);