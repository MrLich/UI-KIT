import React from 'react';

export default props => <div className={`icon ${props.position || ''}`} onClick={props.onPress}><img height={props.size || 20} src={`icons/${props.name}.${props.type || 'png'}`} /></div>