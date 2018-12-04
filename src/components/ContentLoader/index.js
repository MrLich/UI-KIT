import * as React from 'react'
import { Rect } from '../Svg'
import ContentWrapper from './ContentWrapper'

export const defaultProps = {
  animate: true,
  speed: 2,
  width: 400,
  height: 130,
  preserveAspectRatio: 'xMidYMid meet',
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0',
  primaryOpacity: 1,
  secondaryOpacity: 1,
}

const InitialComponent = props => (
  <Rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
)

export default (props) => {
  const mergedProps = { ...defaultProps, ...props }
  const children = props.children ? props.children : <InitialComponent {...mergedProps} />
  return <ContentWrapper {...mergedProps}>{children}</ContentWrapper>
}
/* Create SVG Content Tool: http://danilowoz.com/create-content-loader/ */