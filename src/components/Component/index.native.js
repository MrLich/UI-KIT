import React from 'react';
import { YellowBox } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Component extends React.Component {
    dispatchRouteToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.navigation.dispatch(navigateAction);
    }

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }

    componentWillMount() {
        this.componentDidReceiveParams(this.navigation && this.navigation.state && this.navigation.state.params);
    }

    componentDidReceiveParams(object) { }
}