import React from 'react';
import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const SignIn = (props) => {

    return (
        props.isSignedIn ? (
            <Redirect to="/" />
        ) : (
            <LoginContainer />
        )
    )
}

const mapStateToProvider = state => {
    return {
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProvider)(SignIn);

// export default SignIn;