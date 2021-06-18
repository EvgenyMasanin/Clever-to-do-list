import { firebaseApp } from '../../base';

export const REGISTRATION_CHANGE_EMAIL = 'REGISTRATION_CHANGE_EMAIL';
export const REGISTRATION_CHANGE_PASSWORD = 'REGISTRATION_CHANGE_PASSWORD';
export const REGISTRATION_CHANGE_REPEAT_PASSWORD = 'REGISTRATION_CHANGE_REPEAT_PASSWORD';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SET_IS_SIGNED_IN = 'REGISTRATION_SET_IS_SIGNED_IN';
export const REGISTRATION_SET_IS_CORRECT_PASSWORD = 'REGISTRATION_SET_IS_CORRECT_PASSWORD';

export const setIsCorrect = (password, repeatPassword) => ({
    type: REGISTRATION_SET_IS_CORRECT_PASSWORD,
    payload: {
        password,
        repeatPassword
    }
});

export const setEmail = email => ({
    type: REGISTRATION_CHANGE_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: REGISTRATION_CHANGE_PASSWORD,
    payload: password
});

export const setRepeatPassword = password => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
    payload: password
});

export const setIsSignedIn = isSignedIn => ({
    type: REGISTRATION_SET_IS_SIGNED_IN,
    payload: isSignedIn
})

export const setUser = (email, password, repeatPassword) => {
    return dispatch => {
        if(password === repeatPassword) {
            console.log('Signing Up...');
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed Up');
                console.log(u.user.email);
                dispatch({
                    type: REGISTRATION,
                    payload: u.user
                })
                dispatch({
                    type: REGISTRATION_CHANGE_EMAIL,
                    payload: ''
                })
                dispatch({
                    type: REGISTRATION_CHANGE_PASSWORD,
                    payload: ''
                })
                dispatch({
                    type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
                    payload: ''
                })
            })
            .catch((err) => {
                console.log(err.toString());
            })
        } else {
            console.log('dwqfewghusdiofngmfkjsvrhjnewgug mkyikug,ilt,lktlu8p');
        }
        
    }
};