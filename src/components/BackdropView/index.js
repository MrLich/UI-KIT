import React from 'react';

export default props =>
    <div className="backdrop-screen" onClick={props.onPress}>
        {props.children}
    </div>