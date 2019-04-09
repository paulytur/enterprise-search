import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch, Route} from 'react-router-dom'
import SearchResult from './containers/SearchResult/SearchResult';

import './App.css';


class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
              <Route exact path='/' component={SearchResult}/>
              {/* <Route exact path='/SearchResult' component={Navigation}/> */}
            </Switch>
        </Layout>
    );
  }
}

export default App;
