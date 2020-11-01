import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InfoPage from './movie-section/info-page/get-infos';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" component={App} exact  />
      
      <Route path="/movie/" component={InfoPage} />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);