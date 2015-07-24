"use strict";

// Includes
var Filter = require('broccoli-filter');
var funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');


// Uppercase Filter
function LionFilter (inputTree, options) {
  // make 'new' keyword optional
  if (!(this instanceof LionFilter)) {
    return new LionFilter(inputTree, options);
  }

  Filter.call(this, inputTree, options);
}
LionFilter.prototype = Object.create(Filter.prototype);
LionFilter.prototype.constructor = LionFilter;
LionFilter.prototype.extensions = ['txt'];
LionFilter.prototype.targetExtension = 'txt';
LionFilter.prototype.processString = function (string, srcFile) {
  return string.toLocaleUpperCase();
}

// Lowercase Filter
function MouseFilter (inputTree, options) {
  // make 'new' keyword optional
  if (!(this instanceof MouseFilter)) {
    return new MouseFilter(inputTree, options);
  }

  Filter.call(this, inputTree, options);
}
MouseFilter.prototype = Object.create(Filter.prototype);
MouseFilter.prototype.constructor = MouseFilter;
MouseFilter.prototype.extensions = ['txt'];
MouseFilter.prototype.targetExtension = 'txt';
MouseFilter.prototype.processString = function (string, srcFile) {
  return string.toLocaleLowerCase();
}


var copyLion = function(tree, options) {
  options = options || {};
  options.destDir = 'LION';
  return funnel(tree, options);
};

var copyMouse = function(tree, options) {
  options = options || {};
  options.destDir = 'mouse';
  return funnel(tree, options);
};

var lionAndMouse = function(tree, options) {
  return new MergeTrees([LionFilter(copyLion(tree)), MouseFilter(copyMouse(tree))], options);
}

module.exports = lionAndMouse;
