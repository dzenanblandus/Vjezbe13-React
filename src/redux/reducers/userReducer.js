
import {
    SET_USERNAME,
    SET_LOGGED_IN
} from '../actions/userActions';

const initialState = {
    username: '',
    loggedIn: false
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.payload
            };
        default:
            return {
                ...state
            };
    }
}
