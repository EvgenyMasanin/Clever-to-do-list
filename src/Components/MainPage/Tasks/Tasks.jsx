import React, { useEffect } from 'react'
import { Checkbox } from '@material-ui/core'
import TasksItemContainer from './Task/TasksItemContainer'
import { useSelector } from 'react-redux'

const Tasks = props => {

    
    // useEffect(() => {
    //     console.log(tasks);
    // }, [tasks])

    return (
        <div style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden', marginRight:10}}>
            {props.tasks.map((task) => (
                <TasksItemContainer key={task.id} task={task} handleClickOpen={props.handleClickOpen}/>
            ))}
        </div>
    )
}

export default Tasks
