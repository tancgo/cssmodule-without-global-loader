const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/cjs.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        loader: 'babel-loader'
      }
    ]
  }
}
