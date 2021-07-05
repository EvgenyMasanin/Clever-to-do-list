import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../../redux/Auth/actions'
import ErrorForm from './ErrorForm'

const ErrorFormContainer = () => {
    const error = useSelector(state => state.auth.error)
    const dispatch = useDispatch(setError)
    const handleClose = () => {
        dispatch(setError(false, ''))
    };

    return (
        <ErrorForm
            error={error}
            handleClose={handleClose}
        />
    )
}

export default ErrorFormContainer
