var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  modulesDirectories: ['src', 'node_modules'],
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif',
        'svg'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    style_modules: {
      extensions: ['scss'],
      filter: function filter(module, regex, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }
        return regex.test(module.name);
      },
      path: function path(module, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }
        return module.name;
      },
      parser: function parser(module, options, log) {
        if(options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        return module.source;
      }
    },
    graphql_query: {
      extensions: ['graphql', 'gql'],
    }
  }
};
