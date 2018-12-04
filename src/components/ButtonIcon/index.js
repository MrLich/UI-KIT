import React from 'react';

export default props =>  
    <button type={'button'} className={'button btn btn-' + (props.type || 'primary') + ' btn-circle' } onClick={props.onPress} style={props.style}>
           <i className={'fa fa-' + props.iconName}></i>
    </button>;