import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import { Container } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      // <Container>
        <Layout>
          <Search />
        </Layout>
      // </Container>
    );
  }
}

export default App;
