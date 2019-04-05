import React from 'react';
import classes from './ContentUpper.css';

const contentUpper = ( props ) => (
    <div className={classes.ContentUpper}>
        <p>About {props.count} results ({(props.count / 1000)} seconds) </p>
    </div>
);

export default contentUpper;