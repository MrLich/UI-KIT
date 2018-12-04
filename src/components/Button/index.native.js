import React from 'react';
import { View, Button as ReactButton } from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        const buttonContainer = {
            borderRadius: 30,
            backgroundColor: props.type === 'danger' ? '#dc3545' : '#4aadcd',
            width: props.width || 150,
            padding: 5
        };
        return <View style={{ ...buttonContainer, ...props.style }}>
            <ReactButton title={props.text} onPress={props.onPress} color='#FFFFFF'></ReactButton>
        </View>;
    }
}