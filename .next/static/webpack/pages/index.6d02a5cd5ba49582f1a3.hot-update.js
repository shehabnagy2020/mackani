webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainSections/SecondMainSection.jsx":
/*!*******************************************************!*\
  !*** ./components/MainSections/SecondMainSection.jsx ***!
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
/* harmony import */ var _ServiceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ServiceItem */ "./components/ServiceItem/index.jsx");


var _jsxFileName = "D:\\Programming\\makkani\\components\\MainSections\\SecondMainSection.jsx",
    _this = undefined;





var services = [{
  id: 1,
  image: "/images/icon_2.png",
  text: "قص الشعر"
}, {
  id: 2,
  image: "/images/icon_3.png",
  text: "حلاقة الذقن"
}, {
  id: 3,
  image: "/images/icon_4.png",
  text: "الصبغات"
}, {
  id: 4,
  image: "/images/icon_5.png",
  text: "معالجات الشعر"
}, {
  id: 5,
  image: "/images/icon_6.png",
  text: "تدليك الوجه (الماسك)"
}, {
  id: 6,
  image: "/images/icon_7.png",
  text: "العنايه باليدين والقدمين"
}];

var SecondMainSection = function SecondMainSection() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full min-h-full relative py-36",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageWithLayers__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: "/images/image_1.png",
      layers: ["bg-blue-500 bg-opacity-50", "bg-black bg-opacity-70"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col w-full space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
        image: "/images/icon_1.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-4/6",
        children: services.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ServiceItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            ket: item.id,
            item: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = SecondMainSection;
/* harmony default export */ __webpack_exports__["default"] = (SecondMainSection);

var _c;

$RefreshReg$(_c, "SecondMainSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvU2Vjb25kTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiaWQiLCJpbWFnZSIsInRleHQiLCJTZWNvbmRNYWluU2VjdGlvbiIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsb0JBQWhCO0FBQXNDQyxNQUFJLEVBQUU7QUFBNUMsQ0FEZSxFQUVmO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE9BQUssRUFBRSxvQkFBaEI7QUFBc0NDLE1BQUksRUFBRTtBQUE1QyxDQUZlLEVBR2Y7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsT0FBSyxFQUFFLG9CQUFoQjtBQUFzQ0MsTUFBSSxFQUFFO0FBQTVDLENBSGUsRUFJZjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsb0JBQWhCO0FBQXNDQyxNQUFJLEVBQUU7QUFBNUMsQ0FKZSxFQUtmO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE9BQUssRUFBRSxvQkFBaEI7QUFBc0NDLE1BQUksRUFBRTtBQUE1QyxDQUxlLEVBTWY7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsT0FBSyxFQUFFLG9CQUFoQjtBQUFzQ0MsTUFBSSxFQUFFO0FBQTVDLENBTmUsQ0FBakI7O0FBU0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFLLEVBQUMscUJBRFI7QUFFRSxZQUFNLEVBQUUsQ0FBQywyQkFBRCxFQUE4Qix3QkFBOUI7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxxREFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQWEsWUFBSSxFQUFDLDRDQUFsQjtBQUE0QixhQUFLLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHFFQUFmO0FBQUEsa0JBQ0dKLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSw4QkFDWixxRUFBQyxvREFBRDtBQUFhLGVBQUcsRUFBRUEsSUFBSSxDQUFDTCxFQUF2QjtBQUEyQixnQkFBSSxFQUFFSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQWpCRDs7S0FBTUYsaUI7QUFtQlNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMDJhNWNkNWJhNDk1ODJmMWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0JhciBmcm9tIFwiLi4vRmxvYXRpbmdCYXJcIjtcclxuaW1wb3J0IEltYWdlV2l0aExheWVycyBmcm9tIFwiLi4vSW1hZ2VXaXRoTGF5ZXJzXCI7XHJcbmltcG9ydCBTZXJ2aWNlSXRlbSBmcm9tIFwiLi4vU2VydmljZUl0ZW1cIjtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG4gIHsgaWQ6IDEsIGltYWdlOiBcIi9pbWFnZXMvaWNvbl8yLnBuZ1wiLCB0ZXh0OiBcItmC2LUg2KfZhNi02LnYsVwiIH0sXHJcbiAgeyBpZDogMiwgaW1hZ2U6IFwiL2ltYWdlcy9pY29uXzMucG5nXCIsIHRleHQ6IFwi2K3ZhNin2YLYqSDYp9mE2LDZgtmGXCIgfSxcclxuICB7IGlkOiAzLCBpbWFnZTogXCIvaW1hZ2VzL2ljb25fNC5wbmdcIiwgdGV4dDogXCLYp9mE2LXYqNi62KfYqlwiIH0sXHJcbiAgeyBpZDogNCwgaW1hZ2U6IFwiL2ltYWdlcy9pY29uXzUucG5nXCIsIHRleHQ6IFwi2YXYudin2YTYrNin2Kog2KfZhNi02LnYsVwiIH0sXHJcbiAgeyBpZDogNSwgaW1hZ2U6IFwiL2ltYWdlcy9pY29uXzYucG5nXCIsIHRleHQ6IFwi2KrYr9mE2YrZgyDYp9mE2YjYrNmHICjYp9mE2YXYp9iz2YMpXCIgfSxcclxuICB7IGlkOiA2LCBpbWFnZTogXCIvaW1hZ2VzL2ljb25fNy5wbmdcIiwgdGV4dDogXCLYp9mE2LnZhtin2YrZhyDYqNin2YTZitiv2YrZhiDZiNin2YTZgtiv2YXZitmGXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFNlY29uZE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1mdWxsIHJlbGF0aXZlIHB5LTM2XCI+XHJcbiAgICAgIDxJbWFnZVdpdGhMYXllcnNcclxuICAgICAgICBpbWFnZT1cIi9pbWFnZXMvaW1hZ2VfMS5wbmdcIlxyXG4gICAgICAgIGxheWVycz17W1wiYmctYmx1ZS01MDAgYmctb3BhY2l0eS01MFwiLCBcImJnLWJsYWNrIGJnLW9wYWNpdHktNzBcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgPEZsb2F0aW5nQmFyIHRleHQ9XCLYp9mE2K7Yr9mF2KfYqlwiIGltYWdlPVwiL2ltYWdlcy9pY29uXzEucG5nXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTMgZ2FwLTEwIG14LWF1dG8gdy00LzZcIj5cclxuICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFNlcnZpY2VJdGVtIGtldD17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRNYWluU2VjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==