webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort();\n  var allDisplayWording = \"Afficher tout\";\n  categories.unshift(allDisplayWording);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"Afficher tout\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"mb-6\",\n        children: categories.map(function (cat, j) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              setCategoryName(cat);\n              setActive(j);\n            },\n            className: \"\".concat(j === isActive ? 'bg-gray-600 text-white' : 'text-gray-600', \" uppercase mr-2 mb-2 px-8 py-2 rounded border border-gray-600 max-w-max shadow-sm hover:shadow-lg\"),\n            children: cat\n          }, j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.sort(function (a, b) {\n          return new Date(b.date) - new Date(a.date);\n        }).filter(function (projet) {\n          return categoryName !== allDisplayWording ? projet.categories.includes(categoryName) : projet;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Project, \"q5mrywyJh3liWKp5cvoXFIOzbBw=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJhbGxEaXNwbGF5V29yZGluZyIsInVuc2hpZnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaiIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJmaWx0ZXIiLCJwcm9qZXQiLCJpbmNsdWRlcyIsImsiLCJsaW5rIiwidGh1bWJuYWlsIiwiYWx0aW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvRkFBRCxDQUFwQjs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLE1BQ2RDLEtBRGMsR0FDS0MsZ0VBREwsQ0FDZEQsS0FEYztBQUFBLE1BQ1BFLE9BRE8sR0FDS0QsZ0VBREwsQ0FDUEMsT0FETztBQUdwQixNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxVQUFaO0FBQ0FELE9BQUcsQ0FBQ0YsR0FBSixDQUFRLFVBQUNJLENBQUQsRUFBTztBQUNiTixZQUFNLENBQUNPLElBQVAsQ0FBWUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQUxrQixDQUFuQjs7QUFPQSxNQUFJRSxV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QWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbnRlbnQvcG9ydGZvbGlvLm1kJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgbGV0IGNhdEFyciA9IFtdXG4gIGNvbnN0IG1hcFByb2pldHMgPSBwcm9qZXRzLm1hcCgocCkgPT4ge1xuICAgIGxldCBjYXQgPSBwLmNhdGVnb3JpZXNcbiAgICBjYXQubWFwKChlKSA9PiB7XG4gICAgICBjYXRBcnIucHVzaChlKVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHVuaXF1ZUNhdHMgPSBbLi4ubmV3IFNldChjYXRBcnIpXTtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHVuaXF1ZUNhdHMpLnNvcnQoKTtcbiAgbGV0IGFsbERpc3BsYXlXb3JkaW5nID0gXCJBZmZpY2hlciB0b3V0XCI7XG4gIGNhdGVnb3JpZXMudW5zaGlmdChhbGxEaXNwbGF5V29yZGluZyk7XG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5TmFtZV0gPSB1c2VTdGF0ZShcIkFmZmljaGVyIHRvdXRcIik7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNiB0ZXh0LTR4bCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1leHRyYWxpZ2h0IHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17an0gb25DbGljaz17KCkgPT4ge3NldENhdGVnb3J5TmFtZShjYXQpOyBzZXRBY3RpdmUoaik7fX0gY2xhc3NOYW1lPXtgJHtqID09PSBpc0FjdGl2ZSA/ICdiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktNjAwJyB9IHVwcGVyY2FzZSBtci0yIG1iLTIgcHgtOCBweS0yIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCBtYXgtdy1tYXggc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1sZ2B9PntjYXR9PC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7cHJvamV0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKVxuICAgICAgICAgICAgLmZpbHRlcihwcm9qZXQgPT4gY2F0ZWdvcnlOYW1lICE9PSBhbGxEaXNwbGF5V29yZGluZyA/IHByb2pldC5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5TmFtZSk6IHByb2pldClcbiAgICAgICAgICAgIC5tYXAoKHByb2pldCwgaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2pldC5saW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})