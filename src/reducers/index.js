import { combineReducers } from 'redux';
import electionDataReducer from './ElectionDataReducer';
import locationReducer from './LocationReducer';
import resultsReducer from './ResultsReducer';
import newResultsReducer from './CalculatedAnswersReducer';

const rootReducer = combineReducers({
  electionData: electionDataReducer,
  location: locationReducer,
  results: resultsReducer,
  newResults: newResultsReducer,
});

export default rootReducer;
