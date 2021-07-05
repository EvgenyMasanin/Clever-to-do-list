import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    setTitle,
    setDescription,
    setStatus,
    updateTask,
    deleteTask
} from '../../../../redux/TasksData/actions'
import TaskDescriptionForm from './TaskDescriptoinForm'

const TaskDescriptionFormContainer = props => {
    const { date, title, description, status, user } = useSelector(state => ({
        date: state.calendar.currentDate,
        title: state.taskData.title,
        description: state.taskData.description,
        status: state.taskData.status,
        user: state.userData.user,
    }))

    const [openEdit, setOpenEdit] = React.useState(false);

    const dispatch = useDispatch()

    const handleCreateTask = (title, description) => {
        props.setTask(user, title, description, date)
    }

    const handleClickOpenEdit = () => {
        dispatch(setTitle(props.task.title))
        dispatch(setDescription(props.task.description))
        dispatch(setStatus(props.task.status))
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const handleEditTask = taskId => {
        dispatch(updateTask(user, date, taskId, title, description, status))
    }

    const handleDeleteTask = taskId => {
        dispatch(deleteTask(user, date, taskId))
    }

    const handleCompliteTask = ({ id, title, description, status }) => {
        dispatch(updateTask(user, date, id, title, description, status ? false : true))
    }

    return (
        <TaskDescriptionForm
            handleClose={props.handleClose}
            open={props.open}
            task={props.task}
            openEdit={openEdit}
            handleCreateTask={handleCreateTask}
            handleClickOpenEdit={handleClickOpenEdit}
            handleCloseEdit={handleCloseEdit}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleCompliteTask={handleCompliteTask}
        />
    )
}

export default TaskDescriptionFormContainer;