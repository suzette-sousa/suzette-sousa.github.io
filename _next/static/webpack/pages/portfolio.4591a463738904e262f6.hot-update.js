webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/home.md */ \"./content/home.md\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n //includePaths: [path.join(__dirname, 'styles')]\n\nvar Project = function Project() {\n  var title = _content_home_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      projets = _content_home_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].projets;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/img/\".concat(projet.thumbnail),\n              alt: \"\".concat(projet.altimg)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 38\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n              children: projet.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"p-4 bg-blue-100\",\n              children: projet.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 17\n            }, _this)]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsIm1hcCIsInByb2pldCIsImsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztDQUVBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQSxNQUVaQyxLQUZZLEdBRU9DLDJEQUZQLENBRVpELEtBRlk7QUFBQSxNQUVMRSxPQUZLLEdBRU9ELDJEQUZQLENBRUxDLE9BRks7QUFHbEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBSSxpQkFBUyxFQUFDLHFFQUFkO0FBQUEsa0JBQ0dFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDhCQUNYO0FBQVkscUJBQVMsRUFBQywrQ0FBdEI7QUFBQSx1QkFDR0QsTUFBTSxDQUFDRSxTQUFQLGlCQUFvQjtBQUFLLGlCQUFHLGlCQUFVRixNQUFNLENBQUNFLFNBQWpCLENBQVI7QUFBc0MsaUJBQUcsWUFBS0YsTUFBTSxDQUFDRyxNQUFaO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHZCLGVBRUU7QUFBSSx1QkFBUyxFQUFDLDhDQUFkO0FBQUEsd0JBQThESCxNQUFNLENBQUNJO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFHLHVCQUFTLEVBQUMsaUJBQWI7QUFBQSx3QkFBZ0NKLE1BQU0sQ0FBQ0s7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBLGFBQVNKLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrQkgsQ0FyQkQ7O0tBQU1OLE87QUF1QlNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi9jb250ZW50L2hvbWUubWQnO1xuLy9pbmNsdWRlUGF0aHM6IFtwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3R5bGVzJyldXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICBcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAge3Byb2pldHMubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgICAge3Byb2pldC50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvaW1nLyR7cHJvamV0LnRodW1ibmFpbH1gfSBhbHQ9e2Ake3Byb2pldC5hbHRpbWd9YH0gLz59XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCI+e3Byb2pldC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00IGJnLWJsdWUtMTAwXCI+e3Byb2pldC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})