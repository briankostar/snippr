import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/routes/Home'
import Post from './components/routes/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={(props) => <Home {...props} title={'Home'} />} />
          <Route path='/post/:id' render={(props) => <Post {...props} title={'Post'} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
