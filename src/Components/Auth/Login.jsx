import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';

const Login = props => {

    const onChangeEmail = (event) => {
        props.setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        props.setPassword(event.target.value)
    }

    return (
        // style = {{ display: 'flex', justifyContent: 'center' }
        <form className='entryForm'>
            {/* <div style={{}}> */}
            <Grid container direction="column" spacing={1} alignItems="center">
                <Grid item>
                    <TextField
                        value={props.email}
                        onChange={onChangeEmail}
                        type="text"
                        label="Enter email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        value={props.password}
                        onChange={onChangePassword}
                        type="password"
                        label="Enter password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item>
                    <NavLink
                        to="/signUp"
                        style={{ textDecoration: 'none', marginRight: '10px' }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Sign up
                        </Button>
                    </NavLink>

                    <Button
                        variant="contained"
                        color="primary"
                        // onClick={() => props.authenticate(props.email, props.password)}>
                        onClick={() => props.setUser(props.email, props.password)}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default Login;