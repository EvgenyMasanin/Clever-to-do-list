import { CALENDAR_CHANGE_CURRENT_DATE } from "./actions";

const defaultState = {
    currentDate: `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`
}

export const calendarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CALENDAR_CHANGE_CURRENT_DATE:
            return {
                ...state,
                currentDate: action.payload,
            };
        default:
            return state;
    }
}