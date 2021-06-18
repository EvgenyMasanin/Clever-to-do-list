import React from 'react'
import Regisration from './Registration';
import { setEmail, setPassword, setRepeatPassword, setUser, setIsCorrect } from '../../redux/Registration/actions'
import { connect } from 'react-redux';

const RegistrationContainer = props => {

    return (
        <div>
            <Regisration
                email={props.email}
                password={props.password}
                repeatPassword={props.repeatPassword }
                isCorrect={props.isCorrect}
                helperText={props.helperText}
                setIsCorrect={props.setIsCorrect}
                setEmail={props.setEmail}
                setPassword={props.setPassword}
                setRepeatPassword={props.setRepeatPassword}
                setUser={props.setUser}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
        user: state.registration.user,
        isCorrect: state.registration.isCorrect,
        helperText: state.registration.helperText
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setRepeatPassword,
    setUser,
    setIsCorrect
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
