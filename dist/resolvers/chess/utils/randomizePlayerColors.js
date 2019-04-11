"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Randomize player colors
 * @return {Array} colors - either ['w', 'b'] or ['b', 'w']
 */
var _default = function _default() {
  var colors = ['w', 'b'];

  if (Math.random() > 0.5) {
    return colors.reverse();
  }

  return colors;
};

exports["default"] = _default;