export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';

export const setEmail = email => ({
    type: AUTH_CHANGE_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});