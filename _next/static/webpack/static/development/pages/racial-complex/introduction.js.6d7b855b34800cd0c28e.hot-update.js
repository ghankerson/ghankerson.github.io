webpackHotUpdate("static/development/pages/racial-complex/introduction.js",{

/***/ "./components/PrevNext.tsx":
/*!*********************************!*\
  !*** ./components/PrevNext.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ghankerson/code/booknotes/components/PrevNext.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PrevNext = function PrevNext(_ref) {\n  var parent = _ref.parent,\n      prev = _ref.prev,\n      current = _ref.current,\n      next = _ref.next;\n  return __jsx(\"nav\", {\n    className: \"prev_next\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"parent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, parent), __jsx(\"ul\", {\n    className: \"prev_next\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, prev && __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Previous\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: prev.href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 36\n    }\n  }, prev.name))), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"Currently Reading\"), current), next && __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Next\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: next.href,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 36\n    }\n  }, next.name)))));\n};\n\n_c = PrevNext;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrevNext);\n\nvar _c;\n\n$RefreshReg$(_c, \"PrevNext\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByZXZOZXh0LnRzeD8xNzA4Il0sIm5hbWVzIjpbIlByZXZOZXh0IiwicGFyZW50IiwicHJldiIsImN1cnJlbnQiLCJuZXh0IiwiaHJlZiIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUM7QUFBQSxNQUFuQ0MsTUFBbUMsUUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxJQUFZLFFBQVpBLElBQVk7QUFDdEQsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JILE1BQXhCLENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUEsSUFBSSxDQUFDRyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUgsSUFBSSxDQUFDSSxJQUFULENBQXZCLENBRkYsQ0FGSixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUdILE9BRkgsQ0FQRixFQVdHQyxJQUFJLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlELElBQUksQ0FBQ0UsSUFBVCxDQUF2QixDQUZGLENBWkosQ0FGRixDQURGO0FBdUJELENBeEJEOztLQUFNTixRO0FBMEJTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJldk5leHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgUHJldk5leHRQcm9wcyB7XG4gIHBhcmVudDogc3RyaW5nLFxuICBwcmV2OiBvYmplY3QsXG4gIGN1cnJlbnQ6IHN0cmluZyxcbiAgbmV4dDogb2JqZWN0XG59XG5cbmNvbnN0IFByZXZOZXh0ID0gKCB7IHBhcmVudCwgcHJldiwgY3VycmVudCwgbmV4dCB9ICkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwicHJldl9uZXh0XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwicGFyZW50XCI+e3BhcmVudH08L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInByZXZfbmV4dFwiPlxuICAgICAgICB7cHJldiAmJiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPlByZXZpb3VzPC9oMz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ByZXYuaHJlZn0+PGE+e3ByZXYubmFtZX08L2E+PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICApfVxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGgzPkN1cnJlbnRseSBSZWFkaW5nPC9oMz5cbiAgICAgICAgICB7Y3VycmVudH1cbiAgICAgICAgIDwvbGk+XG4gICAgICAgIHtuZXh0ICYmIChcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aDM+TmV4dDwvaDM+XG4gICAgICAgICAgICA8TGluayBocmVmPXtuZXh0LmhyZWZ9PjxhPntuZXh0Lm5hbWV9PC9hPjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldk5leHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PrevNext.tsx\n");

/***/ })

})