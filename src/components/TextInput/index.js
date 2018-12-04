import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeInputText = this.onChangeInputText.bind(this);
    }
    onChangeInputText(event) {
        if (typeof this.props.onChangeText === 'function') {
            this.props.onChangeText(event.target.value)
        }
    }
    render() {
        return <input style={this.props.style} type="text" className="form-control rounded-border"
            onChange={this.onChangeInputText}
            placeholder={this.props.placeholder}
            value={this.props.value} disabled={!this.props.editable} />
    }
}

TextInput.propTypes = {
    onChangeText: PropTypes.func
};

TextInput.defaultProps = {
    onChangeText: (event) => console.log(event)
};