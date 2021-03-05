webpackHotUpdate_N_E("pages/skills",{

/***/ "./components/Skill.js":
/*!*****************************!*\
  !*** ./components/Skill.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_skills_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/skills.md */ \"./content/skills.md\");\n/* harmony import */ var _content_skills_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_skills_md__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/Users/taff/Documents/github/suzette-sousa.github.io/components/Skill.js\",\n    _this = undefined;\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n\n\n\nvar Skill = function Skill() {\n  var title = _content_skills_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].title,\n      certifs = _content_skills_md__WEBPACK_IMPORTED_MODULE_1__[\"attributes\"].certifs;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"mb-6 text-4xl uppercase tracking-wider font-extralight text-center\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: certifs.map(function (certif, k) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"flex flex-col lg:flex-row overflow-hidden bg-white rounded-sm shadow-sm mt-4 \".concat(!certif.date ? \"bg-gray-200\" : \"\"),\n            children: [!certif.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"bg-gray-300 flex justify-center items-center text-center lg:w-40 p-5 uppercase\",\n              children: \"En pr\\xE9paration\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 32\n            }, _this), certif.date && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"bg-green-200 flex justify-center flex-col items-center lg:w-40 p-5 uppercase\",\n              children: [\"Obtenue le \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"font-bold nowrap\",\n                children: certif.date\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 13,\n                columnNumber: 136\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 31\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"p-5 flex-1\",\n              children: [certif.thumbnail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: \"/\".concat(certif.thumbnail),\n                alt: \"\".concat(certif.altimg),\n                className: \"w-full max-h-6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 15,\n                columnNumber: 38\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                className: \"text-xl font-bold mb-1\",\n                children: certif.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 17\n              }, _this), certif.description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: certif.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 40\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Skill;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skill);\n\nvar _c;\n\n$RefreshReg$(_c, \"Skill\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ta2lsbC5qcz9kMTM3Il0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiU2tpbGwiLCJ0aXRsZSIsImF0dHJpYnV0ZXMiLCJjZXJ0aWZzIiwibWFwIiwiY2VydGlmIiwiayIsImRhdGUiLCJ0aHVtYm5haWwiLCJhbHRpbWciLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9GQUFELENBQXBCOztBQUNBOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQSxNQUNaQyxLQURZLEdBQ09DLDZEQURQLENBQ1pELEtBRFk7QUFBQSxNQUNMRSxPQURLLEdBQ09ELDZEQURQLENBQ0xDLE9BREs7QUFFbEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvRUFBZDtBQUFBLGtCQUFvRkY7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFDR0UsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsOEJBQ1g7QUFBWSxxQkFBUyx5RkFBa0YsQ0FBQ0QsTUFBTSxDQUFDRSxJQUFSLEdBQWUsYUFBZixHQUErQixFQUFqSCxDQUFyQjtBQUFBLHVCQUNHLENBQUNGLE1BQU0sQ0FBQ0UsSUFBUixpQkFBZ0I7QUFBSyx1QkFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURuQixFQUVHRixNQUFNLENBQUNFLElBQVAsaUJBQWU7QUFBSyx1QkFBUyxFQUFDLDhFQUFmO0FBQUEscURBQXlHO0FBQU0seUJBQVMsRUFBQyxrQkFBaEI7QUFBQSwwQkFBb0NGLE1BQU0sQ0FBQ0U7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZsQixlQUdFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEseUJBQ0dGLE1BQU0sQ0FBQ0csU0FBUCxpQkFBb0I7QUFBSyxtQkFBRyxhQUFNSCxNQUFNLENBQUNHLFNBQWIsQ0FBUjtBQUFrQyxtQkFBRyxZQUFLSCxNQUFNLENBQUNJLE1BQVosQ0FBckM7QUFBMkQseUJBQVMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUR2QixlQUVFO0FBQUkseUJBQVMsRUFBQyx3QkFBZDtBQUFBLDBCQUF3Q0osTUFBTSxDQUFDSztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBR0dMLE1BQU0sQ0FBQ00sV0FBUCxpQkFBc0I7QUFBQSwwQkFBSU4sTUFBTSxDQUFDTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBLGFBQVNMLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvQkQsQ0F0QkQ7O0tBQU1OLEs7QUF3QlNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ta2lsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29udGVudC9za2lsbHMubWQnO1xuY29uc3QgU2tpbGwgPSAoKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBjZXJ0aWZzIH0gPSBhdHRyaWJ1dGVzO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC00eGwgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtZXh0cmFsaWdodCB0ZXh0LWNlbnRlclwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2NlcnRpZnMubWFwKChjZXJ0aWYsIGspID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtc20gc2hhZG93LXNtIG10LTQgJHshY2VydGlmLmRhdGUgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICB7IWNlcnRpZi5kYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgbGc6dy00MCBwLTUgdXBwZXJjYXNlXCI+RW4gcHLDqXBhcmF0aW9uPC9kaXY+fVxuICAgICAgICAgICAgICB7Y2VydGlmLmRhdGUgJiYgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0yMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbGc6dy00MCBwLTUgdXBwZXJjYXNlXCI+T2J0ZW51ZSBsZSA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgbm93cmFwXCI+e2NlcnRpZi5kYXRlfTwvc3Bhbj48L2Rpdj59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIHtjZXJ0aWYudGh1bWJuYWlsICYmIDxpbWcgc3JjPXtgLyR7Y2VydGlmLnRodW1ibmFpbH1gfSBhbHQ9e2Ake2NlcnRpZi5hbHRpbWd9YH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC1oLTZcIiAvPn1cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMVwiPntjZXJ0aWYubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIHtjZXJ0aWYuZGVzY3JpcHRpb24gJiYgPHA+e2NlcnRpZi5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Skill.js\n");

/***/ })

})