import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './containers/Header';
import Home from './containers/Home';
import About from './containers/About';
import Footer from './containers/Footer';

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <main className="container-fluid pt-4">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
