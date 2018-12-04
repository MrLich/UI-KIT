import React from 'react';
import Swiper from 'react-native-swiper';
export default props => <Swiper {...props} showThumbs={false}>{props.children}</Swiper>