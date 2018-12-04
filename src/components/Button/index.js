import React from 'react';

export default props =>  
    <button className={'button btn btn-' + (props.type || 'default')} onClick={props.onPress} style={props.style}>
        {props.text}
    </button>;