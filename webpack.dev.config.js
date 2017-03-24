const Webpack = require("webpack");
const WebpackConfig = require('./webpack.config.js');

const metadata = {
    title: 'typescript-react',
    apiUrl: '/',
    host: 'localhost',
    port: 8088,
    exitCode: ""
}

WebpackConfig. metadata = metadata

WebpackConfig.devServer = {
    port: metadata.port,
    host: metadata.host,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
}

module.exports = WebpackConfig;