import React from 'react';
import { Animated, Image, TouchableOpacity } from 'react-native';

const defaultStyle = { padding: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }

export default props => {
    const leftHandler = <Image source={props.leftIcon || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'} style={{ resizeMode: 'contain', width: props.iconSize || 30, height: props.iconSize || 30, alignSelf: 'center' }} />
    const rightHandler = <Image source={props.rightIcon || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>'} style={{ resizeMode: 'contain', width: props.iconSize || 30, height: props.iconSize || 30, alignSelf: 'center' }} />
    return <Animated.View
        style={{ ...defaultStyle, ...props.style }}>
        {props.leftHandler ? props.leftHandler : <TouchableOpacity onPress={props.onLeftPress}>{leftHandler}</TouchableOpacity>}
        {props.children}
        {props.rightHandler ? props.rightHandler : <TouchableOpacity onPress={props.onRightPress}>{rightHandler}</TouchableOpacity>}
    </Animated.View>
}