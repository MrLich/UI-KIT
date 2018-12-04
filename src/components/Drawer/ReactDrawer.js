/*!
 * ReactDrawer
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

import React from 'react';

class ReactDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onAnimationEnded = this.onAnimationEnded.bind(this);
  }

  onAnimationEnded() {
    if (!this.state.open) {
      this.setState({
        hiddenOverlay: true,
        hiddenDrawer: true
      });
    }
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
      hiddenOverlay: true,
      hiddenDrawer: true
    });
  }

  closeDrawer() {
    this.setState({
      open: false,
      hiddenOverlay: true,
      hiddenDrawer: true,
    });
    if (this.props.onDrawerClosed) {
      this.props.onDrawerClosed();
    }
  }
  openDrawer() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false,
      open: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open != this.state.open) {
      nextProps.open ? this.openDrawer() : this.closeDrawer();
    }
  }

  componentDidMount() {
    this.drawer.addEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  componentWillUnmount() {
    this.drawer.removeEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  getOverlayClassName() {
    return `drawer-overlay animated ${this.state.open ? 'fadeIn': 'fadeOut'} ${this.state.hiddenOverlay ? 'hidden': ''}`
  }

  getDrawerClassName() {
    let direction = this.state.open ? 'In' : 'Out';
    return `drawer-drawer ${this.state.open ? 'drawer-drawer-left' : ''} animated fade${direction}left ${this.state.hiddenDrawer ? 'hidden': ''}`
  }

  render() {
    const overlayClass = this.getOverlayClassName();
    const drawerClass = this.getDrawerClassName();

    return (
      <div>
        {!this.props.noOverlay ? <div
          ref={(c) => this.overlay = c}
          className={overlayClass}
          onClick={this.closeDrawer}>
        </div> : null}
        <div
          className={drawerClass}
          ref={(c) => this.drawer = c}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ReactDrawer;