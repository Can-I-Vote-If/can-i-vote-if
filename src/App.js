import React, { Component } from 'react';
import Results from './components/results';

class App extends Component {
	checkForm() {
		alert("Hey there!")
	}
	render() {
		return (
			<form id="form">
				<div className="row">
					<div className="col-lg-11 col-lg-offset-1">
						<h3 className="subHead">Basic Infomation</h3>
					</div>
					<div className="col-lg-4 col-lg-offset-1">
						<div className="select form-group field-where-do-you-live">
							<label htmlFor="where-do-you-live" className="select-label">Where do you live?<span className="required">*</span></label>
							<select className="form-control" name="where-do-you-live" id="where-do-you-live" required="required" aria-required="true" defaultValue="Select State">
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
					<div className="col-lg-2">
						<div className="radio-group form-group field-us-citizen">
							<label htmlFor="us-citizen" className="radio-group-label">Are you a U.S. Citizen?<span className="required">*</span></label>
							<br />
							<div className="btn-group" role="group" aria-label="...">
								<button type="button" className="btn btn-default" name="us-citizen" id="us-citizen-0" required="required" value="yes" checked="checked">Yes</button>
								<button type="button" className="btn btn-default" name="us-citizen" id="us-citizen-1" required="required"	value="no">No</button>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="date form-group field-birthdate">
							<label htmlFor="birthdate" className="date-label">Birthday<span className="required">*</span></label>
							<input type="date" className="form-control" name="birthdate" id="birthdate" required="required" aria-required="true" />
						</div>
					</div>
					<div className="col-lg-12 parentButton">
						<button id="submit" className="btn btn-primary" onSubmit={this.checkForm.bind(this)} disabled>Find out your voting laws</button>
					</div>
				</div>
				<Results />
			</form>
		);
	}
}

export default App;
