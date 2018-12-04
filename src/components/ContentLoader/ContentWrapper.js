import * as React from 'react'
import Svg, { Rect, Defs, ClipPath, LinearGradient, Stop, Animate } from '../Svg'
const uid = () => Math.random().toString(36).substring(2)

export default (props) => {
    const idClip = props.uniquekey ? `${props.uniquekey}-idClip` : uid()
    const idGradient = props.uniquekey ? `${props.uniquekey}-idGradient` : uid()

    return (
        <Svg
            viewBox={`0 0 ${props.width} ${props.height}`}
            version="1.1"
            style={props.style}
            preserveAspectRatio={props.preserveAspectRatio}
        >
            <Defs>
                <ClipPath id={idClip}>{props.children}</ClipPath>
                <LinearGradient id={idGradient} x1={0} y1={0} x2="0%" y2="100%">
                    <Stop offset="0%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
                        {props.animate ? (
                            <Animate
                                attributeName="offset"
                                values="-2; 1"
                                dur={`${props.speed}s`}
                                repeatCount="indefinite"
                            />
                        ) : null}
                    </Stop>
                    <Stop offset="50%" stopColor={props.secondaryColor} stopOpacity={props.secondaryOpacity}>
                        {props.animate ? (
                            <Animate
                                attributeName="offset"
                                values="-1.5; 1.5"
                                dur={`${props.speed}s`}
                                repeatCount="indefinite"
                            />
                        ) : null}
                    </Stop>
                    <Stop offset="100%" stopColor={props.primaryColor} stopOpacity={props.primaryOpacity}>
                        {props.animate ? (
                            <Animate
                                attributeName="offset"
                                values="-1; 2"
                                dur={`${props.speed}s`}
                                repeatCount="indefinite"
                            />
                        ) : null}
                    </Stop>
                </LinearGradient>
            </Defs>

            <Rect
                fill={`url(#${idGradient})`}
                clipPath={`url(#${idClip})`}
                x="0"
                y="0"
                width={props.width}
                height={props.height}
            />
        </Svg>
    )
}