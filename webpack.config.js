const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: `babel-loader`
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: `style-loader`
        },
        {
          loader: `css-loader`
        }
      ]}
    ]
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true
  }
};
