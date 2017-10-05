const path = require("path");
const Webpack = require("webpack");
const CommonsChunkPlugin = Webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const paths = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, './dist/'),
  external: path.join(__dirname, './node_modules/'),
}

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
    entry: {
        app: path.join(paths.src, 'App'),
        vendor: path.join(paths.src, 'Vendor'),
    },

    output: {
        path: root('dist'),
        filename: "app.bundle.js",
        publicPath: '/'
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
        new CheckerPlugin()
    ],

    resolve: { 
        extensions: ['.ts','.tsx','.js','.less','.css'], // ensure .async.ts etc also works
		alias: {
			'font-awesome.css': path.join(paths.external, '/font-awesome/css/font-awesome.min.css')
		}
    },  

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader?presets[]=es2015&presets[]=react' },
            
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, use: "awesome-typescript-loader" },

            { test: /\.css$/, use: ExtractTextPlugin.extract({ 
                use:[ 'css-loader'],  // translates CSS into CommonJS
                fallback: 'style-loader' // creates style nodes from JS strings
            })},

            { test: /\.less$/, use: ExtractTextPlugin.extract({ 
                use:[ 'css-loader', 'less-loader'],  // compiles Less to CSS and translates CommonJS
                fallback: 'style-loader' 
            })},

            { test: /\.scss$/, use: ExtractTextPlugin.extract({ 
                use:[ 'css-loader', 'sass-loader'],  // compiles Less to CSS and translates CommonJS
                fallback: 'style-loader' 
            })},
            // loaders: ['style', 'css', 'postcss', 'sass'] },

            { test: /\.(jpg|png|gif)$/, use: 'url-loader?limit=100000' },
            { test: /\.(woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
        ],
        
    }
};

