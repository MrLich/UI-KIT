import React from 'react';
import ReactDOM from 'react-dom';
const uid = () => Math.random().toString(36).substring(2)

export default class RootSiblings {
    constructor(component, callback) {
        const bodyElement = document.getElementsByTagName('body')[0];
        this.nodeElement = document.createElement('div');
        this.nodeElement.className = 'root-siblings';
        this.nodeElement.id = 'root-siblings-' + uid();
        bodyElement.appendChild(this.nodeElement);
        ReactDOM.hydrate(component, this.nodeElement, callback);
    }
    destroy() {
        ReactDOM.unmountComponentAtNode(this.nodeElement);
        this.nodeElement.remove();
    }

    update = (component, callback = () => { }) => {
        ReactDOM.hydrate(component, this.nodeElement, callback);
    }
}