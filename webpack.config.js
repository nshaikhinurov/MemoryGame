var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/build/',
    publicPath: 'build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?Limit=1000000',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?Limit=1000&mimetype=image/gif'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?Limit=1000&mimetype=image/jpg'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?Limit=1000&mimetype=image/png'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?Limit=26000&mimetype=image/svg+xml'
      },
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
