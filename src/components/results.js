import React, { Component } from 'react';
import axios from 'axios';

import api from './api';

export default class Results extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
		};
	}

	componentDidMount(props) {
		console.log(this.props)
		console.log('name: ' + this.props.name);
		this.getStates()
	}

  getStates() {
    axios.get(api() + '/api/states/' + this.props.name)
		.then((resp) => {
			console.log(resp);
			this.setState({data: resp.data[0]})
			console.log(this.state.data)
		}).catch(function (error) {
			console.log(error);
		});
  }
	
	render() {
		const info = this.state.data
		return (
			<div>
				<div className="col-sm-12">
					<h3 className="stateTitle">Can you vote in {this.props.name}? <span id="answer" className="yes">Yes</span></h3>
				</div>
				<div className="col-sm-2 col-sm-offset-1">
					<label className="eTitle">Citizenship <i className="fa fa-check" id="us-citizen" aria-hidden="true"></i></label>
					<p>{info.citizenship}</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Age <i className="fa fa-check" id="age-notice" aria-hidden="true"></i></label>
					<p>
					{info.age}</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Residency <i className="fa fa-check" id="resident" aria-hidden="true"></i></label>
					<p>{info.residency}</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Crimes <i className="fa fa-times" id="criminal" aria-hidden="true"></i></label>
					<p>{info.criminalHistory}</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Other <i className="fa fa-check" id="other" aria-hidden="true"></i></label>
					<p>{info.other}</p>
				</div>
			</div>
		);
	}
}