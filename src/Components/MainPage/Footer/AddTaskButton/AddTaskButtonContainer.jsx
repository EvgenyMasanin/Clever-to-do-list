import React from 'react'
import AddTaskButton from './AddTaskButton'

const AddTaskButtonContainer = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AddTaskButton
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
        />
    )
}

export default AddTaskButtonContainer
