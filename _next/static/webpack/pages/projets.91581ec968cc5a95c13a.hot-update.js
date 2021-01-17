webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"All\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"uppercase px-8 py-2 border border-gray-600 rounded bg-gray-600 text-white max-w-max shadow-sm hover:shadow-lg\",\n      onClick: function onClick() {\n        return setCategoryName(\"All\");\n      },\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return setCategoryName(cat);\n        },\n        className: \"uppercase px-8 py-2 rounded border border-gray-600 text-gray-600 max-w-max shadow-sm hover:shadow-lg\",\n        children: [cat, isActive]\n      }, j, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.filter(function (projet) {\n          return categoryName !== \"All\" ? projet.categories.includes(categoryName) : projet;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Project, \"UqkYcFyAQrAlQ1uROojLrh7Bt58=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImoiLCJpc0FjdGl2ZSIsImZpbHRlciIsInByb2pldCIsImluY2x1ZGVzIiwiayIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsTUFDZEMsS0FEYyxHQUNLQyxnRUFETCxDQUNkRCxLQURjO0FBQUEsTUFDUEUsT0FETyxHQUNLRCxnRUFETCxDQUNQQyxPQURPO0FBR3BCLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQU87QUFDcEMsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLFVBQVo7QUFDQUQsT0FBRyxDQUFDRixHQUFKLENBQVEsVUFBQ0ksQ0FBRCxFQUFPO0FBQ2JOLFlBQU0sQ0FBQ08sSUFBUCxDQUFZRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBTGtCLENBQW5COztBQU9BLE1BQUlFLFVBQVUsR0FBRyw2RkFBSSxJQUFJQyxHQUFKLENBQVFULE1BQVIsQ0FBUCxDQUFkOztBQUNBLE1BQUlLLFVBQVUsR0FBR0ssS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQVgsRUFBdUJJLElBQXZCLEVBQWpCOztBQVpvQixrQkFjb0JDLHNEQUFRLENBQUMsS0FBRCxDQWQ1QjtBQUFBLE1BY2JDLFlBZGE7QUFBQSxNQWNDQyxlQWREOztBQWdCcEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQywrR0FBbEI7QUFBa0ksYUFBTyxFQUFFO0FBQUEsZUFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxPQUEzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdWLFVBQVUsQ0FBQ0gsR0FBWCxDQUFlLFVBQUNFLEdBQUQsRUFBTVksQ0FBTjtBQUFBLDBCQUNaO0FBQWdCLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxlQUFlLENBQUNYLEdBQUQsQ0FBckI7QUFBQSxTQUF6QjtBQUFxRCxpQkFBUyxFQUFDLHNHQUEvRDtBQUFBLG1CQUF1S0EsR0FBdkssRUFBNEthLFFBQTVLO0FBQUEsU0FBYUQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFmLENBRkgsZUFNRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvRUFBZDtBQUFBLGtCQUFvRm5CO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUksaUJBQVMsRUFBQyxzRUFBZDtBQUFBLGtCQUNHRSxPQUFPLENBQUNtQixNQUFSLENBQWUsVUFBQUMsTUFBTTtBQUFBLGlCQUFJTCxZQUFZLEtBQUksS0FBaEIsR0FBd0JLLE1BQU0sQ0FBQ2QsVUFBUCxDQUFrQmUsUUFBbEIsQ0FBMkJOLFlBQTNCLENBQXhCLEdBQWtFSyxNQUF0RTtBQUFBLFNBQXJCLEVBQW1HakIsR0FBbkcsQ0FBdUcsVUFBQ2lCLE1BQUQsRUFBU0UsQ0FBVDtBQUFBLDhCQUN0RztBQUFZLHFCQUFTLEVBQUMsK0NBQXRCO0FBQUEsbUNBQ0UscUVBQUMsNkNBQUQ7QUFBTSxrQkFBSSxZQUFLRixNQUFNLENBQUNHLElBQVosQ0FBVjtBQUFBLHFDQUNFO0FBQUEsMkJBQ0dILE1BQU0sQ0FBQ0ksU0FBUCxpQkFBb0I7QUFBSyxxQkFBRyxpQkFBVUosTUFBTSxDQUFDSSxTQUFqQixDQUFSO0FBQXNDLHFCQUFHLFlBQUtKLE1BQU0sQ0FBQ0ssTUFBWixDQUF6QztBQUErRCwyQkFBUyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRHZCLGVBRUU7QUFBSSwyQkFBUyxFQUFDLDhDQUFkO0FBQUEsNEJBQThETCxNQUFNLENBQUNNO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsRUFHR04sTUFBTSxDQUFDTyxXQUFQLGlCQUFzQjtBQUFHLDJCQUFTLEVBQUMsS0FBYjtBQUFBLDRCQUFvQlAsTUFBTSxDQUFDTztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU0wsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzRztBQUFBLFNBQXZHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUE4QkQsQ0E5Q0Q7O0dBQU16QixPOztLQUFBQSxPO0FBZ0RTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgeyB0aXRsZSwgcHJvamV0cyB9ID0gYXR0cmlidXRlcztcblxuICBsZXQgY2F0QXJyID0gW11cbiAgY29uc3QgbWFwUHJvamV0cyA9IHByb2pldHMubWFwKChwKSA9PiB7XG4gICAgbGV0IGNhdCA9IHAuY2F0ZWdvcmllc1xuICAgIGNhdC5tYXAoKGUpID0+IHtcbiAgICAgIGNhdEFyci5wdXNoKGUpXG4gICAgfSlcbiAgfSlcblxuICBsZXQgdW5pcXVlQ2F0cyA9IFsuLi5uZXcgU2V0KGNhdEFycildO1xuICBsZXQgY2F0ZWdvcmllcyA9IEFycmF5LmZyb20odW5pcXVlQ2F0cykuc29ydCgpO1xuXG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5TmFtZV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBweC04IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkIGJnLWdyYXktNjAwIHRleHQtd2hpdGUgbWF4LXctbWF4IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGdcIiBvbkNsaWNrPXsoKSA9PiBzZXRDYXRlZ29yeU5hbWUoXCJBbGxcIil9PkFmZmljaGVyIHRvdXQ8L2J1dHRvbj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2p9IG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3J5TmFtZShjYXQpfSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgcHgtOCBweS0yIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCB0ZXh0LWdyYXktNjAwIG1heC13LW1heCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LWxnXCI+e2NhdH17aXNBY3RpdmV9PC9idXR0b24+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC00eGwgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtZXh0cmFsaWdodCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7cHJvamV0cy5maWx0ZXIocHJvamV0ID0+IGNhdGVnb3J5TmFtZSE9PSBcIkFsbFwiID8gcHJvamV0LmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnlOYW1lKTogcHJvamV0KS5tYXAoKHByb2pldCwgaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2pldC5saW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvaW1nLyR7cHJvamV0LnRodW1ibmFpbH1gfSBhbHQ9e2Ake3Byb2pldC5hbHRpbWd9YH0gY2xhc3NOYW1lPVwidy1mdWxsXCIgLz59XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicC00IHRleHQtbGcgZm9udC1ib2xkIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj57cHJvamV0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwicC00XCI+e3Byb2pldC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7Lyoge3Byb2pldC5jYXRlZ29yaWVzICYmXG4gICAgICAgICAgICAgICAgcHJvamV0LmNhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0+e2NhdH08L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})