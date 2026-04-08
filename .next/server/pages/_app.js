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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/useVisitorTracking.ts":
/*!*****************************************!*\
  !*** ./src/hooks/useVisitorTracking.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useVisitorTracking: () => (/* binding */ useVisitorTracking)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * useVisitorTracking\n *\n * Custom hook that fires one POST to /api/track-visit on mount.\n * Silently fails — never affects user experience.\n *\n * Usage: call it once inside _app.tsx or index.tsx\n */ \n\nfunction useVisitorTracking() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Fire and forget — don't await, don't block render\n        fetch(\"/api/track-visit\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                page: router.asPath\n            })\n        }).catch(()=>{\n        // Silently swallow any network errors\n        });\n    // Only runs once per page load (router.asPath as dep is fine for SPA nav too)\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        router.asPath\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVmlzaXRvclRyYWNraW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Q0FPQyxHQUNpQztBQUNNO0FBRWpDLFNBQVNFO0lBQ2QsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNSLG9EQUFvRDtRQUNwREksTUFBTSxvQkFBb0I7WUFDeEJDLFFBQVM7WUFDVEMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsTUFBTVAsT0FBT1EsTUFBTTtZQUFDO1FBQzdDLEdBQUdDLEtBQUssQ0FBQztRQUNQLHNDQUFzQztRQUN4QztJQUNGLDhFQUE4RTtJQUM5RSx1REFBdUQ7SUFDdkQsR0FBRztRQUFDVCxPQUFPUSxNQUFNO0tBQUM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raGFuZG9rYXItaXNtYWlsLXBvcnRmb2xpby8uL3NyYy9ob29rcy91c2VWaXNpdG9yVHJhY2tpbmcudHM/NjAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHVzZVZpc2l0b3JUcmFja2luZ1xuICpcbiAqIEN1c3RvbSBob29rIHRoYXQgZmlyZXMgb25lIFBPU1QgdG8gL2FwaS90cmFjay12aXNpdCBvbiBtb3VudC5cbiAqIFNpbGVudGx5IGZhaWxzIOKAlCBuZXZlciBhZmZlY3RzIHVzZXIgZXhwZXJpZW5jZS5cbiAqXG4gKiBVc2FnZTogY2FsbCBpdCBvbmNlIGluc2lkZSBfYXBwLnRzeCBvciBpbmRleC50c3hcbiAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpc2l0b3JUcmFja2luZygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGaXJlIGFuZCBmb3JnZXQg4oCUIGRvbid0IGF3YWl0LCBkb24ndCBibG9jayByZW5kZXJcbiAgICBmZXRjaChcIi9hcGkvdHJhY2stdmlzaXRcIiwge1xuICAgICAgbWV0aG9kOiAgXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBhZ2U6IHJvdXRlci5hc1BhdGggfSksXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgLy8gU2lsZW50bHkgc3dhbGxvdyBhbnkgbmV0d29yayBlcnJvcnNcbiAgICB9KTtcbiAgLy8gT25seSBydW5zIG9uY2UgcGVyIHBhZ2UgbG9hZCAocm91dGVyLmFzUGF0aCBhcyBkZXAgaXMgZmluZSBmb3IgU1BBIG5hdiB0b28pXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VWaXNpdG9yVHJhY2tpbmciLCJyb3V0ZXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhZ2UiLCJhc1BhdGgiLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useVisitorTracking.ts\n");

/***/ }),

