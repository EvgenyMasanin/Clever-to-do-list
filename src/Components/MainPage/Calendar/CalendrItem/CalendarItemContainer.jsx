import { SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import CalendarItem from './CalendarItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTask } from '../../../../redux/TasksData/actions'
import { setCurrentDate } from '../../../../redux/Calendar/actions'

const CalendarItemContainer = props => {
    const dispatch = useDispatch();
    // const tasks = useSelector(state => state.taskData.tasks);
    // const showTasks = () => {
    //     // dispatch(getTask())
    // }
    const changeDate = (date) => {
        console.log(date);
        dispatch(setCurrentDate(date))
    }

    return (
        <>
            {props.days.map(day => (
                <SplideSlide key={day.id}>
                    <CalendarItem
                        day={day.day}
                        date={day.date}
                        fullDate={day.fullDate}
                        // showTasks={showTasks}
                        changeDate={changeDate}
                    />
                </SplideSlide>
            ))}
        </>
    )
}

export default CalendarItemContainer
