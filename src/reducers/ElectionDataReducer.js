import { ActionTypes } from '../actions';

const initialState = {
  contests: [],
};

const electionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ELECTION_DATA:
      console.log(action.payload);
      return {
        contests: action.payload.contests,
      };
    case ActionTypes.SAVE_ELECTION_DATA:
      return {
        contests: action.payload.elections,
      };
    default:
      return {
        contests: initialState.contests,
      };
  }
};

export default electionDataReducer;
