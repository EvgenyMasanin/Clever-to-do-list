import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const Registration = props => {
    const [isError, setIsError] = useState(false)

    return (
        <>
            <h1 style={{ position: 'absolute', top: '20%' }}>Registration</h1>
            <Grid container spacing={1} className='entryForm' component='form'>
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Grid item xs={12} container spacing={0} alignItems="flex-end">
                        <Grid item xs={2}>
                            <PersonIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                value={props.email}
                                onChange={props.onChangeEmail}
                                type="text"
                                label="Enter email"
                                autoComplete="off"
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
                                error={isError}
                                helperText={isError ? 'Incorrect repeat password' : ''}
                                value={props.password}
                                onChange={props.onChangePassword}
                                type="password"
                                label="Enter password"
                                autoComplete="new-password"
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
                                error={isError}
                                helperText={isError ? 'Incorrect repeat password' : ''}
                                value={props.repeatPassword}
                                onChange={props.onChangeRepeatPassword}
                                type="password"
                                label="Repeat password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={5} />
                <Grid item xs={5} />

                <Grid item xs={1}>

                    <NavLink
                        to="/signIn"
                        style={{ textDecoration: 'none', marginRight: '10px' }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign in
                        </Button>

                    </NavLink>

                </Grid>
                <Grid item xs={1}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            if (props.isCorrect) {
                                props.setUser(props.email, props.password, props.repeatPassword)
                                setIsError(false)
                            }
                            else {
                                setIsError(true)
                            }
                        }}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Registration

