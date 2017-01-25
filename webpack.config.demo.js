const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './demo');

module.exports = function (env) {
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ];

  return {
    devtool: 'eval',
    context: sourcePath,
    entry: {
      app: './index.js',
      vendor: ['react'],
    },
    output: {
      path: path.join(__dirname, './demo-build'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: {
            loader: 'eslint-loader',
            options: { extends: 'react-app' },
          },
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]',
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: [
                'react',
                ['es2015', { modules: false }],
                'stage-0',
                'react-hmre'
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath,
      ],
    },
    plugins,
    stats: {
      colors: {
        green: '\u001b[32m',
      },
    },
    devServer: {
      contentBase: './demo',
      historyApiFallback: true,
      port: 3000,
      compress: false,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        },
      },
    },
  };
};
