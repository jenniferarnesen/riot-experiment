const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  cache: true,

  entry: './src/app.js',

  output: {
    path: __dirname + '/public/dist/',
    publicPath: 'dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$|\.tag$/,
        include: /src/,
        loader: 'babel-loader',
        query:  {presets: ['es2015']}
      },
      {
        test: /\.tag$/,
        loader: 'tag'
      },
      {
        test: /\.css$/,
        //loader: "style-loader!css-loader"
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: true})
  ]
};
