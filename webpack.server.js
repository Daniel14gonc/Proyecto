const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: ['./server/index.jsx'],
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.jsx',
    path: path.resolve(__dirname, './server'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|JPG)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|mp4)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.css$/,
        use: ['file-loader'],
      },
    ],
  },
}
