import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Aux from './hoc/Auxillary/Auxillary';
import SearchHome from './containers/SearchHome/SearchHome';
import SearchResult from './containers/SearchResult/SearchResult';


import './App.css';


class App extends Component {
  render() {
    return (
        <Aux>
            <Switch>
              <Route exact path='/' component={SearchHome}/>
              <Route path='/results' component={SearchResult}/>
            </Switch>
        </Aux>
    );
  }
}

export default App;
