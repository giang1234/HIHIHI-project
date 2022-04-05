const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: false,
        path: require.resolve('path'),
        fs: false,
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve("stream-browserify"),
        child_process: false,
        util: require.resolve('util')
    };

    config.ignoreWarnings = [/Failed to parse source map/],
        config.plugins.push(
            new webpack.ProvidePlugin({
                process: 'process',
                Buffer: ['buffer', 'Buffer']
            })
        );
    config.optimization = {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
            // cacheGroups: {
            //     
            //     defaultVendors: {
            //         enforce: true,
            //     },
            // },
            //chunks: 'all',
        },
    };

    if (env === "production") {
        config.optimization = {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: { drop_console: true }
                    }
                })
            ]
        }
    }
    return config;
}