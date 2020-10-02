import { combineReducers } from 'redux';
import electionDataReducer from './ElectionDataReducer';
import locationReducer from './LocationReducer';

const rootReducer = combineReducers({
  electionData: electionDataReducer,
  location: locationReducer,
});

export default rootReducer;
