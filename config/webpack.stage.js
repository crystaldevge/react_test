// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const { merge } = require('webpack-merge');
// const commonConfig = require('./webpack.common');
// const packageJson = require('../package.json');

// const stageConfig = {
//     mode: 'stage',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, '../dist'),
//         filename: '[name].[contenthash].js',
//         publicPath: '/',
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new ModuleFederationPlugin({
//             name: 'app',
//             filename: 'remoteEntry.js',
//             exposes: {
//                 './ReactTestApp': './src/bootstrap',
//             },
//             shared: packageJson.dependencies,
//         }),
//     ],
//     devtool: 'source-map',
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         },
//     },
// };

// module.exports = merge(commonConfig, stageConfig);