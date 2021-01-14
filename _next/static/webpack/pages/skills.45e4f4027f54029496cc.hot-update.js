webpackHotUpdate_N_E("pages/skills",{

/***/ "./components/Skill.js":
/*!*****************************!*\
  !*** ./components/Skill.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_skills_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/skills.md */ \"./content/skills.md\");\n/* harmony import */ var _content_skills_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_skills_md__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ \"./components/Link.js\");\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Skill.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\n\nvar Skill = function Skill() {\n  var title = _content_skills_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      certifs = _content_skills_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].certifs;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: certifs.map(function (certif, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"flex overflow-hidden bg-white rounded-sm shadow-sm mt-4 \".concat(!certif.date ? \"bg-gray-200\" : \"\"),\n            children: [!certif.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"bg-gray-300 flex justify-center items-center w-36 p-4\",\n              children: \"En pr\\xE9paration\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 34\n            }, _this), certif.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"bg-green-200 flex flex-col items-center w-36 p-4\",\n              children: [\"Obtenue le \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"nowrap\",\n                children: certif.date\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 15,\n                columnNumber: 110\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"p-4\",\n              children: [certif.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/img/\".concat(certif.thumbnail),\n                alt: \"\".concat(certif.altimg),\n                className: \"w-full\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 40\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                className: \"text-xl font-bold mb-2\",\n                children: certif.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 19\n              }, _this), certif.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: certif.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 19,\n                columnNumber: 42\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, _this)]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Skill;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skill);\n\nvar _c;\n\n$RefreshReg$(_c, \"Skill\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbC5qcz9kMTM3Il0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiU2tpbGwiLCJ0aXRsZSIsImF0dHJpYnV0ZXMiLCJjZXJ0aWZzIiwibWFwIiwiY2VydGlmIiwiayIsImRhdGUiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxvRkFBRCxDQUFwQjs7QUFDQTtBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQSxNQUVWQyxLQUZVLEdBRVNDLDZEQUZULENBRVZELEtBRlU7QUFBQSxNQUVIRSxPQUZHLEdBRVNELDZEQUZULENBRUhDLE9BRkc7QUFHaEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvRUFBZDtBQUFBLGtCQUFvRkY7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFDR0UsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsOEJBQ1g7QUFBWSxxQkFBUyxvRUFBNkQsQ0FBQ0QsTUFBTSxDQUFDRSxJQUFSLEdBQWUsYUFBZixHQUErQixFQUE1RixDQUFyQjtBQUFBLHVCQUNHLENBQUNGLE1BQU0sQ0FBQ0UsSUFBUixpQkFBZ0I7QUFBSyx1QkFBUyxFQUFDLHVEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURuQixFQUVHRixNQUFNLENBQUNFLElBQVAsaUJBQWU7QUFBSyx1QkFBUyxFQUFDLGtEQUFmO0FBQUEscURBQTZFO0FBQU0seUJBQVMsRUFBQyxRQUFoQjtBQUFBLDBCQUEwQkYsTUFBTSxDQUFDRTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRmxCLGVBR0U7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSx5QkFDR0YsTUFBTSxDQUFDRyxTQUFQLGlCQUFvQjtBQUFLLG1CQUFHLGlCQUFVSCxNQUFNLENBQUNHLFNBQWpCLENBQVI7QUFBc0MsbUJBQUcsWUFBS0gsTUFBTSxDQUFDSSxNQUFaLENBQXpDO0FBQStELHlCQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEdkIsZUFFRTtBQUFJLHlCQUFTLEVBQUMsd0JBQWQ7QUFBQSwwQkFBd0NKLE1BQU0sQ0FBQ0s7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQUdHTCxNQUFNLENBQUNNLFdBQVAsaUJBQXNCO0FBQUEsMEJBQUlOLE1BQU0sQ0FBQ007QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQSxhQUFTTCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBcUJILENBeEJEOztLQUFNTixLO0FBMEJTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2tpbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbnRlbnQvc2tpbGxzLm1kJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmNvbnN0IFNraWxsID0gKCkgPT4ge1xuXG4gICAgbGV0IHsgdGl0bGUsIGNlcnRpZnMgfSA9IGF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi02IHRleHQtNHhsIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LWV4dHJhbGlnaHQgdGV4dC1jZW50ZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y2VydGlmcy5tYXAoKGNlcnRpZiwgaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrfSBjbGFzc05hbWU9e2BmbGV4IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLXNtIHNoYWRvdy1zbSBtdC00ICR7IWNlcnRpZi5kYXRlID8gXCJiZy1ncmF5LTIwMFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICB7IWNlcnRpZi5kYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy0zNiBwLTRcIj5FbiBwcsOpcGFyYXRpb248L2Rpdj59XG4gICAgICAgICAgICAgICAge2NlcnRpZi5kYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctMzYgcC00XCI+T2J0ZW51ZSBsZSA8c3BhbiBjbGFzc05hbWU9XCJub3dyYXBcIj57Y2VydGlmLmRhdGV9PC9zcGFuPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAge2NlcnRpZi50aHVtYm5haWwgJiYgPGltZyBzcmM9e2AvaW1nLyR7Y2VydGlmLnRodW1ibmFpbH1gfSBhbHQ9e2Ake2NlcnRpZi5hbHRpbWd9YH0gY2xhc3NOYW1lPVwidy1mdWxsXCIgLz59XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntjZXJ0aWYubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAge2NlcnRpZi5kZXNjcmlwdGlvbiAmJiA8cD57Y2VydGlmLmRlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skill.js\n");

/***/ })

})