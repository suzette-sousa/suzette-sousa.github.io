webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Project = function Project() {\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].projets;\n\n  function groupArrayOfObjects(list, key) {\n    return list.reduce(function (rv, x) {\n      (rv[x[key]] = rv[x[key]] || []).push(x);\n      return rv;\n    }, {});\n  }\n\n  ;\n  var calculatorBtnsCatg = groupArrayOfObjects(projets, \"categories\");\n  var calculatorBtns = Object.keys(calculatorBtnsCatg).map(function (item, i) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: item,\n      children: calculatorBtnsCatg[item].map(function (_ref) {\n        var btn = _ref.btn,\n            id = _ref.id;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-\".concat(item),\n          value: btn,\n          children: btn\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, _this);\n      })\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [calculatorBtns, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), projets.map(function (projet, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: projet.categories\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this), projet.categories && projet.categories.map(function (e, j) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  children: e\n                }, j, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 32\n                }, _this)\n              }, j, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 19\n              }, _this);\n            })]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImdyb3VwQXJyYXlPZk9iamVjdHMiLCJsaXN0Iiwia2V5IiwicmVkdWNlIiwicnYiLCJ4IiwicHVzaCIsImNhbGN1bGF0b3JCdG5zQ2F0ZyIsImNhbGN1bGF0b3JCdG5zIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpIiwiYnRuIiwiaWQiLCJwcm9qZXQiLCJqIiwiY2F0ZWdvcmllcyIsImsiLCJsaW5rIiwidGh1bWJuYWlsIiwiYWx0aW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBLE1BQ2RDLEtBRGMsR0FDS0MsZ0VBREwsQ0FDZEQsS0FEYztBQUFBLE1BQ1BFLE9BRE8sR0FDS0QsZ0VBREwsQ0FDUEMsT0FETzs7QUFFcEIsV0FBU0MsbUJBQVQsQ0FBNkJDLElBQTdCLEVBQW1DQyxHQUFuQyxFQUF3QztBQUN0QyxXQUFPRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxVQUFTQyxFQUFULEVBQWFDLENBQWIsRUFBZ0I7QUFDakMsT0FBQ0QsRUFBRSxDQUFDQyxDQUFDLENBQUNILEdBQUQsQ0FBRixDQUFGLEdBQWFFLEVBQUUsQ0FBQ0MsQ0FBQyxDQUFDSCxHQUFELENBQUYsQ0FBRixJQUFjLEVBQTVCLEVBQWdDSSxJQUFoQyxDQUFxQ0QsQ0FBckM7QUFDQSxhQUFPRCxFQUFQO0FBQ0QsS0FITSxFQUdKLEVBSEksQ0FBUDtBQUlEOztBQUFBO0FBRUQsTUFBSUcsa0JBQWtCLEdBQUdQLG1CQUFtQixDQUFDRCxPQUFELEVBQVMs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Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbnRlbnQvcG9ydGZvbGlvLm1kJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBwcm9qZXRzIH0gPSBhdHRyaWJ1dGVzO1xuICBmdW5jdGlvbiBncm91cEFycmF5T2ZPYmplY3RzKGxpc3QsIGtleSkge1xuICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbihydiwgeCkge1xuICAgICAgKHJ2W3hba2V5XV0gPSBydlt4W2tleV1dIHx8IFtdKS5wdXNoKHgpO1xuICAgICAgcmV0dXJuIHJ2O1xuICAgIH0sIHt9KTtcbiAgfTtcbiAgXG4gIGxldCBjYWxjdWxhdG9yQnRuc0NhdGcgPSBncm91cEFycmF5T2ZPYmplY3RzKHByb2pldHMsXCJjYXRlZ29yaWVzXCIpO1xuXG4gIGNvbnN0IGNhbGN1bGF0b3JCdG5zID0gT2JqZWN0LmtleXMoY2FsY3VsYXRvckJ0bnNDYXRnKS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpdGVtfT5cbiAgICAgIHtjYWxjdWxhdG9yQnRuc0NhdGdbaXRlbV0ubWFwKCh7IGJ0biwgaWQgfSkgPT4gKFxuICAgICAgICA8YnV0dG9uIGtleT17aWR9IGNsYXNzTmFtZT17YGJ0biBidG4tJHtpdGVtfWB9IHZhbHVlPXtidG59PntidG59PC9idXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhbGN1bGF0b3JCdG5zfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlXCI+QWZmaWNoZXIgdG91dDwvYnV0dG9uPlxuICAgICAgXG4gICAgICB7cHJvamV0cy5tYXAoKHByb2pldCwgaikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0+e3Byb2pldC5jYXRlZ29yaWVzfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2pldHMubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9qZXQubGlua31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQudGh1bWJuYWlsICYmIDxpbWcgc3JjPXtgL2ltZy8ke3Byb2pldC50aHVtYm5haWx9YH0gYWx0PXtgJHtwcm9qZXQuYWx0aW1nfWB9IGNsYXNzTmFtZT1cInctZnVsbFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCI+e3Byb2pldC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInAtNFwiPntwcm9qZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3Byb2pldC5jYXRlZ29yaWVzICYmXG4gICAgICAgICAgICAgICAgcHJvamV0LmNhdGVnb3JpZXMubWFwKChlLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+PGJ1dHRvbiBrZXk9e2p9PntlfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})