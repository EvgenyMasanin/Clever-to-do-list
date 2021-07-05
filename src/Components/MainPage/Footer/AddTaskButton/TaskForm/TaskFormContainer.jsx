import React from 'react'
import { connect, useSelector } from 'react-redux'
import { setTask, setTitle, setDescription, clearFields } from '../../../../../redux/TasksData/actions'
import TaskForm from './TaskForm'

const TaskFormContainer = props => {
    const {date, user} = useSelector(state => ({
        date: state.calendar.currentDate,
        user: state.userData.user
    }))

    const handleCreateTask = (title, description) => {
        props.setTask(user, title, description, date)
    }
    
    const handleClose = () => {
        props.clearFields()
        props.handleClose()
    }

    return (
        <TaskForm
            handleClose={handleClose}
            handleCreateTask={handleCreateTask}
            handleEditTask={props.handleEditTask}
            setTitle={props.setTitle}
            setDescription={props.setDescription}
            clearFields={props.clearFields}
            title={props.title}
            description={props.description}
            open={props.open}
            textContent={props.textContent}
        />
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.taskData.tasks,
        title: state.taskData.title,
        description: state.taskData.description,
    }
}

const mapDispatchToProps = {
    setTask,
    setTitle,
    setDescription,
    clearFields
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
