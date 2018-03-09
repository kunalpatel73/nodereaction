const webpack = require('webpack');
const path = require('path');

const entry = [
  './client/index.js',
  './client/styles/style.css'
];

const output = {
  path: path.resolve(__dirname, 'src'),
  publicPath: '/src/',
  filename: 'bundle.js',
};

module.exports = {
  entry, output,
  devtool: "eval-source-map",
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      }
    ],
  },
  devServer: {
    proxy: { '/countries/*': 'http://localhost:3000' }
  }
};    

