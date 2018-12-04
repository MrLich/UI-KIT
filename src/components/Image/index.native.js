import React from 'react';
import { Image } from 'react-native';

export default props => <Image {...props} height={props.height} width={props.width}>{props.children}</Image>;