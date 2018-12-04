import React from 'react';

export default (props) => 
    <h1 className="title" style={props.style}>
        {props.children}
    </h1>;