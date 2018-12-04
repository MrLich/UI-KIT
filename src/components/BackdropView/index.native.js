import React from 'react';
import { Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';

const backdropStyle = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1000
}

export default class BackdropView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeAnimated: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(                        // Animate over time
            this.state.fadeAnimated,            // The animated value to drive
            {
                toValue: 1,                     // Animate to opacity: 1 (opaque)
                duration: 200,                  // Make it take a while
            }
        ).start();                              // Starts the animation
    }

    render() {
        return <Animated.View style={{ ...backdropStyle, ...this.props.style, ...{ opacity: this.state.fadeAnimated } }}>
            <TouchableOpacity activeOpacity={1.0} onPress={this.props.onPress} style={{ ...backdropStyle, ...this.props.style, ...{ backgroundColor: null } }}>{this.props.children}</TouchableOpacity>
        </Animated.View>
    }
}