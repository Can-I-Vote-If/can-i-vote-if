import React, { Component } from 'react';

import Form from './components/Form';
import Footer from './containers/Footer';
import { getElections, getVoterInfo } from './utils/handlers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'manhattan, new york city, ny',
      electionData: [],
      voterInfo: []
    };
  }

  componentDidMount() {
    getElections().then((data) => this.setState({ electionData: data.elections }));
    getVoterInfo(this.state.address).then((data) => this.setState({ voterInfo: data }));
  }

  render() {
    const renderDay = this.state.electionData.map(function(election) {
      return (
        <li key={election.id}>
          {election.name} - {election.electionDay}
        </li>
      );
    });
    console.log(this.state);
    return (
      <div>
        <div>
          <ul>{renderDay}</ul>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Please type in your State:
              <input
                type="text"
                onChange={this.handleaddressChange}
                value={this.state.address}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
