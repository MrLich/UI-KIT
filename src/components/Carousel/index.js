import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default props => <Carousel {...props} showThumbs={false}>{props.children}</Carousel>