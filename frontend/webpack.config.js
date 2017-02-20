var path        = require('path');
var webpack     = require('webpack');
var TextPlugin  = require('extract-text-webpack-plugin');

var root = path.resolve('', __dirname + '/src');
var entryFile = path.resolve(root, 'index.js');
var output = path.resolve('', __dirname + '/dist');

module.exports = {
    entry: {
        app: entryFile
    },
    output: {
        path: output,
        filename: 'main.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: root
            }
        ],
        loaders: [
            { test: /\.js$/, loader: 'babel'},
            { test: /\.css$/, loader: TextPlugin.extract("style-loader", "css-loader?minimize=true$modules=true&localIdentName=[name]__[local]___[hash:base64:5]")},
            { test:  /\.(jpe?g|png|gif|svg)$/, loader: 'url?name=/images/[name].[ext]'},
            { test:  /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=/fonts/[name].[ext]'},
        ]
    },
    plugins:[
        new TextPlugin('main.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port: 8088,
        hot: true
    }
};
