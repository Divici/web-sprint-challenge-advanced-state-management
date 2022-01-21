import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
    
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (smurfs) => {
    return({type:FETCH_SUCCESS, payload: smurfs})
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage});
}

export const addNewSmurf = (newSmurf) => {
    return({type: ADD_SMURF, payload: newSmurf});
}

export const setError = (newError) => {
    return({type: SET_ERROR, payload: newError});
}

