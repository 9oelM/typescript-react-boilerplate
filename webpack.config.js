const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: "tslint-loader",
        enforce: "pre",
        options: {
          fix: true,
          tsConfigFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080
  }
};
