import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = {
            navigate: (screen, object) => {
                sessionStorage.setItem('navigation-chains', JSON.stringify([screen]));
                sessionStorage.setItem('navigation-object', JSON.stringify(object || {}));
                props.history.replace(`/${screen}`)
            },
            goBack: () => {
                const chains = JSON.parse(sessionStorage.getItem('navigation-chains') || '[]');
                if (chains.length > 1) {
                    chains.pop() && sessionStorage.setItem('navigation-chains', JSON.stringify(chains));
                    props.history.push(`/${chains[chains.length - 1]}`)
                }
            },
            push: (screen, object) => {
                const chains = JSON.parse(sessionStorage.getItem('navigation-chains') || '[]');
                chains.push(screen) && sessionStorage.setItem('navigation-chains', JSON.stringify(chains));
                const navObject = { ...{}, ...this.navigation.state.params, ...object};
                sessionStorage.setItem('navigation-object', JSON.stringify(navObject));
                props.history.push(`/${chains[chains.length - 1]}`)
            },
            getParam: (prop) => {
                return this.navigation.state.params[prop];
            },
            state: {
                params: JSON.parse(sessionStorage.getItem('navigation-object'))
            }
        }
    }

    dispatchRouteToScreen = (route) => {
        sessionStorage.setItem('navigation-chains', JSON.stringify([route]));
    }

    componentWillMount() {
        this.componentDidReceiveParams(this.navigation.state.params);
    }

    componentDidReceiveParams(object) { }
}