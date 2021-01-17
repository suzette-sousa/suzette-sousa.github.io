webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Project = function Project() {\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].projets;\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    console.log(cat);\n    cat.map(function (e) {\n      return e;\n    });\n  });\n  console.log(mapProjets);\n  var categorySet = new Set(mapProjets);\n  console.log(categorySet);\n  var categories = Array.from(categorySet).sort();\n  console.log(categories);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: cat\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), projet.categories && projet.categories.map(function (e, j) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  children: e\n                }, j, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 32\n                }, _this)\n              }, j, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, _this);\n            })]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwiY2F0ZWdvcnlTZXQiLCJTZXQiLCJBcnJheSIsImZyb20iLCJzb3J0IiwiaiIsInByb2pldCIsImsiLCJsaW5rIiwidGh1bWJuYWlsIiwiYWx0aW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUEsTUFDZEMsS0FEYyxHQUNLQyxnRUFETCxDQUNkRCxLQURjO0FBQUEsTUFDUEUsT0FETyxHQUNLRCxnRUFETCxDQUNQQyxPQURPO0FBR3BCLE1BQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxVQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0FBLE9BQUcsQ0FBQ0YsR0FBSixDQUFRLFVBQUNNLENBQUQsRUFBTztBQUNiLGFBQU9BLENBQVA7QUFDRCxLQUZEO0FBR0QsR0FOa0IsQ0FBbkI7QUFPRkYsU0FBTyxDQUFDQyxHQUFSLENBQVlOLFVBQVo7QUFDRSxNQUFNUSxXQUFXLEdBQUcsSUFBSUMsR0FBSixDQUFRVCxVQUFSLENBQXBCO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxXQUFaO0FBQ0EsTUFBTUosVUFBVSxHQUFHTSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsV0FBWCxFQUF3QkksSUFBeEIsRUFBbkI7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUVFO0FBQVEsZUFBUyxFQUFDLHFCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBSUdBLFVBQVUsQ0FBQ0gsR0FBWCxDQUFlLFVBQUNFLEdBQUQsRUFBTVUsQ0FBTjtBQUFBLDBCQUNaO0FBQUEsK0JBQWE7QUFBQSxvQkFBaUJWO0FBQWpCLFdBQWFVLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQUpILGVBUUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQSxrQkFBb0ZoQjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsc0VBQWQ7QUFBQSxrQkFDR0UsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ2EsTUFBRCxFQUFTQyxDQUFUO0FBQUEsOEJBQ1g7QUFBWSxxQkFBUyxFQUFDLCtDQUF0QjtBQUFBLG9DQUNFLHFFQUFDLDZDQUFEO0FBQU0sa0JBQUksWUFBS0QsTUFBTSxDQUFDRSxJQUFaLENBQVY7QUFBQSxxQ0FDRTtBQUFBLDJCQUNHRixNQUFNLENBQUNHLFNBQVAsaUJBQW9CO0FBQUsscUJBQUcsaUJBQVVILE1BQU0sQ0FBQ0csU0FBakIsQ0FBUjtBQUFzQyxxQkFBRyxZQUFLSCxNQUFNLENBQUNJLE1BQVosQ0FBekM7QUFBK0QsMkJBQVMsRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR2QixlQUVFO0FBQUksMkJBQVMsRUFBQyw4Q0FBZDtBQUFBLDRCQUE4REosTUFBTSxDQUFDSztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBR0dMLE1BQU0sQ0FBQ00sV0FBUCxpQkFBc0I7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBQSw0QkFBb0JOLE1BQU0sQ0FBQ007QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQVFHTixNQUFNLENBQUNWLFVBQVAsSUFDQ1UsTUFBTSxDQUFDVixVQUFQLENBQWtCSCxHQUFsQixDQUFzQixVQUFDTSxDQUFELEVBQUlNLENBQUo7QUFBQSxrQ0FDcEI7QUFBQSx1Q0FBYTtBQUFBLDRCQUFpQk47QUFBakIsbUJBQWFNLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiLGlCQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG9CO0FBQUEsYUFBdEIsQ0FUSjtBQUFBLGFBQVNFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQSxrQkFERjtBQWdDRCxDQS9DRDs7S0FBTW5CLE87QUFpRFNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi9jb250ZW50L3BvcnRmb2xpby5tZCc7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgeyB0aXRsZSwgcHJvamV0cyB9ID0gYXR0cmlidXRlcztcblxuICBjb25zdCBtYXBQcm9qZXRzID0gcHJvamV0cy5tYXAoKHApID0+IHtcbiAgICBsZXQgY2F0ID0gcC5jYXRlZ29yaWVzXG4gICAgY29uc29sZS5sb2coY2F0KVxuICAgIGNhdC5tYXAoKGUpID0+IHtcbiAgICAgIHJldHVybiBlXG4gICAgfSlcbiAgfSlcbmNvbnNvbGUubG9nKG1hcFByb2pldHMpXG4gIGNvbnN0IGNhdGVnb3J5U2V0ID0gbmV3IFNldChtYXBQcm9qZXRzKTtcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlTZXQpXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKGNhdGVnb3J5U2V0KS5zb3J0KCk7XG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlXCI+QWZmaWNoZXIgdG91dDwvYnV0dG9uPlxuICAgICAgXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0+e2NhdH08L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNiB0ZXh0LTR4bCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1leHRyYWxpZ2h0IHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIHtwcm9qZXRzLm1hcCgocHJvamV0LCBrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvamV0Lmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LnRodW1ibmFpbCAmJiA8aW1nIHNyYz17YC9pbWcvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHtwcm9qZXQuY2F0ZWdvcmllcyAmJlxuICAgICAgICAgICAgICAgIHByb2pldC5jYXRlZ29yaWVzLm1hcCgoZSwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57ZX08L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})