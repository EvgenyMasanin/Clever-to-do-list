
export const USER_DATA_SET_USER = 'USER_DATA_SET_USER'

export const setAuthorized = (user, authorized) => {
    return {
        type: USER_DATA_SET_USER,
        payload: {
            user,
            authorized
        }
    }
}