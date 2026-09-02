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
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },

  plugins: [
    // Loaded on every page view, and now eagerly (not lazily) by the sites
    // that embed it — worth shipping minified. No `devtool` is configured,
    // so there's no input source map for this to preserve; debugging a
    // production issue means reading the minified output, same as before.
    new webpack.optimize.UglifyJsPlugin()
  ]
}
