var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/newGoodIndex.js',
  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  devtool:"source-map",

  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer:{
    contentBase: __dirname + './src/public',
    port: 2002
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './src/public/index.html'
    })
  ]
  // watch: true

}
