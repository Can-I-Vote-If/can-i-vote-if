import React, { Component } from 'react';

import Form from './components/Form';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
