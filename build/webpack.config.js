const path = require('path');
const fs = require('fs');

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
        if (stat.isFile() && extname === '.js') {
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
        modules: [path.resolve(__dirname, '../node_modules')]
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loaders: [
                {
                    loader: 'vue-loader'
                }
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    }
};

// 开发环境使用 source-map
if (!isProd) {
    config.devtool = 'source-map';
}

module.exports = config;
