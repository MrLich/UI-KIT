import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return <TouchableOpacity onPress={() => {
            this.props.navigation.openDrawer();
        }} style={{ ...{ padding: 10 }, ...props.style }}>
            <Image source={props.iconImage} style={{ resizeMode: 'contain', width: props.iconSize || 30, height: props.iconSize || 30, alignSelf: 'center' }} />
        </TouchableOpacity>
    }
}