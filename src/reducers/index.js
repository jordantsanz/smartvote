import { combineReducers } from 'redux';
import electionDataReducer from './ElectionDataReducer';
import locationReducer from './LocationReducer';
import resultsReducer from './ResultsReducer';

const rootReducer = combineReducers({
  electionData: electionDataReducer,
  location: locationReducer,
  results: resultsReducer,
});

export default rootReducer;
