import React from 'react'
import { Redirect } from 'react-router';
import Header from './Header/Header';
import CalendarContainer from './Calendar/CalendarContainer';
import TasksContainer from './Tasks/TasksContainer';
import Footer from './Footer/Footer';
import { Grid } from '@material-ui/core';

const MainPage = props => {

    return (
        props.isSignedIn ?
            (
                <Grid
                    style={{
                        width: 762,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        // position: 'relative'
                        minHeight: 550
                    }}
                    container
                // direction='column'
                >
                    <Grid item xs={12}>
                        <Header signOut={props.signOut} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarContainer />
                    </Grid>
                    <Grid item xs={12}>
                        <TasksContainer />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>

            ) : (
                <Redirect to="/signIn" />
            )
    )
}

export default MainPage