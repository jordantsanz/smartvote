import axios from 'axios';

export const ActionTypes = {
  GET_ELECTION_DATA: 'GET_ELECTION_DATA',
  GET_ADDRESS: 'GET_ADDRESS',
  GET_RECOMMENDATION: 'GET_RECOMMENDATION',
  SAVE_ELECTION_DATA: 'SAVE_ELECTION_DATA',
};

const CIVIC_API_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo';
const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=';
const GOOGLE_KEY = 'AIzaSyC-hLGCLH9_wYA5ZyLKNrG-57VT6rRkb5A';
const BACKEND_API_URL = 'http://localhost:8081/api';

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
  console.log(GOOGLE_KEY);
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

export function calculatePersonalityWithText(elections, userText) {
  console.log(elections);
  console.log(userText);
  return (dispatch) => {
    axios.put(`${BACKEND_API_URL}/text-recommendations`, { elections, userText }).then((response) => {
      dispatch({ type: ActionTypes.GET_RECOMMENDATION, payload: response.data });
      console.log(response.data);
    })
      .catch((error) => {
        return error;
      });
  };
}

export function calculatePersonalityWithSliders(elections, user) {
  return (dispatch) => {
    axios.put(`${BACKEND_API_URL}/sliders-recommendations`, { elections, user }).then((response) => {
      dispatch({ type: ActionTypes.GET_RECOMMENDATION, payload: response.data });
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
