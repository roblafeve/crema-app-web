const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin-alt");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")],
    },
    test: /\.(ts|tsx)$/,
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require("react-dev-utils/typescriptFormatter"),
    })
  );

  config.performance = { hints: false }

  return config;
};