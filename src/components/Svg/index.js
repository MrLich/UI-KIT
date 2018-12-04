import React from 'react';

class Svg extends React.Component {
    render() { return <svg {...this.props}>{this.props.children}</svg> }
}

class Circle extends React.Component {
    render() {
        return <circle {...this.props}>{this.props.children}</circle>
    }
}

class Ellipse extends React.Component {
    render() {
        return <ellipse {...this.props}>{this.props.children}</ellipse>
    }
}

class G extends React.Component {
    render() {
        return <g {...this.props}>{this.props.children}</g>
    }
}

class LinearGradient extends React.Component {
    render() {
        return <linearGradient {...this.props}>{this.props.children}</linearGradient>
    }
}

class RadialGradient extends React.Component {
    render() {
        return <radialGradient {...this.props}>{this.props.children}</radialGradient>
    }
}

class Line extends React.Component {
    render() {
        return <line {...this.props}>{this.props.children}</line>
    }
}

class Path extends React.Component {
    render() {
        return <path {...this.props}>{this.props.children}</path>
    }
}

class Polygon extends React.Component {
    render() {
        return <polygon {...this.props}>{this.props.children}</polygon>
    }
}

class Polyline extends React.Component {
    render() {
        return <polyline {...this.props}>{this.props.children}</polyline>
    }
}

class Rect extends React.Component {
    render() {
        return <rect {...this.props}>{this.props.children}</rect>
    }
}

class Symbol extends React.Component {
    render() {
        return <symbol {...this.props}>{this.props.children}</symbol>
    }
}

class Text extends React.Component {
    render() {
        return <text {...this.props}>{this.props.children}</text>
    }
}

class Use extends React.Component {
    render() {
        return <use {...this.props}>{this.props.children}</use>
    }
}

class Defs extends React.Component {
    render() {
        return <defs {...this.props}>{this.props.children}</defs>
    }
}

class Stop extends React.Component {
    render() {
        return <stop {...this.props}>{this.props.children}</stop>
    }
}

class ClipPath extends React.Component {
    render() {
        return <clipPath {...this.props}>{this.props.children}</clipPath>
    }
}

class Animate extends React.Component {
    render() {
        return <animate {...this.props}>{this.props.children}</animate>
    }
}

class TextPath extends React.Component {
    render() {
        return <textPath {...this.props}>{this.props.children}</textPath>
    }
}

class TSpan extends React.Component {
    render() {
        return <tspan {...this.props}>{this.props.children}</tspan>
    }
}

class Pattern extends React.Component {
    render() {
        return <pattern {...this.props}>{this.props.children}</pattern>
    }
}

class Image extends React.Component {
    render() {
        return <image {...this.props} />
    }
}

export {
    Circle,
    Ellipse,
    G,
    Svg,
    ClipPath,
    TextPath,
    TSpan,
    Pattern,
    Image,
    Polygon,
    Animate,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
}

export default Svg;