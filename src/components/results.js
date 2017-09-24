import React, { Component } from 'react';

export default class Results extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div id="results" className="row">
				<div className="col-sm-12">
					<h3 className="stateTitle">Can you vote in Minnesota? <span id="answer" class="yes">Yes</span></h3>
				</div>
				<div className="col-sm-2 col-sm-offset-1">
					<label className="eTitle">Citizenship <i className="fa fa-check" id="us-citizen" aria-hidden="true"></i></label>
					<p>Bacon ipsum dolor amet shoulder jerky shank porchetta. Tri-tip frankfurter bacon pork belly chicken ham salami bresaola
						ribeye ball tip swine. Ball tip biltong shoulder tri-tip fatback frankfurter.</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Age <i className="fa fa-check" id="age-notice" aria-hidden="true"></i></label>
					<p>Bacon ipsum dolor amet shoulder jerky shank porchetta. Tri-tip frankfurter bacon pork belly chicken ham salami bresaola
						ribeye ball tip swine. Ball tip biltong shoulder tri-tip fatback frankfurter.</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Residency <i className="fa fa-check" id="resident" aria-hidden="true"></i></label>
					<p>Bacon ipsum dolor amet shoulder jerky shank porchetta. Tri-tip frankfurter bacon pork belly chicken ham salami bresaola
						ribeye ball tip swine. Ball tip biltong shoulder tri-tip fatback frankfurter.</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Crimes <i className="fa fa-times" id="criminal" aria-hidden="true"></i></label>
					<p>Bacon ipsum dolor amet shoulder jerky shank porchetta. Tri-tip frankfurter bacon pork belly chicken ham salami bresaola
						ribeye ball tip swine. Ball tip biltong shoulder tri-tip fatback frankfurter.</p>
				</div>
				<div className="col-sm-2">
					<label className="eTitle">Other <i className="fa fa-check" id="other" aria-hidden="true"></i></label>
					<p>Bacon ipsum dolor amet shoulder jerky shank porchetta. Tri-tip frankfurter bacon pork belly chicken ham salami bresaola
						ribeye ball tip swine. Ball tip biltong shoulder tri-tip fatback frankfurter.</p>
				</div>
			</div>
		);
	}
}