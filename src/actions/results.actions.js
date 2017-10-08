import axios from 'axios';
import { apiURL, event} from '../utils/index';
import * as type from '../events/index';

//get results
export const getResults = () => {
  return dispatch => {
    dispatch(event(type.RESULTS_REQUESTED));
    return axios
      .get(apiURL('/api/states/'))
      .then(resp => {
        console.log(resp);
        // let results = resp.data;
        // dispatch(event(type.RESULTS_RECEIVED, results));
        // return results;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};