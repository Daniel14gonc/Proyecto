const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  // (2)
  target: 'node',
  // (3)
  entry: ['@babel/polyfill', './src/server.js'],
  // (4)
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    // (5)
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
};