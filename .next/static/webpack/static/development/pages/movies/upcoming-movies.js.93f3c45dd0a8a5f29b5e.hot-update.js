webpackHotUpdate("static/development/pages/movies/upcoming-movies.js",{

/***/ "./components/AddToFavorites/AddToFavorites.jsx":
/*!******************************************************!*\
  !*** ./components/AddToFavorites/AddToFavorites.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth-service */ \"./services/auth-service.js\");\n/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/movie-service */ \"./services/movie-service.js\");\n/* harmony import */ var _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddToFavorites.module.scss */ \"./components/AddToFavorites/AddToFavorites.module.scss\");\n/* harmony import */ var _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-tooltip */ \"./node_modules/react-tooltip/dist/index.es.js\");\n/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modal/Modal */ \"./components/Modal/Modal.jsx\");\n/* harmony import */ var _Shared_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Shared/Button/Button */ \"./components/Shared/Button/Button.jsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/home/mihajlot/movie-app-test/components/AddToFavorites/AddToFavorites.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction AddToFavorites(_ref) {\n  _s();\n\n  var movieId = _ref.movieId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isModal = _useState[0],\n      setModal = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      requestURL = _useState2[0],\n      setRequestURL = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      success = _useState3[0],\n      setSuccess = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      deleteSuccess = _useState4[0],\n      setDeleteSuccess = _useState4[1];\n\n  function addFavorite() {\n    return _addFavorite.apply(this, arguments);\n  }\n\n  function _addFavorite() {\n    _addFavorite = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var access_token, account_id, session_id, requestToken, markFavorite;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              access_token = localStorage.getItem(\"access_token\");\n              account_id = localStorage.getItem(\"account_id\");\n              session_id = localStorage.getItem(\"session_id\");\n\n              if (access_token) {\n                _context.next = 12;\n                break;\n              }\n\n              setModal(true);\n              _context.next = 7;\n              return Object(_services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"createRequestToken\"])();\n\n            case 7:\n              requestToken = _context.sent;\n              localStorage.setItem('request_token', requestToken.request_token);\n              setRequestURL(\"https://www.themoviedb.org/auth/access?request_token=\".concat(requestToken.request_token));\n              _context.next = 17;\n              break;\n\n            case 12:\n              _context.next = 14;\n              return Object(_services_movie_service__WEBPACK_IMPORTED_MODULE_4__[\"markFavoriteMovie\"])(movieId, account_id, session_id);\n\n            case 14:\n              markFavorite = _context.sent;\n\n              if (markFavorite.status_message === \"Success.\") {\n                setSuccess(\"Movie added to your favorites list!\");\n              }\n\n              if (markFavorite.status_message === \"The item/record was updated successfully.\") {\n                setSuccess(\"This movie is in your favorite list\");\n              }\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _addFavorite.apply(this, arguments);\n  }\n\n  function removeFavorite() {\n    return _removeFavorite.apply(this, arguments);\n  }\n\n  function _removeFavorite() {\n    _removeFavorite = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var account_id, session_id, markFavorite;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              account_id = localStorage.getItem(\"account_id\");\n              session_id = localStorage.getItem(\"session_id\");\n              _context2.next = 4;\n              return Object(_services_movie_service__WEBPACK_IMPORTED_MODULE_4__[\"markFavoriteMovie\"])(movieId, account_id, session_id, false);\n\n            case 4:\n              markFavorite = _context2.sent;\n\n              if (markFavorite.status_message === \"The item/record was deleted successfully.\") {\n                setSuccess(\"Movie removed from favorites\");\n                setDeleteSuccess(true);\n              }\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _removeFavorite.apply(this, arguments);\n  }\n\n  return __jsx(\"div\", {\n    className: _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addToFavoritesWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(_Modal_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    isVisible: isModal,\n    title: \"We need to authorize you first\",\n    content: __jsx(\"a\", {\n      href: requestURL,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 26\n      }\n    }, \"Click here to approve account usage\"),\n    footer: __jsx(_Shared_Button_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      onClick: function onClick() {\n        return setModal(lodash__WEBPACK_IMPORTED_MODULE_10__[\"stubFalse\"]);\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 25\n      }\n    }, \"Not now\"),\n    onClose: function onClose() {\n      return setModal(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.addToFavorites,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, success.length > 0 ? __jsx(\"div\", {\n    className: _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.heartPressed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 39\n    }\n  }, success, !deleteSuccess ? __jsx(\"p\", {\n    className: _AddToFavorites_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.removeFavorite,\n    onClick: removeFavorite,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 39\n    }\n  }, \"Remove it?\") : null) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"HeartOutlined\"], {\n    onClick: addFavorite,\n    \"data-tip\": \"Love this movie? Add it to favorites!\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 26\n    }\n  }), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    html: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(AddToFavorites, \"2Bwg9iQN9lj/U485h+9lrZ/Xtas=\");\n\n_c = AddToFavorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToFavorites);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddToFavorites\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZFRvRmF2b3JpdGVzL0FkZFRvRmF2b3JpdGVzLmpzeD9lOWM4Il0sIm5hbWVzIjpbIkFkZFRvRmF2b3JpdGVzIiwibW92aWVJZCIsInVzZVN0YXRlIiwiaXNNb2RhbCIsInNldE1vZGFsIiwicmVxdWVzdFVSTCIsInNldFJlcXVlc3RVUkwiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImRlbGV0ZVN1Y2Nlc3MiLCJzZXREZWxldGVTdWNjZXNzIiwiYWRkRmF2b3JpdGUiLCJhY2Nlc3NfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjb3VudF9pZCIsInNlc3Npb25faWQiLCJjcmVhdGVSZXF1ZXN0VG9rZW4iLCJyZXF1ZXN0VG9rZW4iLCJzZXRJdGVtIiwicmVxdWVzdF90b2tlbiIsIm1hcmtGYXZvcml0ZU1vdmllIiwibWFya0Zhdm9yaXRlIiwic3RhdHVzX21lc3NhZ2UiLCJyZW1vdmVGYXZvcml0ZSIsInN0eWxlcyIsImFkZFRvRmF2b3JpdGVzV3JhcHBlciIsInN0dWJGYWxzZSIsImFkZFRvRmF2b3JpdGVzIiwibGVuZ3RoIiwiaGVhcnRQcmVzc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLEtBQUQsQ0FESDtBQUFBLE1BQzFCQyxPQUQwQjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUUxQkcsVUFGMEI7QUFBQSxNQUVkQyxhQUZjOztBQUFBLG1CQUdISixzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BRzFCSyxPQUgwQjtBQUFBLE1BR2pCQyxVQUhpQjs7QUFBQSxtQkFJU04s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QUNLckIsT0FBTyxDQUFDc0IsTUFBUixHQUFpQixDQUFqQixHQUFxQjtBQUFLLGFBQVMsRUFBRUosa0VBQU0sQ0FBQ0ssWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNqQnZCLE9BRGlCLEVBRWpCLENBQUNFLGFBQUQsR0FBaUI7QUFBRyxhQUFTLEVBQUVnQixrRUFBTSxDQUFDRCxjQUFyQjtBQUFxQyxXQUFPLEVBQUVBLGNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWpCLEdBQWdHLElBRi9FLENBQXJCLEdBR1EsTUFBQywrREFBRDtBQUFlLFdBQU8sRUFBRWIsV0FBeEI7QUFBcUMsZ0JBQVMsdUNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKYixFQU1JLE1BQUMscURBQUQ7QUFBYyxRQUFJLEVBQUUsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBVEosQ0FESjtBQW9CSDs7R0F6RFFYLGM7O0tBQUFBLGM7QUE0RE1BLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BZGRUb0Zhdm9yaXRlcy9BZGRUb0Zhdm9yaXRlcy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0VG9rZW4sIGNyZWF0ZUFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC1zZXJ2aWNlJztcbmltcG9ydCB7IG1hcmtGYXZvcml0ZU1vdmllIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW92aWUtc2VydmljZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRkVG9GYXZvcml0ZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgSGVhcnRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbC9Nb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1NoYXJlZC9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IHN0dWJGYWxzZSwgcmVtb3ZlIH0gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gQWRkVG9GYXZvcml0ZXMoeyBtb3ZpZUlkIH0pIHtcbiAgICBjb25zdCBbaXNNb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZXF1ZXN0VVJMLCBzZXRSZXF1ZXN0VVJMXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtkZWxldGVTdWNjZXNzLCBzZXREZWxldGVTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZEZhdm9yaXRlKCkge1xuICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgIGxldCBhY2NvdW50X2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2NvdW50X2lkXCIpO1xuICAgICAgICBsZXQgc2Vzc2lvbl9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vzc2lvbl9pZFwiKTtcblxuICAgICAgICBpZiAoIWFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcbiAgICAgICAgICAgIGxldCByZXF1ZXN0VG9rZW4gPSBhd2FpdCBjcmVhdGVSZXF1ZXN0VG9rZW4oKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXF1ZXN0X3Rva2VuJywgcmVxdWVzdFRva2VuLnJlcXVlc3RfdG9rZW4pO1xuICAgICAgICAgICAgc2V0UmVxdWVzdFVSTChgaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvYXV0aC9hY2Nlc3M/cmVxdWVzdF90b2tlbj0ke3JlcXVlc3RUb2tlbi5yZXF1ZXN0X3Rva2VufWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWFya0Zhdm9yaXRlID0gYXdhaXQgbWFya0Zhdm9yaXRlTW92aWUobW92aWVJZCwgYWNjb3VudF9pZCwgc2Vzc2lvbl9pZCk7XG4gICAgICAgICAgICBpZiAobWFya0Zhdm9yaXRlLnN0YXR1c19tZXNzYWdlID09PSBcIlN1Y2Nlc3MuXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKFwiTW92aWUgYWRkZWQgdG8geW91ciBmYXZvcml0ZXMgbGlzdCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWFya0Zhdm9yaXRlLnN0YXR1c19tZXNzYWdlID09PSBcIlRoZSBpdGVtL3JlY29yZCB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKFwiVGhpcyBtb3ZpZSBpcyBpbiB5b3VyIGZhdm9yaXRlIGxpc3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZhdm9yaXRlKCkge1xuICAgICAgICBsZXQgYWNjb3VudF9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjb3VudF9pZFwiKTtcbiAgICAgICAgbGV0IHNlc3Npb25faWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlc3Npb25faWRcIik7XG4gICAgICAgIGxldCBtYXJrRmF2b3JpdGUgPSBhd2FpdCBtYXJrRmF2b3JpdGVNb3ZpZShtb3ZpZUlkLCBhY2NvdW50X2lkLCBzZXNzaW9uX2lkLCBmYWxzZSk7XG4gICAgICAgIGlmIChtYXJrRmF2b3JpdGUuc3RhdHVzX21lc3NhZ2UgPT09IFwiVGhlIGl0ZW0vcmVjb3JkIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseS5cIikge1xuICAgICAgICAgICAgc2V0U3VjY2VzcyhcIk1vdmllIHJlbW92ZWQgZnJvbSBmYXZvcml0ZXNcIilcbiAgICAgICAgICAgIHNldERlbGV0ZVN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVG9GYXZvcml0ZXNXcmFwcGVyfT5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17aXNNb2RhbH1cbiAgICAgICAgICAgICAgICB0aXRsZT1cIldlIG5lZWQgdG8gYXV0aG9yaXplIHlvdSBmaXJzdFwiXG4gICAgICAgICAgICAgICAgY29udGVudD17PGEgaHJlZj17cmVxdWVzdFVSTH0gdGFyZ2V0PSdfYmxhbmsnPkNsaWNrIGhlcmUgdG8gYXBwcm92ZSBhY2NvdW50IHVzYWdlPC9hPn1cbiAgICAgICAgICAgICAgICBmb290ZXI9ezxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kYWwoc3R1YkZhbHNlKX0+Tm90IG5vdzwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZFRvRmF2b3JpdGVzfT5cbiAgICAgICAgICAgICAgICB7c3VjY2Vzcy5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFydFByZXNzZWR9PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgeyFkZWxldGVTdWNjZXNzID8gPHAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlRmF2b3JpdGV9IG9uQ2xpY2s9e3JlbW92ZUZhdm9yaXRlfT5SZW1vdmUgaXQ/PC9wPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogPEhlYXJ0T3V0bGluZWQgb25DbGljaz17YWRkRmF2b3JpdGV9IGRhdGEtdGlwPVwiTG92ZSB0aGlzIG1vdmllPyBBZGQgaXQgdG8gZmF2b3JpdGVzIVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxSZWFjdFRvb2x0aXAgaHRtbD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9GYXZvcml0ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddToFavorites/AddToFavorites.jsx\n");

/***/ })

})