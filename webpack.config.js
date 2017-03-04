var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        app:'./app/index.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.webpack.js', '.web.js', '.ts', '.js'] },
    watchOptions: {
        poll: true
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/, 
                loader: "file-loader",
                options: {
                        name: '[path][name].[ext]'
                    }
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                use: [ 'raw-loader' ],
                exclude: /node_modules/
            }
        ]
    }
};
