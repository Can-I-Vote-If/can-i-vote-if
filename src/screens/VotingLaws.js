import React from 'react';
import ReactGA from 'react-ga';

import stateData from '../utils/states.json';

const VotingLaws = () => {
  ReactGA.pageview('/voting-laws');
  return (
    <div className="container">

      <h1>State Voter Registration Requirements</h1>
      <div className="row justify-content-between">
        <p className="col">
          Below is a list of every state's voter registration laws. You'll also find a link to register to vote.
        </p>

        <div className="col-2">
          <div className="dropdown text-right">
            <button
              id="dropdownMenuButton"
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Jump to
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {
                stateData.map((state, i) => (
                  <a href={"#"+state.name} className="dropdown-item" key={i}>{state.name}</a>
                ))
              }
            </div>
          </div>
        </div>
      </div>

        <div className="row">
          {
            stateData.map((state, i) => (
              <div className="col-8 my-3" key={i} id={state.name}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{state.name}</h5>
                    <p className="card-text">{state.age}</p>
                    <p className="card-text">{state.citizenship}</p>
                    <p className="card-text">{state.residency}</p>
                    <p className="card-text">{state.criminalHistory}</p>
                    <p className="card-text">{state.competence}</p>
                    <p className="card-text">{state.other}</p>

                    <br/>
                    <a href={state.registrationLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Register to Vote in {state.name}</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
  );
}

export default VotingLaws;