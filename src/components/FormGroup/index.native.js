import React from 'react';
import { View } from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default props =>
    <View style={styles.container}>
        {props.children}
    </View>;