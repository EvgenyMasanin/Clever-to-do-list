import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, REGISTRATION_SET_ERROR } from './actions'

const defaultState = {
    email: '',
    password: '',
    error: {
        isError: false,
        errorText: ''
    }
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
        case REGISTRATION_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}