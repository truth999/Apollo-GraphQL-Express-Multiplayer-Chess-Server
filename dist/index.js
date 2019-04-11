"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _http = _interopRequireDefault(require("http"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("./schema"));

var _models = _interopRequireWildcard(require("./models"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));

var getAuthenticatedUser =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(authHeader) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!authHeader) {
              _context.next = 9;
              break;
            }

            token = authHeader.split(' ')[1];
            _context.prev = 2;
            return _context.abrupt("return", _jsonwebtoken["default"].verify(token, process.env.SECRET));

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", null);

          case 9:
            return _context.abrupt("return", null);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 6]]);
  }));

  return function getAuthenticatedUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  subscriptions: {
    onConnect: function () {
      var _onConnect = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(connectionParams) {
        var authHeader, authenticatedUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                authHeader = connectionParams.Authorization;

                if (!authHeader) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return getAuthenticatedUser(authHeader);

              case 4:
                authenticatedUser = _context2.sent;
                return _context2.abrupt("return", {
                  authenticatedUser: authenticatedUser
                });

              case 6:
                throw new _apolloServerExpress.AuthenticationError('Not authenticated');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onConnect(_x2) {
        return _onConnect.apply(this, arguments);
      }

      return onConnect;
    }()
  },
  context: function () {
    var _context3 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(_ref2) {
      var req, connection, authHeader, authenticatedUser;
      return _regenerator["default"].wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = _ref2.req, connection = _ref2.connection;

              if (!connection) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", (0, _objectSpread2["default"])({
                models: _models["default"]
              }, connection.context));

            case 3:
              authHeader = req.get('Authorization');
              _context4.next = 6;
              return getAuthenticatedUser(authHeader);

            case 6:
              authenticatedUser = _context4.sent;
              return _context4.abrupt("return", {
                models: _models["default"],
                secret: process.env.SECRET,
                authenticatedUser: authenticatedUser
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    function context(_x3) {
      return _context3.apply(this, arguments);
    }

    return context;
  }()
});
server.applyMiddleware({
  app: app,
  path: '/graphql'
});

var httpServer = _http["default"].createServer(app);

var PORT = process.env.PORT || 8000;
server.installSubscriptionHandlers(httpServer);
(0, _models.connectDb)().then(function () {
  httpServer.listen({
    port: PORT
  }, function () {
    console.log("Server ready at http://localhost:".concat(PORT).concat(server.graphqlPath));
    console.log("Subscriptions ready at ws://localhost:".concat(PORT).concat(server.subscriptionsPath));
  });
});