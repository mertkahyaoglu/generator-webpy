/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('webpy generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('webpy:app', [
      '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('should create expected files', function (done) {
    var expected = [
    'static',
    'templates',
    'web',
    'project.py',
    'templates',
    '.gitignore',
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
