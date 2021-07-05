import { firebaseApp } from '../../base';

export const TASK_DATA_CREATE = 'TASK_DATA_SET';
export const TASK_DATA_READ = 'TASK_DATA_READ';
export const TASK_DATA_UPDATE = 'TASK_DATA_UPDATE';
export const TASK_DATA_DELETE = 'TASK_DATA_DELETE';

export const TASK_DATA_CHANGE_TITLE = 'TASK_DATA_CHANGE_TITLE';
export const TASK_DATA_CHANGE_DESCRIPTION = 'TASK_DATA_CHANGE_DESCRIPTION';
export const TASK_DATA_CHANGE_STATUS = 'TASK_DATA_CHANGE_STATUS';
export const TASK_DATA_CLEAR_FIELDS = 'TASK_DATA_CLEAR_FIELDS'

export const TASK_DATA_CHANGE_DATE = 'TASK_DATA_CHANGE_DATE';

export const setTitle = (title) => ({
    type: TASK_DATA_CHANGE_TITLE,
    payload: title
})

export const setDescription = (description) => ({
    type: TASK_DATA_CHANGE_DESCRIPTION,
    payload: description
})

export const setDate = (date) => ({
    type: TASK_DATA_CHANGE_DATE,
    payload: date
})

export const setStatus = (status) => ({
    type: TASK_DATA_CHANGE_STATUS,
    payload: status
})

export const clearFields = () => ({
    type: TASK_DATA_CLEAR_FIELDS
})

export const setTask = (user, title, description, date) => {
    const userName = user.email.split('.')[0]
    return dispatch => {

        const task = {
            title,
            description,
            status: false
        }
        const tasks = firebaseApp.database().ref(`${userName}/${date}/Tasks`)
        tasks.push(task)
            .then(() => {
                return tasks.once('value')
            })
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const getTask = (user, date) => {
    const userName = user.email.split('.')[0]
    return dispatch => {
        const tasks = firebaseApp.database().ref(`${userName}/${date}/Tasks`)
        tasks.once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const updateTask = (user, date, id, title, description, status) => {
    const userName = user.email.split('.')[0]
    return dispatch => {

        const updatedTask = {
            title: title,
            description: description,
            status: status
        }
        const tasks = firebaseApp.database().ref(`${userName}/${date}/Tasks/${id}`)
        tasks.update(updatedTask)
            .then(() => {
                return firebaseApp.database().ref(`${userName}/${date}/Tasks`).once('value')
            })
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const deleteTask = (user, date, id) => {
    const userName = user.email.split('.')[0]
    return dispatch => {

        const tasks = firebaseApp.database().ref(`${userName}/${date}/Tasks/${id}`)
        tasks.remove()
            .then(() => {
                return firebaseApp.database().ref(`${userName}/${date}/Tasks`).once('value')
            })
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                const tasks = []
                for (const id in task) {
                    if (Object.hasOwnProperty.call(task, id)) {
                        tasks.push({
                            id,
                            title: task[id].title,
                            description: task[id].description,
                            status: task[id].status
                        })
                    }
                }
                dispatch({
                    type: TASK_DATA_CREATE,
                    payload: tasks
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

