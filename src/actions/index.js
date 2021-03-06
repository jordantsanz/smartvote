import axios from 'axios';

export const ActionTypes = {
  GET_ELECTION_DATA: 'GET_ELECTION_DATA',
  GET_ADDRESS: 'GET_ADDRESS',
  SET_ADDRESS: 'SET_ADDRESS',
  GET_RECOMMENDATION: 'GET_RECOMMENDATION',
  SAVE_ELECTION_DATA: 'SAVE_ELECTION_DATA',
  SET_RECOMMENDATIONS: 'SET_RECOMMENDATIONS',
};

const CIVIC_API_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo';
const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=';
const GOOGLE_KEY = 'AIzaSyC-hLGCLH9_wYA5ZyLKNrG-57VT6rRkb5A';
const BACKEND_API_URL = 'https://ivyhacks-api.herokuapp.com/api';

// returns all elections that user can participate in
export function queryElectionData(address) {
  const params = {
    key: GOOGLE_KEY,
    address,
    electionId: 2000,
  };

  return (dispatch) => {
    axios.get(`${CIVIC_API_URL}`, { params }).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_ELECTION_DATA, payload: response.data });
    })
      .catch((error) => {
        return error;
      });
  };
}

// calculates the nearest address of the user
export function calculateAddress(latitude, longitude, history) {
  return (dispatch) => {
    const url = `${GEOCODING_API_URL}${GOOGLE_KEY}&latlng=${latitude},${longitude}`;
    axios.get(`${url}`).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_ADDRESS, payload: response.data.results[0] });
      history.push('/address');
    })
      .catch((error) => {
        return error;
      });
  };
}

export function setAddress(address) {
  return (dispatch) => {
    console.log(address);
    dispatch({ type: ActionTypes.SET_ADDRESS, payload: address });
  };
}

export function calculatePersonalityWithText(elections, userText, history) {
  return (dispatch) => {
    axios.put(`${BACKEND_API_URL}/text-recommendations`, { elections, userText }).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_RECOMMENDATION, payload: response.data });
      history.push('/loadingfinal');
    })
      .catch((error) => {
        return error;
      });
  };
}

export function calculatePersonalityWithSliders(elections, user, history) {
  return (dispatch) => {
    axios.put(`${BACKEND_API_URL}/slide-recommendations`, { elections, user }).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_RECOMMENDATION, payload: response.data });
      console.log('puspusphs');
      history.push('/loadingfinal');
    })
      .catch((error) => {
        return error;
      });
  };
}

export function saveCheckedElections(elections) {
  console.log(elections);
  return (dispatch) => {
    dispatch({ type: ActionTypes.SAVE_ELECTION_DATA, payload: elections });
  };
}

export function setRecommendations(resultsNew) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SET_RECOMMENDATIONS, payload: resultsNew });
  };
}
