module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/index.ts"]
  },
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [ // 適用する Loader は逆順で記載します。
              {
                loader: "babel-loader",
              },
              {
                loader: "ts-loader",
              }
            ]
      }
    ]
  }
};
