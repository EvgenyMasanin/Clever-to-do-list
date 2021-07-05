import { Checkbox } from '@material-ui/core'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TaskItem = props => {
    const handleClickOpen = () => {
        props.handleClickOpen(props.task)
    }

    return (
        <div style={{ margin: '10px 25px' }}>
            <FormControlLabel
                control={
                    <Checkbox name="taskStatus" />
                }
                label={props.task.title}
                checked={props.task.status}
                onClick={handleClickOpen}
            />
        </div>
    )
}

export default TaskItem
