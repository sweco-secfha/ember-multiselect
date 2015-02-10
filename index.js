/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-multiselect',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/multiselect.css');
  }
};
