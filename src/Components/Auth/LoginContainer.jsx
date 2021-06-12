import React from 'react';
import Login from './Login';
import { setEmail, setPassword } from '../../redux/Auth/actions'
import { connect } from 'react-redux';

class LoginContainer extends React.Component {

    render() {
        return (
            <Login
                email={this.props.email}
                password={this.props.password}
                setEmail={this.props.setEmail}
                setPassword={this.props.setPassword}
                authenticate={this.props.authenticate}
            />
        )
    }
}
// засовывает пропсы в LoginContainer
const mapStateToProvider = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword
}

export default connect(mapStateToProvider, mapDispatchToProps)(LoginContainer);