import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { useAuthState, } from 'react-firebase-hooks/auth'
import { } from 'react-firebase-hooks/database'
import MainPage from "./MainPage";
import { Redirect } from 'react-router';
import { getTask } from '../../redux/TasksData/actions';
import { setAuthorized } from '../../redux/UserData/actions';
import { CircularProgress } from '@material-ui/core';

const MainPageContainer = () => {
    const { date, user, authorized } = useSelector(state => ({
        date: state.calendar.currentDate,
        user: state.userData.user,
        authorized: state.userData.authorized,
    }))

    const dispatch = useDispatch()

    // const dispatch = useCallback(
    //     useDispatch(),
    //     []
    // )

    const signOut = () => {
        firebase.auth().signOut()
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(123);
                dispatch(setAuthorized(user, true))
            }
            else {
                dispatch(setAuthorized({}, false))
            }
        })
    }, [dispatch])

    useEffect(() => {
        if (authorized) {
            dispatch(getTask(user, date))
        }
    }, [authorized, date, user, dispatch])

    const [, loading] = useAuthState(firebase.auth())

    if (loading) {
        return <CircularProgress style={{ alignSelf: 'center' }} />
    }
    return (
        authorized ? (
            <MainPage
                signOut={signOut}
            />
        ) : (
            <Redirect to="/SignIn" />
        )
    )
}

export default MainPageContainer;