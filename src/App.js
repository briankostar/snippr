import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/routes/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path='/' render={(props) => <Home {...props} title={'Home'} />} />
      </BrowserRouter>
    );
  }
}

export default App;
