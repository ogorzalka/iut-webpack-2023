const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const src = path.join(__dirname, './src');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(src, 'index.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: "./img" },
            ],
        }),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
        ]
    }
};
