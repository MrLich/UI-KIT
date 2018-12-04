import React from 'react';
import { TouchableOpacity, Text, Picker as PickerNative, Modal, Image } from 'react-native';
import Button from '../Button';

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
        const props = this.props;
        return <TouchableOpacity {...props} onPress={() => {
            this.setState({ showOptions: !this.state.showOptions })
        }} style={{ ...{ margin: 20, borderWidth: 1, borderRadius: 25, borderColor: '#4aadcd', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, ...props.style }}>
            <Text style={{ ...{ padding: 14, fontSize: 16, height: undefined, width: undefined }, ...props.valueStyle }}>{this.state.selectedLabel}</Text>
            {props.iconImage ? <Image source={props.iconImage} style={{ resizeMode: 'contain', marginRight: props.iconRight || 10, width: props.iconSize || 30, height: props.iconSize || 30, alignSelf: 'center' }} /> : null}
            <Modal style={{ ...props.backdropStyle, ...{} }} visible={this.state.showOptions}>
                {props.headerComponent ? props.headerComponent : <Text style={{ ...{ marginTop: 40, padding: 20, fontSize: 14, height: undefined, width: undefined, color: '#333' }, ...props.textStyle }}>{props.textHint}</Text>}
                <PickerNative style={{ ...props.pickerStyle, ...{} }} selectedValue={props.selectedValue}
                    onValueChange={(value, index) => {
                        const results = props.options.filter((option) => option.value === value);
                        this.setState({ selectedLabel: results.length ? results[0].label : '' })
                        props.onValueChange && props.onValueChange(value, index);
                    }}>
                    {props.options.map((option, index) => {
                        return <PickerNative.Item key={index} value={option.value} label={option.label} />
                    })}
                </PickerNative>
                <Button style={{ ...{ width: undefined, position: 'absolute', left: 20, right: 20, bottom: 20 }, ...props.buttonStyle }} text={props.buttonText || 'Select an option'} onPress={() => {
                    this.setState({ showOptions: false })
                }}></Button>
            </Modal>
        </TouchableOpacity>
    }
}