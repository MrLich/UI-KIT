import React from 'react';
import PropTypes from 'prop-types';

export default class ColumnView extends React.Component {
    constructor(props) {
        super(props);
    }
    getColumnProps() {
        let columnSize = this.props.columnSize;
        if ( typeof this.props.columnSize === 'number') {
            columnSize = [columnSize, columnSize];
        } else {
            columnSize = columnSize.length > 1 ? columnSize: [columnSize[0], columnSize[0]];
        }
        return `col-xs-12 col-sm-${columnSize[0]} col-md-${columnSize[1]}`
    }
    render() {
        return <div className={this.getColumnProps()}>
            {this.props.children}
        </div>
    }
}


ColumnView.propTypes = {
    columnSize: PropTypes.any
};

ColumnView.defaultProps = {
    columnSize: 12
};