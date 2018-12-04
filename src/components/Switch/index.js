import React, { Component } from "react";
import Switch from "react-switch";

export default (props) => <div className='switch' style={props.style}>
    <span className='text'>{props.children}</span>
    <div style={{ float: 'right'}}>
        <Switch onColor={props.onTintColor || '#4aadcd'} offColor={'#e9ecef'} checkedIcon={false} uncheckedIcon={false} disabled={props.disabled} checked={props.value} onChange={props.onValueChange} width={50}/>
    </div>
</div>