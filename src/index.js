import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InfoPage from './movie-section/info-page/movies-info-page';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={App} exact  />
      
      <InfoPage path="/infoPage" component={InfoPage} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);