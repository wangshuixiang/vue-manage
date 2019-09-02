module.exports = {
    publicPath: '',
    lintOnSave: false,
    devServer: {
        port: 4000, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: 'http://facemall-dev.yudaoyunshang.cn',
                ws: true,
                // pathRewrite: { '^/api': '/' },
                changeOrigin: true
            }
        },
    },
}
