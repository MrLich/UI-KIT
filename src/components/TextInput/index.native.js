import React from 'react';
import { TextInput } from 'react-native';

const defaultStyle = {
    borderRadius: 20,
    borderColor: '#b7c2c6',
    borderWidth: 0.5,
    padding: 10
};

export default props => <TextInput {...props} style={{...defaultStyle, ...props.style}}>{props.children}</TextInput>;
