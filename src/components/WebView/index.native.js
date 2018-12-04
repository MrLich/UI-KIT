import React from 'react';
import { WebView  } from 'react-native';

export default (props) => <WebView {...props}>{props.children}</WebView>;