
var config = require('./config'); // 获取config/index.js的默认配置

var opn = require('opn'); // 一个可以强制打开浏览器并跳转到指定url的插件
var express = require('express'); // 使用express
var proxyMiddleware = require('http-proxy-middleware'); // 使用proxyTable
// 如果没有指定默认运行端口，使用config.dev.port作为运行端口
var port = config.dev.port;
// 配置文件中是否自动打开浏览器
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
// 使用config.dev.proxyTable的配置作为proxyTable的代理配置
var proxyTable = config.dev.proxyTable;
// 使用express启动一个服务
var app = express();
// 将 proxyTable 中的请求配置挂载到启动的express服务上
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];
    // 如果options的数据类型为string，则表示只设置了url
    // 所以需要将url设置为对象中的target的值
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(options.filter || context, options));
});

// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')());

// 为静态资源提供响应服务
app.use(express.static('dist'));

var uri = 'http://localhost:' + port;
app.listen(port);

autoOpenBrowser && opn(uri + '/app.html');
