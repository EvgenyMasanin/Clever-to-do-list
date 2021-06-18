import { Checkbox } from '@material-ui/core'
import React from 'react'

const TaskItem = props => {
    const handleClickOpen = () => {
        props.handleClickOpen(props.task)
    }
    return (
        <div style={{ margin: 25 }}>
            <Checkbox /><span onClick={handleClickOpen}>{props.task.title}</span>
        </div>
    )
}

export default TaskItem
