import React from 'react';
import Modal from './Modal';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default (props) => <Modal
    isOpen={props.visible}
    onOpened={props.onShow}
    onClosed={props.onRequestClose}
    style={props.style}>
        <View style={styles.container}>
            <Text>UI KIT MODAL</Text>
        </View>
    </Modal>;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    txtUIKit: {
        color: 'blue',
        fontSize: 16,
        lineHeight: 19
    }
})