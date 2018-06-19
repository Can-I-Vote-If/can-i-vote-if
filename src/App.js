import React, { Component } from 'react';

import Form from './components/Form';
import Footer from './containers/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electionData: [],
      address: ''
    };
  }

  componentDidMount() {
    this.getelectionsfromAPI().then(() => console.log(this.state));
  }

  getelectionsfromAPI() {
    return fetch(
      'https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyCuzom1EHkv0O_evm3DSt-2GM-zJ-k6eso'
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.elections);
        this.setState({ electionData: responseJson.elections });
      })
      .catch(error => {
        console.error(error);
      });
  }

  getvoterinfofromAPI() {
    return fetch(
      'https://www.googleapis.com/civicinfo/v2/voterinfo?address={this.state.address}&electionId=2000&officialOnly=false&returnAllAvailableData=true&key=AIzaSyCuzom1EHkv0O_evm3DSt-2GM-zJ-k6eso'
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.elections);
        this.setState({ electionData: responseJson.elections });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const renderDay = this.state.electionData.map(function(election) {
      return (
        <li key={election.id}>
          {election.name} - {election.electionDay}
        </li>
      );
    });
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
