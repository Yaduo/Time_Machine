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

    plugins: [
        new ExtractTextPlugin('style.css'),
        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new CopyWebpackPlugin([
            { from: path.join(paths.src, 'assets'), to: 'assets' },
            //{ from: path.join(paths.external, 'bootstrap/dist/fonts'), to: 'assets/fonts' }
        ]),
        new HtmlWebpackPlugin({ template: path.join(paths.src, 'index.html') }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],

    resolve: { 
        extensions: ['.ts','.tsx','.js','.less','.css'], // ensure .async.ts etc also works
		alias: {
			'font-awesome.css': path.join(paths.external, '/font-awesome/css/font-awesome.min.css')
		}
    },  

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, use: "ts-loader" },

            { test: /\.css$/, use: ExtractTextPlugin.extract({ 
                use:[ 'css-loader'],  // translates CSS into CommonJS
                fallback: 'style-loader' // creates style nodes from JS strings
            })},

            { test: /\.less$/, use: ExtractTextPlugin.extract({ 
                use:[ 'css-loader', 'less-loader'],  // compiles Less to CSS and translates CommonJS
                fallback: 'style-loader' 
            })},

            { test: /\.(woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
        ],
        
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
        console.log(memo, val)
        return memo.concat(val, args.map(function (prefix) {
            return prefix + val
        }));
    }, ['']);
}