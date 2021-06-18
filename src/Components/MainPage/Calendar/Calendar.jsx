import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import CalendarItemContainer from './CalendrItem/CalendarItemContainer';

const Calendar = props => {
    return (
        <Splide
            options={{
                type: 'slide',
                rewind: true,
                height: '120px',
                trimSpace: true,
                autoWidth: true,
                pagination: false,
                arrows: false,
                gap: '20px',
                keyboard: false

            }}>
            <CalendarItemContainer days={props.days}/>
        </Splide>
    )
}

export default Calendar
