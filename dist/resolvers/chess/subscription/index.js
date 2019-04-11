"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _subscriptions = _interopRequireDefault(require("../../../subscriptions"));

var Subscription = {
  chessMoveMade: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions["default"].asyncIterator('chessMoveMade');
    }, function (_ref, _ref2, _ref3) {
      var chessMoveMade = _ref.chessMoveMade;
      var id = _ref2.id;
      var authenticatedUser = _ref3.authenticatedUser;
      var gameId = chessMoveMade.id.toString();
      var userId = authenticatedUser.id.toString();
      var playerOneId = chessMoveMade.playerOneID.toString();
      var playerTwoId = chessMoveMade.playerTwoID.toString();
      return gameId === id.toString() && (userId === playerOneId || userId === playerTwoId);
    })
  }
};
var _default = Subscription;
exports["default"] = _default;