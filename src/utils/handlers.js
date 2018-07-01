import find from 'lodash.find';
import stateData from '../utils/states.json';

export function getStates(state) {
  return find(stateData, {name: state});
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

  this.setState(obj);
}

export function handleSubmit(event) {
  event.preventDefault();
  this.setState({ submitted: true });
}
