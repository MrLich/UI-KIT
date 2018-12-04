import React from 'react';
import BackdropView from '../BackdropView';

export default class DialogContent extends React.Component {
    render() {
        const justifyContent = this.props.style ? this.props.style.justifyContent : 'flex-start';
        const backgroundColor = this.props.style ? this.props.style.backgroundColor || 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)';
        return <BackdropView onPress={this.props.onPress} style={{ justifyContent: justifyContent, backgroundColor: backgroundColor, margin: 0, padding: 0 }}>{this.props.children}</BackdropView>
    }
}