webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MovieCard/MovieCard.jsx":
/*!********************************************!*\
  !*** ./components/MovieCard/MovieCard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard.module.scss */ \"./components/MovieCard/MovieCard.module.scss\");\n/* harmony import */ var _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AddToFavorites_AddToFavorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddToFavorites/AddToFavorites */ \"./components/AddToFavorites/AddToFavorites.jsx\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Shared_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Button/Button */ \"./components/Shared/Button/Button.jsx\");\nvar _jsxFileName = \"/home/mihajlot/movie-app-test/components/MovieCard/MovieCard.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction MovieCard(_ref) {\n  var title = _ref.title,\n      id = _ref.id,\n      release_date = _ref.release_date,\n      overview = _ref.overview,\n      vote_average = _ref.vote_average;\n  return __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardHeader,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 21\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 25\n    }\n  }, title), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 25\n    }\n  })), __jsx(\"p\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, \"overview\"), __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardBody,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 25\n    }\n  }, overview))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardFooter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardFooterLeft,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"StarOutlined\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 29\n    }\n  }), __jsx(\"p\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.vote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 29\n    }\n  }, vote_average)), __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardFooterRight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 29\n    }\n  }, \"Release date\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 29\n    }\n  }, release_date))), __jsx(_AddToFavorites_AddToFavorites__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    movieId: id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: _MovieCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.movieDetails,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/movies/[movie_id]\",\n    as: \"/movies/\".concat(id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, __jsx(_Shared_Button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, \"See Movie Details\")))));\n}\n\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllQ2FyZC9Nb3ZpZUNhcmQuanN4Pzk4NDUiXSwibmFtZXMiOlsiTW92aWVDYXJkIiwidGl0bGUiLCJpZCIsInJlbGVhc2VfZGF0ZSIsIm92ZXJ2aWV3Iiwidm90ZV9hdmVyYWdlIiwic3R5bGVzIiwiY2FyZFdyYXBwZXIiLCJjYXJkIiwiY2FyZEhlYWRlciIsImNhcmRCb2R5IiwiY2FyZEZvb3RlciIsImNhcmRGb290ZXJMZWZ0Iiwidm90ZSIsImNhcmRGb290ZXJSaWdodCIsIm1vdmllRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxPQUF3RTtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsRUFBNEMsUUFBNUNBLEVBQTRDO0FBQUEsTUFBeENDLFlBQXdDLFFBQXhDQSxZQUF3QztBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQ3BFLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLDZEQUFNLENBQUNDLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUQsNkRBQU0sQ0FBQ0UsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUYsNkRBQU0sQ0FBQ0csVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsS0FBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFHLGFBQVMsRUFBRUssNkRBQU0sQ0FBQ0YsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixFQU1JO0FBQUssYUFBUyxFQUFFRSw2REFBTSxDQUFDSSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJTixRQUFKLENBREosQ0FOSixDQURKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRSw2REFBTSxDQUFDSyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVMLDZEQUFNLENBQUNNLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUcsYUFBUyxFQUFFTiw2REFBTSxDQUFDTyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCUixZQUE1QixDQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ1EsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlYLFlBQUosQ0FGSixDQUxKLENBREosRUFXSSxNQUFDLHNFQUFEO0FBQWdCLFdBQU8sRUFBRUQsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBWEosQ0FESixFQTBCSTtBQUFLLGFBQVMsRUFBRUksNkRBQU0sQ0FBQ1MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsb0JBQVg7QUFBZ0MsTUFBRSxvQkFBYWIsRUFBYixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixDQURKLENBREosQ0ExQkosQ0FESjtBQW9DSDs7S0FyQ1FGLFM7QUF3Q01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb3ZpZUNhcmQubW9kdWxlLnNjc3MnXG5pbXBvcnQgQWRkVG9GYXZvcml0ZXMgZnJvbSAnLi4vQWRkVG9GYXZvcml0ZXMvQWRkVG9GYXZvcml0ZXMnO1xuaW1wb3J0IHsgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vU2hhcmVkL0J1dHRvbi9CdXR0b24nO1xuXG5mdW5jdGlvbiBNb3ZpZUNhcmQoeyB0aXRsZSwgaWQsIHJlbGVhc2VfZGF0ZSwgb3ZlcnZpZXcsIHZvdGVfYXZlcmFnZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkV3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5vdmVydmlldzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57b3ZlcnZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRGb290ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkRm9vdGVyTGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZvdGV9Pnt2b3RlX2F2ZXJhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRGb290ZXJSaWdodH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVsZWFzZSBkYXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntyZWxlYXNlX2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWRkVG9GYXZvcml0ZXMgbW92aWVJZD17aWR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVEZXRhaWxzfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbW92aWVzL1ttb3ZpZV9pZF0nIGFzPXtgL21vdmllcy8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TZWUgTW92aWUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MovieCard/MovieCard.jsx\n");

/***/ })

})