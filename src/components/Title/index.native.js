import React from 'react';
import { Text } from 'react-native';

export default (props) =>
    <Text style={{ ...{ fontSize: 24, textAlign: 'center', color: '#2f3642', fontWeight: 'bold', marginBottom: 20, marginTop: 10 }, ...props.style }}>
        {props.children}
    </Text>;