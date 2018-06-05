const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// 定义路径
const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    node_modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  mode: 'production',
  entry: './src/react-cmirror',
  output: {
    filename: 'react-cmirror.min.js',
    library: "react-cmirror",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
  },
  externals : {
    'react': 'react',
    'prop-types': 'prop-types',
    'codemirror': 'codemirror'
  },
}
