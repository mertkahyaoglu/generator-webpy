/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');

describe('webpy generator', function () {
  this.timeout(5000);
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });
});
