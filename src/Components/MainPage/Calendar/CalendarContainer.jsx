import React from 'react'
import Calendar from './Calendar'

function generateCalendar() {
    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    const now = new Date();
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let days = []
    let counOfDays = daysInMonth(now.getMonth(), now.getFullYear());
    for (let i = now.getDate(); i <= counOfDays; i++) {
        days.push({
            id: `${now.getDate()}${now.getMonth()}${now.getFullYear()}`,
            day: weekDays[now.getDay()],
            date: now.getDate(),
            fullDate: `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`
        })
        now.setDate(now.getDate() + 1);
    }

    return days
}

const CalendarContainer = () => {
    return (
        <Calendar days={generateCalendar()} />
    )
}

export default CalendarContainer
