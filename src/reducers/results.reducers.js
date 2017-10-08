import * as event from '../events/index';

export function resultsReducer(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case event.RESULTS_REQUESTED:
    return state;
  case event.RESULTS_RECEIVED:
      return payload;
    default:
      return state;
  }
}
