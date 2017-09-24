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
		this.setState({ crime: crime });
	}

	handleSubmit(event) {
		event.preventDefault();
		alert('Here is your info: ' + this.state);
		console.log(this.state)
	}

	checkForm() {
		alert("Hey there!")
	}
	render() {
		return (
			<form id="form" onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-sm-11 col-sm-offset-1">
						<h3 className="subHead">Basic Infomation</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3 col-sm-offset-1">
						<div className="select form-group field-where-do-you-live">
							<label htmlFor="where-do-you-live" className="select-label">Where do you live?<span className="required">*</span></label>
							<select className="form-control" name="where-do-you-live" id="where-do-you-live" required="required" aria-required="true" defaultValue="Select State" onChange={this.handleStateChange}>
								<option value="Select State" disabled>Select State</option>
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="radio-group form-group field-us-citizen">
							<label htmlFor="us-citizen" className="radio-group-label">Are you a U.S. Citizen?<span className="required">*</span></label>
							<br />
							<div className="btn-group" role="group" aria-label="...">
								<input type="button" className={(this.state.citizen === 'Yes') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-0" required="required" value="Yes" onClick={this.handleCitizenChange} />
								<input type="button" className="btn btn-default" name="us-citizen" id="us-citizen-1" required="required"	value="No"  onClick={this.handleCitizenChange}/>
							</div>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="date form-group field-birthdate">
							<label htmlFor="birthdate" className="date-label">Birthday<span className="required">*</span></label>
							<input type="date" className="form-control" name="birthdate" id="birthdate" required="required" aria-required="true" onChange={this.handleAgeChange}/>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="radio-group form-group field-us-citizen">
							<label htmlFor="us-citizen" className="radio-group-label">Have you ever been charged, or convicted of a crime?<span className="required">*</span></label>
							<br />
							<div className="btn-group" role="group" aria-label="...">
								<input type="button" className={(this.state.crime === 'Yes') ? "btn btn-default isClicked" : "btn btn-default"} name="us-citizen" id="us-citizen-0" required="required" value="Yes" onClick={this.handleCrimeChange} />
								<input type="button" className="btn btn-default" name="us-citizen" id="us-citizen-1" required="required"	value="No"  onClick={this.handleCrimeChange}/>
							</div>
						</div>
					</div>
					<div className="col-sm-12 parentButton">
						<input id="submit" className="btn btn-primary" type="submit" value="Find Out Your Voting Laws"/>	
					</div>
				</div>
				<Results />
			</form>
		);
	}
}

export default App;
