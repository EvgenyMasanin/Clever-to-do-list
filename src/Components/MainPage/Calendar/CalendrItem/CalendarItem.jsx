import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 85,
        marginTop: '10px',
        marginLeft: '5px',
        marginRight: '5px',
        height: '100px',
        borderRadius: 25,
        textAlign: 'center',
        boxSizing: 'border-box',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
        },
    },
    today: {
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid black'
    },
    active: {
        border: '2px solid orange',
    },
});

const CalendarItem = props => {
    const card = useRef(null)
    const classes = useStyles();
    // const [active, setActive] = useState('')
    const handleClick = () => {
        props.changeDate(props.fullDate)
        props.setActive(card)
    }
    // const handleLeaveCard = () =>{
    //     alert('dfegrhetjy')
    //     setActive('')
    // }

    let modificator = {};
    if (new Date().getDate() === props.date)
        modificator = classes.today



    return (
        <Card
            ref={card}
            className={`${classes.root} ${modificator}`}
            onClick={handleClick}
        // onBlur={handleLeaveCard}
        >
            <CardContent>
                <Typography variant='h5' className={classes.title} gutterBottom>
                    {props.day}
                </Typography>

                <Typography variant="h6">
                    {props.date}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CalendarItem
