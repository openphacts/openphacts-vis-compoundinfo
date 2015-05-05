/*
 * openphacts-vis-compoundinfo
 * https://github.com/openphacts/openphacts-vis-compoundinfo
 *
 * Copyright (c) 2014 Openphacts
 * Licenced under the MIT licence.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var openphactsviscompoundinfo = require('../..');

describe('openphacts-vis-compoundinfo module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new openphactsviscompoundinfo(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
