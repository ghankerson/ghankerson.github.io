webpackHotUpdate_N_E("pages/racial-complex/1-the-nature-of-complexes",{

/***/ "./components/Definition.tsx":
/*!***********************************!*\
  !*** ./components/Definition.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Definition.module.css */ \"./components/styles/Definition.module.css\");\n/* harmony import */ var _styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/ghankerson/code/booknotes/components/Definition.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Definition = function Definition(_ref) {\n  _s();\n\n  var label = _ref.label,\n      text = _ref.text,\n      source = _ref.source;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('description'),\n      ToggleClass = _useState[0],\n      SetToggleClass = _useState[1];\n\n  var toggler = function toggler() {\n    ToggleClass === 'description' ? SetToggleClass('view') : SetToggleClass('description');\n  };\n\n  return __jsx(\"dl\", {\n    className: _styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.definiton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"dt\", {\n    className: _styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.term,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    role: \"link\",\n    tabIndex: -1,\n    onKeyPress: function onKeyPress() {\n      return toggler();\n    },\n    onClick: function onClick() {\n      return toggler();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, label)), __jsx(\"dd\", {\n    className: _styles_Definition_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[ToggleClass],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, text, \" \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }), \" \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 28\n    }\n  }), \" \"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 14\n    }\n  }, source)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    role: \"link\",\n    tabIndex: 0,\n    onKeyPress: function onKeyPress() {\n      return toggler();\n    },\n    onClick: function onClick() {\n      return toggler();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"Close\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Definition, \"MFnhoAxAPMwPvZPBvcz4RSgIn44=\");\n\n_c = Definition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Definition);\n\nvar _c;\n\n$RefreshReg$(_c, \"Definition\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWZpbml0aW9uLnRzeD8yMTZjIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJsYWJlbCIsInRleHQiLCJzb3VyY2UiLCJ1c2VTdGF0ZSIsIlRvZ2dsZUNsYXNzIiwiU2V0VG9nZ2xlQ2xhc3MiLCJ0b2dnbGVyIiwic3R5bGVzIiwiZGVmaW5pdG9uIiwidGVybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBK0I7QUFBQTs7QUFBQSxNQUEzQkMsS0FBMkIsUUFBM0JBLEtBQTJCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE1BQWMsUUFBZEEsTUFBYzs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxhQUFELENBREU7QUFBQSxNQUN6Q0MsV0FEeUM7QUFBQSxNQUM1QkMsY0FENEI7O0FBR2hELE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJGLGVBQVcsS0FBSyxhQUFoQixHQUFnQ0MsY0FBYyxDQUFDLE1BQUQsQ0FBOUMsR0FBeURBLGNBQWMsQ0FBQyxhQUFELENBQXZFO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUksYUFBUyxFQUFFRSxvRUFBTSxDQUFDQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELG9FQUFNLENBQUNFLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFFLENBQUMsQ0FBMUI7QUFBNkIsY0FBVSxFQUFFO0FBQUEsYUFBTUgsT0FBTyxFQUFiO0FBQUEsS0FBekM7QUFBMEQsV0FBTyxFQUFFO0FBQUEsYUFBTUEsT0FBTyxFQUFiO0FBQUEsS0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRk4sS0FBckYsQ0FERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUVPLG9FQUFNLENBQUNILFdBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsSUFBTixPQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWixPQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5CLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxNQUFMLENBQUwsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFFLENBQXpCO0FBQTRCLGNBQVUsRUFBRTtBQUFBLGFBQU1JLE9BQU8sRUFBYjtBQUFBLEtBQXhDO0FBQXlELFdBQU8sRUFBRTtBQUFBLGFBQU1BLE9BQU8sRUFBYjtBQUFBLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUhGLENBSkYsQ0FERjtBQWVELENBdEJEOztHQUFNUCxVOztLQUFBQSxVO0FBd0JTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVmaW5pdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvRGVmaW5pdGlvbi5tb2R1bGUuY3NzJ1xuXG5pbnRlcmZhY2UgRGVmaW5pdGlvblByb3BzIHtcbiAgbGFiZWw6IHN0cmluZyxcbiAgdGV4dDogc3RyaW5nLFxuICBzb3VyY2U6IHN0cmluZ1xufVxuXG5jb25zdCBEZWZpbml0aW9uID0gKCB7IGxhYmVsLCB0ZXh0LCBzb3VyY2UgfSApID0+IHtcbiAgY29uc3QgW1RvZ2dsZUNsYXNzLCBTZXRUb2dnbGVDbGFzc10gPSB1c2VTdGF0ZSgnZGVzY3JpcHRpb24nKVxuICBcbiAgY29uc3QgdG9nZ2xlciA9ICgpID0+IHtcbiAgICBUb2dnbGVDbGFzcyA9PT0gJ2Rlc2NyaXB0aW9uJyA/IFNldFRvZ2dsZUNsYXNzKCd2aWV3JykgOiBTZXRUb2dnbGVDbGFzcygnZGVzY3JpcHRpb24nKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGwgY2xhc3NOYW1lPXtzdHlsZXMuZGVmaW5pdG9ufT5cbiAgICAgIDxkdCBjbGFzc05hbWU9e3N0eWxlcy50ZXJtfSA+XG4gICAgICAgIDxhIHJvbGU9J2xpbmsnIHRhYkluZGV4PXstMX0gb25LZXlQcmVzcz17KCkgPT4gdG9nZ2xlcigpfSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVyKCl9PntsYWJlbH08L2E+XG4gICAgICA8L2R0PlxuICAgICAgPGRkIGNsYXNzTmFtZT17c3R5bGVzW1RvZ2dsZUNsYXNzXX0+XG4gICAgICAgIDxkaXY+e3RleHR9IDxiciAvPiA8YnIgLz4gPC9kaXY+XG4gICAgICAgIDxkaXY+PGVtPntzb3VyY2V9PC9lbT48L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSByb2xlPSdsaW5rJyB0YWJJbmRleD17MH0gb25LZXlQcmVzcz17KCkgPT4gdG9nZ2xlcigpfSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVyKCl9PkNsb3NlPC9hPlxuICAgICAgICAgIDxiciAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2RkPlxuICAgIDwvZGw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmaW5pdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Definition.tsx\n");

/***/ })

})