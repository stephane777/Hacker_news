const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./app/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./app/index.html"
		})
	],
	devServer: {
		historyApiFallback: true
	}
};
