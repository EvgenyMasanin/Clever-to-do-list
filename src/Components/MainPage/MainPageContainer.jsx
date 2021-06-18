import React, { useEffect } from 'react'
import { setUser, setIsSignedIn } from '../../redux/Auth/actions'
import { setIsSignedIn as setIsSignedInReg } from '../../redux/Registration/actions'
import { connect, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth'
import MainPage from "./MainPage";
import { Redirect } from 'react-router';
import { getTask } from '../../redux/TasksData/actions';
import { setCurrentDate } from '../../redux/Calendar/actions';

const MainPageContainer = props => {

    const date = useSelector(state => state.calendar.currentDate)

    useEffect(() => {
        // props.setCurrentDate(date)
        // console.log(date);
        props.getTask(date)
    }, [date])

    const signOut = () => {
        firebase.auth().signOut()
        props.setIsSignedInReg(false)
        console.log();
    }

    //FIXME:
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.setIsSignedIn(true)
            }
            else {
                props.setIsSignedIn(false)
            }
        })
    }, [])

    const [, loading] = useAuthState(firebase.auth())

    if (loading) {
        return <div>Loading</div>
    }
    return (
        props.isSignedIn ? (
            <MainPage
                user={props.user}
                isSignedIn={props.isSignedIn}
                setUser={props.setUser}
                setIsSignedIn={props.setIsSignedIn}
                signOut={signOut}
            />
        ) : (
            <Redirect to="/SignIn" />
        )
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isSignedIn: state.auth.isSignedIn,
        tasks: state.taskData.tasks,
        date: state.calendar.currentDate
    }
}

const mapDispatchToProps = {
    setUser,
    setIsSignedIn,
    setIsSignedInReg,
    getTask,
    setCurrentDate
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);