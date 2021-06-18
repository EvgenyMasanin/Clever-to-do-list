import {
    REGISTRATION,
    REGISTRATION_CHANGE_EMAIL,
    REGISTRATION_CHANGE_PASSWORD,
    REGISTRATION_CHANGE_REPEAT_PASSWORD,
    REGISTRATION_SET_IS_SIGNED_IN,
    REGISTRATION_SET_IS_CORRECT_PASSWORD
} from './actions'

const defaultState = {
    email: '',
    password: '',
    repeatPassword: '',
    user: {},
    isSignedIn: false,
    isCorrect: true,
    helperText: ''
}

export const registretionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case REGISTRATION_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case REGISTRATION_CHANGE_REPEAT_PASSWORD:
            return {
                ...state,
                repeatPassword: action.payload
            };
        case REGISTRATION:
            return {
                ...state,
                user: action.payload,
                isSignedIn: true
            }
        case REGISTRATION_SET_IS_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.payload
            }
        case REGISTRATION_SET_IS_CORRECT_PASSWORD:
            const { password, repeatPassword } = action.payload
            if (password === repeatPassword)
                return {
                    ...state,
                    isCorrect: true,
                    helperText: ''
                }
            else
                return {
                    ...state,
                    isCorrect: false,
                    helperText: 'Incorrect repeat password'
                }
        default:
            return state;
    }
}