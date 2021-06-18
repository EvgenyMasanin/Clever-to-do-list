import React from 'react';
import RegistrationContainer from './RegistrationContainer';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const SignUp = (props) => {
    return (
        props.isSignedIn ? (
            <Redirect to="/" />
        ) : (
            <RegistrationContainer />
        )
    )
}

const mapStateToProvider = state => {
    return {
        user: state.registration.user,
        isSignedIn: state.registration.isSignedIn,
    }
}

export default connect(mapStateToProvider)(SignUp);

// export default SignIn;