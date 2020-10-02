import { combineReducers } from 'redux';
import electionDataReducer from './ElectionDataReducer';

const rootReducer = combineReducers({
  electionData: electionDataReducer,
});

export default rootReducer;
