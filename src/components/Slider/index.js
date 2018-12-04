import React from 'react';
import ReactSlider from 'react-slider';

export default (props) => <ReactSlider className='slider' {...props}
    value={props.value}
    step={props.step}
    max={props.maximumValue}
    min={props.minimumValue}
    onChange={props.onValueChange}
    onAfterChange ={props.onSlidingComplete}/>