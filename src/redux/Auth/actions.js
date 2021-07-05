import { firebaseApp } from '../../base';
import { setAuthorized } from "../UserData/actions";

export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTH_SET_IS_SIGNED_IN = 'AUTH_SET_IS_SIGNED_IN';
export const REGISTRATION_SET_ERROR = 'REGISTRATION_SET_ERROR';

export const setEmail = email => ({
    type: AUTH_CHANGE_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});

export const setError = (isError, errorText) => ({
    type: REGISTRATION_SET_ERROR,
    payload: {
        isError,
        errorText
    }
})

export const setUser = (email, password) => {
    return dispatch => {

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed In');
                dispatch({
                    type: AUTHENTICATE,
                    payload: u.user
                })
                dispatch(setAuthorized(u.user, true))
            })
            .catch((err) => {
                console.log(err);
                dispatch(setError(true, err.message))
            })
    }
};