import { USER_DATA_SET_USER } from "./actions";

const initialState = {
    user: {},
    authorized: false
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_SET_USER: {
            return {
                ...state,
                ...action.payload,

            }
        }
        default:
            return state
    }
}