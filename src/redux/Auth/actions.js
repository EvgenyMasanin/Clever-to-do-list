import { firebaseApp } from '../../base';

export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTH_SET_IS_SIGNED_IN = 'AUTH_SET_IS_SIGNED_IN';

export const setEmail = email => ({
    type: AUTH_CHANGE_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});

export const setIsSignedIn = isSignedIn => ({
    type: AUTH_SET_IS_SIGNED_IN,
    payload: isSignedIn
})

export const setUser = (email, password) => {
    return dispatch => {

        console.log('Signing In...');
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed In');
                dispatch({
                    type: AUTHENTICATE,
                    payload: u.user
                })
            })
            .catch((err) => {
                console.log(err.toString());
            })
    }
};