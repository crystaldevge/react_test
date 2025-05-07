const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.[contenthash].js',
        publicPath: 'http://localhost:3001/',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'build'),
        hot: true,
        liveReload: true,
        compress: true,
        port: 3001,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'react_test',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactTestApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
