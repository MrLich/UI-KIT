import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function createStackNavigator(routes, options) {
    class NavigationContainer extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const routeElements = Object.keys(routes).map(function (key, index) {
                return (
                    <Route key={index} exact path={`/${key}`} component={routes[key].screen} />
                );
            });
            options = options || {};
            if (!options.initialRouteName && routes.length) {
                const firstKey = Object.keys(routes)[0];
                options.initialRouteName = firstKey;
            }
            const initialRouteElement = (<Route key={'default'} exact path={`/`} component={routes[options.initialRouteName].screen} />);
            return <BrowserRouter>
                <div>
                    <Switch>
                        {[...routeElements, ...[initialRouteElement]]}
                    </Switch>
                </div>
            </BrowserRouter>;
        }
    }

    return NavigationContainer;
}

export function createDrawerNavigator(routes, options) { }
export function createMaterialTopTabNavigator(routes, options) {
    class NavigationContainer extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const routeElements = Object.keys(routes).map(function (key, index) {
                return (
                    <Route key={index} exact path={`/${key}`} component={routes[key].screen} />
                );
            });
            options = options || {};
            if (!options.initialRouteName && routes.length) {
                const firstKey = Object.keys(routes)[0];
                options.initialRouteName = firstKey;
            }
            const initialRouteElement = (<Route key={'default'} exact path={`/`} component={routes[options.initialRouteName].screen} />);
            let descriptors = {};
            Object.keys(routes).forEach((key) => {
                descriptors[key] = {
                    options: typeof routes[key].screen.navigationOptions === 'function' ? routes[key].screen.navigationOptions() : routes[key].screen.navigationOptions
                }
            })
            const navigationProperties = {
                descriptors: descriptors,
                activeItemKey: options.initialRouteName
            }
            return <BrowserRouter>
                <div>
                    <NavigationBar {...navigationProperties} options={options} {...this.props} />
                    <Switch>
                        {[...routeElements, ...[initialRouteElement]]}
                    </Switch>
                </div>
            </BrowserRouter>;
        }
    }

    return NavigationContainer;
}
export function createBottomTabNavigator(routes, options) { }