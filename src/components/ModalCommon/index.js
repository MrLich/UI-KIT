import React from 'react';
import ReactModal from 'react-modal';
import '../../../../../web/css/bootstrap.min.css';
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

export default class ModalCommon extends React.Component {
    static setAppElement(elementName) {
        ReactModal.setAppElement('#' + elementName);
    }
    render() {
        const props = this.props;
        return <ReactModal
            isOpen={props.visible}
            onAfterOpen={props.onShow}
            onRequestClose={props.onRequestClose}
            style={{ ...props.style, ...{ overlay: overlayStyle } }}
        >
        <div className="containModal">
            <div className="modalItem1">
                <p>Modal body text goes here 1.</p>
            </div>
            <div className="modalItem2">
                <p>Modal body text goes here 2. </p>
            </div>
            <div className="modalItem3">
                <p>Modal body text goes here 3.</p>
                <p>Modal body text goes here 4.</p>
            </div>
        </div>
        </ReactModal>
    }
}