/***/ "./src/lib/ThemeContext.tsx":
/*!**********************************!*\
  !*** ./src/lib/ThemeContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ \n/**\n * ThemeContext\n * Manages dark / light mode globally.\n * – Defaults to dark mode\n * – Persists choice in localStorage\n * – Applies \"dark\" class on <html> (Tailwind darkMode:\"class\" strategy)\n */ \nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"dark\",\n    toggle: ()=>{}\n});\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"dark\");\n    // On mount: read localStorage, default to dark\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const saved = localStorage.getItem(\"theme\");\n        const initial = saved ?? \"dark\";\n        setTheme(initial);\n        applyTheme(initial);\n    }, []);\n    const applyTheme = (t)=>{\n        const root = document.documentElement;\n        if (t === \"dark\") {\n            root.classList.add(\"dark\");\n        } else {\n            root.classList.remove(\"dark\");\n        }\n    };\n    const toggle = ()=>{\n        const next = theme === \"dark\" ? \"light\" : \"dark\";\n        setTheme(next);\n        applyTheme(next);\n        localStorage.setItem(\"theme\", next);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggle\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/lib/ThemeContext.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL1RoZW1lQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozs7Q0FNQyxHQUNzRTtBQVN2RSxNQUFNSSw2QkFBZUosb0RBQWFBLENBQVc7SUFBRUssT0FBTztJQUFRQyxRQUFRLEtBQU87QUFBRTtBQUV4RSxTQUFTQyxjQUFjLEVBQUVDLFFBQVEsRUFBaUM7SUFDdkUsTUFBTSxDQUFDSCxPQUFPSSxTQUFTLEdBQUdOLCtDQUFRQSxDQUFRO0lBRTFDLCtDQUErQztJQUMvQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsTUFBTUMsVUFBVUgsU0FBUztRQUN6QkQsU0FBU0k7UUFDVEMsV0FBV0Q7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNQyxhQUFhLENBQUNDO1FBQ2xCLE1BQU1DLE9BQU9DLFNBQVNDLGVBQWU7UUFDckMsSUFBSUgsTUFBTSxRQUFRO1lBQ2hCQyxLQUFLRyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNyQixPQUFPO1lBQ0xKLEtBQUtHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQ3hCO0lBQ0Y7SUFFQSxNQUFNZixTQUFTO1FBQ2IsTUFBTWdCLE9BQU9qQixVQUFVLFNBQVMsVUFBVTtRQUMxQ0ksU0FBU2E7UUFDVFIsV0FBV1E7UUFDWFgsYUFBYVksT0FBTyxDQUFDLFNBQVNEO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNsQixhQUFhb0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVwQjtZQUFPQztRQUFPO2tCQUMzQ0U7Ozs7OztBQUdQO0FBRU8sTUFBTWtCLFdBQVcsSUFBTXpCLGlEQUFVQSxDQUFDRyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2hhbmRva2FyLWlzbWFpbC1wb3J0Zm9saW8vLi9zcmMvbGliL1RoZW1lQ29udGV4dC50c3g/NzM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbi8qKlxuICogVGhlbWVDb250ZXh0XG4gKiBNYW5hZ2VzIGRhcmsgLyBsaWdodCBtb2RlIGdsb2JhbGx5LlxuICog4oCTIERlZmF1bHRzIHRvIGRhcmsgbW9kZVxuICog4oCTIFBlcnNpc3RzIGNob2ljZSBpbiBsb2NhbFN0b3JhZ2VcbiAqIOKAkyBBcHBsaWVzIFwiZGFya1wiIGNsYXNzIG9uIDxodG1sPiAoVGFpbHdpbmQgZGFya01vZGU6XCJjbGFzc1wiIHN0cmF0ZWd5KVxuICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVGhlbWUgPSBcImRhcmtcIiB8IFwibGlnaHRcIjtcblxuaW50ZXJmYWNlIFRoZW1lQ3R4IHtcbiAgdGhlbWU6IFRoZW1lO1xuICB0b2dnbGU6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VGhlbWVDdHg+KHsgdGhlbWU6IFwiZGFya1wiLCB0b2dnbGU6ICgpID0+IHt9IH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGU8VGhlbWU+KFwiZGFya1wiKTtcblxuICAvLyBPbiBtb3VudDogcmVhZCBsb2NhbFN0b3JhZ2UsIGRlZmF1bHQgdG8gZGFya1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSBhcyBUaGVtZSB8IG51bGw7XG4gICAgY29uc3QgaW5pdGlhbCA9IHNhdmVkID8/IFwiZGFya1wiO1xuICAgIHNldFRoZW1lKGluaXRpYWwpO1xuICAgIGFwcGx5VGhlbWUoaW5pdGlhbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBhcHBseVRoZW1lID0gKHQ6IFRoZW1lKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAodCA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gdGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG4gICAgc2V0VGhlbWUobmV4dCk7XG4gICAgYXBwbHlUaGVtZShuZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5leHQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsInRoZW1lIiwidG9nZ2xlIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VGhlbWUiLCJzYXZlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsIiwiYXBwbHlUaGVtZSIsInQiLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuZXh0Iiwic2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/ThemeContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/ThemeContext */ \"./src/lib/ThemeContext.tsx\");\n/* harmony import */ var _hooks_useVisitorTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useVisitorTracking */ \"./src/hooks/useVisitorTracking.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// Inner component so hook can access router context\nfunction AppInner({ Component, pageProps }) {\n    (0,_hooks_useVisitorTracking__WEBPACK_IMPORTED_MODULE_3__.useVisitorTracking)(); // 👈 fires silently on every page navigation\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n}\nfunction App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Khandokar Ismail — Full Stack & DevOps Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Full Stack Developer & DevOps Engineer building scalable systems with Docker, Kubernetes, AWS, and modern web technologies.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppInner, {\n                ...props\n            }, void 0, false, {\n                fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ismail/Documents/work_directory/portfolio/portfolio 3/src/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNzQjtBQUNhO0FBQ2xDO0FBRTlCLG9EQUFvRDtBQUNwRCxTQUFTRyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQ2xESCw2RUFBa0JBLElBQUksNkNBQTZDO0lBQ25FLHFCQUFPLDhEQUFDRTtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQztBQUVlLFNBQVNDLElBQUlDLEtBQWU7SUFDekMscUJBQ0UsOERBQUNOLDREQUFhQTs7MEJBQ1osOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNRO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNYO2dCQUFVLEdBQUdJLEtBQUs7Ozs7Ozs7Ozs7OztBQUd6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2toYW5kb2thci1pc21haWwtcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2xpYi9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IHVzZVZpc2l0b3JUcmFja2luZyB9IGZyb20gXCJAL2hvb2tzL3VzZVZpc2l0b3JUcmFja2luZ1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuLy8gSW5uZXIgY29tcG9uZW50IHNvIGhvb2sgY2FuIGFjY2VzcyByb3V0ZXIgY29udGV4dFxuZnVuY3Rpb24gQXBwSW5uZXIoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICB1c2VWaXNpdG9yVHJhY2tpbmcoKTsgLy8g8J+RiCBmaXJlcyBzaWxlbnRseSBvbiBldmVyeSBwYWdlIG5hdmlnYXRpb25cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wczogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S2hhbmRva2FyIElzbWFpbCDigJQgRnVsbCBTdGFjayAmIERldk9wcyBFbmdpbmVlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGdWxsIFN0YWNrIERldmVsb3BlciAmIERldk9wcyBFbmdpbmVlciBidWlsZGluZyBzY2FsYWJsZSBzeXN0ZW1zIHdpdGggRG9ja2VyLCBLdWJlcm5ldGVzLCBBV1MsIGFuZCBtb2Rlcm4gd2ViIHRlY2hub2xvZ2llcy5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBwSW5uZXIgey4uLnByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiVGhlbWVQcm92aWRlciIsInVzZVZpc2l0b3JUcmFja2luZyIsIkFwcElubmVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQXBwIiwicHJvcHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();