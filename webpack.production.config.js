const Webpack = require("webpack");
const WebpackConfig = require('./webpack.config.js');

const fs = require('fs');

const xml2js = require('xml2js');
const parser = new xml2js.Parser(); // for parse xml (back end web config file)

// read from production config file to update metadata 
// TODO: unfinish, waiting for the back end config files
/*
fs.readFile(__dirname + '/xxxxxxxxxxxxxxxxx.config', function (err, data) {
    parser.parseString(data, function (err, result) {
        result.appSettings.add.forEach(function (add) {
            switch (add.$.key) {
                case "Title":
                    prodConfig.metadata.title = add.$.value;
                    break;
                case "ApiUrl":
                    prodConfig.metadata.apiUrl = add.$.value;
                    break;
                default:
                    break;
            }
        });
    });
});
*/

// TODO: the output path may need to be change
// prodConfig.output.path = './production/app';

// Uglify
WebpackConfig.plugins.push(
    new Webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: { screw_ie8 : true, keep_fnames: true }, 
        compress: { screw_ie8: true },
        comments: false
    })
);

module.exports = WebpackConfig;