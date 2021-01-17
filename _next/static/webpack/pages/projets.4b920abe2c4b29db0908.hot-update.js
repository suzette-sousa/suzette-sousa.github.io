webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort();\n  var allDisplayWording = \"Afficher tout\";\n  categories.unshift(allDisplayWording);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"Afficher tout\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"mb-6\",\n        children: categories.map(function (cat, j) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              setCategoryName(cat);\n              setActive(j);\n            },\n            className: \"\".concat(j === isActive ? 'bg-gray-600 text-white' : 'text-gray-600', \" uppercase mr-2 mb-2 px-8 py-2 rounded border border-gray-600 max-w-max shadow-sm hover:shadow-lg\"),\n            children: cat\n          }, j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.sort(function (a, b) {\n          return a.name - b.name;\n        }).filter(function (projet) {\n          return categoryName !== allDisplayWording ? projet.categories.includes(categoryName) : projet;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Project, \"q5mrywyJh3liWKp5cvoXFIOzbBw=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJhbGxEaXNwbGF5V29yZGluZyIsInVuc2hpZnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaiIsImEiLCJiIiwibmFtZSIsImZpbHRlciIsInByb2pldCIsImluY2x1ZGVzIiwiayIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxNQUNkQyxLQURjLEdBQ0tDLGdFQURMLENBQ2RELEtBRGM7QUFBQSxNQUNQRSxPQURPLEdBQ0tELGdFQURMLENBQ1BDLE9BRE87QUFHcEIsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLENBQUQsRUFBTztBQUNwQyxRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsVUFBWjtBQUNBRCxPQUFHLENBQUNGLEdBQUosQ0FBUSxVQUFDSSxDQUFELEVBQU87QUFDYk4sWUFBTSxDQUFDTyxJQUFQLENBQVlELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FMa0IsQ0FBbkI7O0FBT0EsTUFBSUUsVUFBVSxHQUFHLDZGQUFJ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ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgeyB0aXRsZSwgcHJvamV0cyB9ID0gYXR0cmlidXRlcztcblxuICBsZXQgY2F0QXJyID0gW11cbiAgY29uc3QgbWFwUHJvamV0cyA9IHByb2pldHMubWFwKChwKSA9PiB7XG4gICAgbGV0IGNhdCA9IHAuY2F0ZWdvcmllc1xuICAgIGNhdC5tYXAoKGUpID0+IHtcbiAgICAgIGNhdEFyci5wdXNoKGUpXG4gICAgfSlcbiAgfSlcblxuICBsZXQgdW5pcXVlQ2F0cyA9IFsuLi5uZXcgU2V0KGNhdEFycildO1xuICBsZXQgY2F0ZWdvcmllcyA9IEFycmF5LmZyb20odW5pcXVlQ2F0cykuc29ydCgpO1xuICBsZXQgYWxsRGlzcGxheVdvcmRpbmcgPSBcIkFmZmljaGVyIHRvdXRcIjtcbiAgY2F0ZWdvcmllcy51bnNoaWZ0KGFsbERpc3BsYXlXb3JkaW5nKTtcbiAgY29uc3QgW2NhdGVnb3J5TmFtZSwgc2V0Q2F0ZWdvcnlOYW1lXSA9IHVzZVN0YXRlKFwiQWZmaWNoZXIgdG91dFwiKTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtqfSBvbkNsaWNrPXsoKSA9PiB7c2V0Q2F0ZWdvcnlOYW1lKGNhdCk7IHNldEFjdGl2ZShqKTt9fSBjbGFzc05hbWU9e2Ake2ogPT09IGlzQWN0aXZlID8gJ2JnLWdyYXktNjAwIHRleHQtd2hpdGUnIDogJ3RleHQtZ3JheS02MDAnIH0gdXBwZXJjYXNlIG1yLTIgbWItMiBweC04IHB5LTIgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIG1heC13LW1heCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LWxnYH0+e2NhdH08L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIHtwcm9qZXRzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lIC0gYi5uYW1lKVxuICAgICAgICAgICAgLmZpbHRlcihwcm9qZXQgPT4gY2F0ZWdvcnlOYW1lICE9PSBhbGxEaXNwbGF5V29yZGluZyA/IHByb2pldC5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5TmFtZSk6IHByb2pldClcbiAgICAgICAgICAgIC5tYXAoKHByb2pldCwgaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2pldC5saW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})