import React from 'react';
import LoginContainer from './LoginContainer';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
    return (
        props.authorized ? (
            <Redirect to="/" />
        ) : (
            <LoginContainer />
        )
    )
}

const mapStateToProvider = state => {
    return {
        user: state.auth.user,
        authorized: state.userData.authorized,
        state: state
    }
}

export default connect(mapStateToProvider)(SignIn);