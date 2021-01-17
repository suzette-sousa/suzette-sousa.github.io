webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Project = function Project() {\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].projets;\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    console.log(cat);\n    cat.map(function (e) {\n      var newArr = [];\n      console.log(e, \"e\");\n      return e;\n    });\n  });\n  var categorySet = new Set([mapProjets]);\n  console.log(categorySet);\n  var categories = Array.from(categorySet).sort();\n  console.log(categories);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: cat\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), projet.categories && projet.categories.map(function (e, j) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  children: e\n                }, j, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 32\n                }, _this)\n              }, j, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 19\n              }, _this);\n            })]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwibmV3QXJyIiwiY2F0ZWdvcnlTZXQiLCJTZXQiLCJBcnJheSIsImZyb20iLCJzb3J0IiwiaiIsInByb2pldCIsImsiLCJsaW5rIiwidGh1bWJuYWlsIiwiYWx0aW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUEsTUFDZEMsS0FEYyxHQUNLQyxnRUFETCxDQUNkRCxLQURjO0FBQUEsTUFDUEUsT0FETyxHQUNLRCxnRUFETCxDQUNQQyxPQURPO0FBR3BCLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBRXBDLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxVQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0FBLE9BQUcsQ0FBQ0YsR0FBSixDQUFRLFVBQUNNLENBQUQsRUFBTztBQUNiLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFaLEVBQWUsR0FBZjtBQUNOLGFBQU9BLENBQVA7QUFDSyxLQUpEO0FBS0QsR0FUa0IsQ0FBbkI7QUFXQSxNQUFNRSxXQUFXLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQUNWLFVBQUQsQ0FBUixDQUFwQjtBQUNBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsV0FBWjtBQUNBLE1BQU1MLFVBQVUsR0FBR08sS0FBSyxDQUFDQyxJQUFOLENBQVdILFdBQVgsRUFBd0JJLElBQXhCLEVBQW5CO0FBQ0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFFRTtBQUFRLGVBQVMsRUFBQyxxQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlHQSxVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1XLENBQU47QUFBQSwwQkFDWjtBQUFBLCtCQUFhO0FBQUEsb0JBQWlCWDtBQUFqQixXQUFhVyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYixTQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWYsQ0FKSCxlQVFFO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLG9FQUFkO0FBQUEsa0JBQW9GakI7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFDLHNFQUFkO0FBQUEsa0JBQ0dFLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNjLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDhCQUNYO0FBQVkscUJBQVMsRUFBQywrQ0FBdEI7QUFBQSxvQ0FDRSxxRUFBQyw2Q0FBRDtBQUFNLGtCQUFJLFlBQUtELE1BQU0sQ0FBQ0UsSUFBWixDQUFWO0FBQUEscUNBQ0U7QUFBQSwyQkFDR0YsTUFBTSxDQUFDRyxTQUFQLGlCQUFvQjtBQUFLLHFCQUFHLGlCQUFVSCxNQUFNLENBQUNHLFNBQWpCLENBQVI7QUFBc0MscUJBQUcsWUFBS0gsTUFBTSxDQUFDSSxNQUFaLENBQXpDO0FBQStELDJCQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEdkIsZUFFRTtBQUFJLDJCQUFTLEVBQUMsOENBQWQ7QUFBQSw0QkFBOERKLE1BQU0sQ0FBQ0s7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUdHTCxNQUFNLENBQUNNLFdBQVAsaUJBQXNCO0FBQUcsMkJBQVMsRUFBQyxLQUFiO0FBQUEsNEJBQW9CTixNQUFNLENBQUNNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFRR04sTUFBTSxDQUFDWCxVQUFQLElBQ0NXLE1BQU0sQ0FBQ1gsVUFBUCxDQUFrQkgsR0FBbEIsQ0FBc0IsVUFBQ00sQ0FBRCxFQUFJTyxDQUFKO0FBQUEsa0NBQ3BCO0FBQUEsdUNBQWE7QUFBQSw0QkFBaUJQO0FBQWpCLG1CQUFhTyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYixpQkFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURvQjtBQUFBLGFBQXRCLENBVEo7QUFBQSxhQUFTRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUEsa0JBREY7QUFnQ0QsQ0FsREQ7O0tBQU1wQixPO0FBb0RTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgY29uc3QgbWFwUHJvamV0cyA9IHByb2pldHMubWFwKChwKSA9PiB7XG5cbiAgICBsZXQgY2F0ID0gcC5jYXRlZ29yaWVzXG4gICAgY29uc29sZS5sb2coY2F0KVxuICAgIGNhdC5tYXAoKGUpID0+IHtcbiAgICAgIGxldCBuZXdBcnIgPSBbXVxuICAgICAgY29uc29sZS5sb2coZSwgXCJlXCIpXG5yZXR1cm4gZVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlTZXQgPSBuZXcgU2V0KFttYXBQcm9qZXRzXSk7XG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5U2V0KVxuICBjb25zdCBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbShjYXRlZ29yeVNldCkuc29ydCgpO1xuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZVwiPkFmZmljaGVyIHRvdXQ8L2J1dHRvbj5cbiAgICAgIFxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17an0+PGJ1dHRvbiBrZXk9e2p9PntjYXR9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC00eGwgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtZXh0cmFsaWdodCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7cHJvamV0cy5tYXAoKHByb2pldCwgaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2pldC5saW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvaW1nLyR7cHJvamV0LnRodW1ibmFpbH1gfSBhbHQ9e2Ake3Byb2pldC5hbHRpbWd9YH0gY2xhc3NOYW1lPVwidy1mdWxsXCIgLz59XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicC00IHRleHQtbGcgZm9udC1ib2xkIGJnLWdyYXktOTAwIHRleHQtd2hpdGVcIj57cHJvamV0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQuZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwicC00XCI+e3Byb2pldC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGUsIGopID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0+e2V9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})