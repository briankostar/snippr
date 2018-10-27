import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Home from './components/routes/Home'
import PostRoute from './components/routes/PostRoute'
import Signup from './components/routes/Signup'
import Navbar from './components/views/Navbar'

import config from './app.config';
import Login from './components/routes/Login'
import Profile from './components/routes/Profile'
import SignupForm from './components/views/SignupForm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Route exact={true} path='/' render={(props) => <Home {...props} title={'Home'} />} />
          <Route path='/post/:id' render={(props) => <PostRoute {...props} title={'Post'} />} />
          {/* <Route path='/signup' render={(props) => <Signup {...props} title={'Signup'} />} /> */}

          <Route path="/login" render={() => <Login baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/signup" component={SignupForm} />
          <SecureRoute path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
