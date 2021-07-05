import { SplideSlide } from '@splidejs/react-splide'
import React, { useState, useEffect } from 'react'
import CalendarItem from './CalendarItem'
import { useDispatch } from 'react-redux'
import { setCurrentDate } from '../../../../redux/Calendar/actions'

const CalendarItemContainer = props => {
    const dispatch = useDispatch();

    const [cardState, setCardState] = useState(null)

    const changeDate = (date) => {
        dispatch(setCurrentDate(date))
    }

    const setActive = card => {
        if(cardState !== null && card !== cardState)
            cardState.current.style.border = ''
        setCardState(card)
    }

    useEffect(() => {
        if (cardState !== null)
        cardState.current.style.border = '2px solid orange'
    }, [cardState])

    return (
        <>
            {props.days.map(day => (
                <SplideSlide key={day.id}>
                    <CalendarItem
                        day={day.day}
                        date={day.date}
                        fullDate={day.fullDate}
                        changeDate={changeDate}
                        setActive={setActive}
                    />
                </SplideSlide>
            ))}
        </>
    )
}

export default CalendarItemContainer
