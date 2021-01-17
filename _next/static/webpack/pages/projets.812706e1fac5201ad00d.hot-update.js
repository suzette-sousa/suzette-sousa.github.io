webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"All\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"uppercase px-8 py-2 rounded bg-gray max-w-max shadow-sm hover:shadow-lg\",\n      onClick: function onClick() {\n        return setCategoryName(\"All\");\n      },\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return setCategoryName(cat);\n        },\n        className: \"uppercase px-8 py-2 rounded border border-gray-600 text-gray-600 max-w-max shadow-sm hover:shadow-lg\",\n        children: cat\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.filter(function (projet) {\n          return categoryName !== \"All\" ? projet.categories.includes(categoryName) : projet;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Project, \"UqkYcFyAQrAlQ1uROojLrh7Bt58=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImoiLCJmaWx0ZXIiLCJwcm9qZXQiLCJpbmNsdWRlcyIsImsiLCJsaW5rIiwidGh1bWJuYWlsIiwiYWx0aW1nIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvRkFBRCxDQUFwQjs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLE1BQ2RDLEtBRGMsR0FDS0MsZ0VBREwsQ0FDZEQsS0FEYztBQUFBLE1BQ1BFLE9BRE8sR0FDS0QsZ0VBREwsQ0FDUEMsT0FETztBQUdwQixNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxVQUFaO0FBQ0FELE9BQUcsQ0FBQ0YsR0FBSixDQUFRLFVBQUNJLENBQUQsRUFBTztBQUNiTixZQUFNLENBQUNPLElBQVAsQ0FBWUQsQ0FBWjtBQUNELEtBRkQ7QUFHRCxHQUxrQixDQUFuQjs7QUFPQSxNQUFJRSxVQUFVLEdBQUcsNkZBQUksSUFBSUMsR0FBSixDQUFRVCxNQUFSLENBQVAsQ0FBZDs7QUFDQSxNQUFJSyxVQUFVLEdBQUdLLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxVQUFYLEVBQXVCSSxJQUF2QixFQUFqQjs7QUFab0Isa0JBY29CQyxzREFBUSxDQUFDLEtBQUQsQ0FkNUI7QUFBQSxNQWNiQyxZQWRhO0FBQUEsTUFjQ0MsZUFkRDs7QUFnQnBCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMseUVBQWxCO0FBQTRGLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsT0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHVixVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1ZLENBQU47QUFBQSwwQkFDWjtBQUFnQixlQUFPLEVBQUU7QUFBQSxpQkFBTUQsZUFBZSxDQUFDWCxHQUFELENBQXJCO0FBQUEsU0FBekI7QUFBcUQsaUJBQVMsRUFBQyxzR0FBL0Q7QUFBQSxrQkFBdUtBO0FBQXZLLFNBQWFZLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQUZILGVBTUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQSxrQkFBb0ZuQjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsc0VBQWQ7QUFBQSxrQkFDR0UsT0FBTyxDQUFDa0IsTUFBUixDQUFlLFVBQUFDLE1BQU07QUFBQSxpQkFBSUosWUFBWSxLQUFJLEtBQWhCLEdBQXdCSSxNQUFNLENBQUNiLFVBQVAsQ0FBa0JjLFFBQWxCLENBQTJCTCxZQUEzQixDQUF4QixHQUFrRUksTUFBdEU7QUFBQSxTQUFyQixFQUFtR2hCLEdBQW5HLENBQXVHLFVBQUNnQixNQUFELEVBQVNFLENBQVQ7QUFBQSw4QkFDdEc7QUFBWSxxQkFBUyxFQUFDLCtDQUF0QjtBQUFBLG1DQUNFLHFFQUFDLDZDQUFEO0FBQU0sa0JBQUksWUFBS0YsTUFBTSxDQUFDRyxJQUFaLENBQVY7QUFBQSxxQ0FDRTtBQUFBLDJCQUNHSCxNQUFNLENBQUNJLFNBQVAsaUJBQW9CO0FBQUsscUJBQUcsaUJBQVVKLE1BQU0sQ0FBQ0ksU0FBakIsQ0FBUjtBQUFzQyxxQkFBRyxZQUFLSixNQUFNLENBQUNLLE1BQVosQ0FBekM7QUFBK0QsMkJBQVMsRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR2QixlQUVFO0FBQUksMkJBQVMsRUFBQyw4Q0FBZDtBQUFBLDRCQUE4REwsTUFBTSxDQUFDTTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBR0dOLE1BQU0sQ0FBQ08sV0FBUCxpQkFBc0I7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBQSw0QkFBb0JQLE1BQU0sQ0FBQ087QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVNMLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0c7QUFBQSxTQUF2RztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBOEJELENBOUNEOztHQUFNeEIsTzs7S0FBQUEsTztBQWdEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbnRlbnQvcG9ydGZvbGlvLm1kJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgbGV0IGNhdEFyciA9IFtdXG4gIGNvbnN0IG1hcFByb2pldHMgPSBwcm9qZXRzLm1hcCgocCkgPT4ge1xuICAgIGxldCBjYXQgPSBwLmNhdGVnb3JpZXNcbiAgICBjYXQubWFwKChlKSA9PiB7XG4gICAgICBjYXRBcnIucHVzaChlKVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHVuaXF1ZUNhdHMgPSBbLi4ubmV3IFNldChjYXRBcnIpXTtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHVuaXF1ZUNhdHMpLnNvcnQoKTtcblxuICBjb25zdCBbY2F0ZWdvcnlOYW1lLCBzZXRDYXRlZ29yeU5hbWVdID0gdXNlU3RhdGUoXCJBbGxcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgcHgtOCBweS0yIHJvdW5kZWQgYmctZ3JheSBtYXgtdy1tYXggc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1sZ1wiIG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3J5TmFtZShcIkFsbFwiKX0+QWZmaWNoZXIgdG91dDwvYnV0dG9uPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICA8YnV0dG9uIGtleT17an0gb25DbGljaz17KCkgPT4gc2V0Q2F0ZWdvcnlOYW1lKGNhdCl9IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBweC04IHB5LTIgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHRleHQtZ3JheS02MDAgbWF4LXctbWF4IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGdcIj57Y2F0fTwvYnV0dG9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2pldHMuZmlsdGVyKHByb2pldCA9PiBjYXRlZ29yeU5hbWUhPT0gXCJBbGxcIiA/IHByb2pldC5jYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5TmFtZSk6IHByb2pldCkubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9qZXQubGlua31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQudGh1bWJuYWlsICYmIDxpbWcgc3JjPXtgL2ltZy8ke3Byb2pldC50aHVtYm5haWx9YH0gYWx0PXtgJHtwcm9qZXQuYWx0aW1nfWB9IGNsYXNzTmFtZT1cInctZnVsbFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCI+e3Byb2pldC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInAtNFwiPntwcm9qZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgey8qIHtwcm9qZXQuY2F0ZWdvcmllcyAmJlxuICAgICAgICAgICAgICAgIHByb2pldC5jYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+PGJ1dHRvbiBrZXk9e2p9PntjYXR9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})