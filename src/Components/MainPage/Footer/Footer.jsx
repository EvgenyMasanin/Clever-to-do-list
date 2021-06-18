import React from 'react'
import AddTaskButtonContainer from './AddTaskButton/AddTaskButtonContainer'

const Footer = () => {
    return (
        <footer style={{
            // position: 'absolute', 
            // bottom: 0,
            // right: 0,
            // left: 0, 
            padding: 10, 
            // paddingBottom: 30,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <AddTaskButtonContainer />
        </footer>
    )
}

export default Footer
