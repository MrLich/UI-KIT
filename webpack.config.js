const path = require('path');

module.exports = {
    entry: "./lib/index.js",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "index.js",
        sourceMapFilename: "index.map",
        library: 'oop-ui-react',
        libraryTarget: 'commonjs2',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, "lib"),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};