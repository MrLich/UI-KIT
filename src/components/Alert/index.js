import React from 'react';
import Dialog from '../Dialog';
import NotifyBox from '../NotifyBox';
import MessageBox from '../MessageBox';

export default {
    alert: (title, message, buttons, position) => {
        Dialog.show({
            children: <MessageBox
                title={title}
                message={message}
                buttons={buttons || [
                    {
                        text: 'Cancel', onPress: () => Dialog.dismiss()
                    }, {
                        text: 'Accept', onPress: () => Dialog.dismiss()
                    }
                ]}
                onDismissed={() => Dialog.dismiss()}
            />,
            style: { justifyContent: 'center' },
            position: position || 'center'
        });
    },
    notify: (title, message, timeout, position) => {
        const handler = Dialog.show({
            children: <NotifyBox
                title={title}
                message={message}
                style={{ borderRadius: 0 }}
            />,
            style: { justifyContent: 'flex-start', backgroundColor: 'transparent' },
            onPress: () => Dialog.dismiss(handler),
            position: position || 'bottom-right'
        });
        setTimeout(() => {
            Dialog.dismiss(handler);
        }, timeout);
    },
    dismiss: () => {
        Dialog.dismiss();
    }
}