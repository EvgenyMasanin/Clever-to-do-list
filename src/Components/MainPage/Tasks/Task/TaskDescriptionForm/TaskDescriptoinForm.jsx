import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TasksItemContainer from '../TasksItemContainer';
import TaskFormContainer from '../../../Footer/AddTaskButton/TaskForm/TaskFormContainer';

const TaskDescriptionForm = props => {
    console.log(props.task);
    const handleEditTask = () => {
        props.handleClickOpenEdit()
        // props.handleClose()
    }

    return (
        <Dialog
            fullWidth
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Today's task</DialogTitle>
            <DialogContent>
                {/* <DialogContentText > */}
                    <TasksItemContainer task={props.task}/>
                    {/* {props.task?.title} */}
                {/* </DialogContentText> */}
                <DialogContentText>
                    Task Description:
                </DialogContentText>
                <DialogContentText style={{ height: 400 }}>
                    {props.task?.description}
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleEditTask} color="primary">
                    Edit
                </Button>
                <TaskFormContainer open={props.openEdit} handleClose={props.handleCloseEdit} />
            </DialogActions>
        </Dialog>
    )
}

export default TaskDescriptionForm
