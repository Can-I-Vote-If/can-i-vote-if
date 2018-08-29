import React, {
  Component
} from 'react';

import States from './States';
import Results from './Results';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indState: null,
      citizen: null,
      age: null,
      crimes: null,
      submitted: null
    };
  }

  handleAgeChange = (event) => {
    let dob = event.target.value;
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.setState({
      age: age
    });
  }

  handleChange = (e, name) => {
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-lg-11 col-lg-offset-1">
            <h3 className="subHead">Basic Information</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-lg-offset-1">
            <States action={e => this.handleChange(e, 'indState')} />
          </div>

          <div className="col-lg-2">
            <div className="radio-group form-group field-us-citizen">
              <label htmlFor="us-citizen" className="radio-group-label">
                Are you a U.S. Citizen?<span className="required">*</span>
              </label>
              <br />
              <div className="btn-group" role="group" aria-label="...">
                <input
                  type="button"
                  className={
                    this.state.citizen === 'Yes'
                      ? 'btn btn-default isClicked'
                      : 'btn btn-default'
                  }
                  name="us-citizen"
                  id="us-citizen-0"
                  required="required"
                  value="Yes"
                  onClick={e => this.handleChange(e, 'citizen')}
                />
                <input
                  type="button"
                  className={
                    this.state.citizen === 'No'
                      ? 'btn btn-default isClicked'
                      : 'btn btn-default'
                  }
                  name="us-citizen"
                  id="us-citizen-1"
                  required="required"
                  value="No"
                  onClick={e => this.handleChange(e, 'citizen')}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="date form-group field-birthdate">
              <label htmlFor="birthdate" className="date-label">
                Birthday<span className="required">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                name="birthdate"
                id="birthdate"
                required="required"
                aria-required="true"
                onChange={this.handleAgeChange}
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="radio-group form-group field-us-citizen">
              <label htmlFor="us-citizen" className="radio-group-label">
                Have you ever been charged, or convicted of a crime?<span className="required">
                  *
                </span>
              </label>
              <br />
              <div className="btn-group" role="group" aria-label="...">
                <input
                  type="button"
                  className={
                    this.state.crimes === 'Yes'
                      ? 'btn btn-default isClicked'
                      : 'btn btn-default'
                  }
                  name="us-crimes"
                  id="us-crimes-0"
                  required="required"
                  value="Yes"
                  onClick={e => this.handleChange(e, 'crimes')}
                />
                <input
                  type="button"
                  className={
                    this.state.crimes === 'No'
                      ? 'btn btn-default isClicked'
                      : 'btn btn-default'
                  }
                  name="us-crimes"
                  id="us-crimes-1"
                  required="required"
                  value="No"
                  onClick={e => this.handleChange(e, 'crimes')}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12 parentButton">
            <input
              id="submit"
              className="btn btn-primary"
              type="submit"
              value="View Your Eligibility"
            />
          </div>
        </div>

        {this.state.submitted ? (
          <Results
            age={this.state.age}
            citizen={this.state.citizen}
            crimes={this.state.crimes}
            state={this.state.indState}
          />
        ) : null}
      </form>
    );
  }
}

export default Form;
