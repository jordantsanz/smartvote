import axios from 'axios';

export const ActionTypes = {
  GET_ELECTION_DATA: 'GET_ELECTION_DATA',
  GET_ADDRESS: 'GET_ADDRESS',
};

const CIVIC_API_URL = 'https://www.googleapis.com/civicinfo/v2/voterinfo';
const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export function queryElectionData(address) {
  const params = {
    key: GOOGLE_KEY,
    address,
    electionId: 2000,
  };

  console.log(params.key);
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

export function calculateAddress(longitude, latitude) {
  return (dispatch) => {
    const params = {
      key: GOOGLE_KEY,
      // eslint-disable-next-line new-cap
      result_type: 'street_address',
    };
    axios.get(`${GEOCODING_API_URL}`, { params }).then((response) => {
      console.log(response);
      dispatch({ type: ActionTypes.GET_ADDRESS, payload: response.data });
    })
      .catch((error) => {
        return error;
      });
  };
}
