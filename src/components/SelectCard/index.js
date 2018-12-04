import React from 'react';
import TouchableOpacity from '../TouchableOpacity';
import Image from '../Image';

export default class SelectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChecked: false
        }
    }

    render() {
        const props = this.props;
        return <TouchableOpacity {...props} onPress={() => {
            this.setState({ showChecked: !this.state.showChecked })
            props.onValueChanged && props.onValueChanged(this.state.showChecked)
        }} style={{ ...{ width: props.style.width, height: props.style.height, backgroundRepeat: 'no-repeat', cursor: 'pointer', display: 'flex', padding: 10, justifyContent: 'flex-end', backgroundSize: 'cover', backgroundImage: `url(${props.coverImage}` }, ...props.imageStyle }}>
            {this.state.showChecked ? <Image height={props.iconSize / 2} width={props.iconSize / 2} source={props.checkedIcon} style={{ ...{ backgroundColor: 'white', borderRadius: props.iconSize / 2, width: props.iconSize, height: props.iconSize }, ...props.iconStyle }} /> : null}
        </TouchableOpacity>
    }
}