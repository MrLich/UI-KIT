import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

export default class StateProvider extends React.Component {
    render() {
        const storeConfig = this.props.opts;
        const componentContent = storeConfig.persistor ?
            <PersistGate loading={this.props.loading} persistor={storeConfig.persistor}>
                {this.props.children}
            </PersistGate> : this.props.children;
        return <Provider store={storeConfig.store}>
            {componentContent}
        </Provider>;
    }
}