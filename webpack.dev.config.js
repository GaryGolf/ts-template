var webpack = require('webpack');
var path = require("path");

var commonEntry = ['webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr', 'babel-polyfill'];

module.exports = {
    devtool: 'sourcemap',
    debug: true,
    entry: {
        bundle: commonEntry.concat(['./index.tsx']),
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'] },
            { test: /\.css$/, loaders: ['style-loader',
                'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]' ]}
        ]
    },
	output: {
        filename: '[name].js',
        path: __dirname + "/static/",
        publicPath: "/static/",
        include: __dirname
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ],
    resolve: {
        extensions: ['', '.js','.jsx', '.ts', '.tsx', '.css']
    }
};