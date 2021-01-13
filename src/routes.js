import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import InfoPage from './movie-section/info-page/get-infos';
import LatestMovies from './movie-section/trending-section/trending';
import UpComingMovies from './movie-section/upcoming-section/upcoming';
import SearchMovies from './movie-section/search-movies/search_movies';
import Popular from './movie-section/popular-section/popular';

import SignUp from './components/pages/signup';
import Login from './components/pages/login';
import UserProfile from './components/pages/user-profile';

import { isAuthenticated } from './components/helpers/auth'

function PrivateRoute({ component: Component, authenticated, ...res }) {
  return (
    <Route
      { ...res }
      render={(props) => isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...res }) {
  return (
    <Route 
      {...res}
      render={(props) => isAuthenticated() === false
        ? <Component {...props} />
        : <Redirect to='/profile' />
      }
    />
  )
}

export default function Routes() {
    return (
    <Router>
      <Switch>
        
        <Route path="/popular" component={Popular} exact />

        <Route path="/trending" component={LatestMovies} />

        <Route path="/upcoming" component={UpComingMovies} />
        
        <Route path="/movie/" component={InfoPage} />

        <Route path="/search" component={SearchMovies} />

        <PublicRoute path="/signup" component={SignUp} />
        
        <PublicRoute path="/login" component={Login} />

        <PrivateRoute path="/profile" component={UserProfile}  />
      </Switch>
    </Router>
  )
}




