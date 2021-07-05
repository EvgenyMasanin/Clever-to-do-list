import { Button } from '@material-ui/core'
import React from 'react'
import TaskFormContainer from './TaskForm/TaskFormContainer'
import AddIcon from '@material-ui/icons/Add';

const AddTaskButton = props => {

    const textContent = {
        title: 'Add task',
        buttonText: 'Add'
    }

    return (
        <>
            <Button
            fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                // style={{ width: 400 }}
                onClick={props.handleClickOpen}
            >
                Add task
            </Button>
            <TaskFormContainer
                open={props.open}
                handleClose={props.handleClose}
                handleCreateTask={props.handleCreateTask}
                textContent={textContent}
            />
        </>
    )
}

export default AddTaskButton
