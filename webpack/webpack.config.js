const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/main.js', //入口文件
    output: {
        path: __dirname + '/dist', //打包后的文件存放的目录
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },{
                        loader: 'css-loader',
                        options: {}
                    }
                ]
                
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options:{
                    "presets": ["@babel/preset-env"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // html引用自动插入
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new webpack.BannerPlugin(`@author: 'kenghuo'\n@name: 'webpack 入门读物'`), // 版权
        new MiniCssExtractPlugin({      // css单独分离
            filename: "[name].css",
        }),
        new Uglify()
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']       // 文件导入这些后缀可以不用写
    },
    stats: {
        all: false,
        modules: false,
        maxModules: 0,
        errors: true,
        warnings: true,
        // our additional options
        moduleTrace: true,
        errorDetails: true,
        version: true,
        hash: true,
        env: true,
        colors: true,
        chunks: false,
        chunkGroups: false,
        children: false,
        cached: true,
        assets: true,
      }
}