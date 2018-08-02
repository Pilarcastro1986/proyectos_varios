const path = require('path');
const webpack = require('webpack');

module.exports = {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    entry: {
      app: ['./server.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    module: {
      loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
			query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
        }
      ],
      
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
      },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        module: 'empty'
      },
      devtool: 'eval-source-map'
  }