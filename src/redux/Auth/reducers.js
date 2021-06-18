import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTHENTICATE, AUTH_SET_IS_SIGNED_IN } from './actions'

const defaultState = {
    email: '',
    password: '',
    user: {},
    isSignedIn: false
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case AUTH_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case AUTHENTICATE:
            return {
                ...state,
                user: action.payload,
                isSignedIn: true
            }
        case AUTH_SET_IS_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.payload
            }
        default:
            return state;
    }
}