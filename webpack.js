const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src', 'index.js')]
  },

  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    // export itself to a global var
    libraryTarget: 'var',
    // name of the global var
    library: 'factorialPixel'
  },

  stats: {
    children: false,
    chunks: false,
    colors: true
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: []
}
