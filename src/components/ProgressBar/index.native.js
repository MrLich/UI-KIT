import React from 'react';
import ProgressBar from './ProgressBar';

export default props => <ProgressBar
    progress={props.progress}
    height={24}
    color='#4aadcd'
    borderColor='#4aadcd'
    unfilledColor='transparent'
    borderRadius={12}
    {...props}/>