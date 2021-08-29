const nodeExternals = require("webpack-node-externals");
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve?.fallback,
      assert: path.resolve(__dirname, "fallback/assert.js"),
      util: path.resolve(__dirname, "fallback/util.js"),
    },
  };

  actions.replaceWebpackConfig(config);
};
