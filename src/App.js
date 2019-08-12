import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';
import VotingLaws from './screens/VotingLaws';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <main className="container-fluid pt-4">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/voting-laws/" component={VotingLaws} />
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
