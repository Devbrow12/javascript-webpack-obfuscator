'use strict';

var fs = require("fs"),
    nodeExternals = require('webpack-node-externals'),
    webpack = require('webpack'),
    OptimizeJSPlugin = require('optimize-js-plugin');

function getLicenseText () {
    return "/*\nCopyright (C) 2016 Timofey Kachalov <sanex3339@yandex.ru>\n\n" +
        fs.readFileSync('./LICENSE.BSD', 'utf8') + "\n*/";
}

module.exports = {
    entry: {
        'index': './index.ts'
    },
    devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new webpack.BannerPlugin(
            {
                banner: getLicenseText() + '\n\nrequire("source-map-support").install();\n',
                raw: true,
                entryOnly: false
            }
        ),
        /*new OptimizeJSPlugin({
            sourceMap: true
        })*/
    ],
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget:  "commonjs2",
        library: "JavaScriptObfuscator"
    }
};
