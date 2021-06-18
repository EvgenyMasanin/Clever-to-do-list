import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TaskDescriptonFormContainer from './Task/TaskDescriptionForm/TaskDescriptonFormContainer';
import Tasks from './Tasks';

const TasksContainer = () => {
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = useState('')

    const handleClickOpen = (task) => {
        setTask(task)
        console.log(task);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const tasks = useSelector(state => state.taskData.tasks);

    return (
        <>
            <Tasks
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                tasks={tasks}
            />
            <TaskDescriptonFormContainer
                open={open}
                handleClose={handleClose}
                task={task}
                // handleCreateTask={handleCreateTask}
            />
        </>
    )
}

export default TasksContainer
