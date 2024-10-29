const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rawLoader = require('./loaders/raw-loader');
module.exports = {
    devtool: false,
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
        // publicPath: '/assates'// 默认是 / 根目录， 加了 '/assets' 之后 插入的时候会带上/assets/main.js
    },
    devServer: {
        static: resolve(__dirname, 'src', 'public'),
        port: 4200,
        compress: true,
        open: false,
        // 加了 '/public' 之后 /public/moto.txt 这样访问
        // 当你在项目里面没有引入这个静态资源，但是又想要访问的时候可以设置
        watchFiles: ['src/**/*']
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                // use: 'raw-loader'
                // use: rawLoader
                use: resolve(__dirname, 'loaders', 'raw-loader.js')
            },
            {
                test: /\.css$/,
                // 右 =》 左
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                // 右 =》 左
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                // 右 =》 左
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:10].[ext]',
                            // 如果开启es6 则需要.default才能取到值
                            esModule: false,
                            limit: 8 * 1024
                        },
                    }
                ],
                // 解决webpack5自带的资源处理模块和url-loader，file-load之间冲突
                type: 'javascript/auto'
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         'html-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};