var path = require('path');
var webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app:'./app/index.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.webpack.js', '.web.js', '.ts', '.js'] },
    plugins: [
        new webpack.DefinePlugin({
            __PRODUCTION__: process.env.NODE_ENV === 'production',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
            },
        }),
        new CopyWebpackPlugin([{
        from: 'app/assets',
        to: 'assets',
    }])],
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
