import React, { Component } from 'react';

import { getStates } from '../utils/handlers';

export default class ResultsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      canVote: null
    };
  }

  componentWillMount() {
    this.setState({ data: getStates(this.props.data.state) });
    this.userCanVote();
  }

  userCanVote() {
    const { age, citizen, crimes } = this.props.data;
    if (
      age >= 18 &&
      crimes === 'No' &&
      citizen === 'Yes'
    ) {
      this.setState({ canVote: 'Yes' });
    } else if ( age < 18 || citizen === 'No' ) {
      this.setState({ canVote: 'No' });
    } else if ( crimes === 'Yes' ) {
      this.setState({ canVote: 'Maybe' });
    }
  }

  render() {
    const info = this.state.data;
    const { age, citizen, crimes, state } = this.props.data;

    return (
      <div className="row results">
        <div className="col-sm-12">
          <h3 className="stateTitle">
            Can you vote in {state}?{' '}
            <span id="answer" className={this.state.canVote}>
              {this.state.canVote}
            </span>
          </h3>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="eTitle">
            Citizenship{' '}
            <i
              className={citizen === 'Yes' ? 'fa fa-check' : 'fa fa-times'}
              id="citizen"
              aria-hidden="true"
            />
          </label>

          <div className="voter-info">
            <p>{info.citizenship}</p>
            {citizen === 'No' && (
              <p>
                <a href="https://www.usa.gov/register-to-vote/#item-212447" target="_blank" rel="noopener noreferrer">
                  Who Can Vote in the US?
                </a>
                <br/>
                <a href=" https://www.usa.gov/become-us-citizen/" target="_blank" rel="noopener noreferrer">
                  How To Become a U.S Citizen
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="eTitle">
            Age{' '}
            <i
              className={age >= 18 ? 'fa fa-check' : 'fa fa-times'}
              id="age-notice"
              aria-hidden="true"
            />
          </label>

          <div className="voter-info">
            <p>{info.age}</p>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="eTitle">
            Residency{' '}
            <i className="fa fa-check" id="resident" aria-hidden="true" />
          </label>
          <p>{info.residency}</p>
        </div>

        <div className="col-sm-12 col-lg-6">
          <label className="eTitle">
            Crimes{' '}
            <i
              className={crimes === 'Yes' ? 'fa fa-exclamation' : 'fa fa-check'}
              id="criminal"
              aria-hidden="true"
            />
          </label>

          <div className="voter-info">
            <p>{info.criminalHistory}</p>
            { crimes === 'Yes' && (
              <p>
                <a href="http://www.nonprofitvote.org/voting-in-your-state/special-circumstances/voting-as-an-ex-offender/" target="_blank" rel="noopener noreferrer">
                  Learn About Voting as an Ex-offender
                </a>
                <br/>
                <a href="http://mylegalaid.org/" target="_blank" rel="noopener noreferrer">
                  Learn About Legal Options as an Ex-offender
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="col-sm-12">
          <label className="eTitle">
            Other <i className="fa fa-check" id="other" aria-hidden="true" />
          </label>
          <p>{info.other}</p>
        </div>
      </div>
    );
  }
}
