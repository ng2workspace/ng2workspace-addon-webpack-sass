module.exports = function(options, workspace) {
  var config = workspace.get('webpack').webpackConfig;

  config.module.loaders.push({
    test: /\.s[ac]ss$/,
    loader: 'raw-loader!sass-loader'
  });
};