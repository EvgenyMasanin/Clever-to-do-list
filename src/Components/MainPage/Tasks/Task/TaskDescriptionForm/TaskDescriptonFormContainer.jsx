import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setTask, setTitle, setDescription } from '../../../../../redux/TasksData/actions'
import TaskDescriptionForm from './TaskDescriptoinForm'

const TaskDescriptionFormContainer = props => {
    const date = useSelector(state => state.calendar.currentDate)
    const handleCreateTask = (title, description) => {
        console.log(date);
        props.setTask(title, description, date)
    }

    const [openEdit, setopenEdit] = React.useState(false);
    // const {title, description} = useSelector(state =>({
    //     title: state.taskData.title,
    //     description: state.taskData.description,
    // }))
    const dispatch = useDispatch()

    const handleClickOpenEdit = () => {
        dispatch(setTitle(props.task.title))
        dispatch(setDescription(props.task.description))
        setopenEdit(true);
    };

    const handleCloseEdit = () => {
        setopenEdit(false);
    };

    return (
        <TaskDescriptionForm
            handleClose={props.handleClose}
            handleCreateTask={handleCreateTask}
            setTitle={props.setTitle}
            setDescription={props.setDescription}
            title={props.title}
            description={props.description}
            open={props.open}
            task={props.task}
            openEdit={openEdit}
            handleClickOpenEdit={handleClickOpenEdit}
            handleCloseEdit={handleCloseEdit}

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

export default connect(mapStateToProps, mapDispatchToProps)(TaskDescriptionFormContainer);
