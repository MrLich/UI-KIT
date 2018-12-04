import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const descriptors = this.props.descriptors;
        const options = this.props.options;
        const chains = JSON.parse(sessionStorage.getItem('navigation-chains') || '[]');
        const selectedRouteName = chains.length ? chains[0] : options.initialRouteName;
        const elements = options.navigationMode === 'header' ? Object.keys(descriptors).map(function (routeName, index) {
            const routeClass = routeName == selectedRouteName ? 'selected' : '';
            const iconComponent = descriptors[routeName].options.menuIcon;
            return descriptors[routeName].options.displayOnMenu ? (<li key={index}><Link to={`/${routeName}`} onClick={() => {
                sessionStorage.setItem('navigation-chains', JSON.stringify([routeName]));
            }} className={routeClass}>{iconComponent} {routeName}</Link></li>) : null
        }) : null;
        return options.contentComponent ? options.contentComponent({ ...this.props, ...{ activeItemKey: selectedRouteName } }) : <nav className="container">
            <ul className="menu">
                {elements}
            </ul>
            <div className="clearfix"></div>
        </nav>
    }
}