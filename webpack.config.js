module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  module: {
    rules: [{ loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ }],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: `${__dirname}/public`,
    compress: true,
    port: 3000,
  },
};
