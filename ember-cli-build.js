'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Sass = require('sass'); // Ensure you have node-sass or dart-sass installed

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      implementation: Sass,
    },
  });

  return app.toTree();
};
