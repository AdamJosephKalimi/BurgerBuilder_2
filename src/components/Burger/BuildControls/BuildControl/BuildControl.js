import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}>Less</button>

        <button
        className={classes.More}
        onClick={props.added}>More</button>
    </div>
);

export default buildControl

// the .added property is coming from the BuildControls
// where it is used to trigger the addIngredientHandler
