import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const Login = props => {

    const onChangeEmail = (event) => {
        props.setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        props.setPassword(event.target.value)
    }

    return (
        <>
            <h1 style={{ position: 'absolute', top: '20%' }}>Authorization</h1>
            <Grid container spacing={1} className='entryForm' component='form'>
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Grid item xs={12} container spacing={0} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PersonIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                value={props.email}
                                onChange={onChangeEmail}
                                type="text"
                                label="Enter email"
                                autoComplete="email"
                            />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={5} />
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Grid item xs={12} container spacing={0} alignItems="flex-end">
                        <Grid item xs={2}>
                            <LockIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                value={props.password}
                                onChange={onChangePassword}
                                type="password"
                                label="Enter password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={5} />
                <Grid item xs={5} />

                <Grid item xs={1}>

                    <NavLink
                        to="/signUp"
                        style={{ textDecoration: 'none', marginRight: '10px' }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign up
                        </Button>

                    </NavLink>

                </Grid>
                <Grid item xs={1}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.setUser(props.email, props.password)
                        }}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;