var fastBrowserify = require('broccoli-fast-browserify');
var babelify = require('babelify');
var stringify = require('stringify');

var transformedBabelify = fastBrowserify('sources/js', {
  browserify: {
    extensions: [".js"]
  },
  bundles: {
    'js/bundle.js': {
      entryPoints: ['app.js'],
      transform: [
        {
          tr: babelify,
          options: {
            extensions: [".js"]
          }
        },
        {
          tr: stringify,
          options: {
            appliesTo: { includeExtensions: ['.tpl'] }
          }
        }
      ]
    }
  }
});

module.exports = transformedBabelify;
