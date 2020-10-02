import { ActionTypes } from '../actions';

const initialState = {
  address: '',
};

const locationReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.GET_ADDRESS:
      return {
        contests: action.payload.address,
      };
    default:
      return {
        contests: initialState.address,
      };
  }
};

export default locationReducer;
