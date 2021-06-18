import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "./calendarItem.module.css";

const useStyles = makeStyles({
    root: {
        width: 85,
        marginTop: '10px',
        marginLeft: '5px',
        marginRight: '5px',
        height: '100px',
        borderRadius: 25,
        textAlign: 'center',
        border: '2px solid orange'
    },
    today: {
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid black'
    },
    title: {
        // fontSize: 14,
    },
});

const CalendarItem = props => {
    const classes = useStyles();

    const handleClick = () => {
        console.log('handleClick');
        props.changeDate(props.fullDate)
    }

    let modificator = {};
    if (new Date().getDate() === props.date)
        modificator = classes.today

    return (
        <Card
            className={`${classes.root} ${modificator} ${styles.rootHover}`}
            onClick={handleClick}
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
