import {
    TASK_DATA_CREATE,
    TASK_DATA_CHANGE_DESCRIPTION,
    TASK_DATA_CHANGE_TITLE,
    TASK_DATA_CHANGE_DATE,
    TASK_DATA_CHANGE_STATUS,
    TASK_DATA_CLEAR_FIELDS
} from './actions'

const defaultState = {
    title: '',
    description: '',
    status: false,
    date: '',
    //FIXME:
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
                status: false
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
        case TASK_DATA_CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            }
        case TASK_DATA_CHANGE_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case TASK_DATA_CLEAR_FIELDS:
            return {
                ...state,
                title: '',
                description: '',
                status: false
            }
        default:
            return state;
    }
}