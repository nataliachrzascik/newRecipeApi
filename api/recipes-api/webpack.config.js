const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
    mode: 'production',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'build'),
        //filename: "static/js/bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader",
                }, MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/images',
                        }
                    }
                ],
            },
            {
                test: /\.tsx?$/, use: {
                    loader: 'ts-loader',
                }, exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }, exclude: /node_modules/,
            }
        ],

    },
    plugins: [new MiniCssExtractPlugin()]

};