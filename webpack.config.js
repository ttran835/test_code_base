const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcssrc',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      }),
    ],
  },
};
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/data/scripts.js'),
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?/,
        exclude: /node_modules/,
        options: {
          presets: [['@babel/preset-env', { modules: false }]],
          env: {
            test: {
              presets: [['@babel/preset-env']],
            },
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['css-loader', postCSSLoader, 'sass-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js'],
  },
};
