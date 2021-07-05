import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Dialog, DialogContent, DialogActions, Button, Slide, Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorForm = props => {
    return (
        <Dialog
            open={props.error.isError}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <Typography>
                        {props.error.errorText}
                    </Typography>
                </Alert>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorForm
