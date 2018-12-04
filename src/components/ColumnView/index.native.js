import React from 'react';
import { View } from 'react-native';

const defaultStyle = {
    backgroundColor: 'white',
    borderStyle: 'dotted',
    borderColor: '#b7c2c6',
    borderWidth: 1
};

export default props => <View {...props} style={{...defaultStyle, ...props.style}}>{props.children}</View>;