import React from 'react';

export default props =>
    <div className='row' style={props.style}>
        {props.children}
    </div>