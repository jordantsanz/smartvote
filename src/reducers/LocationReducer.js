import { ActionTypes } from '../actions';

const initialState = {
  address: '',
  address_components: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ADDRESS:
      return {
        address: action.payload.formatted_address, address_components: action.payload.address_components,
      };
    default:
      return {
        address: state.address, address_components: state.address_components,
      };
  }
};

export default locationReducer;
