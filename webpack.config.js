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
    watchOptions: {
        poll: true
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'}
        ]
    }
};
