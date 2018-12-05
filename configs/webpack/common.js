// shared config (dev and prod)
const {resolve} = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|ico)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({template: 'index.html.ejs', favicon: 'assets/img/favicon.ico'}),
    new CopyWebpackPlugin([
      { from: 'assets/js', to: 'assets/js' }
    ]),
    new GoogleFontsPlugin({
      fonts: [
          { family: "Roboto", variants: [ "300", "400", "500" ] },
          { family: "Lato", variants: [ "400", "700", "400italic", "700italic" ] },
      ]
  })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'clipboard': 'ClipboardJS',
    'parse-domain': 'parseDomain',
  },
  performance: {
    hints: false,
  },
};
