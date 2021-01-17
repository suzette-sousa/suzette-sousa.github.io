webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_3__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_3__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort(); // const [newCat, setNewCat] = useState('');\n  // function handleClick(e) {\n  //   setNewCat(e.target.cat);\n  // }\n\n  var _useState = useState(yourDefaultCategory),\n      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      categoryName = _useState2[0],\n      setCategoryName = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          cat: newCat,\n          onClick: function onClick() {\n            return setCategoryName(category.name);\n          },\n          children: cat\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 41,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this)\n          }, k, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Project, \"qOIFYZNJr5GydnQoFLkWlw/WJdA=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1c2VTdGF0ZSIsInlvdXJEZWZhdWx0Q2F0ZWdvcnkiLCJjYXRlZ29yeU5hbWUiLCJzZXRDYXRlZ29yeU5hbWUiLCJqIiwibmV3Q2F0IiwiY2F0ZWdvcnkiLCJuYW1lIiwicHJvamV0IiwiayIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsTUFDZEMsS0FEYyxHQUNLQyxnRUFETCxDQUNkRCxLQURjO0FBQUEsTUFDUEUsT0FETyxHQUNLRCxnRUFETCxDQUNQQyxPQURPO0FBR3BCLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQU87QUFDcEMsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLFVBQVo7QUFDQUQsT0FBRyxDQUFDRixHQUFKLENBQVEsVUFBQ0ksQ0FBRCxFQUFPO0FBQ2JOLFlBQU0sQ0FBQ08sSUFBUCxDQUFZRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBTGtCLENBQW5COztBQU9BLE1BQUlFLFVBQVUsR0FBRyw2RkFBSSxJQUFJQyxHQUFKLENBQVFULE1BQVIsQ0FBUCxDQUFkOztBQUNBLE1BQUlLLFVBQVUsR0FBR0ssS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQVgsRUFBdUJJLElBQXZCLEVBQWpCLENBWm9CLENBY3BCO0FBRUE7QUFDQTtBQUNBOztBQWxCb0Isa0JBb0JvQkMsUUFBUSxDQUFDQyxtQkFBRCxDQXBCNUI7QUFBQTtBQUFBLE1Bb0JiQyxZQXBCYTtBQUFBLE1Bb0JDQyxlQXBCRDs7QUFzQnBCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMscUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR1gsVUFBVSxDQUFDSCxHQUFYLENBQWUsVUFBQ0UsR0FBRCxFQUFNYSxDQUFOO0FBQUEsMEJBQ1o7QUFBQSwrQkFBYTtBQUFnQixhQUFHLEVBQUVDLE1BQXJCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUYsZUFBZSxDQUFDRyxRQUFRLENBQUNDLElBQVYsQ0FBckI7QUFBQSxXQUF0QztBQUFBLG9CQUE2RWhCO0FBQTdFLFdBQWFhLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQUZILGVBTUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQSxrQkFBb0ZwQjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsc0VBQWQ7QUFBQSxrQkFDR0UsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ21CLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDhCQUNYO0FBQVkscUJBQVMsRUFBQywrQ0FBdEI7QUFBQSxtQ0FDRSxxRUFBQyw2Q0FBRDtBQUFNLGtCQUFJLFlBQUtELE1BQU0sQ0FBQ0UsSUFBWixDQUFWO0FBQUEscUNBQ0U7QUFBQSwyQkFDR0YsTUFBTSxDQUFDRyxTQUFQLGlCQUFvQjtBQUFLLHFCQUFHLGlCQUFVSCxNQUFNLENBQUNHLFNBQWpCLENBQVI7QUFBc0MscUJBQUcsWUFBS0gsTUFBTSxDQUFDSSxNQUFaLENBQXpDO0FBQStELDJCQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEdkIsZUFFRTtBQUFJLDJCQUFTLEVBQUMsOENBQWQ7QUFBQSw0QkFBOERKLE1BQU0sQ0FBQ0Q7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUdHQyxNQUFNLENBQUNLLFdBQVAsaUJBQXNCO0FBQUcsMkJBQVMsRUFBQyxLQUFiO0FBQUEsNEJBQW9CTCxNQUFNLENBQUNLO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFTSixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUE4QkQsQ0FwREQ7O0dBQU0xQixPOztLQUFBQSxPO0FBc0RTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgbGV0IGNhdEFyciA9IFtdXG4gIGNvbnN0IG1hcFByb2pldHMgPSBwcm9qZXRzLm1hcCgocCkgPT4ge1xuICAgIGxldCBjYXQgPSBwLmNhdGVnb3JpZXNcbiAgICBjYXQubWFwKChlKSA9PiB7XG4gICAgICBjYXRBcnIucHVzaChlKVxuICAgIH0pXG4gIH0pXG5cbiAgbGV0IHVuaXF1ZUNhdHMgPSBbLi4ubmV3IFNldChjYXRBcnIpXTtcbiAgbGV0IGNhdGVnb3JpZXMgPSBBcnJheS5mcm9tKHVuaXF1ZUNhdHMpLnNvcnQoKTtcblxuICAvLyBjb25zdCBbbmV3Q2F0LCBzZXROZXdDYXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgLy8gICBzZXROZXdDYXQoZS50YXJnZXQuY2F0KTtcbiAgLy8gfVxuXG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5TmFtZV0gPSB1c2VTdGF0ZSh5b3VyRGVmYXVsdENhdGVnb3J5KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGVcIj5BZmZpY2hlciB0b3V0PC9idXR0b24+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0gY2F0PXtuZXdDYXR9IG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3J5TmFtZShjYXRlZ29yeS5uYW1lKX0+e2NhdH08L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNiB0ZXh0LTR4bCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1leHRyYWxpZ2h0IHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIHtwcm9qZXRzLm1hcCgocHJvamV0LCBrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvamV0Lmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LnRodW1ibmFpbCAmJiA8aW1nIHNyYz17YC9pbWcvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})