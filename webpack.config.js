/**
 *
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 23:21:12
 */

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// 定义路径
const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    node_modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  mode: 'development',
  entry: './example/index',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
        exclude: PATHS.node_modules,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    // html文件导出，这里的将文件导出到根目录
    new htmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
      inject: 'body',
    })
  ],
  resolve: {
    extensions: ['.js','.jsx'] //后缀名自动补全
  }
}
