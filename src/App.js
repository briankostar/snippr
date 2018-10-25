import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/routes/Home'
import PostRoute from './components/routes/PostRoute'

import Navbar from './components/views/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Route exact={true} path='/' render={(props) => <Home {...props} title={'Home'} />} />
          <Route path='/post/:id' render={(props) => <PostRoute {...props} title={'Post'} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
