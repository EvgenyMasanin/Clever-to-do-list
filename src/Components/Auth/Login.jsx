import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChangeEmail(event) {
        this.props.setEmail(event.target.value)
    }

    onChangePassword(event) {
        this.props.setPassword(event.target.value)
    }

    render() {
        return (
            <div>
                <h2>Authorization</h2>
                <p>Enter login and password</p>
                <div>
                    <input type="text" placeholder='Email'
                        value={this.props.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div>
                    <input type="text" placeholder='Passord'
                        value={this.props.password}
                        onChange={this.onChangePassword} />
                </div>
                {/* () => this.props.authenticate() */}
                <button onClick={() => this.props.authenticate(this.props.email, this.props.password)}>Login</button>
                {/* <button onClick={this.onChangeEmail}>Login</button> */}
            </div>
        )
    }
}
Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;