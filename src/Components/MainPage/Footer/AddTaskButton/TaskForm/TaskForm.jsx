import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TaskForm = props => {

    const handleTitle = (event) => {
        props.setTitle(event.target.value)
    }

    const handleDescription = (event) => {
        props.setDescription(event.target.value)
    }

    const handleCreateTask = () => {
        props.handleCreateTask(props.title, props.description)
        props.handleClose()
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Task title
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Title of task"
                    type="text"
                    fullWidth
                    value={props.title}
                    onChange={handleTitle}
                />
                <DialogContentText>
                    Task text
                </DialogContentText>
                <TextareaAutosize
                    aria-label="empty textarea"
                    style={{
                        resize: 'none', width: '400px', height: '100px',
                        fontSize: '17px', fontFamily: 'Roboto'
                    }}
                    value={props.description}
                    onChange={handleDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleCreateTask} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default TaskForm
