import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, ADD_SMURF, SET_ERROR} from './../actions';

export const initialState = {
    smurfs: [],
    loading: false,
    errorMessage: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                smurfs: [],
                loading: true,
                errorMessage: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                smurfs: [],
                loading: false,
                errorMessage: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                errorMessage: ''
            };
        case ADD_SMURF:
            const newSmurf = {
                id: Date.now(),
                name: action.payload.name,
                position: action.payload.position,
                nickname: action.payload.nickname,
                description: action.payload.description
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            };
        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return(state);
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;
