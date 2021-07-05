import React from 'react'
import TasksItemContainer from './Task/TasksItemContainer'

const Tasks = props => {
    console.log('RENDER');
    return (
        <div style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden', marginRight: 10 }}>
            {props.tasks.length !== 0 ?
                (props.tasks.map((task) => (
                    <TasksItemContainer key={task.id} task={task} handleClickOpen={props.handleClickOpen} />
                ))) :
                <h3 style={{ marginLeft: 25 }}>There are no tasks today.</h3>}
        </div>
    )
}

export default Tasks
