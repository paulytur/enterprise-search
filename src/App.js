import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import { Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Search />
        </Layout>
      </div>
    );
  }
}

export default App;
