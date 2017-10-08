import { combineReducers } from 'redux';
import { resultsReducer } from './results.reducers';

const rootReducer = combineReducers({
  results: resultsReducer,
});

export default rootReducer;