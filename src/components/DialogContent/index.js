import React from 'react';
import BackdropView from '../BackdropView';
import { default as Modal } from '../Modal';

export default class DialogContent extends React.Component {
    render() {
        const justifyContent = this.props.style ? this.props.style.justifyContent : 'flex-start';
        let positionStyle = { top: 'auto', bottom: 'auto' };
        switch (this.props.position) {
            case 'center':
                positionStyle = { top: 'auto', bottom: 'auto' }
                break;
            case 'top':
                positionStyle = { top: 0, bottom: 'auto' }
                break;
            case 'bottom':
                positionStyle = { top: 'auto', bottom: 0 }
                break;
            case 'bottom-right':
                positionStyle = { top: 'auto', left: 'auto' }
                break;
            case 'top-right':
                positionStyle = { top: 0, left: 'auto' }
                break;
            case 'bottom-left':
                positionStyle = { top: 'auto', right: 'auto' }
                break;
            case 'top-left':
                positionStyle = { bottom: 'auto', right: 'auto' }
                break;
        }
        return <Modal {...this.props} style={{ content: { ...{ backgroundColor: null, border: 0 }, ...positionStyle } }} animationType='fade' transparent={true} presentationStyle='overFullScreen'>
            <BackdropView onPress={this.props.onPress} style={{ justifyContent: justifyContent }}>{this.props.children}</BackdropView>
        </Modal>
    }
}