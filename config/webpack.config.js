const PATH = require('path');

const gulp_config = require('./gulpfile.config');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin    = require('uglifyjs-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	mode        : gulp_config.dev ? 'development'                 : 'production',
	target      : 'web',
	devtool     : gulp_config.map ? 'cheap-module-eval-source-map': 'none',
	watch       : true,
	watchOptions: {
		ignored: /node_modules/
	},
	context: PATH.resolve(__dirname, '../'),
	entry  : {
		app: './src/app.js'
	},
	output: {
		path         : PATH.resolve(__dirname, '../'),   //require('./gulpfile.config').dist,
		filename     : 'dist/[name].[chunkhash].js',
		chunkFilename: 'dist/[name].[chunkhash].js'
	},
	module : {
		rules: [
			{
				test   : /\.js$/,
				exclude: /node_modules/,
				use    : [
					{
						loader : 'babel-loader',
						options: {
							presets   : ['env'],
							plugins   : [require('babel-plugin-syntax-dynamic-import')],
							sourceMaps: true
						}
					}
				]
			},
			{
				test   : /\.scss$/,
				exclude: /node_modules/,
				use    : ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use     : [
						{
							loader : 'css-loader',
							options: {
								minimize    : true,
								sourceMap   : true,
								importLoader: 2
							}
						},
						{
							loader : 'postcss-loader',
							options: {
								sourceMap: true,
								ident    : 'postcss',
								plugins  : () => [
									require('autoprefixer')({ browsers: ['last 2 versions'] })
								]
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use : [
					{
						loader : 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context : '.',
			manifest: PATH.join(gulp_config.dist, './vendor-manifest.json')
		}),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/app.html',
			chunks  : ['app', 'commons']
		}),
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new ExtractTextPlugin({
			filename: 'dist/[name].[chunkhash].css',
			disable : true
		})
	],
	resolve: {
		alias: {
			Component: PATH.resolve('./src/components'),
			Module   : PATH.resolve('./src/modules'),
			Data     : PATH.resolve('./data')
		}
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks            : 'initial',
					name              : 'commons',
					minChunks         : 1,
					maxInitialRequests: 3,
					minSize           : 30000,
					reuseExistingChunk: true,
				},
				/* vendor: {
					test    : /node_modules/,
					chunks  : 'initial',
					name    : 'vendor',
					priority: 10,
					enforce : true
				} */
			}
		},
		//runtimeChunk: true
	},
	performance: {
		hints: 'warning',
		/* assetFilter: assetFilename => {
			return !(/vendor/.test(assetFilename));
		} */
	}
};