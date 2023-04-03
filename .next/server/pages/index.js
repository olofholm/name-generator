"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const [animalInput, setAnimalInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    animal: animalInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            setResult(data.result);\n            setAnimalInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"OpenAI Quickstart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Name my pet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"animal\",\n                                placeholder: \"Enter an animal\",\n                                value: animalInput,\n                                onChange: (e)=>setAnimalInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\oloff\\\\OneDrive\\\\Skrivbord\\\\JS\\\\Projects\\\\React\\\\name-generator\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNJO0FBRWxCLFNBQVNFLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUE7SUFFcEMsZUFBZU0sU0FBU0MsS0FBSyxFQUFFO1FBQzdCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUM1Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLFFBQVFkO2dCQUFZO1lBQzdDO1lBRUEsTUFBTWUsT0FBTyxNQUFNUixTQUFTUyxJQUFJO1lBQ2hDLElBQUlULFNBQVNVLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixNQUFNRixLQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFWixTQUFTVSxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2pGLENBQUM7WUFFRGQsVUFBVVksS0FBS2IsTUFBTTtZQUNyQkQsZUFBZTtRQUNqQixFQUFFLE9BQU1pQixPQUFPO1lBQ2IsMkRBQTJEO1lBQzNERSxRQUFRRixLQUFLLENBQUNBO1lBQ2RHLE1BQU1ILE1BQU1JLE9BQU87UUFDckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUMxQixrREFBSUE7MEJBQ0gsNEVBQUMyQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUt2QixVQUFVQTs7MENBQ2QsOERBQUN3QjtnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT2hDO2dDQUNQaUMsVUFBVSxDQUFDQyxJQUFNakMsZUFBZWlDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUVoRCw4REFBQ0o7Z0NBQU1DLE1BQUs7Z0NBQVNHLE9BQU07Ozs7Ozs7Ozs7OztrQ0FFN0IsOERBQUNUO2tDQUFLckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLWdlbmVyYXRvci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FuaW1hbElucHV0LCBzZXRBbmltYWxJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgc2V0QW5pbWFsSW5wdXQoXCJcIik7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PcGVuQUkgUXVpY2tzdGFydDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDM+TmFtZSBteSBwZXQ8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGFuIGFuaW1hbFwiXG4gICAgICAgICAgICB2YWx1ZT17YW5pbWFsSW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1hbElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdj57cmVzdWx0fTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJIb21lIiwiYW5pbWFsSW5wdXQiLCJzZXRBbmltYWxJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJtZXNzYWdlIiwiZGl2IiwidGl0bGUiLCJtYWluIiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();