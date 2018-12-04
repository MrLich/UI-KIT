import React from 'react';
import { ScrollView } from 'react-native';

export default props => <ScrollView {...props} style={{backgroundColor: '#FFFFFF', paddingTop: 20 }} contentContainerStyle={{backgroundColor:'#FFFFFF'}}>{props.children}</ScrollView>;