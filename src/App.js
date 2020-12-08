import React, { useState, useEffect }from 'react';

import InfoPage from './movie-section/info-page/get-infos';
import LatestMovies from './movie-section/trending-section/trending';
import UpComingMovies from './movie-section/upcoming-section/upcoming';
import SearchMovies from './movie-section/search-movies/search_movies';
import Popular from './movie-section/popular-section/popular';

import SignUp from './components/pages/sign-up';
import SignIn from './components/pages/sign-in';
import UserPage from './components/pages/user-page';
import { auth } from './components/services/firebase';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated, ...res }) {

  return (
    <Route
      { ...res }
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...res }) {

  return (
    <Route 
      {...res}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/userPage' />
      }
    />
  )
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if(user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false)
      }
    });
  }, []);


  return loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        
        <Route path="/popular" component={Popular} exact />

        <Route path="/trending" component={LatestMovies} />

        <Route path="/upcoming" component={UpComingMovies} />
        
        <Route path="/movie/" component={InfoPage} />

        <Route path="/search" component={SearchMovies} />

        <PrivateRoute path="/userPage"  authenticated={authenticated} component={UserPage} />
        <PublicRoute path="/signup"  authenticated={authenticated} component={SignUp} />
        <PublicRoute path="/signin"  authenticated={authenticated} component={SignIn} />
        <Route path="/signin"  authenticated={authenticated} component={SignIn} />


      </Switch>
    </Router>
  );
}




