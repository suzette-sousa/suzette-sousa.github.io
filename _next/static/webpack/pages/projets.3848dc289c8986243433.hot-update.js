webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort();\n  var allDisplayWording = \"Afficher tout\";\n  categories.unshift(allDisplayWording);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"All\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), categories.map(function (cat, j) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            setCategoryName(cat);\n            setActive(j);\n          },\n          className: \"\".concat(j === isActive ? 'bg-gray-600 text-white' : 'text-gray-600', \" uppercase mr-2 mb-2 px-8 py-2 rounded border border-gray-600 max-w-max shadow-sm hover:shadow-lg\"),\n          children: cat\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.filter(function (projet) {\n          return categoryName !== allDisplayWording ? projet.categories.includes(categoryName) : projet;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Project, \"WWry8+q4FbHz78++LkS559yit90=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJhbGxEaXNwbGF5V29yZGluZyIsInVuc2hpZnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaiIsImZpbHRlciIsInByb2pldCIsImluY2x1ZGVzIiwiayIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsTUFDZEMsS0FEYyxHQUNLQyxnRUFETCxDQUNkRCxLQURjO0FBQUEsTUFDUEUsT0FETyxHQUNLRCxnRUFETCxDQUNQQyxPQURPO0FBR3BCLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQU87QUFDcEMsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLFVBQVo7QUFDQUQsT0FBRyxDQUFDRixHQUFKLENBQVEsVUFBQ0ksQ0FBRCxFQUFPO0FBQ2JOLFlBQU0sQ0FBQ08sSUFBUCxDQUFZRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBTGtCLENBQW5COztBQU9BLE1BQUlFLFVBQVUsR0FBRyw2RkFBSSxJQUFJQyxHQUFKLENBQVFULE1BQVIsQ0FBUCxDQUFkOztBQUNBLE1BQUlLLFVBQVUsR0FBR0ssS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQVgsRUFBdUJJLElBQXZCLEVBQWpCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsZUFBeEI7QUFDQVIsWUFBVSxDQUFDUyxPQUFYLENBQW1CRCxpQkFBbkI7O0FBZG9CLGtCQWVvQkUsc0RBQVEsQ0FBQyxLQUFELENBZjVCO0FBQUEsTUFlYkMsWUFmYTtBQUFBLE1BZUNDLGVBZkQ7O0FBQUEsbUJBZ0JVRixzREFBUSxDQUFDLENBQUQsQ0FoQmxCO0FBQUEsTUFnQmJHLFFBaEJhO0FBQUEsTUFnQkhDLFNBaEJHOztBQWtCcEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvRUFBZDtBQUFBLGtCQUFvRnRCO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHUSxVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1nQixDQUFOO0FBQUEsNEJBQ2Q7QUFBZ0IsaUJBQU8sRUFBRSxtQkFBTTtBQUFDSCwyQkFBZSxDQUFDYixHQUFELENBQWY7QUFBc0JlLHFCQUFTLENBQUNDLENBQUQsQ0FBVDtBQUFjLFdBQXBFO0FBQXNFLG1CQUFTLFlBQUtBLENBQUMsS0FBS0YsUUFBTixHQUFpQix3QkFBakIsR0FBNEMsZUFBakQsc0dBQS9FO0FBQUEsb0JBQXNQZDtBQUF0UCxXQUFhZ0IsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZixDQUZILGVBS0U7QUFBSSxpQkFBUyxFQUFDLHNFQUFkO0FBQUEsa0JBQ0dyQixPQUFPLENBQUNzQixNQUFSLENBQWUsVUFBQUMsTUFBTTtBQUFBLGlCQUFJTixZQUFZLEtBQUlILGlCQUFoQixHQUFvQ1MsTUFBTSxDQUFDakIsVUFBUCxDQUFrQmtCLFFBQWxCLENBQTJCUCxZQUEzQixDQUFwQyxHQUE4RU0sTUFBbEY7QUFBQSxTQUFyQixFQUErR3BCLEdBQS9HLENBQW1ILFVBQUNvQixNQUFELEVBQVNFLENBQVQ7QUFBQSw4QkFDbEg7QUFBWSxxQkFBUyxFQUFDLCtDQUF0QjtBQUFBLG1DQUNFLHFFQUFDLDZDQUFEO0FBQU0sa0JBQUksWUFBS0YsTUFBTSxDQUFDRyxJQUFaLENBQVY7QUFBQSxxQ0FDRTtBQUFBLDJCQUNHSCxNQUFNLENBQUNJLFNBQVAsaUJBQW9CO0FBQUsscUJBQUcsaUJBQVVKLE1BQU0sQ0FBQ0ksU0FBakIsQ0FBUjtBQUFzQyxxQkFBRyxZQUFLSixNQUFNLENBQUNLLE1BQVosQ0FBekM7QUFBK0QsMkJBQVMsRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUR2QixlQUVFO0FBQUksMkJBQVMsRUFBQyw4Q0FBZDtBQUFBLDRCQUE4REwsTUFBTSxDQUFDTTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBR0dOLE1BQU0sQ0FBQ08sV0FBUCxpQkFBc0I7QUFBRywyQkFBUyxFQUFDLEtBQWI7QUFBQSw0QkFBb0JQLE1BQU0sQ0FBQ087QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVNMLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEa0g7QUFBQSxTQUFuSDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRCRCxDQTlDRDs7R0FBTTVCLE87O0tBQUFBLE87QUFnRFNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi9jb250ZW50L3BvcnRmb2xpby5tZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBwcm9qZXRzIH0gPSBhdHRyaWJ1dGVzO1xuXG4gIGxldCBjYXRBcnIgPSBbXVxuICBjb25zdCBtYXBQcm9qZXRzID0gcHJvamV0cy5tYXAoKHApID0+IHtcbiAgICBsZXQgY2F0ID0gcC5jYXRlZ29yaWVzXG4gICAgY2F0Lm1hcCgoZSkgPT4ge1xuICAgICAgY2F0QXJyLnB1c2goZSlcbiAgICB9KVxuICB9KVxuXG4gIGxldCB1bmlxdWVDYXRzID0gWy4uLm5ldyBTZXQoY2F0QXJyKV07XG4gIGxldCBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbSh1bmlxdWVDYXRzKS5zb3J0KCk7XG4gIGxldCBhbGxEaXNwbGF5V29yZGluZyA9IFwiQWZmaWNoZXIgdG91dFwiO1xuICBjYXRlZ29yaWVzLnVuc2hpZnQoYWxsRGlzcGxheVdvcmRpbmcpO1xuICBjb25zdCBbY2F0ZWdvcnlOYW1lLCBzZXRDYXRlZ29yeU5hbWVdID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNiB0ZXh0LTR4bCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1leHRyYWxpZ2h0IHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2p9IG9uQ2xpY2s9eygpID0+IHtzZXRDYXRlZ29yeU5hbWUoY2F0KTsgc2V0QWN0aXZlKGopO319IGNsYXNzTmFtZT17YCR7aiA9PT0gaXNBY3RpdmUgPyAnYmctZ3JheS02MDAgdGV4dC13aGl0ZScgOiAndGV4dC1ncmF5LTYwMCcgfSB1cHBlcmNhc2UgbXItMiBtYi0yIHB4LTggcHktMiByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS02MDAgbWF4LXctbWF4IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGdgfT57Y2F0fTwvYnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2pldHMuZmlsdGVyKHByb2pldCA9PiBjYXRlZ29yeU5hbWUhPT0gYWxsRGlzcGxheVdvcmRpbmcgPyBwcm9qZXQuY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeU5hbWUpOiBwcm9qZXQpLm1hcCgocHJvamV0LCBrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvamV0Lmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LnRodW1ibmFpbCAmJiA8aW1nIHNyYz17YC9pbWcvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})