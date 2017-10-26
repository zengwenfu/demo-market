module.exports = {
    dev: {
        env: 'dev',
        port: 3000,
        autoOpenBrowser: true, // 默认打开浏览器
        proxyTable: {
            '/user': {
                target: 'http://127.0.0.1:5001',
                changeOrigin: true,
                pathRewrite: {
                    '^/user': '/user'
                }
            }
        }
    }
};
