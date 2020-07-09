webpackHotUpdate("static/development/pages/movies/[movie_id].js",{

/***/ "./components/AddToFavorites/AddToFavorites.jsx":
false,

/***/ "./components/AddToFavorites/AddToFavorites.module.scss":
false,

/***/ "./components/Modal/Modal.jsx":
false,

/***/ "./components/Modal/Modal.module.scss":
false,

/***/ "./components/MovieDetails/MovieDetails.jsx":
/*!**************************************************!*\
  !*** ./components/MovieDetails/MovieDetails.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieDetails.module.scss */ \"./components/MovieDetails/MovieDetails.module.scss\");\n/* harmony import */ var _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/mihajlot/movie-app-test/components/MovieDetails/MovieDetails.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction MovieDetails(props) {\n  var _this = this;\n\n  function formatNumberToCurrency(num) {\n    return new Intl.NumberFormat('de-DE', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(num);\n  }\n\n  return __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.movieDetailsWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.movieDetail,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.movieDetailName,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerContent,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 29\n    }\n  }, props.movieDetails.title)), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tagline,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 29\n    }\n  }, props.movieDetails.tagline))), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rating,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 25\n    }\n  }, props.movieDetails.vote_average), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"StarOutlined\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overview,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, props.movieDetails.overview)), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.genres,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, props.movieDetails.genres.map(function (genre) {\n    return __jsx(\"p\", {\n      key: genre.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 65\n      }\n    }, genre.name);\n  }))), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \"Movie Information\"), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.movieData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.revenue,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.microInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  }, \"Total revenue\"), formatNumberToCurrency(props.movieDetails.revenue)), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.budget,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.microInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }, \"Total budget\"), formatNumberToCurrency(props.movieDetails.budget)), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.popularity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.microInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 25\n    }\n  }, \"Popularity\"), props.movieDetails.popularity), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.runtime,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.microInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \"Runtime\"), props.movieDetails.runtime, \" minutes\"), __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.release_date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.microInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, \"Release date\"), props.movieDetails.release_date)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _MovieDetails_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.goBack,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"ArrowLeftOutlined\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \"Go back\")))));\n}\n\n_c = MovieDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vdmllRGV0YWlscy9Nb3ZpZURldGFpbHMuanN4PzE4MjAiXSwibmFtZXMiOlsiTW92aWVEZXRhaWxzIiwicHJvcHMiLCJmb3JtYXROdW1iZXJUb0N1cnJlbmN5IiwibnVtIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJzdHlsZXMiLCJtb3ZpZURldGFpbHNXcmFwcGVyIiwibW92aWVEZXRhaWwiLCJtb3ZpZURldGFpbE5hbWUiLCJoZWFkZXJDb250ZW50IiwiaGVhZGVyIiwibW92aWVEZXRhaWxzIiwidGl0bGUiLCJ0YWdsaW5lIiwicmF0aW5nIiwidm90ZV9hdmVyYWdlIiwib3ZlcnZpZXciLCJkZXNjcmlwdGlvbiIsImdlbnJlcyIsIm1hcCIsImdlbnJlIiwiaWQiLCJuYW1lIiwibW92aWVEYXRhIiwicmV2ZW51ZSIsIm1pY3JvSW5mbyIsImJ1ZGdldCIsInBvcHVsYXJpdHkiLCJydW50aW1lIiwicmVsZWFzZV9kYXRlIiwiZ29CYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUV6QixXQUFTQyxzQkFBVCxDQUFnQ0MsR0FBaEMsRUFBcUM7QUFDakMsV0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBRUMsV0FBSyxFQUFFLFVBQVQ7QUFBcUJDLGNBQVEsRUFBRTtBQUEvQixLQUEvQixFQUF1RUMsTUFBdkUsQ0FBOEVMLEdBQTlFLENBQVA7QUFDSDs7QUFFRCxTQUNJO0FBQUssYUFBUyxFQUFFTSxnRUFBTSxDQUFDQyxtQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCxnRUFBTSxDQUFDRSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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dGFpbHMvTW92aWVEZXRhaWxzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb3ZpZURldGFpbHMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBBcnJvd0xlZnRPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gTW92aWVEZXRhaWxzKHByb3BzKSB7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXROdW1iZXJUb0N1cnJlbmN5KG51bSkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdkZS1ERScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KS5mb3JtYXQobnVtKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVEZXRhaWxzV3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllRGV0YWlsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllRGV0YWlsTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntwcm9wcy5tb3ZpZURldGFpbHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMubW92aWVEZXRhaWxzLnRhZ2xpbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvcHMubW92aWVEZXRhaWxzLnZvdGVfYXZlcmFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Rhck91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5tb3ZpZURldGFpbHMub3ZlcnZpZXd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm1vdmllRGV0YWlscy5nZW5yZXMubWFwKGdlbnJlID0+IDxwIGtleT17Z2VucmUuaWR9PntnZW5yZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPk1vdmllIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllRGF0YX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV2ZW51ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5taWNyb0luZm99PlRvdGFsIHJldmVudWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0TnVtYmVyVG9DdXJyZW5jeShwcm9wcy5tb3ZpZURldGFpbHMucmV2ZW51ZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1ZGdldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5taWNyb0luZm99PlRvdGFsIGJ1ZGdldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXROdW1iZXJUb0N1cnJlbmN5KHByb3BzLm1vdmllRGV0YWlscy5idWRnZXQpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1pY3JvSW5mb30+UG9wdWxhcml0eTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tb3ZpZURldGFpbHMucG9wdWxhcml0eX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucnVudGltZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5taWNyb0luZm99PlJ1bnRpbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubW92aWVEZXRhaWxzLnJ1bnRpbWV9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZV9kYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1pY3JvSW5mb30+UmVsZWFzZSBkYXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm1vdmllRGV0YWlscy5yZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdvQmFja30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdvIGJhY2s8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MovieDetails/MovieDetails.jsx\n");

/***/ }),

/***/ "./components/Shared/Button/Button.jsx":
false,

/***/ "./components/Shared/Button/Button.module.scss":
false,

/***/ "./config/tmdb-api.json":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/AddToFavorites/AddToFavorites.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Modal/Modal.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Shared/Button/Button.module.scss":
false,

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/react-tooltip/dist/index.es.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
false,

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./services/ApiRequest.js":
false,

/***/ "./services/auth-service.js":
false,

/***/ "./services/helper.js":
false,

/***/ "./services/movie-service.js":
false

})