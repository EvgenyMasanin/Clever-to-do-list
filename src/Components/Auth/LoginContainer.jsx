import React from 'react';
import Login from './Login';
import { setEmail, setPassword, setUser } from '../../redux/Auth/actions'
import { connect } from 'react-redux';

class LoginContainer extends React.Component {

    render() {
        return (
            <Login
                email={this.props.email}
                password={this.props.password}
                setEmail={this.props.setEmail}
                setPassword={this.props.setPassword}
                setUser={this.props.setUser}
                authenticate={this.props.authenticate}
            />
        )
    }
}
// засовывает пропсы в LoginContainer
const mapStateToProvider = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setUser,
}

export default connect(mapStateToProvider, mapDispatchToProps)(LoginContainer);