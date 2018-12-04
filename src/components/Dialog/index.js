import React from 'react';
import RootSiblings from '../RootSiblings';
import DialogContent from '../DialogContent';

const DESTROY_TIMEOUT = 500;

class DialogManager {
    static dialogs = [];

    static current() {
        return DialogManager.dialogs[DialogManager.dialogs.length - 1];
    }

    static add(props, callback) {
        props.style = props.style || {}
        const backdropStyle = props.style;
        const element = new RootSiblings(
            <DialogContent
                {...props}
                style={{ ...backdropStyle }}
            />,
            callback,
        );
        DialogManager.dialogs.push({
            element,
            props
        });
        return element;
    }

    static destroy() {
        const dialog = DialogManager.dialogs.pop();
        setTimeout(() => {
            dialog.element.destroy();
        }, DESTROY_TIMEOUT);
    }

    static update = (props, callback = () => { }) => {
        const dialog = DialogManager.current()
        dialog.element.update(
            <DialogContent
                {...props}
            />,
            () => dialog.element.destroy() && callback()
        );
    }

    static show = (props, callback = () => { }) => {
        return DialogManager.add({
            ...props,
            visible: true,
        }, callback);
    }

    static dismiss = (element) => {
        if (typeof element !== 'undefined') {
            element.destroy() && callback()
        } else {
            const dialog = DialogManager.current()
            dialog.element.destroy() && callback()
        }
    }

    static dismissAll = () => {
        DialogManager.dialogs.forEach(() => {
            DialogManager.dismiss();
        });
    }
}

export default DialogManager