import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#2f3642',
        marginBottom: 5,
        marginTop: 5
    }
});

export default (props) =>
    <Text style={ styles.text } {...props}>
        {props.children}
    </Text>;