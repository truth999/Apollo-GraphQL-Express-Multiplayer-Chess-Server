"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Get autenticated player color
 * @param {Object} player
 * @param {Object} game
 * @return {String} color - 'w', 'b' or null
 */
var _default = function _default(player, game) {
  var playerOneID = game.playerOneID,
      playerTwoID = game.playerTwoID,
      playerOneColor = game.playerOneColor,
      playerTwoColor = game.playerTwoColor;
  var color = null;

  if (playerOneID.equals(player.id)) {
    color = playerOneColor;
  } else if (playerTwoID.equals(player.id)) {
    color = playerTwoColor;
  }

  return color;
};

exports["default"] = _default;