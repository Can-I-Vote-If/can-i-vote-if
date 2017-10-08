import axios from 'axios';
import { apiURL, event} from '../utils/index';
import * as type from '../events/index';

//get results
export const getResults = (state) => {
  console.log(state);
  return dispatch => {
    dispatch(event(type.RESULTS_REQUESTED));
    return axios
      .get(apiURL('/api/states/') + state)
      .then(resp => {
        console.log(resp.data);
        let results = resp.data[0];
        dispatch(event(type.RESULTS_RECEIVED, results));
        return results;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};