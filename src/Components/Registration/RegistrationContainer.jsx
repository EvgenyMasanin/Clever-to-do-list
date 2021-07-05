import React from 'react'
import Regisration from './Registration';
import { setEmail, setPassword, setRepeatPassword, setUser, setIsCorrect } from '../../redux/Registration/actions'
import { connect } from 'react-redux';
import ErrorFormContainer from '../ErrorForm/ErrorFormContainer';

const RegistrationContainer = props => {

    const onChangeEmail = (event) => {
        props.setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        props.setPassword(event.target.value)
        props.setIsCorrect(event.target.value, props.repeatPassword)
    }

    const onChangeRepeatPassword = (event) => {
        props.setRepeatPassword(event.target.value)
        props.setIsCorrect(props.password, event.target.value)
    }

    return (
        <>
            <Regisration
                email={props.email}
                password={props.password}
                repeatPassword={props.repeatPassword }
                isCorrect={props.isCorrect}
                helperText={props.helperText}
                setIsCorrect={props.setIsCorrect}
                setUser={props.setUser}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onChangeRepeatPassword={onChangeRepeatPassword}
            />
            {props.error.isError && <ErrorFormContainer />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
        user: state.registration.user,
        isCorrect: state.registration.isCorrect,
        helperText: state.registration.helperText,
        error: state.auth.error
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setRepeatPassword,
    setUser,
    setIsCorrect,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
