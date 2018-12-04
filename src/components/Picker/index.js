import React from 'react';

export default class Picker extends React.Component {
    constructor(props) {
        super(props)
        let selectedLabel = props.options.length ? props.options[0].label : '';
        const results = props.options.filter((option) => option.value === props.selectedValue);
        if (results.length) {
            selectedLabel = results[0].label;
        }
        this.state = {
            showOptions: false,
            selectedLabel: selectedLabel
        }
    }

    render() {
        return <div className={`dropdown ${this.state.showOptions ? 'active' : ''}`} onClick={() => {
            this.setState({ showOptions: !this.state.showOptions })
        }}>
            <div className="select" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ marginLeft: 10, lineHeight: '30px' }}>{this.state.selectedLabel}</span>
                {this.props.iconImage ? <img src={this.props.iconImage.uri || this.props.iconImage} height={this.props.iconSize || 30} width={this.props.iconSize || 30} style={{ marginRight: this.props.iconRight || 0, width: this.props.iconSize || 30, height: this.props.iconSize || 30, alignSelf: 'center' }} /> : null}
            </div>
            <ul className='dropdown-menu' style={{ display: this.state.showOptions ? 'block' : 'none' }}>
                {this.props.options.map((option, index) => {
                    return <li key={index} onClick={() => {
                        this.setState({ showOptions: false, selectedLabel: option.label })
                        this.props.onValueChange && this.props.onValueChange(option.value, index);
                    }}>{option.label}</li>
                })}
            </ul>
        </div>
    }
}