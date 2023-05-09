"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Chat.tsx":
/*!*****************************!*\
  !*** ./components/Chat.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Chat\": function() { return /* binding */ Chat; },\n/* harmony export */   \"initialMessages\": function() { return /* binding */ initialMessages; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.tsx\");\n/* harmony import */ var _ChatLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatLine */ \"./components/ChatLine.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst COOKIE_NAME = \"nextjs-example-ai-chat-gpt3\";\n// default first message to display in UI (not necessary to define the prompt)\nconst initialMessages = [\n    {\n        role: \"assistant\",\n        content: \"Hi! I am a your friendly fitness coach. Are you ready for a workout \\uD83D\\uDE0A ?\"\n    }\n];\nconst InputMessage = (param)=>/*#__PURE__*/ {\n    let { input , setInput , sendMessage  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6 flex clear-both\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                \"aria-label\": \"chat input\",\n                required: true,\n                className: \"min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm\",\n                value: input,\n                onKeyDown: (e)=>{\n                    if (e.key === \"Enter\") {\n                        sendMessage(input);\n                        setInput(\"\");\n                    }\n                },\n                onChange: (e)=>{\n                    setInput(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"submit\",\n                className: \"ml-4 flex-none\",\n                onClick: ()=>{\n                    sendMessage(input);\n                    setInput(\"\");\n                },\n                children: \"Say\"\n            }, void 0, false, {\n                fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n};\n_c = InputMessage;\nfunction Chat() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialMessages);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cookie, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        COOKIE_NAME\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!cookie[COOKIE_NAME]) {\n            // generate a semi random short id\n            const randomId = Math.random().toString(36).substring(7);\n            setCookie(COOKIE_NAME, randomId);\n        }\n    }, [\n        cookie,\n        setCookie\n    ]);\n    // send message to API /api/chat endpoint\n    const sendMessage = async (message)=>{\n        setLoading(true);\n        const newMessages = [\n            ...messages,\n            {\n                role: \"user\",\n                content: message\n            }\n        ];\n        setMessages(newMessages);\n        const last10messages = newMessages.slice(-10) // remember last 10 messages\n        ;\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                messages: last10messages,\n                user: cookie[COOKIE_NAME]\n            })\n        });\n        console.log(\"Edge function returned.\");\n        if (!response.ok) {\n            throw new Error(response.statusText);\n        }\n        // This data is a ReadableStream\n        const data = response.body;\n        if (!data) {\n            return;\n        }\n        const reader = data.getReader();\n        const decoder = new TextDecoder();\n        let done = false;\n        let lastMessage = \"\";\n        while(!done){\n            const { value , done: doneReading  } = await reader.read();\n            done = doneReading;\n            const chunkValue = decoder.decode(value);\n            lastMessage = lastMessage + chunkValue;\n            setMessages([\n                ...newMessages,\n                {\n                    role: \"assistant\",\n                    content: lastMessage\n                }\n            ]);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-2xl border-zinc-100  lg:border lg:p-6\",\n        children: [\n            messages.map((param, index)=>/*#__PURE__*/ {\n                let { content , role  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatLine__WEBPACK_IMPORTED_MODULE_3__.ChatLine, {\n                    role: role,\n                    content: content\n                }, index, false, {\n                    fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this);\n            }),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatLine__WEBPACK_IMPORTED_MODULE_3__.LoadingChatLine, {}, void 0, false, {\n                fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                lineNumber: 122,\n                columnNumber: 19\n            }, this),\n            messages.length < 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"mx-auto flex flex-grow text-gray-600 clear-both\",\n                children: \"Type a message to start the conversation\"\n            }, void 0, false, {\n                fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputMessage, {\n                input: input,\n                setInput: setInput,\n                sendMessage: sendMessage\n            }, void 0, false, {\n                fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nyashamawungwe/Documents/Projects/FitGPT_1/components/Chat.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Gn2NSzEZ4I3NC7vzek5vTgpXW90=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c1 = Chat;\nvar _c, _c1;\n$RefreshReg$(_c, \"InputMessage\");\n$RefreshReg$(_c1, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWFOLFFBQVFPLE1BQU0sQ0FBQzlDO1lBRWxDMEMsY0FBY0EsY0FBY0c7WUFFNUJwQyxZQUFZO21CQUNQVztnQkFDSDtvQkFBRS9CLE1BQU07b0JBQWFDLFNBQVNvRDtnQkFBWTthQUMzQztZQUVEL0IsV0FBVyxLQUFLO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2hCO1FBQUlDLFdBQVU7O1lBQ1pZLFNBQVN1QyxHQUFHLENBQUMsUUFBb0JDLHNCQUNoQztvQkFEYSxFQUFFMUQsUUFBTyxFQUFFRCxLQUFJLEVBQUU7dUJBQzlCLDhEQUFDTCwrQ0FBUUE7b0JBQWFLLE1BQU1BO29CQUFNQyxTQUFTQTttQkFBNUIwRDs7Ozs7WUFBc0M7WUFHdER0Qyx5QkFBVyw4REFBQ3pCLHNEQUFlQTs7Ozs7WUFFM0J1QixTQUFTeUMsTUFBTSxHQUFHLG1CQUNqQiw4REFBQ0M7Z0JBQUt0RCxXQUFVOzBCQUFrRDs7Ozs7OzBCQUlwRSw4REFBQ0w7Z0JBQ0NDLE9BQU9BO2dCQUNQQyxVQUFVQTtnQkFDVkMsYUFBYUE7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO0dBekZlYTs7UUFJY3JCLG9EQUFVQTs7O01BSnhCcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LnRzeD81NTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IHsgdHlwZSBDaGF0R1BUTWVzc2FnZSwgQ2hhdExpbmUsIExvYWRpbmdDaGF0TGluZSB9IGZyb20gJy4vQ2hhdExpbmUnXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5jb25zdCBDT09LSUVfTkFNRSA9ICduZXh0anMtZXhhbXBsZS1haS1jaGF0LWdwdDMnXG5cbi8vIGRlZmF1bHQgZmlyc3QgbWVzc2FnZSB0byBkaXNwbGF5IGluIFVJIChub3QgbmVjZXNzYXJ5IHRvIGRlZmluZSB0aGUgcHJvbXB0KVxuZXhwb3J0IGNvbnN0IGluaXRpYWxNZXNzYWdlczogQ2hhdEdQVE1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgIGNvbnRlbnQ6ICdIaSEgSSBhbSBhIHlvdXIgZnJpZW5kbHkgZml0bmVzcyBjb2FjaC4gQXJlIHlvdSByZWFkeSBmb3IgYSB3b3Jrb3V0IPCfmIogPycsXG4gIH0sXG5dXG5cbmNvbnN0IElucHV0TWVzc2FnZSA9ICh7IGlucHV0LCBzZXRJbnB1dCwgc2VuZE1lc3NhZ2UgfTogYW55KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGNsZWFyLWJvdGhcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJjaGF0IGlucHV0XCJcbiAgICAgIHJlcXVpcmVkXG4gICAgICBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtYXV0byBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXppbmMtOTAwLzEwIGJnLXdoaXRlIHB4LTMgcHktW2NhbGModGhlbWUoc3BhY2luZy4yKS0xcHgpXSBzaGFkb3ctbWQgc2hhZG93LXppbmMtODAwLzUgcGxhY2Vob2xkZXI6dGV4dC16aW5jLTQwMCBmb2N1czpib3JkZXItdGVhbC01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXRlYWwtNTAwLzEwIHNtOnRleHQtc21cIlxuICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBzZW5kTWVzc2FnZShpbnB1dClcbiAgICAgICAgICBzZXRJbnB1dCgnJylcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgICAgIH19XG4gICAgLz5cbiAgICA8QnV0dG9uXG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIGNsYXNzTmFtZT1cIm1sLTQgZmxleC1ub25lXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2VuZE1lc3NhZ2UoaW5wdXQpXG4gICAgICAgIHNldElucHV0KCcnKVxuICAgICAgfX1cbiAgICA+XG4gICAgICBTYXlcbiAgICA8L0J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0KCkge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPENoYXRHUFRNZXNzYWdlW10+KGluaXRpYWxNZXNzYWdlcylcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtDT09LSUVfTkFNRV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvb2tpZVtDT09LSUVfTkFNRV0pIHtcbiAgICAgIC8vIGdlbmVyYXRlIGEgc2VtaSByYW5kb20gc2hvcnQgaWRcbiAgICAgIGNvbnN0IHJhbmRvbUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpXG4gICAgICBzZXRDb29raWUoQ09PS0lFX05BTUUsIHJhbmRvbUlkKVxuICAgIH1cbiAgfSwgW2Nvb2tpZSwgc2V0Q29va2llXSlcblxuICAvLyBzZW5kIG1lc3NhZ2UgdG8gQVBJIC9hcGkvY2hhdCBlbmRwb2ludFxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXG4gICAgICAuLi5tZXNzYWdlcyxcbiAgICAgIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBtZXNzYWdlIH0gYXMgQ2hhdEdQVE1lc3NhZ2UsXG4gICAgXVxuICAgIHNldE1lc3NhZ2VzKG5ld01lc3NhZ2VzKVxuICAgIGNvbnN0IGxhc3QxMG1lc3NhZ2VzID0gbmV3TWVzc2FnZXMuc2xpY2UoLTEwKSAvLyByZW1lbWJlciBsYXN0IDEwIG1lc3NhZ2VzXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1lc3NhZ2VzOiBsYXN0MTBtZXNzYWdlcyxcbiAgICAgICAgdXNlcjogY29va2llW0NPT0tJRV9OQU1FXSxcbiAgICAgIH0pLFxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZygnRWRnZSBmdW5jdGlvbiByZXR1cm5lZC4nKVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBkYXRhIGlzIGEgUmVhZGFibGVTdHJlYW1cbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuYm9keVxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVhZGVyID0gZGF0YS5nZXRSZWFkZXIoKVxuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuICAgIGxldCBkb25lID0gZmFsc2VcblxuICAgIGxldCBsYXN0TWVzc2FnZSA9ICcnXG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmU6IGRvbmVSZWFkaW5nIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpXG4gICAgICBkb25lID0gZG9uZVJlYWRpbmdcbiAgICAgIGNvbnN0IGNodW5rVmFsdWUgPSBkZWNvZGVyLmRlY29kZSh2YWx1ZSlcblxuICAgICAgbGFzdE1lc3NhZ2UgPSBsYXN0TWVzc2FnZSArIGNodW5rVmFsdWVcblxuICAgICAgc2V0TWVzc2FnZXMoW1xuICAgICAgICAuLi5uZXdNZXNzYWdlcyxcbiAgICAgICAgeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogbGFzdE1lc3NhZ2UgfSBhcyBDaGF0R1BUTWVzc2FnZSxcbiAgICAgIF0pXG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlci16aW5jLTEwMCAgbGc6Ym9yZGVyIGxnOnAtNlwiPlxuICAgICAge21lc3NhZ2VzLm1hcCgoeyBjb250ZW50LCByb2xlIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDaGF0TGluZSBrZXk9e2luZGV4fSByb2xlPXtyb2xlfSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgKSl9XG5cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nQ2hhdExpbmUgLz59XG5cbiAgICAgIHttZXNzYWdlcy5sZW5ndGggPCAyICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IGZsZXgtZ3JvdyB0ZXh0LWdyYXktNjAwIGNsZWFyLWJvdGhcIj5cbiAgICAgICAgICBUeXBlIGEgbWVzc2FnZSB0byBzdGFydCB0aGUgY29udmVyc2F0aW9uXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgICA8SW5wdXRNZXNzYWdlXG4gICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgc2V0SW5wdXQ9e3NldElucHV0fVxuICAgICAgICBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDaGF0TGluZSIsIkxvYWRpbmdDaGF0TGluZSIsInVzZUNvb2tpZXMiLCJDT09LSUVfTkFNRSIsImluaXRpYWxNZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiSW5wdXRNZXNzYWdlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNlbmRNZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsImFyaWEtbGFiZWwiLCJyZXF1aXJlZCIsInZhbHVlIiwib25LZXlEb3duIiwiZSIsImtleSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIkNoYXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWUiLCJzZXRDb29raWUiLCJyYW5kb21JZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1lc3NhZ2UiLCJuZXdNZXNzYWdlcyIsImxhc3QxMG1lc3NhZ2VzIiwic2xpY2UiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImRhdGEiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJkb25lIiwibGFzdE1lc3NhZ2UiLCJkb25lUmVhZGluZyIsInJlYWQiLCJjaHVua1ZhbHVlIiwiZGVjb2RlIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Chat.tsx\n"));

/***/ })

});