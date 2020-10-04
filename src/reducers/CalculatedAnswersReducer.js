import { ActionTypes } from '../actions';

const initialState = {
  newResults: {},
};

const newResultsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.SET_RECOMMENDATIONS:
      return {
        newResults: action.payload,
      };
    default:
      return {
        newResults: state,
      };
  }
};

export default newResultsReducer;
