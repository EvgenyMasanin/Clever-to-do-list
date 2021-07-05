import React from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    withStyles,
    IconButton,
    Typography,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TasksItemContainer from '../Task/TasksItemContainer';
import TaskFormContainer from '../../Footer/AddTaskButton/TaskForm/TaskFormContainer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid } from '@material-ui/core';

const CompliteButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[300]),
        backgroundColor: green[300],
        '&:hover': {
            backgroundColor: green[500],
        },
    },
}))(Button);

const BlackIconButton = withStyles({
    root: {
        color: 'black',
     },
})(IconButton);

const TaskDescriptionForm = props => {

    const handleClickOpenEdit = () => {
        props.handleClickOpenEdit()
    }

    const handleEditTask = () => {
        props.handleEditTask(props.task.id)
    }

    const handleDelete = () => {
        props.handleDeleteTask(props.task.id)
        props.handleClose()
    }

    const handleComplite = () => {
        props.handleCompliteTask(props.task)
    }

    const textContent = {
        title: 'Edit task',
        buttonText: 'Edit'
    }

    return (
        <Dialog
            fullWidth
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                <BlackIconButton
                    aria-label="close"
                    onClick={props.handleClose}
                >
                    <ArrowBackIosIcon />
                </BlackIconButton>
                Today's task
            </DialogTitle>

            <DialogContent style={{ color: 'black' }}>

                <TasksItemContainer task={props.task} />

                <Typography gutterBottom>
                    Task Description:
                </Typography>

                <Typography style={{ height: 400, margin: '10px 25px' }} gutterBottom>
                    {props.task.description}
                </Typography>

            </DialogContent>

            <DialogActions>
                <Grid container>
                    <Grid item xs={2}>
                        <BlackIconButton
                            aria-label="delete"
                            onClick={handleDelete}
                        >
                            <DeleteIcon />
                        </BlackIconButton>

                        <BlackIconButton
                            aria-label="edit"
                            onClick={handleClickOpenEdit}
                        >
                            <EditIcon />
                        </BlackIconButton>
                    </Grid>
                    <Grid item xs={7} />
                    <Grid item xs={3}>
                        <CompliteButton
                        fullWidth
                            variant="contained"
                            startIcon={props.task.status ? <CheckIcon /> : ''}
                            onClick={handleComplite}
                        >
                            {props.task.status ? 'complited' : 'complite'}
                        </CompliteButton>
                    </Grid>
                </Grid>

                {props.openEdit && <TaskFormContainer
                    open={props.openEdit}
                    handleClose={props.handleCloseEdit}
                    handleEditTask={handleEditTask}
                    textContent={textContent}
                />}

            </DialogActions>
        </Dialog >
    )
}

export default TaskDescriptionForm
