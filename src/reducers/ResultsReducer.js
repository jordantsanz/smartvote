import { ActionTypes } from '../actions';

const initialState = {
  electionResults: {},
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RECOMMENDATION:
      console.log(action.payload.elections);
      return {
        electionResults: action.payload.elections,
      };
    default:
      return {
        electionResults: initialState.electionResults,
      };
  }
};

export default resultsReducer;
