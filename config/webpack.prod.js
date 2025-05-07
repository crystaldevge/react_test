// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const packageJson = require('../package.json');
// const { merge } = require('webpack-merge');
// const commonConfig = require('./webpack.common');


// const prodConfig = {
//     mode: 'production',
//     entry: './src/index.js',
//     output: {
//         filename: '[name].[contenthash].js',
//         path: path.resolve(__dirname, '../dist'),
//         publicPath: '/',
//     },

//     optimization: {
//         minimize: true,
//         minimizer: [
//             new TerserPlugin(),
//             new CssMinimizerPlugin(),
//         ],
//         splitChunks: {
//             chunks: 'all',
//         },
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

//         new MiniCssExtractPlugin({
//             filename: '[name].[contenthash].css',
//         }),
//     ],
//     performance: {
//         hints: false,
//     },
// };

// module.exports = merge(commonConfig, prodConfig);