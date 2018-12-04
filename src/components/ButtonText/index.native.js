import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ButtonText extends React.Component {
    constructor(props) {
        super(props);
    }
    getBackgroundColor() {
        switch(this.props.type) {
            case 'primary': 
                return '#4AADCC';
            case 'secondary':
                return '#29323B';
            case 'danger':
                return '#EB5858';
            case 'warning': 
                return '#EDBF3A';
            case 'disabled': 
                return '#29323B';
            default: 
                return '#4AADCC'
        }
    }
    render() {
        const props = this.props;
        const buttonContainer = {
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: props.type == 'disabled' ? 0.5 : 1,
            backgroundColor: this.getBackgroundColor(),
            width: props.width || 150,
            height: props.height || 50,
            padding: 5
        };
        return <TouchableOpacity style={{ ...buttonContainer, ...props.style }} onPress={props.onPress}>
            <Text style={[styles.title, props.titleStyle]} >{props.text || 'Button'}</Text>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        borderRadius: 25,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 19
    }
})