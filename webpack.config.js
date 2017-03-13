const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ]
    }]
  }
}
