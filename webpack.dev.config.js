const Webpack = require("webpack");
const WebpackConfig = require('./webpack.config.js');

const metadata = {
    title: 'typescript-react',
    apiUrl: '/',
    host: 'localhost',
    port: 3000,
}

WebpackConfig.devServer = {
    inline: false,
    port: metadata.port,
    host: metadata.host
}

module.exports = WebpackConfig;