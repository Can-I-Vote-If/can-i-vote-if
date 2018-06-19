import { get } from './env';

export function getElections() {
  return fetch(
    'https://www.googleapis.com/civicinfo/v2/elections?key=' + get('apiKey')
  )
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

export function getVoterInfo(address) {
  return fetch(
    'https://www.googleapis.com/civicinfo/v2/voterinfo?address=' +
      { address } +
      '&electionId=2000&officialOnly=false&returnAllAvailableData=true&key=' +
      get('apiKey')
  )
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
}

export function handleStateChange(event) {
  let indState = event.target.value;
  this.setState({ indState: indState });
}

export function handleCitizenChange(event) {
  let citizen = event.target.value;
  this.setState({ citizen: citizen });
}

export function handleAgeChange(event) {
  let dob = event.target.value;
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  this.setState({ age: age });
}

export function handleChange(event, opt) {
  let value = event.target.value;
  let obj = {};
  obj[opt] = value;
  console.log(obj);

  this.setState(obj);
}

export function handleSubmit(event) {
  event.preventDefault();
  this.setState({ submitted: true });
}
