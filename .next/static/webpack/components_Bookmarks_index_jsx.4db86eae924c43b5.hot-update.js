"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Bookmarks_index_jsx",{

/***/ "./components/Bookmarks/index.jsx":
/*!****************************************!*\
  !*** ./components/Bookmarks/index.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Bookmarks.module.scss */ \"./styles/Bookmarks.module.scss\");\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bookmarks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bookmarks.json */ \"./bookmarks.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { SliderArrowLeft, SliderArrowRight } from '../../assets/icons';\nvar BookMark = function(param) {\n    var item1 = param.item;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmark),\n        rel: \"noreferrer\",\n        target: \"_blank\",\n        href: item1.href,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item1.title\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item1.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item1.link\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                    children: item1.tags.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"#\",\n                                item\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this));\n};\n_c = BookMark;\nfunction Bookmarks() {\n    var _this2 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), textValue = ref[0], setValue = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"bookmarks\",\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarks),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MY BOOKMARKS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputWr),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(param) {\n                                    var value = param.target.value;\n                                    console.log(value);\n                                },\n                                value: textValue,\n                                type: \"text\",\n                                placeholder: \"Search \"\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            value.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return setValue(\"\");\n                                },\n                                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIconWr),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIcon),\n                                    children: \"x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksList),\n                    children: _bookmarks_json__WEBPACK_IMPORTED_MODULE_2__.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookMark, {\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, _this2);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n}\n_s(Bookmarks, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c1 = Bookmarks;\n/**\r\n *   <div className={styles.bookmarksPagination}>\r\n          <button>\r\n            <SliderArrowLeft />\r\n          </button>\r\n          <button>1</button>\r\n          <button>2</button>\r\n          <button>3</button>\r\n          <button>4</button>\r\n          <h1>...</h1>\r\n          <button>34</button>\r\n          <button>\r\n            <SliderArrowRight />\r\n          </button>\r\n        </div>\r\n */ /* harmony default export */ __webpack_exports__[\"default\"] = (Bookmarks);\nvar _c, _c1;\n$RefreshReg$(_c, \"BookMark\");\n$RefreshReg$(_c1, \"Bookmarks\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2ttYXJrcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ1A7OztBQUNoRCxFQUF5RTtBQUN6RSxHQUFLLENBQUNLLFFBQVEsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxLQUFJLFNBQUpBLElBQUk7O0lBQ3RCLE1BQU0sNkVBQ0hDLENBQUM7UUFDQUMsU0FBUyxFQUFFTCwrRUFBZTtRQUMxQk8sR0FBRyxFQUFDLENBQVk7UUFDaEJDLE1BQU0sRUFBQyxDQUFRO1FBQ2ZDLElBQUksRUFBRU4sS0FBSSxDQUFDTSxJQUFJOzt3RkFFZEMsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs7Z0dBQ3hCWSxDQUFFO2tDQUFFVCxLQUFJLENBQUNVLEtBQUs7Ozs7OztnR0FDZEMsQ0FBQztrQ0FBRVgsS0FBSSxDQUFDWSxJQUFJOzs7Ozs7Z0dBRVpDLENBQUU7a0NBQUViLEtBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUVmUCxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLDRFQUFZO3NHQUN6QlUsQ0FBRztvQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs4QkFDeEJHLEtBQUksQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUGpCLElBQUksRUFBRWtCLEtBQUs7c0NBQ3pCLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMQyxDQUFJOztnQ0FBYSxDQUFDO2dDQUFDcEIsSUFBSTs7MkJBQWJrQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLENBQUM7S0F2QktuQixRQUFRO1NBd0JMc0IsU0FBUyxHQUFHLENBQUM7OztJQUNwQixHQUFLLENBQXlCekIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBbEMwQixTQUFTLEdBQWMxQixHQUFZLEtBQXhCMkIsUUFBUSxHQUFJM0IsR0FBWTtJQUUxQyxNQUFNLDZFQUNINEIsQ0FBTztRQUFDQyxFQUFFLEVBQUMsQ0FBVztRQUFDdkIsU0FBUyxFQUFFTCxnRkFBZ0I7O3dGQUNoRFUsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFTCxzRkFBc0I7O2dHQUNuQ1ksQ0FBRTtrQ0FBQyxDQUFZOzs7Ozs7Z0dBRWZGLENBQUc7d0JBQUNMLFNBQVMsRUFBRUwsOEVBQWM7O3dHQUMzQmdDLENBQUs7Z0NBQ0pDLFFBQVEsRUFBRSxRQUFRLFFBQW1CLENBQUM7d0NBQWZDLEtBQUssU0FBZjFCLE1BQU0sQ0FBSTBCLEtBQUs7b0NBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztnQ0FDbkIsQ0FBQztnQ0FDREEsS0FBSyxFQUFFVCxTQUFTO2dDQUNoQlksSUFBSSxFQUFDLENBQU07Z0NBQ1hDLFdBQVcsRUFBQyxDQUFTOzs7Ozs7NEJBRXRCSixLQUFLLENBQUNLLE1BQU0sK0VBQ1Y3QixDQUFHO2dDQUNGOEIsT0FBTyxFQUFFLFFBQVE7b0NBQUZkLE1BQU0sQ0FBTkEsUUFBUSxDQUFDLENBQUU7O2dDQUMxQnJCLFNBQVMsRUFBRUwsdUZBQXVCO3NIQUVqQ3VCLENBQUk7b0NBQUNsQixTQUFTLEVBQUVMLHFGQUFxQjs4Q0FBRSxDQUFDOzs7Ozs7Ozs7O3VDQUV6QyxJQUFJOzs7Ozs7Ozs7Ozs7O3dGQUdYVSxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLHVGQUF1QjtzR0FDcENVLENBQUc7b0JBQUNMLFNBQVMsRUFBRUwsb0ZBQW9COzhCQUNqQ0MsZ0RBQWlCLENBQUMsUUFBUSxDQUFQRSxJQUFJLEVBQUVrQixLQUFLO3NDQUM3QixNQUFNLCtEQUFMbkIsUUFBUTs0QkFBYUMsSUFBSSxFQUFFQSxJQUFJOzJCQUFqQmtCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEMsQ0FBQztHQXBDUUcsU0FBUztNQUFUQSxTQUFTO0FBcUNsQixFQWVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va21hcmtzL2luZGV4LmpzeD9jN2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Cb29rbWFya3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGJvb2ttYXJrc0RhdGEgZnJvbSBcIi4uLy4uL2Jvb2ttYXJrcy5qc29uXCI7XHJcbi8vaW1wb3J0IHsgU2xpZGVyQXJyb3dMZWZ0LCBTbGlkZXJBcnJvd1JpZ2h0IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuY29uc3QgQm9va01hcmsgPSAoeyBpdGVtIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm9va21hcmt9XHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e2l0ZW0uZGVzY308L3A+XHJcblxyXG4gICAgICAgIDxoMj57aXRlbS5saW5rfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG4gICAgICAgICAge2l0ZW0udGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PiN7aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuZnVuY3Rpb24gQm9va21hcmtzKCkge1xyXG4gIGNvbnN0IFt0ZXh0VmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJib29rbWFya3NcIiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2ttYXJrc0hlYWRlcn0+XHJcbiAgICAgICAgPGgxPk1ZIEJPT0tNQVJLUzwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0VmFsdWV9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dmFsdWUubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmFsdWUoXCJcIil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGV4dEljb25Xcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRleHRJY29ufT54PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3NDb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2ttYXJrc0xpc3R9PlxyXG4gICAgICAgICAge2Jvb2ttYXJrc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Qm9va01hcmsga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbi8qKlxyXG4gKiAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va21hcmtzUGFnaW5hdGlvbn0+XHJcbiAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICA8U2xpZGVyQXJyb3dMZWZ0IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+MTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj4yPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPjM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+NDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgxPi4uLjwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uPjM0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICA8U2xpZGVyQXJyb3dSaWdodCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBCb29rbWFya3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYm9va21hcmtzRGF0YSIsIkJvb2tNYXJrIiwiaXRlbSIsImEiLCJjbGFzc05hbWUiLCJib29rbWFyayIsInJlbCIsInRhcmdldCIsImhyZWYiLCJkaXYiLCJsZWZ0IiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjIiwiaDIiLCJsaW5rIiwicmlnaHQiLCJ0YWdzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJzcGFuIiwiQm9va21hcmtzIiwidGV4dFZhbHVlIiwic2V0VmFsdWUiLCJzZWN0aW9uIiwiaWQiLCJib29rbWFya3MiLCJib29rbWFya3NIZWFkZXIiLCJpbnB1dFdyIiwiaW5wdXQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsIm9uQ2xpY2siLCJyZW1vdmVUZXh0SWNvbldyIiwicmVtb3ZlVGV4dEljb24iLCJib29rbWFya3NDb250ZW50IiwiYm9va21hcmtzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Bookmarks/index.jsx\n");

/***/ })

});