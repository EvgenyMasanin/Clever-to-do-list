import React from 'react'
import { Grid } from '@material-ui/core'
import AddTaskButtonContainer from './AddTaskButton/AddTaskButtonContainer'
const Footer = () => {

    return (
        <footer style={{
            padding: 10,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid container>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AddTaskButtonContainer />
                </Grid>
                <Grid item xs={3} />
            </Grid>

        </footer>
    )
}

export default Footer
