module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: 'dist',
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
