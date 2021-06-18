import { combineReducers }from 'redux';
import { authReducer } from './Auth/reducers'
import { registretionReducer } from './Registration/reducers'
import { taskReducer } from './TasksData/reducsers';
import { calendarReducer } from './Calendar/reducers';

export default combineReducers({
    auth: authReducer,
    registration: registretionReducer,
    taskData: taskReducer,
    calendar: calendarReducer
})