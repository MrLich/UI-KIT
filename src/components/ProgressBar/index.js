import React from 'react';

export default (props) => <div className='progress' style={props.style}>
        <div className='progress-bar' role='progressbar' style={{ width: 100*props.progress + '%' }}>
            {props.children}
        </div>
    </div>