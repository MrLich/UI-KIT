import React from 'react';

export default (props) => <iframe src={props.source.uri || props.source} style={props.style} height={props.height} width={props.width}></iframe>