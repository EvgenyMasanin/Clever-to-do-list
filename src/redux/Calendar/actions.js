export const CALENDAR_CHANGE_CURRENT_DATE = 'CALENDAR_CHANGE_CURRENT_DATE'

export const setCurrentDate = currentDate => ({
    type: CALENDAR_CHANGE_CURRENT_DATE,
    payload: currentDate
})