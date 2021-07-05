import React from 'react';
import Login from './Login';
import ErrorFormContainer from '../ErrorForm/ErrorFormContainer';
import { setEmail, setPassword, setUser } from '../../redux/Auth/actions'
import { connect } from 'react-redux';

const LoginContainer = props => {

    return (
        <>
            <Login
                email={props.email}
                password={props.password}
                setEmail={props.setEmail}
                setPassword={props.setPassword}
                setUser={props.setUser}
            />

            {props.error.isError && <ErrorFormContainer />}
        </>
    )
}

const mapStateToProvider = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setUser,
}

export default connect(mapStateToProvider, mapDispatchToProps)(LoginContainer);