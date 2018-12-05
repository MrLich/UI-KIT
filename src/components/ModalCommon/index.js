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
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </ReactModal>
    }
}
