import React from 'react';
import TouchableOpacity from '../TouchableOpacity';
import Image from '../Image';
import ReactDrawer from './ReactDrawer';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false
        }
    }

    render() {
        const props = this.props;
        console.log(props.navigation);
        return <TouchableOpacity onPress={() => {
            this.setState({ showDrawer: !this.state.showDrawer })
        }} style={{ ...{ padding: 10 }, ...props.style }}>
            <Image source={props.iconImage} style={{ resizeMode: 'contain', width: props.iconSize || 30, height: props.iconSize || 30, alignSelf: 'center' }} />
            <ReactDrawer open={this.state.showDrawer} onDrawerClosed={() => console.log('onDrawerClosed')}>
                {this.props.children}
            </ReactDrawer>
        </TouchableOpacity>
    }
}