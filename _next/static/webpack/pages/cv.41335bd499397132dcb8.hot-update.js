webpackHotUpdate_N_E("pages/cv",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort(); // const [newCat, setNewCat] = useState('');\n  // function handleClick(e) {\n  //   setNewCat(e.target.cat);\n  // }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"All\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setCategoryName(cat);\n          },\n          children: [cat, categoryName]\n        }, j, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.filter(function (projet) {\n          //return projet\n          var cat = projet.categories.map(function (cat, j) {\n            return cat;\n          });\n          return categoryName !== cat;\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n            children: [projet.categories.filter(function (cat, j) {\n              return categoryName === cat;\n            }).map(function (projet) {\n              return projet.name;\n            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n              className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"\".concat(projet.link),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                  children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                    src: \"/img/\".concat(projet.thumbnail),\n                    alt: \"\".concat(projet.altimg),\n                    className: \"w-full\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 40\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                    className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                    children: projet.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 19\n                  }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                    className: \"p-4\",\n                    children: projet.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 42\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 17\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 15\n              }, _this)\n            }, k, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Project, \"UqkYcFyAQrAlQ1uROojLrh7Bt58=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImoiLCJmaWx0ZXIiLCJwcm9qZXQiLCJrIiwibmFtZSIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxNQUNkQyxLQURjLEdBQ0tDLGdFQURMLENBQ2RELEtBRGM7QUFBQSxNQUNQRSxPQURPLEdBQ0tELGdFQURMLENBQ1BDLE9BRE87QUFHcEIsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLENBQUQsRUFBTztBQUNwQyxRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsVUFBWjtBQUNBRCxPQUFHLENBQUNGLEdBQUosQ0FBUSxVQUFDSSxDQUFELEVBQU87QUFDYk4sWUFBTSxDQUFDTyxJQUFQLENBQVlELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FMa0IsQ0FBbkI7O0FBT0EsTUFBSUUsVUFBVSxHQUFHLDZGQUFJLElBQUlDLEdBQUosQ0FBUVQsTUFBUixDQUFQLENBQWQ7O0FBQ0EsTUFBSUssVUFBVSxHQUFHSyxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBWCxFQUF1QkksSUFBdkIsRUFBakIsQ0Fab0IsQ0FjcEI7QUFFQTtBQUNBO0FBQ0E7O0FBbEJvQixrQkFvQm9CQyxzREFBUSxDQUFDLEtBQUQsQ0FwQjVCO0FBQUEsTUFvQmJDLFlBcEJhO0FBQUEsTUFvQkNDLGVBcEJEOztBQXNCcEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxxQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHVixVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1ZLENBQU47QUFBQSwwQkFDWjtBQUFBLCtCQUFhO0FBQWdCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsZUFBZSxDQUFDWCxHQUFELENBQXJCO0FBQUEsV0FBekI7QUFBQSxxQkFBc0RBLEdBQXRELEVBQTJEVSxZQUEzRDtBQUFBLFdBQWFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQUZILGVBTUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQSxrQkFBb0ZuQjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsc0VBQWQ7QUFBQSxrQkFDR0UsT0FBTyxDQUFDa0IsTUFBUixDQUFlLFVBQUFDLE1BQU0sRUFBSTtBQUN4QjtBQUNBLGNBQUlkLEdBQUcsR0FBR2MsTUFBTSxDQUFDYixVQUFQLENBQWtCSCxHQUFsQixDQUFzQixVQUFDRSxHQUFELEVBQU1ZLENBQU47QUFBQSxtQkFBWVosR0FBWjtBQUFBLFdBQXRCLENBQVY7QUFDQSxpQkFBT1UsWUFBWSxLQUFLVixHQUF4QjtBQUNELFNBSkEsRUFJRUYsR0FKRixDQUlNLFVBQUNnQixNQUFELEVBQVNDLENBQVQ7QUFBQSw4QkFDTDtBQUFBLHVCQUNFRCxNQUFNLENBQUNiLFVBQVAsQ0FBa0JZLE1BQWxCLENBQXlCLFVBQUNiLEdBQUQsRUFBTVksQ0FBTjtBQUFBLHFCQUFZRixZQUFZLEtBQUtWLEdBQTdCO0FBQUEsYUFBekIsRUFBMkRGLEdBQTNELENBQStELFVBQUNnQixNQUFEO0FBQUEscUJBQVlBLE1BQU0sQ0FBQ0UsSUFBbkI7QUFBQSxhQUEvRCxDQURGLGVBRUE7QUFBWSx1QkFBUyxFQUFDLCtDQUF0QjtBQUFBLHFDQUNFLHFFQUFDLDZDQUFEO0FBQU0sb0JBQUksWUFBS0YsTUFBTSxDQUFDRyxJQUFaLENBQVY7QUFBQSx1Q0FDRTtBQUFBLDZCQUNHSCxNQUFNLENBQUNJLFNBQVAsaUJBQW9CO0FBQUssdUJBQUcsaUJBQVVKLE1BQU0sQ0FBQ0ksU0FBakIsQ0FBUjtBQUFzQyx1QkFBRyxZQUFLSixNQUFNLENBQUNLLE1BQVosQ0FBekM7QUFBK0QsNkJBQVMsRUFBQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUR2QixlQUVFO0FBQUksNkJBQVMsRUFBQyw4Q0FBZDtBQUFBLDhCQUE4REwsTUFBTSxDQUFDRTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLEVBR0dGLE1BQU0sQ0FBQ00sV0FBUCxpQkFBc0I7QUFBRyw2QkFBUyxFQUFDLEtBQWI7QUFBQSw4QkFBb0JOLE1BQU0sQ0FBQ007QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVNMLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQTtBQUFBLDBCQURLO0FBQUEsU0FKTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBcUNELENBM0REOztHQUFNdkIsTzs7S0FBQUEsTztBQTZEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbnRlbnQvcG9ydGZvbGlvLm1kJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgeyB0aXRsZSwgcHJvamV0cyB9ID0gYXR0cmlidXRlcztcblxuICBsZXQgY2F0QXJyID0gW11cbiAgY29uc3QgbWFwUHJvamV0cyA9IHByb2pldHMubWFwKChwKSA9PiB7XG4gICAgbGV0IGNhdCA9IHAuY2F0ZWdvcmllc1xuICAgIGNhdC5tYXAoKGUpID0+IHtcbiAgICAgIGNhdEFyci5wdXNoKGUpXG4gICAgfSlcbiAgfSlcblxuICBsZXQgdW5pcXVlQ2F0cyA9IFsuLi5uZXcgU2V0KGNhdEFycildO1xuICBsZXQgY2F0ZWdvcmllcyA9IEFycmF5LmZyb20odW5pcXVlQ2F0cykuc29ydCgpO1xuXG4gIC8vIGNvbnN0IFtuZXdDYXQsIHNldE5ld0NhdF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAvLyAgIHNldE5ld0NhdChlLnRhcmdldC5jYXQpO1xuICAvLyB9XG5cbiAgY29uc3QgW2NhdGVnb3J5TmFtZSwgc2V0Q2F0ZWdvcnlOYW1lXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZVwiPkFmZmljaGVyIHRvdXQ8L2J1dHRvbj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfSBvbkNsaWNrPXsoKSA9PiBzZXRDYXRlZ29yeU5hbWUoY2F0KX0+e2NhdH17Y2F0ZWdvcnlOYW1lfTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2pldHMuZmlsdGVyKHByb2pldCA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBwcm9qZXRcbiAgICAgICAgICAgIGxldCBjYXQgPSBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gY2F0KVxuICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5TmFtZSAhPT0gY2F0XG4gICAgICAgICAgfSkubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAge3Byb2pldC5jYXRlZ29yaWVzLmZpbHRlcigoY2F0LCBqKSA9PiBjYXRlZ29yeU5hbWUgPT09IGNhdCkubWFwKChwcm9qZXQpID0+IHByb2pldC5uYW1lKX1cbiAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9qZXQubGlua31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQudGh1bWJuYWlsICYmIDxpbWcgc3JjPXtgL2ltZy8ke3Byb2pldC50aHVtYm5haWx9YH0gYWx0PXtgJHtwcm9qZXQuYWx0aW1nfWB9IGNsYXNzTmFtZT1cInctZnVsbFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCI+e3Byb2pldC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInAtNFwiPntwcm9qZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgey8qIHtwcm9qZXQuY2F0ZWdvcmllcyAmJlxuICAgICAgICAgICAgICAgIHByb2pldC5jYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17an0+PGJ1dHRvbiBrZXk9e2p9PntjYXR9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})