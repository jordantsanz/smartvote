import { ActionTypes } from '../actions';

const initialState = {
  address: '',
  address_components: [],
  finished: false,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ADDRESS:
      return {
        address: action.payload.formatted_address, address_components: action.payload.address_components, finished: false,
      };
    case ActionTypes.SET_ADDRESS:
      console.log(action);
      console.log(action.payload);
      return {
        address: action.payload.address, address_components: action.payload.terms, finished: true,
      };
    default:
      return {
        address: state.address, address_components: state.address_components, finished: state.finished,
      };
  }
};

export default locationReducer;
