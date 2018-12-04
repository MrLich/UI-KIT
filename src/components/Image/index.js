import React from 'react';

export default (props) => <div className='image' style={{ ...props.style, ...{ display: 'flex', justifyContent: 'center'}}}>
    <img src={props.source.uri || props.source} height={props.height} width={props.width} style={{ alignSelf: 'center'}}/>
</div>