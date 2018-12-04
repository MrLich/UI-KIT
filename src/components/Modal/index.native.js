import React from 'react';
import Modal from './Modal';
export default (props) => <Modal
    isOpen={props.visible}
    onOpened={props.onShow}
    onClosed={props.onRequestClose}
    style={props.style}>{props.children}</Modal>;