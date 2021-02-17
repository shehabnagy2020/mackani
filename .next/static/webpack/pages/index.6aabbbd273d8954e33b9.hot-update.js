webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainSections/TenthMainSection.jsx":
/*!******************************************************!*\
  !*** ./components/MainSections/TenthMainSection.jsx ***!
  \******************************************************/
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
/* harmony import */ var _PersonCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PersonCard */ "./components/PersonCard/index.jsx");
/* harmony import */ var _PricingItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PricingItem */ "./components/PricingItem/index.jsx");


var _jsxFileName = "D:\\Programming\\makkani\\components\\MainSections\\TenthMainSection.jsx",
    _this = undefined;







var TenthMainSection = function TenthMainSection(_ref) {
  var teamMembersData = _ref.teamMembersData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageWithLayers__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: "/images/image_2.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-30"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0641\u0631\u064A\u0642",
        image: "/images/icon_10.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-11/12 md:w-10/12 lg:w-3/5",
        children: teamMembersData && teamMembersData.map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PersonCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = TenthMainSection;
/* harmony default export */ __webpack_exports__["default"] = (TenthMainSection);

var _c;

$RefreshReg$(_c, "TenthMainSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvVGVudGhNYWluU2VjdGlvbi5qc3giXSwibmFtZXMiOlsiVGVudGhNYWluU2VjdGlvbiIsInRlYW1NZW1iZXJzRGF0YSIsIm1hcCIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCO0FBQ2hELHNCQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFLLEVBQUMscUJBRFI7QUFFRSxZQUFNLEVBQUUsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0I7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyx3REFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQWEsWUFBSSxFQUFDLHFFQUFsQjtBQUFpQyxhQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxpQkFBUyw2RkFEWDtBQUFBLGtCQUdHQSxlQUFlLElBQ2RBLGVBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsOEJBQ2xCLHFFQUFDLG1EQUFEO0FBQW9CLGdCQUFJLEVBQUVEO0FBQTFCLGFBQWlCQyxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURrQjtBQUFBLFNBQXBCO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztLQUFNSixnQjtBQXNCU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmFhYmJiZDI3M2Q4OTU0ZTMzYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZsb2F0aW5nQmFyIGZyb20gXCIuLi9GbG9hdGluZ0JhclwiO1xyXG5pbXBvcnQgSW1hZ2VXaXRoTGF5ZXJzIGZyb20gXCIuLi9JbWFnZVdpdGhMYXllcnNcIjtcclxuaW1wb3J0IFBlcnNvbkNhcmQgZnJvbSBcIi4uL1BlcnNvbkNhcmRcIjtcclxuaW1wb3J0IFByaWNpbmdJdGVtIGZyb20gXCIuLi9QcmljaW5nSXRlbVwiO1xyXG5cclxuY29uc3QgVGVudGhNYWluU2VjdGlvbiA9ICh7IHRlYW1NZW1iZXJzRGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWluLWgtc2NyZWVuIGZsZXggcmVsYXRpdmUgcHktMzJcIj5cclxuICAgICAgPEltYWdlV2l0aExheWVyc1xyXG4gICAgICAgIGltYWdlPVwiL2ltYWdlcy9pbWFnZV8yLnBuZ1wiXHJcbiAgICAgICAgbGF5ZXJzPXtbXCJiZy1ibGFjayBiZy1vcGFjaXR5LTkwXCIsIFwiYmctYmxhY2sgYmctb3BhY2l0eS0zMFwiXX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgZmxleC1ncm93IHNwYWNlLXktMjBcIj5cclxuICAgICAgICA8RmxvYXRpbmdCYXIgdGV4dD1cItij2LnYttin2KEg2KfZhNmB2LHZitmCXCIgaW1hZ2U9XCIvaW1hZ2VzL2ljb25fMTAucG5nXCIgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zIGdhcC0xMCBteC1hdXRvIHctMTEvMTIgbWQ6dy0xMC8xMiBsZzp3LTMvNWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RlYW1NZW1iZXJzRGF0YSAmJlxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVyc0RhdGEubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFBlcnNvbkNhcmQga2V5PXtpfSBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVudGhNYWluU2VjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==