import { Button } from '@material-ui/core'
import React from 'react'
import TaskFormContainer from './TaskForm/TaskFormContainer'

const AddTaskButton = props => {
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                style={{ width: 400 }}
                onClick={props.handleClickOpen}
            >
                +Add task
            </Button>
            <TaskFormContainer open={props.open} handleClose={props.handleClose} handleCreateTask={props.handleCreateTask} />
            
        </>
    )
}

export default AddTaskButton
