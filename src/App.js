import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch, Route} from 'react-router-dom'
import Aux from './hoc/Auxillary/Auxillary';
import Navigation from './components/Navigation/Navigation'

import './App.css';

class App extends Component {
  render() {
    return (
        <Aux>
            <Switch>
              <Route exact path='/' component={Layout}/>
              {/* <Route exact path='/SearchResult' component={Navigation}/> */}
            </Switch>
        </Aux>
    );
  }
}

export default App;
