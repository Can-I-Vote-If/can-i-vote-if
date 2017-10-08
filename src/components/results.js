import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getResults } from '../actions/results.actions';

class Results extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			canVote: 'Yes',
		};
	}

  componentDidMount() {
    const { getResults } = this.props.actions;
    console.log(this.props)
		console.log('name: ' + this.props.name);
    
    getResults(this.props.name).then(resp => {
      console.log(resp);
    });
  }

	render() {
    const results = this.props.results;
		return (
			<div className="row results">
				<div className="col-sm-12">
					<h3 className="stateTitle">Can you vote in {this.props.name}? <span id="answer" className={this.state.canVote}>{this.state.canVote}</span></h3>
				</div>
				<div className="col-lg-2 col-lg-offset-1">
					<label className="eTitle">Citizenship <i className={(this.props.citizen === 'Yes') ? "fa fa-check" : "fa fa-times"} id="citizen" aria-hidden="true"></i></label>
					<p>{results.citizenship}</p>
				</div>
				<div className="col-lg-2">
					<label className="eTitle">Age <i className={(this.props.age >= 18) ? "fa fa-check" : "fa fa-times"} id="age-notice" aria-hidden="true"></i></label>
					<p>
					{results.age}</p>
				</div>
				<div className="col-lg-2">
					<label className="eTitle">Residency <i className="fa fa-check" id="resident" aria-hidden="true"></i></label>
					<p>{results.residency}</p>
				</div>
				<div className="col-lg-2">
					<label className="eTitle">Crimes <i className={(this.props.crimes === 'Yes') ? "fa fa-exclamation" : "fa fa-check"} id="criminal" aria-hidden="true"></i></label>
					<p>{results.criminalHistory}</p>
				</div>
				<div className="col-lg-2">
					<label className="eTitle">Other <i className="fa fa-check" id="other" aria-hidden="true"></i></label>
					<p>{results.other}</p>
				</div>
			</div>
		);
	}
}

Results.propTypes = {
  actions: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    results: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getResults
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);