import React from 'react';

export default (props) => <div className='touchable-opacity' onClick={props.onPress} style={props.style}>
        {props.children}
    </div>