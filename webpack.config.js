const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/dist/',
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
        query:  {presets: ['es2015']}
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
  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        ENV:  JSON.stringify(process.env.ENV || 'development')
      }
    })
  ]
};
