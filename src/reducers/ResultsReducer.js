import { ActionTypes } from '../actions';

const initialState = {
  results: {},
};

const resultsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.GET_RECOMMENDATION:
      return {
        results: action.payload,
      };
    default:
      return {
        results: state,
      };
  }
};

export default resultsReducer;
