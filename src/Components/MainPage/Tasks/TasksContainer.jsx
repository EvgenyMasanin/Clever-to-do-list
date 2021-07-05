import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import TaskDescriptonFormContainer from './TaskDescriptionForm/TaskDescriptonFormContainer';
import { useList } from "react-firebase-hooks/database";
import { CircularProgress } from '@material-ui/core';
import { firebaseApp } from '../../../base';
import Tasks from './Tasks';

const TasksContainer = () => {
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({})
    const tasks = useSelector(state => state.taskData.tasks)
    const date = useSelector(state => state.calendar.date)
    const user = useSelector(state => state.userData.user)
    const userName = user.email.split('.')[0]

    const handleClickOpen = (task) => {
        setTask(task)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const currentTask = tasks.filter((tsk) => tsk.id === task?.id)
        setTask(currentTask[0])
    }, [tasks, task])
    
    var tutorialsRef = firebaseApp.database().ref(`${userName}/${date}/Tasks`);
    const [, loading] = useList(tutorialsRef);

    if (loading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress style={{ alignSelf: 'center'}} />
            </div>
        )
    }

    return (
        <>
            <Tasks
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                tasks={tasks}
            />
            {open && <TaskDescriptonFormContainer
                open={open}
                handleClose={handleClose}
                task={task}
            />}

        </>
    )
}

export default TasksContainer
