const $utils = require('./build/build.utils')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*获取命令行参数*/
const arg = $utils.decodeArgv()
/*添加插件*/
const plugins = []
!!arg.analysis && plugins.push(new BundleAnalyzerPlugin({analyzerPort: '9999'}))                        //如果命令行参数中存在analysis，则启用webpack-bundle-analysis插件分析打包数据
const isProduction = !!arg.prod

const option = {
    lintOnSave: false,
    devServer: {
        port: '7557',
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': $utils.resolve('src'),
            }
        },
        plugins: [
            ...plugins,
        ],
        externals: {
            ...(isProduction ? {
                'vue': 'Vue',
                'plain-utils': 'plain-utils',
            } : {})
        },
    },
}

module.exports = option