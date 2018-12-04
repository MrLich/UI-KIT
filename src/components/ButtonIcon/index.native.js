import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default class ButtonIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        const buttonContainer = {
            backgroundColor: props.backgroundColor || '#4aadcd',
            width: props.width || 50,
            justifyContent: 'center',
            alignItems: 'center',
            height: props.height || 50,
            borderRadius: 25,
            padding: 5
        };
        return <TouchableOpacity style={{ ...buttonContainer, ...props.style }}>
            {!props.iconComponent ? 
                <Icon 
                    name={props.iconName} 
                    color={props.iconColor || '#FFFFFF'} 
                    type={props.iconType} 
                    size={props.iconSize} />
            : props.iconComponent}
        </TouchableOpacity>
    }
}