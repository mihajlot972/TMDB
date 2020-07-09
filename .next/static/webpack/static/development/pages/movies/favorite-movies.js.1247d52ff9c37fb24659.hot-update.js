webpackHotUpdate("static/development/pages/movies/favorite-movies.js",{

/***/ "./pages/movies/favorite-movies.jsx":
/*!******************************************!*\
  !*** ./pages/movies/favorite-movies.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/Layout */ \"./components/Layout/Layout.jsx\");\n/* harmony import */ var _components_EmptyItem_EmptyItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/EmptyItem/EmptyItem */ \"./components/EmptyItem/EmptyItem.jsx\");\n/* harmony import */ var _components_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MovieCard/MovieCard */ \"./components/MovieCard/MovieCard.jsx\");\n/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/movie-service */ \"./services/movie-service.js\");\n\n\n\nvar _jsxFileName = \"/home/mihajlot/movie-app-test/pages/movies/favorite-movies.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction FavoriteMovies() {\n  _s();\n\n  var _this = this;\n\n  var _isMounted = true;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      currentMovies = _useState2[0],\n      setCurrentMovies = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      favoriteMoviesStatus = _useState3[0],\n      setFavoriteMoviesStatus = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // TODO: use cookies instead of localstorage \n    var localStorageData = Object.keys(localStorage);\n    console.log(localStorageData);\n\n    if (localStorageData.access_token) {\n      fetchFavoriteMovies(localStorageData.account_id, localStorageData.session_id);\n      setFavoriteMoviesStatus(\"Your favorite list is empty.\");\n    } else {\n      setFavoriteMoviesStatus(\"You need to authenticate to be able to add and see favorite movies\");\n    }\n\n    return function () {\n      _isMounted = false;\n    };\n  }, []);\n\n  function fetchFavoriteMovies(_x, _x2) {\n    return _fetchFavoriteMovies.apply(this, arguments);\n  }\n\n  function _fetchFavoriteMovies() {\n    _fetchFavoriteMovies = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(account_id, session_id) {\n      var movies;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.next = 3;\n              return Object(_services_movie_service__WEBPACK_IMPORTED_MODULE_7__[\"getFavoriteMovies\"])(account_id, session_id);\n\n            case 3:\n              movies = _context.sent;\n              setLoading(false);\n              setCurrentMovies(movies.results);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchFavoriteMovies.apply(this, arguments);\n  }\n\n  ;\n  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, \"List of Favorite Movies\")), __jsx(\"div\", {\n    style: {\n      color: 'white'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, loading ? __jsx(_components_EmptyItem_EmptyItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 31\n    }\n  }, \"Loading movies from the API...\") : currentMovies.length === 0 ? __jsx(_components_EmptyItem_EmptyItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 54\n    }\n  }, favoriteMoviesStatus) : currentMovies.map(function (movie) {\n    return __jsx(_components_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      id: movie.id,\n      poster_path: movie.poster_path,\n      title: movie.title,\n      overview: movie.overview,\n      release_date: movie.release_date,\n      vote_average: movie.vote_average,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 36\n      }\n    });\n  })));\n}\n\n_s(FavoriteMovies, \"VP1MukLltFgpqH+IecBZeCJrs84=\");\n\n_c = FavoriteMovies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoriteMovies);\n\nvar _c;\n\n$RefreshReg$(_c, \"FavoriteMovies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZXMvZmF2b3JpdGUtbW92aWVzLmpzeD80MmMxIl0sIm5hbWVzIjpbIkZhdm9yaXRlTW92aWVzIiwiX2lzTW91bnRlZCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50TW92aWVzIiwic2V0Q3VycmVudE1vdmllcyIsImZhdm9yaXRlTW92aWVzU3RhdHVzIiwic2V0RmF2b3JpdGVNb3ZpZXNTdGF0dXMiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2VEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJhY2Nlc3NfdG9rZW4iLCJmZXRjaEZhdm9yaXRlTW92aWVzIiwiYWNjb3VudF9pZCIsInNlc3Npb25faWQiLCJnZXRGYXZvcml0ZU1vdmllcyIsIm1vdmllcyIsInJlc3VsdHMiLCJjb2xvciIsImxlbmd0aCIsIm1hcCIsIm1vdmllIiwiaWQiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwib3ZlcnZpZXciLCJyZWxlYXNlX2RhdGUiLCJ2b3RlX2F2ZXJhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFJQyxVQUFVLEdBQUcsSUFBakI7O0FBRHNCLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVmQyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFBQSxtQkFHb0JGLHNEQUFRLENBQUMsRUFBRCxDQUg1QjtBQUFBLE1BR2ZHLGFBSGU7QUFBQSxNQUdBQyxnQkFIQTs7QUFBQSxtQkFJa0NKLHNEQUFRLENBQUMsRUFBRCxDQUoxQztBQUFBLE1BSWZLLG9CQUplO0FBQUEsTUFJT0MsdUJBSlA7O0FBTXRCQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBLFFBQUlDLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsWUFBWixDQUF2QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsZ0JBQVo7O0FBQ0EsUUFBSUEsZ0JBQWdCLENBQUNNLFlBQXJCLEVBQW1DO0FBQy9CQyx5QkFBbUIsQ0FBQ1AsZ0JBQWdCLENBQUNRLFVBQWxCLEVBQThCUixnQkFBZ0IsQ0FBQ1MsVUFBL0MsQ0FBbkI7QUFDQVgsNkJBQXVCLENBQUMsOEJBQUQsQ0FBdkI7QUFDSCxLQUhELE1BR087QUFDSEEsNkJBQXVCLENBQUMsb0VBQUQsQ0FBdkI7QUFDSDs7QUFDRCxXQUFPLFlBQU07QUFDVFAsZ0JBQVUsR0FBRyxLQUFiO0FBQ0gsS0FGRDtBQUdILEdBYlEsRUFhTixFQWJNLENBQVQ7O0FBTnNCLFdBcUJQZ0IsbUJBckJPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRNQXFCdEIsaUJBQW1DQyxVQUFuQyxFQUErQ0MsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lmLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBREo7QUFBQSxxQkFFdUJnQixpRkFBaUIsQ0FBQ0YsVUFBRCxFQUFhQyxVQUFiLENBRnhDOztBQUFBO0FBRVFFLG9CQUZSO0FBR0lqQix3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSw4QkFBZ0IsQ0FBQ2UsTUFBTSxDQUFDQyxPQUFSLENBQWhCOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBckJzQjtBQUFBO0FBQUE7O0FBMEJyQjtBQUVELFNBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFwQixPQUFPLEdBQUcsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUFILEdBQ0hFLGFBQWEsQ0FBQ21CLE1BQWQsS0FBeUIsQ0FBekIsR0FBNkIsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlqQixvQkFBWixDQUE3QixHQUE2RUYsYUFBYSxDQUFDb0IsR0FBZCxDQUFrQixVQUFBQyxLQUFLLEVBQUk7QUFDcEcsV0FBTyxNQUFDLHVFQUFEO0FBQ0gsUUFBRSxFQUFFQSxLQUFLLENBQUNDLEVBRFA7QUFFSCxpQkFBVyxFQUFFRCxLQUFLLENBQUNFLFdBRmhCO0FBR0gsV0FBSyxFQUFFRixLQUFLLENBQUNHLEtBSFY7QUFJSCxjQUFRLEVBQUVILEtBQUssQ0FBQ0ksUUFKYjtBQUtILGtCQUFZLEVBQUVKLEtBQUssQ0FBQ0ssWUFMakI7QUFNSCxrQkFBWSxFQUFFTCxLQUFLLENBQUNNLFlBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQU9ILEdBUjRFLENBSHpGLENBSkosQ0FESjtBQXVCSDs7R0FuRFFoQyxjOztLQUFBQSxjO0FBcURNQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL21vdmllcy9mYXZvcml0ZS1tb3ZpZXMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0IEVtcHR5SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VtcHR5SXRlbS9FbXB0eUl0ZW0nXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW92aWVDYXJkL01vdmllQ2FyZCdcbmltcG9ydCB7IGdldEZhdm9yaXRlTW92aWVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW92aWUtc2VydmljZSc7XG5cbmZ1bmN0aW9uIEZhdm9yaXRlTW92aWVzKCkge1xuICAgIGxldCBfaXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRNb3ZpZXMsIHNldEN1cnJlbnRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtmYXZvcml0ZU1vdmllc1N0YXR1cywgc2V0RmF2b3JpdGVNb3ZpZXNTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiB1c2UgY29va2llcyBpbnN0ZWFkIG9mIGxvY2Fsc3RvcmFnZSBcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZURhdGEgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZURhdGEpXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2VEYXRhLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgZmV0Y2hGYXZvcml0ZU1vdmllcyhsb2NhbFN0b3JhZ2VEYXRhLmFjY291bnRfaWQsIGxvY2FsU3RvcmFnZURhdGEuc2Vzc2lvbl9pZCk7XG4gICAgICAgICAgICBzZXRGYXZvcml0ZU1vdmllc1N0YXR1cyhcIllvdXIgZmF2b3JpdGUgbGlzdCBpcyBlbXB0eS5cIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEZhdm9yaXRlTW92aWVzU3RhdHVzKFwiWW91IG5lZWQgdG8gYXV0aGVudGljYXRlIHRvIGJlIGFibGUgdG8gYWRkIGFuZCBzZWUgZmF2b3JpdGUgbW92aWVzXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGYXZvcml0ZU1vdmllcyhhY2NvdW50X2lkLCBzZXNzaW9uX2lkKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGxldCBtb3ZpZXMgPSBhd2FpdCBnZXRGYXZvcml0ZU1vdmllcyhhY2NvdW50X2lkLCBzZXNzaW9uX2lkKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0Q3VycmVudE1vdmllcyhtb3ZpZXMucmVzdWx0cylcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MaXN0IG9mIEZhdm9yaXRlIE1vdmllczwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxFbXB0eUl0ZW0+TG9hZGluZyBtb3ZpZXMgZnJvbSB0aGUgQVBJLi4uPC9FbXB0eUl0ZW0+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb3ZpZXMubGVuZ3RoID09PSAwID8gPEVtcHR5SXRlbT57ZmF2b3JpdGVNb3ZpZXNTdGF0dXN9PC9FbXB0eUl0ZW0+IDogY3VycmVudE1vdmllcy5tYXAobW92aWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TW92aWVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyX3BhdGg9e21vdmllLnBvc3Rlcl9wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ2aWV3PXttb3ZpZS5vdmVydmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZV9kYXRlPXttb3ZpZS5yZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVfYXZlcmFnZT17bW92aWUudm90ZV9hdmVyYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVNb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/favorite-movies.jsx\n");

/***/ })

})