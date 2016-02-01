'use strict';
var assert = require('power-assert');
var firefoxGetWindow = require('./');

it('should ', function () {
  assert.strictEqual(firefoxGetWindow('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(firefoxGetWindow('unicorns'), 'unicorns & wrong');
});
