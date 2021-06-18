import {
    TASK_DATA_CREATE,
    TASK_DATA_CHANGE_DESCRIPTION,
    TASK_DATA_CHANGE_TITLE,
    TASK_DATA_CHANGE_DATE
} from './actions'

const defaultState = {
    title: '',
    description: '',
    tasks: []
}

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TASK_DATA_CREATE:
            return {
                ...state,
                tasks: action.payload,
                title: '',
                description: '',
            };
        case TASK_DATA_CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case TASK_DATA_CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };
        case TASK_DATA_CHANGE_DATE: {
            return {
                ...state,
                date: action.payload
            }
        }
        default:
            return state;
    }
}