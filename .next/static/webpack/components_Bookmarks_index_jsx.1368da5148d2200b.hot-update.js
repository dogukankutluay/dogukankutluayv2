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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Bookmarks.module.scss */ \"./styles/Bookmarks.module.scss\");\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bookmarks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bookmarks.json */ \"./bookmarks.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { SliderArrowLeft, SliderArrowRight } from '../../assets/icons';\nvar BookMark = function(param) {\n    var item1 = param.item;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmark),\n        rel: \"noreferrer\",\n        target: \"_blank\",\n        href: item1.href,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item1.title\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item1.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item1.link\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                    children: item1.tags.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"#\",\n                                item\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this));\n};\n_c = BookMark;\nfunction Bookmarks() {\n    var _this2 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), textValue = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_bookmarks_json__WEBPACK_IMPORTED_MODULE_2__), stateBookMarks = ref1[0], setStateBookMarks = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"bookmarks\",\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarks),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MY BOOKMARKS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputWr),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(param) {\n                                    var value = param.target.value;\n                                    setValue(value);\n                                    if (value.length < 1) {\n                                        setStateBookMarks(_bookmarks_json__WEBPACK_IMPORTED_MODULE_2__);\n                                        return;\n                                    }\n                                    var newBookMarks = _bookmarks_json__WEBPACK_IMPORTED_MODULE_2__.filter(function(item) {\n                                        return (item.desc + item.title).toLocaleLowerCase().includes(value);\n                                    });\n                                    setStateBookMarks(newBookMarks);\n                                },\n                                value: textValue,\n                                type: \"text\",\n                                placeholder: \"Search \"\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            textValue.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    setValue(\"\");\n                                    setStateBookMarks(_bookmarks_json__WEBPACK_IMPORTED_MODULE_2__);\n                                },\n                                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIconWr),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIcon),\n                                    children: \"x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksList),\n                        children: stateBookMarks.length ? stateBookMarks.map(function(item, index) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookMark, {\n                                item: item\n                            }, index, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, _this2);\n                        }) : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    !stateBookMarks.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().emptyBookmarks),\n                        children: \"no rows to show\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/MY/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n}\n_s(Bookmarks, \"9lJygXNR2QKvaRyRaTccZKqg1F0=\");\n_c1 = Bookmarks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bookmarks);\nvar _c, _c1;\n$RefreshReg$(_c, \"BookMark\");\n$RefreshReg$(_c1, \"Bookmarks\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2ttYXJrcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ1A7OztBQUNoRCxFQUF5RTtBQUN6RSxHQUFLLENBQUNLLFFBQVEsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxLQUFJLFNBQUpBLElBQUk7O0lBQ3RCLE1BQU0sNkVBQ0hDLENBQUM7UUFDQUMsU0FBUyxFQUFFTCwrRUFBZTtRQUMxQk8sR0FBRyxFQUFDLENBQVk7UUFDaEJDLE1BQU0sRUFBQyxDQUFRO1FBQ2ZDLElBQUksRUFBRU4sS0FBSSxDQUFDTSxJQUFJOzt3RkFFZEMsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs7Z0dBQ3hCWSxDQUFFO2tDQUFFVCxLQUFJLENBQUNVLEtBQUs7Ozs7OztnR0FDZEMsQ0FBQztrQ0FBRVgsS0FBSSxDQUFDWSxJQUFJOzs7Ozs7Z0dBRVpDLENBQUU7a0NBQUViLEtBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUVmUCxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLDRFQUFZO3NHQUN6QlUsQ0FBRztvQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs4QkFDeEJHLEtBQUksQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUGpCLElBQUksRUFBRWtCLEtBQUs7c0NBQ3pCLE1BQU0sK0RBQUxYLENBQUc7O2dDQUFhLENBQUM7Z0NBQUNQLElBQUk7OzJCQUFia0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQixDQUFDO0tBdkJLbkIsUUFBUTtTQXdCTG9CLFNBQVMsR0FBRyxDQUFDOzs7SUFDcEIsR0FBSyxDQUF5QnZCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWxDd0IsU0FBUyxHQUFjeEIsR0FBWSxLQUF4QnlCLFFBQVEsR0FBSXpCLEdBQVk7SUFDMUMsR0FBSyxDQUF1Q0EsSUFBdUIsR0FBdkJBLCtDQUFRLENBQUNFLDRDQUFhLEdBQTNEd0IsY0FBYyxHQUF1QjFCLElBQXVCLEtBQTVDMkIsaUJBQWlCLEdBQUkzQixJQUF1QjtJQUVuRSxNQUFNLDZFQUNINEIsQ0FBTztRQUFDQyxFQUFFLEVBQUMsQ0FBVztRQUFDdkIsU0FBUyxFQUFFTCxnRkFBZ0I7O3dGQUNoRFUsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFTCxzRkFBc0I7O2dHQUNuQ1ksQ0FBRTtrQ0FBQyxDQUFZOzs7Ozs7Z0dBRWZGLENBQUc7d0JBQUNMLFNBQVMsRUFBRUwsOEVBQWM7O3dHQUMzQmdDLENBQUs7Z0NBQ0pDLFFBQVEsRUFBRSxRQUFRLFFBQW1CLENBQUM7d0NBQWZDLEtBQUssU0FBZjFCLE1BQU0sQ0FBSTBCLEtBQUs7b0NBQzFCVixRQUFRLENBQUNVLEtBQUs7b0NBQ2QsRUFBRSxFQUFFQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3Q0FDckJULGlCQUFpQixDQUFDekIsNENBQWE7d0NBQy9CLE1BQU07b0NBQ1IsQ0FBQztvQ0FFRCxHQUFHLENBQUNtQyxZQUFZLEdBQUduQyxtREFBb0IsQ0FBQyxRQUFRLENBQVBFLElBQUk7d0NBQzNDLE1BQU1ZLEVBQUxaLElBQUksQ0FBQ1ksSUFBSSxHQUFHWixJQUFJLENBQUNVLEtBQUssRUFBRXlCLGlCQUFpQixHQUFHQyxRQUFRLENBQUNMLEtBQUs7O29DQUU3RFIsaUJBQWlCLENBQUNVLFlBQVk7Z0NBQ2hDLENBQUM7Z0NBQ0RGLEtBQUssRUFBRVgsU0FBUztnQ0FDaEJpQixJQUFJLEVBQUMsQ0FBTTtnQ0FDWEMsV0FBVyxFQUFDLENBQVM7Ozs7Ozs0QkFFdEJsQixTQUFTLENBQUNZLE1BQU0sK0VBQ2R6QixDQUFHO2dDQUNGZ0MsT0FBTyxFQUFFLFFBQVEsR0FBRixDQUFDO29DQUNkbEIsUUFBUSxDQUFDLENBQUU7b0NBQ1hFLGlCQUFpQixDQUFDekIsNENBQWE7Z0NBQ2pDLENBQUM7Z0NBQ0RJLFNBQVMsRUFBRUwsdUZBQXVCO3NIQUVqQzRDLENBQUk7b0NBQUN2QyxTQUFTLEVBQUVMLHFGQUFxQjs4Q0FBRSxDQUFDOzs7Ozs7Ozs7O3VDQUV6QyxJQUFJOzs7Ozs7Ozs7Ozs7O3dGQUdYVSxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLHVGQUF1Qjs7Z0dBQ3BDVSxDQUFHO3dCQUFDTCxTQUFTLEVBQUVMLG9GQUFvQjtrQ0FDakN5QixjQUFjLENBQUNVLE1BQU0sR0FDbEJWLGNBQWMsQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBUGpCLElBQUksRUFBRWtCLEtBQUs7MENBQzdCLE1BQU0sK0RBQUxuQixRQUFRO2dDQUFhQyxJQUFJLEVBQUVBLElBQUk7K0JBQWpCa0IsS0FBSzs7Ozs7NkJBRXRCLENBQUU7Ozs7OztxQkFFTkksY0FBYyxDQUFDVSxNQUFNLGdGQUNwQnpCLENBQUc7d0JBQUNMLFNBQVMsRUFBRUwscUZBQXFCO2tDQUFFLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRSxDQUFDO0dBdERRc0IsU0FBUztNQUFUQSxTQUFTO0FBd0RsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va21hcmtzL2luZGV4LmpzeD9jN2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Cb29rbWFya3MubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGJvb2ttYXJrc0RhdGEgZnJvbSBcIi4uLy4uL2Jvb2ttYXJrcy5qc29uXCI7XHJcbi8vaW1wb3J0IHsgU2xpZGVyQXJyb3dMZWZ0LCBTbGlkZXJBcnJvd1JpZ2h0IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcclxuY29uc3QgQm9va01hcmsgPSAoeyBpdGVtIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm9va21hcmt9XHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e2l0ZW0uZGVzY308L3A+XHJcblxyXG4gICAgICAgIDxoMj57aXRlbS5saW5rfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG4gICAgICAgICAge2l0ZW0udGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+I3tpdGVtfTwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcbmZ1bmN0aW9uIEJvb2ttYXJrcygpIHtcclxuICBjb25zdCBbdGV4dFZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGVCb29rTWFya3MsIHNldFN0YXRlQm9va01hcmtzXSA9IHVzZVN0YXRlKGJvb2ttYXJrc0RhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJib29rbWFya3NcIiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3N9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2ttYXJrc0hlYWRlcn0+XHJcbiAgICAgICAgPGgxPk1ZIEJPT0tNQVJLUzwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlQm9va01hcmtzKGJvb2ttYXJrc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGV0IG5ld0Jvb2tNYXJrcyA9IGJvb2ttYXJrc0RhdGEuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZGVzYyArIGl0ZW0udGl0bGUpLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzZXRTdGF0ZUJvb2tNYXJrcyhuZXdCb29rTWFya3MpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dFZhbHVlfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RleHRWYWx1ZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShcIlwiKTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlQm9va01hcmtzKGJvb2ttYXJrc0RhdGEpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlVGV4dEljb25Xcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRleHRJY29ufT54PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3NDb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2ttYXJrc0xpc3R9PlxyXG4gICAgICAgICAge3N0YXRlQm9va01hcmtzLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHN0YXRlQm9va01hcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb29rTWFyayBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IXN0YXRlQm9va01hcmtzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5Qm9va21hcmtzfT5ubyByb3dzIHRvIHNob3c8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rbWFya3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiYm9va21hcmtzRGF0YSIsIkJvb2tNYXJrIiwiaXRlbSIsImEiLCJjbGFzc05hbWUiLCJib29rbWFyayIsInJlbCIsInRhcmdldCIsImhyZWYiLCJkaXYiLCJsZWZ0IiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjIiwiaDIiLCJsaW5rIiwicmlnaHQiLCJ0YWdzIiwibWFwIiwiaW5kZXgiLCJCb29rbWFya3MiLCJ0ZXh0VmFsdWUiLCJzZXRWYWx1ZSIsInN0YXRlQm9va01hcmtzIiwic2V0U3RhdGVCb29rTWFya3MiLCJzZWN0aW9uIiwiaWQiLCJib29rbWFya3MiLCJib29rbWFya3NIZWFkZXIiLCJpbnB1dFdyIiwiaW5wdXQiLCJvbkNoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwibmV3Qm9va01hcmtzIiwiZmlsdGVyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJyZW1vdmVUZXh0SWNvbldyIiwic3BhbiIsInJlbW92ZVRleHRJY29uIiwiYm9va21hcmtzQ29udGVudCIsImJvb2ttYXJrc0xpc3QiLCJlbXB0eUJvb2ttYXJrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Bookmarks/index.jsx\n");

/***/ })

});