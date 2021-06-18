import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Registration = props => {

    const onChangeEmail = (event) => {
        props.setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        props.setPassword(event.target.value)
    }

    const onChangeRepeatPassword = (event) => {
        props.setRepeatPassword(event.target.value)
    }

    useEffect(() => {
        if (props.isCorrect && props.password !== '' && props.repeatPassword !== '') {
            props.setUser(props.email, props.password, props.repeatPassword)
        }
    }, [props.isCorrect])

    return (
        <form className='entryForm'>
            <Grid container direction="column" spacing={1} alignItems="center">
                <Grid item>
                    <TextField
                        value={props.email}
                        onChange={onChangeEmail}
                        type="text"
                        label="Enter email"
                        autoComplete="off"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        value={props.password}
                        onChange={onChangePassword}
                        type="password"
                        label="Enter password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        error={!props.isCorrect}
                        helperText={props.helperText}
                        value={props.repeatPassword}
                        onChange={onChangeRepeatPassword}
                        type="password"
                        label="Repeat password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.setIsCorrect(props.password, props.repeatPassword)
                            if (props.isCorrect)
                                props.setUser(props.email, props.password, props.repeatPassword)
                        }}
                    >
                        Create an account
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Registration

