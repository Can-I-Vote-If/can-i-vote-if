import React, { Component } from 'react';
import axios from 'axios';

import Results from './components/results';
import api from './components/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indState: null,
      citizen: null,
      age: null,
      crimes: null,
      submitted: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCitizenChange = this.handleCitizenChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleCrimeChange = this.handleCrimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getStates()
  }

  getStates() {
    axios.get(api() + '/api/states')
      .then((response) => {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  handleStateChange(event) {
    console.log(event.target)
    let indState = event.target.value;
    console.log(indState)
    this.setState({ indState: indState });
  }

  handleCitizenChange(event) {
    console.log(event.target)
    let citizen = event.target.value;
    console.log(citizen)
    this.setState({ citizen: citizen });
  }

  handleAgeChange(event) {
    console.log(event.target)
    let dob = event.target.value;
    console.log(dob)
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age)
    this.setState({ age: age });
  }

  handleCrimeChange(event) {
    console.log(event.target)
    let crime = event.target.value;
    console.log(crime)
    this.setState({ crimes: crime });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-11 col-lg-offset-1">
              <h3 className="subHead">Basic Infomation</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-lg-offset-1">
              <div className="select form-group field-where-do-you-live">
                <label htmlFor="where-do-you-live" className="select-label">Where do you live?<span className="required">*</span></label>
                <select className="form-control" name="where-do-you-live" id="where-do-you-live" required="required" aria-required="true" defaultValue="Select State" onChange={this.handleStateChange}>
                  <option value="Select State" disabled>Select State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District of Columbia">District of Columbia</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="radio-group form-group field-us-citizen">
                <label htmlFor="us-citizen" className="radio-group-label">Are you a U.S. Citizen?<span className="required">*</span></label>
                <br />
                <div className="btn-group" role="group" aria-label="...">
                  <input type="button" className={(this.state.citizen === 'Yes') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-0" required="required" value="Yes" onClick={this.handleCitizenChange} />
                  <input type="button" className={(this.state.citizen === 'No') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-1" required="required"	value="No"  onClick={this.handleCitizenChange}/>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="date form-group field-birthdate">
                <label htmlFor="birthdate" className="date-label">Birthday<span className="required">*</span></label>
                <input type="date" className="form-control" name="birthdate" id="birthdate" required="required" aria-required="true" onChange={this.handleAgeChange}/>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="radio-group form-group field-us-citizen">
                <label htmlFor="us-citizen" className="radio-group-label">Have you ever been charged, or convicted of a crime?<span className="required">*</span></label>
                <br />
                <div className="btn-group" role="group" aria-label="...">
                  <input type="button" className={(this.state.crimes === 'Yes') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-0" required="required" value="Yes" onClick={this.handleCrimeChange} />
                  <input type="button" className={(this.state.crimes === 'No') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-1" required="required"	value="No"  onClick={this.handleCrimeChange}/>
                </div>
              </div>
            </div>
            <div className="col-sm-12 parentButton">
              <input id="submit" className="btn btn-primary" type="submit" value="View Your Eligibility"  />
            </div>
          </div>

          {this.state.submitted ? (
            <Results name={this.state.indState} age={this.state.age} citizen={this.state.citizen} crimes={this.state.crimes} />
          ) : (
            null
          )}

        </form>
        <div className="row footer-wrap">
          <p className="col-sm-12 text-center"><strong>Find out how to register to vote in your state by following the link below.</strong></p>
          <a href="https://vote.gov/" className="footer col-sm-12 parentButton" target="_blank" rel="noopener noreferrer">Register at vote.gov</a>
        </div>
      </div>
    );
  }
}

export default App;
