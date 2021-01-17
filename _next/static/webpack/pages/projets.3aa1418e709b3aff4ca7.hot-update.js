webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Project = function Project() {\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var newArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    console.log(cat);\n    cat.map(function (e) {\n      console.log(e, \"e\");\n      newArr.push(e);\n      console.log(newArr, \"newarr\"); //return e\n    }); //return newArr\n  });\n  console.log(newArr, \"mapProjets\");\n\n  var unique = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(newArr));\n\n  console.log(unique);\n  var categories = Array.from(unique).sort();\n  console.log(categories);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          children: cat\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              href: \"\".concat(projet.link),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                  src: \"/img/\".concat(projet.thumbnail),\n                  alt: \"\".concat(projet.altimg),\n                  className: \"w-full\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 40\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                  className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                  children: projet.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 19\n                }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                  className: \"p-4\",\n                  children: projet.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 42\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), projet.categories && projet.categories.map(function (cat, j) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n                  children: cat\n                }, j, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 32\n                }, _this)\n              }, j, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 19\n              }, _this);\n            })]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsIm5ld0FyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHVzaCIsInVuaXF1ZSIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJqIiwicHJvamV0IiwiayIsImxpbmsiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBLE1BQ2RDLEtBRGMsR0FDS0MsZ0VBREwsQ0FDZEQsS0FEYztBQUFBLE1BQ1BFLE9BRE8sR0FDS0QsZ0VBREwsQ0FDUEMsT0FETztBQUdwQixNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBRXBDLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxVQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0FBLE9BQUcsQ0FBQ0YsR0FBSixDQUFRLFVBQUNNLENBQUQsRUFBTztBQUNiRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWixFQUFlLEdBQWY7QUFDQVIsWUFBTSxDQUFDUyxJQUFQLENBQVlELENBQVo7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVosRUFBb0IsUUFBcEIsRUFIYSxDQUliO0FBRUQsS0FORCxFQUpvQyxDQVlwQztBQUNELEdBYmtCLENBQW5CO0FBZUZNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaLEVBQW9CLFlBQXBCOztBQUNFLE1BQUlVLE1BQU0sR0FBRyw2RkFBSSxJQUFJQyxHQUFKLENBQVFYLE1BQVIsQ0FBUCxDQUFWOztBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBWjtBQUNBLE1BQU1MLFVBQVUsR0FBR08sS0FBSyxDQUFDQyxJQUFOLENBQVdILE1BQVgsRUFBbUJJLElBQW5CLEVBQW5CO0FBQ0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFFRTtBQUFRLGVBQVMsRUFBQyxxQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlHQSxVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1XLENBQU47QUFBQSwwQkFDWjtBQUFBLCtCQUFhO0FBQUEsb0JBQWlCWDtBQUFqQixXQUFhVyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYixTQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWYsQ0FKSCxlQVFFO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLG9FQUFkO0FBQUEsa0JBQW9GbEI7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFDLHNFQUFkO0FBQUEsa0JBQ0dFLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNjLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDhCQUNYO0FBQVkscUJBQVMsRUFBQywrQ0FBdEI7QUFBQSxvQ0FDRSxxRUFBQyw2Q0FBRDtBQUFNLGtCQUFJLFlBQUtELE1BQU0sQ0FBQ0UsSUFBWixDQUFWO0FBQUEscUNBQ0U7QUFBQSwyQkFDR0YsTUFBTSxDQUFDRyxTQUFQLGlCQUFvQjtBQUFLLHFCQUFHLGlCQUFVSCxNQUFNLENBQUNHLFNBQWpCLENBQVI7QUFBc0MscUJBQUcsWUFBS0gsTUFBTSxDQUFDSSxNQUFaLENBQXpDO0FBQStELDJCQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEdkIsZUFFRTtBQUFJLDJCQUFTLEVBQUMsOENBQWQ7QUFBQSw0QkFBOERKLE1BQU0sQ0FBQ0s7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUdHTCxNQUFNLENBQUNNLFdBQVAsaUJBQXNCO0FBQUcsMkJBQVMsRUFBQyxLQUFiO0FBQUEsNEJBQW9CTixNQUFNLENBQUNNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFRR04sTUFBTSxDQUFDWCxVQUFQLElBQ0NXLE1BQU0sQ0FBQ1gsVUFBUCxDQUFrQkgsR0FBbEIsQ0FBc0IsVUFBQ0UsR0FBRCxFQUFNVyxDQUFOO0FBQUEsa0NBQ3BCO0FBQUEsdUNBQWE7QUFBQSw0QkFBaUJYO0FBQWpCLG1CQUFhVyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYixpQkFBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURvQjtBQUFBLGFBQXRCLENBVEo7QUFBQSxhQUFTRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUEsa0JBREY7QUFnQ0QsQ0F4REQ7O0tBQU1yQixPO0FBMERTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgbGV0IHsgdGl0bGUsIHByb2pldHMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgbGV0IG5ld0FyciA9IFtdXG4gIGNvbnN0IG1hcFByb2pldHMgPSBwcm9qZXRzLm1hcCgocCkgPT4ge1xuXG4gICAgbGV0IGNhdCA9IHAuY2F0ZWdvcmllc1xuICAgIGNvbnNvbGUubG9nKGNhdClcbiAgICBjYXQubWFwKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLCBcImVcIilcbiAgICAgIG5ld0Fyci5wdXNoKGUpXG4gICAgICBjb25zb2xlLmxvZyhuZXdBcnIsIFwibmV3YXJyXCIpXG4gICAgICAvL3JldHVybiBlXG5cbiAgICB9KVxuXG4gICAgLy9yZXR1cm4gbmV3QXJyXG4gIH0pXG5cbmNvbnNvbGUubG9nKG5ld0FyciwgXCJtYXBQcm9qZXRzXCIpXG4gIGxldCB1bmlxdWUgPSBbLi4ubmV3IFNldChuZXdBcnIpXTtcbiAgY29uc29sZS5sb2codW5pcXVlKVxuICBjb25zdCBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbSh1bmlxdWUpLnNvcnQoKTtcbiAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGVcIj5BZmZpY2hlciB0b3V0PC9idXR0b24+XG4gICAgICBcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Byb2pldHMubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9qZXQubGlua31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZXQudGh1bWJuYWlsICYmIDxpbWcgc3JjPXtgL2ltZy8ke3Byb2pldC50aHVtYm5haWx9YH0gYWx0PXtgJHtwcm9qZXQuYWx0aW1nfWB9IGNsYXNzTmFtZT1cInctZnVsbFwiIC8+fVxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCI+e3Byb2pldC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LmRlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cInAtNFwiPntwcm9qZXQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3Byb2pldC5jYXRlZ29yaWVzICYmXG4gICAgICAgICAgICAgICAgcHJvamV0LmNhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtqfT48YnV0dG9uIGtleT17an0+e2NhdH08L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})