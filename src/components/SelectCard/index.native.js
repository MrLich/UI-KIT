import React from 'react';
import { ImageBackground, Image, TouchableHighlight } from 'react-native';

export default class SelectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChecked: false
        }
    }

    render() {
        const props = this.props;
        return <TouchableHighlight activeOpacity={1.0} underlayColor='transparent' onPress={() => {
            this.setState({ showChecked: !this.state.showChecked })
            props.onValueChanged && props.onValueChanged(this.state.showChecked)
        }}><ImageBackground source={props.coverImage} imageStyle={{ ...{ overflow: 'hidden', padding: 10, flexDirection: 'row', justifyContent: 'flex-end' }, ...props.imageStyle }} style={props.style}>
                {this.state.showChecked ? <Image source={props.checkedIcon} style={{ ...{ resizeMode: 'contain', alignSelf: 'flex-end', margin: 10, backgroundColor: 'white', borderRadius: props.iconSize / 2, width: props.iconSize, height: props.iconSize }, ...props.iconStyle }} /> : null}
            </ImageBackground>
        </TouchableHighlight>
    }
}