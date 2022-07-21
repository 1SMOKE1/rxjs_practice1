const path = require('path');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  devServer: {
    compress: true,
    port: 9000
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};