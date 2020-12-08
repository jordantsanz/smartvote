import { ActionTypes } from '../actions';

const initialState = {
  electionResults: {},
};

const newResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_RECOMMENDATIONS:
      console.log(action.payload);
      return {

        electionResults: action.payload,
      };
    default:
      return {
        electionResults: initialState.electionResults,
      };
  }
};

export default newResultsReducer;
