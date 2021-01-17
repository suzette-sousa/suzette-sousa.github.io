webpackHotUpdate_N_E("pages/projets",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/portfolio.md */ \"./content/portfolio.md\");\n/* harmony import */ var _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\n\nvar Project = function Project() {\n  _s();\n\n  var title = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].title,\n      projets = _content_portfolio_md__WEBPACK_IMPORTED_MODULE_2__[\"attributes\"].projets;\n  var catArr = [];\n  var mapProjets = projets.map(function (p) {\n    var cat = p.categories;\n    cat.map(function (e) {\n      catArr.push(e);\n    });\n  });\n\n  var uniqueCats = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Set(catArr));\n\n  var categories = Array.from(uniqueCats).sort(); // const [newCat, setNewCat] = useState('');\n  // function handleClick(e) {\n  //   setNewCat(e.target.cat);\n  // }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"All\"),\n      categoryName = _useState[0],\n      setCategoryName = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"bg-black text-white\",\n      children: \"Afficher tout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), categories.map(function (cat, j) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return setCategoryName(cat);\n          },\n          children: [cat, categoryName]\n        }, j, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 24\n        }, _this)\n      }, j, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: \"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n        children: projets.filter(function (projet) {\n          return !projet; //projet.categories.map((cat, j) => console.log(cat))\n          //categoryName === projet.categories.map((cat, j) => cat)\n        }).map(function (projet, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n            children: [projet.categories.filter(function (cat, j) {\n              return categoryName === cat;\n            }).map(function (projet) {\n              return projet;\n            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n              className: \"overflow-hidden bg-white rounded-lg shadow-xl\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"\".concat(projet.link),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                  children: [projet.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n                    src: \"/img/\".concat(projet.thumbnail),\n                    alt: \"\".concat(projet.altimg),\n                    className: \"w-full\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 40\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n                    className: \"p-4 text-lg font-bold bg-gray-900 text-white\",\n                    children: projet.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 19\n                  }, _this), projet.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                    className: \"p-4\",\n                    children: projet.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 42\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 17\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 15\n              }, _this)\n            }, k, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Project, \"UqkYcFyAQrAlQ1uROojLrh7Bt58=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJQcm9qZWN0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwicHJvamV0cyIsImNhdEFyciIsIm1hcFByb2pldHMiLCJtYXAiLCJwIiwiY2F0IiwiY2F0ZWdvcmllcyIsImUiLCJwdXNoIiwidW5pcXVlQ2F0cyIsIlNldCIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5TmFtZSIsInNldENhdGVnb3J5TmFtZSIsImoiLCJmaWx0ZXIiLCJwcm9qZXQiLCJrIiwibGluayIsInRodW1ibmFpbCIsImFsdGltZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxNQUNkQyxLQURjLEdBQ0tDLGdFQURMLENBQ2RELEtBRGM7QUFBQSxNQUNQRSxPQURPLEdBQ0tELGdFQURMLENBQ1BDLE9BRE87QUFHcEIsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLENBQUQsRUFBTztBQUNwQyxRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsVUFBWjtBQUNBRCxPQUFHLENBQUNGLEdBQUosQ0FBUSxVQUFDSSxDQUFELEVBQU87QUFDYk4sWUFBTSxDQUFDTyxJQUFQLENBQVlELENBQVo7QUFDRCxLQUZEO0FBR0QsR0FMa0IsQ0FBbkI7O0FBT0EsTUFBSUUsVUFBVSxHQUFHLDZGQUFJLElBQUlDLEdBQUosQ0FBUVQsTUFBUixDQUFQLENBQWQ7O0FBQ0EsTUFBSUssVUFBVSxHQUFHSyxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBWCxFQUF1QkksSUFBdkIsRUFBakIsQ0Fab0IsQ0FjcEI7QUFFQTtBQUNBO0FBQ0E7O0FBbEJvQixrQkFvQm9CQyxzREFBUSxDQUFDLEtBQUQsQ0FwQjVCO0FBQUEsTUFvQmJDLFlBcEJhO0FBQUEsTUFvQkNDLGVBcEJEOztBQXNCcEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxxQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHVixVQUFVLENBQUNILEdBQVgsQ0FBZSxVQUFDRSxHQUFELEVBQU1ZLENBQU47QUFBQSwwQkFDWjtBQUFBLCtCQUFhO0FBQWdCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsZUFBZSxDQUFDWCxHQUFELENBQXJCO0FBQUEsV0FBekI7QUFBQSxxQkFBc0RBLEdBQXRELEVBQTJEVSxZQUEzRDtBQUFBLFdBQWFFLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQUZILGVBTUU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0VBQWQ7QUFBQSxrQkFBb0ZuQjtBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsc0VBQWQ7QUFBQSxrQkFDR0UsT0FBTyxDQUFDa0IsTUFBUixDQUFlLFVBQUFDLE1BQU0sRUFBSTtBQUN4QixpQkFBTyxDQUFDQSxNQUFSLENBRHdCLENBRXhCO0FBQ0E7QUFDRCxTQUpBLEVBSUVoQixHQUpGLENBSU0sVUFBQ2dCLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDhCQUNMO0FBQUEsdUJBQ0VELE1BQU0sQ0FBQ2IsVUFBUCxDQUFrQlksTUFBbEIsQ0FBeUIsVUFBQ2IsR0FBRCxFQUFNWSxDQUFOO0FBQUEscUJBQVlGLFlBQVksS0FBS1YsR0FBN0I7QUFBQSxhQUF6QixFQUEyREYsR0FBM0QsQ0FBK0QsVUFBQ2dCLE1BQUQ7QUFBQSxxQkFBWUEsTUFBWjtBQUFBLGFBQS9ELENBREYsZUFFQTtBQUFZLHVCQUFTLEVBQUMsK0NBQXRCO0FBQUEscUNBQ0UscUVBQUMsNkNBQUQ7QUFBTSxvQkFBSSxZQUFLQSxNQUFNLENBQUNFLElBQVosQ0FBVjtBQUFBLHVDQUNFO0FBQUEsNkJBQ0dGLE1BQU0sQ0FBQ0csU0FBUCxpQkFBb0I7QUFBSyx1QkFBRyxpQkFBVUgsTUFBTSxDQUFDRyxTQUFqQixDQUFSO0FBQXNDLHVCQUFHLFlBQUtILE1BQU0sQ0FBQ0ksTUFBWixDQUF6QztBQUErRCw2QkFBUyxFQUFDO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRHZCLGVBRUU7QUFBSSw2QkFBUyxFQUFDLDhDQUFkO0FBQUEsOEJBQThESixNQUFNLENBQUNLO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkYsRUFHR0wsTUFBTSxDQUFDTSxXQUFQLGlCQUFzQjtBQUFHLDZCQUFTLEVBQUMsS0FBYjtBQUFBLDhCQUFvQk4sTUFBTSxDQUFDTTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBU0wsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBO0FBQUEsMEJBREs7QUFBQSxTQUpOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUFxQ0QsQ0EzREQ7O0dBQU12QixPOztLQUFBQSxPO0FBNkRTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9wb3J0Zm9saW8ubWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmNvbnN0IFByb2plY3QgPSAoKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBwcm9qZXRzIH0gPSBhdHRyaWJ1dGVzO1xuXG4gIGxldCBjYXRBcnIgPSBbXVxuICBjb25zdCBtYXBQcm9qZXRzID0gcHJvamV0cy5tYXAoKHApID0+IHtcbiAgICBsZXQgY2F0ID0gcC5jYXRlZ29yaWVzXG4gICAgY2F0Lm1hcCgoZSkgPT4ge1xuICAgICAgY2F0QXJyLnB1c2goZSlcbiAgICB9KVxuICB9KVxuXG4gIGxldCB1bmlxdWVDYXRzID0gWy4uLm5ldyBTZXQoY2F0QXJyKV07XG4gIGxldCBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbSh1bmlxdWVDYXRzKS5zb3J0KCk7XG5cbiAgLy8gY29uc3QgW25ld0NhdCwgc2V0TmV3Q2F0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gIC8vICAgc2V0TmV3Q2F0KGUudGFyZ2V0LmNhdCk7XG4gIC8vIH1cblxuICBjb25zdCBbY2F0ZWdvcnlOYW1lLCBzZXRDYXRlZ29yeU5hbWVdID0gdXNlU3RhdGUoXCJBbGxcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlXCI+QWZmaWNoZXIgdG91dDwvYnV0dG9uPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQsIGopID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17an0+PGJ1dHRvbiBrZXk9e2p9IG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3J5TmFtZShjYXQpfT57Y2F0fXtjYXRlZ29yeU5hbWV9PC9idXR0b24+PC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC00eGwgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtZXh0cmFsaWdodCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7cHJvamV0cy5maWx0ZXIocHJvamV0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhcHJvamV0XG4gICAgICAgICAgICAvL3Byb2pldC5jYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiBjb25zb2xlLmxvZyhjYXQpKVxuICAgICAgICAgICAgLy9jYXRlZ29yeU5hbWUgPT09IHByb2pldC5jYXRlZ29yaWVzLm1hcCgoY2F0LCBqKSA9PiBjYXQpXG4gICAgICAgICAgfSkubWFwKChwcm9qZXQsIGspID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAge3Byb2pldC5jYXRlZ29yaWVzLmZpbHRlcigoY2F0LCBqKSA9PiBjYXRlZ29yeU5hbWUgPT09IGNhdCkubWFwKChwcm9qZXQpID0+IHByb2pldCl9XG4gICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvamV0Lmxpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cHJvamV0LnRodW1ibmFpbCAmJiA8aW1nIHNyYz17YC9pbWcvJHtwcm9qZXQudGh1bWJuYWlsfWB9IGFsdD17YCR7cHJvamV0LmFsdGltZ31gfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JheS05MDAgdGV4dC13aGl0ZVwiPntwcm9qZXQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge3Byb2pldC5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJwLTRcIj57cHJvamV0LmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiB7cHJvamV0LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgICAgICBwcm9qZXQuY2F0ZWdvcmllcy5tYXAoKGNhdCwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2p9PjxidXR0b24ga2V5PXtqfT57Y2F0fTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

})