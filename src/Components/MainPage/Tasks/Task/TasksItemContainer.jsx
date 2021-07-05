import React from 'react'
import TaskItem from './TasksItem'

const TasksItemContainer = ({ task, handleClickOpen = () => { } }) => {
    return (
        <TaskItem task={task} handleClickOpen={handleClickOpen} />
    )
}

export default TasksItemContainer
