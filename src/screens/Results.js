import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResultsLayout from "../components/Results";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      citizen: null,
      age: null,
      crimes: null
    }
  }

  componentWillMount() {
    this.state = { ...this.props.location.state }
  }

  render() {
    return (
      <div className="container">
        <h1>Results</h1>

        <ResultsLayout data={this.state} />

        <Link to='/'>Back to form</Link>
    </div>
    );
  }
}

export default Results;