const path = require('path')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const OpimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['js','jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ]
            },
            {
                test: /\.css$/,
                use: [MinCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MinCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },

    optimizaton: {
        splitChunks: {
            antdVendor: {
                test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
                name: 'antdVendor',
                enforce: true,
                chunks: 'all',
                priority: 0
            },
            agGridVendor: {
                test: /[\\/]node_modules[\\/](ag-grid-enterprise|ag-grid-react)[\\/]/,
                name: 'agGridVendor',
                enforce: true,
                chunks: 'all',
                priority: 0
            },
            highChartsVendor: {
                test: /[\\/]node_modules[\\/](highcharts)[\\/]/,
                name: 'highchartsVendor',
                enforce: true,
                chunks: 'all',
                priority: 0
            },
            vendors: {
                test: /[\\/]node_modules[\\/](react|react-dom|prop-types|redux|react-redux|redux-thunk|axios|es6-promise|jquery)[\\/]/,
                name: 'vendors',
                enforce: true,
                chunks: 'all',
                minChunks: 2,
                priority: -10
            }
        }
    },

    performance: {
        hints: false
    },

    devtool: false,

    plugins: [
        new MinCssExtractPlugin({filename: '[name].css'}),
        new OpimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}