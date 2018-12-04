import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        flex: 1,
        color: '#2f3642'
    }
});

export default (props) => <View style={styles.container}>
    <Text numberOfLines={props.numberOfLines || 1} style={styles.text}>{props.children}</Text><Switch style={{flex: 0.2}} {...props} onTintColor={props.onTintColor || '#4aadcd'}></Switch>
</View>;