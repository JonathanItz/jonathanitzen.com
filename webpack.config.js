/* eslint-disable max-len */

const path = require('path');
const childProcess = require('child_process');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const hasha = require('hasha');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const pkg = require('./package.json');

module.exports = (env, {
  mode,
}) => {
  const DEV = /development|dev/i.test(mode);
  const PROD = /production|prod/i.test(mode);
  const COMMIT_HASH = childProcess.execSync('git rev-parse HEAD').toString().trim();
  const BUILD_DATE = new Date();

  const config = {
    devtool: DEV ? 'eval-source-map' : 'source-map',

    entry: {
      main: [
        './src/main.js',
        './src/main.scss',
      ],
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
      hashFunction: 'xxhash64',
    },

    devServer: {
      watchFiles: [
        'src/**/*.scss',
        'src/**/*.ejs',
      ],
      static: {
        directory: path.resolve(__dirname, 'static'),
      },
      devMiddleware: {
        publicPath: '/starsjs/',
        // When sharing the site using ssh -R 80:localhost:8080 ssh.localhost.run
        // disableHostCheck: true,
      },
      client: {
        overlay: {
          warnings: false,
          errors: false,
        },
      },
    },

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      }, {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, {
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: {
          loader: 'ejs-compiled-loader',
        },
      }],
    },

    plugins: [
      new ESLintPlugin({ fix: true }),

      // new HtmlWebpackPlugin({
      //   filename: path.resolve(__dirname, 'dist/index.html'),
      //   template: path.resolve(__dirname, 'src/components/app/app.template.ejs'),
      //   title: 'Stars.js',
      //   description: 'Generate a rotating galaxy in a <canvas>.',
      //   // favicon: path.resolve(__dirname, 'static/favicon.ico'),
      //   inlineSource: '.(js|css)$', // Inline JS and CSS.
      //   minify: PROD,
      //   meta: {
      //     author: pkg.author.name,
      //     description: pkg.description,
      //   },
      //   // inlineSource: '.css$', // Inline JS and CSS.
      // }),

      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),

      new StyleLintPlugin({
        fix: true,
      }),

      // new CopyWebpackPlugin({
      //   patterns: [{
      //     from: 'static',
      //   }],
      // }),

      // Defines variables available globally that Webpack can evaluate in compilation time and remove dead code:
      // new webpack.DefinePlugin({}),

      // Same as before, but sets properties inside `process.env` specifically:
      new webpack.EnvironmentPlugin({
        DEV,
        PROD,
        BUILD_DATE,
        COMMIT_HASH,
      }),

      // new BundleAnalyzerPlugin(),
    ],

    optimization: {
      minimize: true,

      // Extract all styles in a single file:
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },

      minimizer: PROD ? [
        '...',
        new CssMinimizerPlugin(),
      ] : [],
    },
  };

  return config;
};
