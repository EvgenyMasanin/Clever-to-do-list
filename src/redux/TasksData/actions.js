import { firebaseApp } from '../../base';

export const TASK_DATA_CREATE = 'TASK_DATA_SET';
export const TASK_DATA_READ = 'TASK_DATA_READ';
export const TASK_DATA_UPDATE = 'TASK_DATA_UPDATE';
export const TASK_DATA_DELETE = 'TASK_DATA_DELETE';

export const TASK_DATA_CHANGE_TITLE = 'TASK_DATA_CHANGE_TITLE';
export const TASK_DATA_CHANGE_DESCRIPTION = 'TASK_DATA_CHANGE_DESCRIPTION';

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

export const setTask = (title, description, date) => {
    return dispatch => {

        const task = {
            title,
            description,
            status: false
        }
        const tasks = firebaseApp.database().ref(`${date}/Tasks`)
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

export const getTask = (date) => {
    console.log('gettingTask ' + date);
    return dispatch => {
        const tasks = firebaseApp.database().ref(`${date}/Tasks`)
        tasks.once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
            .then((task) => {
                console.log('.then ' + task);
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

// export const getTask = (date, id) => {
//     console.log('gettingTask ' + date);
//     return dispatch => {
//         const tasks = firebaseApp.database().ref(`${date}/Tasks/${id}`)
//         tasks.once('value')
//             .then((snapshot) => {
//                 return snapshot.val();
//             })
//             .then((task) => {
//                 console.log('.then ' + task);
//                 const tasks = []
//                 for (const id in task) {
//                     if (Object.hasOwnProperty.call(task, id)) {
//                         tasks.push({
//                             id,
//                             title: task[id].title,
//                             description: task[id].description,
//                             status: task[id].status
//                         })
//                     }
//                 }
//                 dispatch({
//                     type: TASK_DATA_CREATE,
//                     payload: tasks
//                 })
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// };
// export const name = (arguments) => {
//     return 
// }

