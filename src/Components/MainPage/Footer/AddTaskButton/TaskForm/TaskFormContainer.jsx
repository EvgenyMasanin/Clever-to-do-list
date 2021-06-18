import React from 'react'
import { connect, useSelector } from 'react-redux'
import { setTask, setTitle, setDescription } from '../../../../../redux/TasksData/actions'
import TaskForm from './TaskForm'

const TaskFormContainer = props => {
    const date = useSelector(state => state.calendar.currentDate)
    const handleCreateTask = (title, description) => {
        console.log(date);
        props.setTask(title, description, date)
    }

    return (
        <TaskForm
            handleClose={props.handleClose}
            handleCreateTask={handleCreateTask}
            setTitle={props.setTitle}
            setDescription={props.setDescription}
            title={props.title}
            description={props.description}
            open={props.open}
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
    setDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormContainer);
