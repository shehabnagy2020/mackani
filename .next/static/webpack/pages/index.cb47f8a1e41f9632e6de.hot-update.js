webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainSections/EighthMainSection.jsx":
/*!*******************************************************!*\
  !*** ./components/MainSections/EighthMainSection.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FloatingBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FloatingBar */ "./components/FloatingBar/index.jsx");
/* harmony import */ var _ImageWithLayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageWithLayers */ "./components/ImageWithLayers/index.jsx");
/* harmony import */ var _PricingItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PricingItem */ "./components/PricingItem/index.jsx");


var _jsxFileName = "D:\\Programming\\makkani\\components\\MainSections\\EighthMainSection.jsx",
    _this = undefined;






var EighthMainSection = function EighthMainSection(_ref) {
  var pricingData = _ref.pricingData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageWithLayers__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: "/images/image_7.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-80"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "\u0628\u0627\u0642\u0627\u062A \u0645\u062A\u0645\u064A\u0632\u0647",
        image: "/images/icon_8.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col xl:flex-row items-center xl:items-start justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse py-7",
        children: pricingData && pricingData.map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PricingItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 42
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = EighthMainSection;
/* harmony default export */ __webpack_exports__["default"] = (EighthMainSection);

var _c;

$RefreshReg$(_c, "EighthMainSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvRWlnaHRoTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbIkVpZ2h0aE1haW5TZWN0aW9uIiwicHJpY2luZ0RhdGEiLCJtYXAiLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXFCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUM3QyxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBSyxFQUFDLHFCQURSO0FBRUUsWUFBTSxFQUFFLENBQUMsd0JBQUQsRUFBMkIsd0JBQTNCO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsd0RBQWY7QUFBQSw4QkFDRSxxRUFBQyxvREFBRDtBQUFhLFlBQUksRUFBQyxxRUFBbEI7QUFBaUMsYUFBSyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQywwS0FBZjtBQUFBLGtCQUNHQSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSw4QkFBYSxxRUFBQyxvREFBRDtBQUFxQixnQkFBSSxFQUFFRDtBQUEzQixhQUFrQkMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBYjtBQUFBLFNBQWhCO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQkQ7O0tBQU1KLGlCO0FBa0JTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYjQ3ZjhhMWU0MWY5NjMyZTZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmxvYXRpbmdCYXIgZnJvbSBcIi4uL0Zsb2F0aW5nQmFyXCI7XHJcbmltcG9ydCBJbWFnZVdpdGhMYXllcnMgZnJvbSBcIi4uL0ltYWdlV2l0aExheWVyc1wiO1xyXG5pbXBvcnQgUHJpY2luZ0l0ZW0gZnJvbSBcIi4uL1ByaWNpbmdJdGVtXCI7XHJcblxyXG5jb25zdCBFaWdodGhNYWluU2VjdGlvbiA9ICh7IHByaWNpbmdEYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtaW4taC1zY3JlZW4gZmxleCByZWxhdGl2ZSBweS0zMlwiPlxyXG4gICAgICA8SW1hZ2VXaXRoTGF5ZXJzXHJcbiAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2ltYWdlXzcucG5nXCJcclxuICAgICAgICBsYXllcnM9e1tcImJnLWJsYWNrIGJnLW9wYWNpdHktOTBcIiwgXCJiZy1ibGFjayBiZy1vcGFjaXR5LTgwXCJdfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgc3BhY2UteS0yMFwiPlxyXG4gICAgICAgIDxGbG9hdGluZ0JhciB0ZXh0PVwi2KjYp9mC2KfYqiDZhdiq2YXZitiy2YdcIiBpbWFnZT1cIi9pbWFnZXMvaWNvbl84LnBuZ1wiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IGl0ZW1zLWNlbnRlciB4bDppdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktMTAwIGJnLW9wYWNpdHktMzAgc3BhY2UteS05IHhsOnNwYWNlLXktMCB4bDpzcGFjZS14LTkgeGw6c3BhY2UteC1yZXZlcnNlIHB5LTdcIj5cclxuICAgICAgICAgIHtwcmljaW5nRGF0YSAmJlxyXG4gICAgICAgICAgICBwcmljaW5nRGF0YS5tYXAoKGl0ZW0sIGkpID0+IDxQcmljaW5nSXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IC8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWlnaHRoTWFpblNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=