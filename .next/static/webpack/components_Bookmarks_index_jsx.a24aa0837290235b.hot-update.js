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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Bookmarks.module.scss */ \"./styles/Bookmarks.module.scss\");\n/* harmony import */ var _styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bookmarks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bookmarks.json */ \"./bookmarks.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n//import { SliderArrowLeft, SliderArrowRight } from '../../assets/icons';\nvar BookMark = function(param) {\n    var item1 = param.item;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmark),\n        rel: \"noreferrer\",\n        target: \"_blank\",\n        href: item1.href,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: item1.title\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item1.desc\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item1.link\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tags),\n                    children: item1.tags.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"#\",\n                                item\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this));\n};\n_c = BookMark;\nfunction Bookmarks() {\n    var _this2 = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), textValue = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_bookmarks_json__WEBPACK_IMPORTED_MODULE_2__), stateBookMarks = ref1[0], setStateBookMarks = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"bookmarks\",\n        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarks),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MY BOOKMARKS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputWr),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: function(param) {\n                                    var value = param.target.value;\n                                    setValue(value);\n                                    if (value.length < 1) {\n                                        setStateBookMarks(_bookmarks_json__WEBPACK_IMPORTED_MODULE_2__);\n                                        return;\n                                    }\n                                    var newBookMarks = stateBookMarks.filter(function(item) {\n                                        return (item.desc + item.title).toLocaleLowerCase().includes(value);\n                                    });\n                                    setStateBookMarks(newBookMarks);\n                                },\n                                value: textValue,\n                                type: \"text\",\n                                placeholder: \"Search \"\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            textValue.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return setValue(\"\");\n                                },\n                                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIconWr),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().removeTextIcon),\n                                    children: \"x\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Bookmarks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bookmarksList),\n                    children: stateBookMarks.length ? stateBookMarks.map(function(item, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookMark, {\n                            item: item\n                        }, index, false, {\n                            fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, _this2);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"anan\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dogukankutluay/Desktop/a/dogukankutluay/components/Bookmarks/index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n}\n_s(Bookmarks, \"9lJygXNR2QKvaRyRaTccZKqg1F0=\");\n_c1 = Bookmarks;\n/**\r\n *   <div className={styles.bookmarksPagination}>\r\n          <button>\r\n            <SliderArrowLeft />\r\n          </button>\r\n          <button>1</button>\r\n          <button>2</button>\r\n          <button>3</button>\r\n          <button>4</button>\r\n          <h1>...</h1>\r\n          <button>34</button>\r\n          <button>\r\n            <SliderArrowRight />\r\n          </button>\r\n        </div>\r\n */ /* harmony default export */ __webpack_exports__[\"default\"] = (Bookmarks);\nvar _c, _c1;\n$RefreshReg$(_c, \"BookMark\");\n$RefreshReg$(_c1, \"Bookmarks\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2ttYXJrcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ1A7OztBQUNoRCxFQUF5RTtBQUN6RSxHQUFLLENBQUNLLFFBQVEsR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxLQUFJLFNBQUpBLElBQUk7O0lBQ3RCLE1BQU0sNkVBQ0hDLENBQUM7UUFDQUMsU0FBUyxFQUFFTCwrRUFBZTtRQUMxQk8sR0FBRyxFQUFDLENBQVk7UUFDaEJDLE1BQU0sRUFBQyxDQUFRO1FBQ2ZDLElBQUksRUFBRU4sS0FBSSxDQUFDTSxJQUFJOzt3RkFFZEMsQ0FBRztnQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs7Z0dBQ3hCWSxDQUFFO2tDQUFFVCxLQUFJLENBQUNVLEtBQUs7Ozs7OztnR0FDZEMsQ0FBQztrQ0FBRVgsS0FBSSxDQUFDWSxJQUFJOzs7Ozs7Z0dBRVpDLENBQUU7a0NBQUViLEtBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs7Ozs7O3dGQUVmUCxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLDRFQUFZO3NHQUN6QlUsQ0FBRztvQkFBQ0wsU0FBUyxFQUFFTCwyRUFBVzs4QkFDeEJHLEtBQUksQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUGpCLElBQUksRUFBRWtCLEtBQUs7c0NBQ3pCLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMQyxDQUFJOztnQ0FBYSxDQUFDO2dDQUFDcEIsSUFBSTs7MkJBQWJrQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCLENBQUM7S0F2QktuQixRQUFRO1NBd0JMc0IsU0FBUyxHQUFHLENBQUM7OztJQUNwQixHQUFLLENBQXlCekIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBbEMwQixTQUFTLEdBQWMxQixHQUFZLEtBQXhCMkIsUUFBUSxHQUFJM0IsR0FBWTtJQUMxQyxHQUFLLENBQXVDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ0UsNENBQWEsR0FBM0QwQixjQUFjLEdBQXVCNUIsSUFBdUIsS0FBNUM2QixpQkFBaUIsR0FBSTdCLElBQXVCO0lBRW5FLE1BQU0sNkVBQ0g4QixDQUFPO1FBQUNDLEVBQUUsRUFBQyxDQUFXO1FBQUN6QixTQUFTLEVBQUVMLGdGQUFnQjs7d0ZBQ2hEVSxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLHNGQUFzQjs7Z0dBQ25DWSxDQUFFO2tDQUFDLENBQVk7Ozs7OztnR0FFZkYsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFFTCw4RUFBYzs7d0dBQzNCa0MsQ0FBSztnQ0FDSkMsUUFBUSxFQUFFLFFBQVEsUUFBbUIsQ0FBQzt3Q0FBZkMsS0FBSyxTQUFmNUIsTUFBTSxDQUFJNEIsS0FBSztvQ0FDMUJWLFFBQVEsQ0FBQ1UsS0FBSztvQ0FFZCxFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dDQUNyQlQsaUJBQWlCLENBQUMzQiw0Q0FBYTt3Q0FDL0IsTUFBTTtvQ0FDUixDQUFDO29DQUNELEdBQUcsQ0FBQ3FDLFlBQVksR0FBR1gsY0FBYyxDQUFDWSxNQUFNLENBQUMsUUFBUSxDQUFQcEMsSUFBSTt3Q0FDNUMsTUFBTVksRUFBTFosSUFBSSxDQUFDWSxJQUFJLEdBQUdaLElBQUksQ0FBQ1UsS0FBSyxFQUFFMkIsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0wsS0FBSzs7b0NBRTdEUixpQkFBaUIsQ0FBQ1UsWUFBWTtnQ0FDaEMsQ0FBQztnQ0FDREYsS0FBSyxFQUFFWCxTQUFTO2dDQUNoQmlCLElBQUksRUFBQyxDQUFNO2dDQUNYQyxXQUFXLEVBQUMsQ0FBUzs7Ozs7OzRCQUV0QmxCLFNBQVMsQ0FBQ1ksTUFBTSwrRUFDZDNCLENBQUc7Z0NBQ0ZrQyxPQUFPLEVBQUUsUUFBUTtvQ0FBRmxCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDLENBQUU7O2dDQUMxQnJCLFNBQVMsRUFBRUwsdUZBQXVCO3NIQUVqQ3VCLENBQUk7b0NBQUNsQixTQUFTLEVBQUVMLHFGQUFxQjs4Q0FBRSxDQUFDOzs7Ozs7Ozs7O3VDQUV6QyxJQUFJOzs7Ozs7Ozs7Ozs7O3dGQUdYVSxDQUFHO2dCQUFDTCxTQUFTLEVBQUVMLHVGQUF1QjtzR0FDcENVLENBQUc7b0JBQUNMLFNBQVMsRUFBRUwsb0ZBQW9COzhCQUNqQzJCLGNBQWMsQ0FBQ1UsTUFBTSxHQUNwQlYsY0FBYyxDQUFDUCxHQUFHLENBQUMsUUFBUSxDQUFQakIsSUFBSSxFQUFFa0IsS0FBSztzQ0FDN0IsTUFBTSwrREFBTG5CLFFBQVE7NEJBQWFDLElBQUksRUFBRUEsSUFBSTsyQkFBakJrQixLQUFLOzs7OztxR0FHckJYLENBQUc7a0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQixDQUFDO0dBbERRYyxTQUFTO01BQVRBLFNBQVM7QUFtRGxCLEVBZUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rbWFya3MvaW5kZXguanN4P2M3YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0Jvb2ttYXJrcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYm9va21hcmtzRGF0YSBmcm9tIFwiLi4vLi4vYm9va21hcmtzLmpzb25cIjtcclxuLy9pbXBvcnQgeyBTbGlkZXJBcnJvd0xlZnQsIFNsaWRlckFycm93UmlnaHQgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xyXG5jb25zdCBCb29rTWFyayA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya31cclxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57aXRlbS5kZXNjfTwvcD5cclxuXHJcbiAgICAgICAgPGgyPntpdGVtLmxpbmt9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc30+XHJcbiAgICAgICAgICB7aXRlbS50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+I3tpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5mdW5jdGlvbiBCb29rbWFya3MoKSB7XHJcbiAgY29uc3QgW3RleHRWYWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlQm9va01hcmtzLCBzZXRTdGF0ZUJvb2tNYXJrc10gPSB1c2VTdGF0ZShib29rbWFya3NEYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiYm9va21hcmtzXCIgY2xhc3NOYW1lPXtzdHlsZXMuYm9va21hcmtzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3NIZWFkZXJ9PlxyXG4gICAgICAgIDxoMT5NWSBCT09LTUFSS1M8L2gxPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V3J9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGVCb29rTWFya3MoYm9va21hcmtzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBuZXdCb29rTWFya3MgPSBzdGF0ZUJvb2tNYXJrcy5maWx0ZXIoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5kZXNjICsgaXRlbS50aXRsZSkudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldFN0YXRlQm9va01hcmtzKG5ld0Jvb2tNYXJrcyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0VmFsdWV9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGV4dFZhbHVlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZhbHVlKFwiXCIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZVRleHRJY29uV3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUZXh0SWNvbn0+eDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va21hcmtzQ29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rbWFya3NMaXN0fT5cclxuICAgICAgICAgIHtzdGF0ZUJvb2tNYXJrcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIHN0YXRlQm9va01hcmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8Qm9va01hcmsga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+YW5hbjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4vKipcclxuICogICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb2ttYXJrc1BhZ2luYXRpb259PlxyXG4gICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgPFNsaWRlckFycm93TGVmdCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPjE8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+MjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj4zPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPjQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxoMT4uLi48L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvbj4zNDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgPFNsaWRlckFycm93UmlnaHQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgQm9va21hcmtzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImJvb2ttYXJrc0RhdGEiLCJCb29rTWFyayIsIml0ZW0iLCJhIiwiY2xhc3NOYW1lIiwiYm9va21hcmsiLCJyZWwiLCJ0YXJnZXQiLCJocmVmIiwiZGl2IiwibGVmdCIsImgxIiwidGl0bGUiLCJwIiwiZGVzYyIsImgyIiwibGluayIsInJpZ2h0IiwidGFncyIsIm1hcCIsImluZGV4Iiwia2V5Iiwic3BhbiIsIkJvb2ttYXJrcyIsInRleHRWYWx1ZSIsInNldFZhbHVlIiwic3RhdGVCb29rTWFya3MiLCJzZXRTdGF0ZUJvb2tNYXJrcyIsInNlY3Rpb24iLCJpZCIsImJvb2ttYXJrcyIsImJvb2ttYXJrc0hlYWRlciIsImlucHV0V3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJsZW5ndGgiLCJuZXdCb29rTWFya3MiLCJmaWx0ZXIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInJlbW92ZVRleHRJY29uV3IiLCJyZW1vdmVUZXh0SWNvbiIsImJvb2ttYXJrc0NvbnRlbnQiLCJib29rbWFya3NMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Bookmarks/index.jsx\n");

/***/ })

});