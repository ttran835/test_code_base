const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    // minimize: true,
  },
};

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
  entry: path.resolve(__dirname, './client/public/scripts/scripts.js'),
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
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
        use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: ['style-loader', postCSSLoader, 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
