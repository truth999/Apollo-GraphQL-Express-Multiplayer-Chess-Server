"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Returns chess piece color
 * @param {String} piece
 * @return {String} color - 'b' or 'w'
 */
var _default = function _default(piece) {
  return piece.charCodeAt(0) >= 97 ? 'b' : 'w';
};

exports["default"] = _default;