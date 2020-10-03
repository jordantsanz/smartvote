import axios from 'axios';

export const ActionTypes = {
  GET_ELECTION_DATA: 'GET_ELECTION_DATA',
  GET_ADDRESS: 'GET_ADDRESS',
};

const CIVIC_API_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo';
const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=';
const GOOGLE_KEY = 'AIzaSyC-hLGCLH9_wYA5ZyLKNrG-57VT6rRkb5A';

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
export function calculateAddress(latitude, longitude) {
  console.log(GOOGLE_KEY);
  return (dispatch) => {
    const url = `${GEOCODING_API_URL}${GOOGLE_KEY}&latlng=${latitude},${longitude}`;
    axios.get(`${url}`).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_ADDRESS, payload: response.data.results[0] });
    })
      .catch((error) => {
        return error;
      });
  };
}
