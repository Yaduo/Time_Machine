var path = require("path");
var Webpack = require("webpack");
var CommonsChunkPlugin = Webpack.optimize.CommonsChunkPlugin;
var ProvidePlugin = Webpack.ProvidePlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, './dist/'),
  external: path.join(__dirname, './node_modules/'),
}

module.exports = {
    entry: {
        app: path.join(paths.src, 'App'),
        vendor: path.join(paths.src, 'Vendor'),
    },

    output: {
        path: root('dist'),
        filename: "app.bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/i, loader: ExtractTextPlugin.extract(['css'])},
            { test: /\.less$/i, loader: ExtractTextPlugin.extract(['css','less'])},
            { test:/\.(woff2?|eot|ttf|svg)$/, loader: 'url'}
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new ExtractTextPlugin('stylesheets/[name].css'),
        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new CopyWebpackPlugin([
            { from: path.join(paths.src, 'assets'), to: 'assets' },
        ]),
        new HtmlWebpackPlugin({ template: path.join(paths.src, 'index.html') }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    
    resolve: {
        extensions: prepend(['.js','.ts','.tsx', '.jsx', '.json', '.html', '.css', '.less', '.png', '.jpg', '.jpeg'], '.async'), // ensure .async.ts etc also works
		alias: {
			'font-awesome.css': path.join(paths.external, '/font-awesome/css/font-awesome.min.css')
		}
    }
    
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {
    args = args || [];
    if (!Array.isArray(args)) { args = [args] }
    return extensions.reduce(function (memo, val) {
        return memo.concat(val, args.map(function (prefix) {
            return prefix + val
        }));
    }, ['']);
}