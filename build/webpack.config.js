const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildHtml = require('./buildHtml.js');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const isProd = process.env.NODE_ENV === 'production';
// 多页面 bundle
function getEntries () {
    const entries = {};
    const dir = path.join(__dirname, '../src');
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        const extname = path.extname(fullPath);
        const basename = path.basename(file);
        if (stat.isFile() && extname === '.js' && basename !== 'common.js') {
            // 创建 html
            buildHtml(path.resolve(__dirname, '../dist'), basename.replace('.js', ''));
            entries[basename] = fullPath;
        }
    });
    return entries;
}

const entries = getEntries();
const config = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]',
        pathinfo: !isProd
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.resolve(__dirname, '../node_modules')],
        alias: {
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'utils': resolve('src/utils')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loaders: [{
                loader: 'vue-loader'
            }]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)(\?.*)?$/,
            use: 'url-loader?limit=1024&name=[name].[ext]&outputPath=img/'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common.js'
        }),
        new ExtractTextPlugin('css/common.css')
        // // new ExtractTextPlugin({
        // //     filename: (getPath) => {
        // //         return getPath('css/[name].css').replace('css/js', 'css');
        // //     }
        // // })
    ]
};

// 开发环境使用 source-map
if (!isProd) {
    config.devtool = 'source-map';
}

module.exports = config;
