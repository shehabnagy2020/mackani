webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainSections/NinethMainSection.jsx":
/*!*******************************************************!*\
  !*** ./components/MainSections/NinethMainSection.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FloatingBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FloatingBar */ "./components/FloatingBar/index.jsx");
/* harmony import */ var _ImageWithLayers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ImageWithLayers */ "./components/ImageWithLayers/index.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_CONST__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/CONST */ "./helper/CONST.js");
/* harmony import */ var _helper_convertToFormData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helper/convertToFormData */ "./helper/convertToFormData.js");





var _jsxFileName = "D:\\Programming\\makkani\\components\\MainSections\\NinethMainSection.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var NinethMainSection = function NinethMainSection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: "",
    phone: "",
    type: "قص الشعر",
    date: "",
    time: ""
  }),
      info = _useState[0],
      setInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loader = _useState2[0],
      setLoader = _useState2[1];

  var handleChange = function handleChange(id, value) {
    setInfo(_objectSpread(_objectSpread({}, info), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, id, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var newPhone, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(info.phone);

              if (!(!info.name || !info.phone || !info.date)) {
                _context.next = 5;
                break;
              }

              alert("برجاء ملئ جميع البيانات");
              return _context.abrupt("return");

            case 5:
              if (!(info.phone.length !== 9)) {
                _context.next = 8;
                break;
              }

              alert("برجاء ادخال رقم هاتف صحيح");
              return _context.abrupt("return");

            case 8:
              newPhone = "+966" + info.phone;
              setInfo(_objectSpread(_objectSpread({}, info), {}, {
                phone: newPhone
              }));
              setLoader(true);
              _context.prev = 11;
              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                baseURL: _helper_CONST__WEBPACK_IMPORTED_MODULE_9__["API"],
                url: "/api/reservation/add",
                method: "POST",
                data: Object(_helper_convertToFormData__WEBPACK_IMPORTED_MODULE_10__["default"])(info)
              });

            case 14:
              res = _context.sent;
              setLoader(false);
              alert("لقد تم حجز الموعد");
              _context.next = 24;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](11);
              console.log(_context.t0.response);
              setLoader(false);
              if (_context.t0.response && _context.t0.response.data && _context.t0.response.data.msg) alert(_context.t0.response.data.msg);else alert("فشل حجز الموعد حاول من جديد");

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 19]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDate = function handleDate(value) {
    console.log(value);
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      date: value
    }));
  };

  var handleTime = function handleTime(value) {
    setInfo(_objectSpread(_objectSpread({}, info), {}, {
      time: value
    }));
  };

  var types = [{
    id: 1,
    name: "الباقه الفضيه",
    value: "الباقه الفضيه"
  }, {
    id: 2,
    name: "الباقه الذهبيه",
    value: "الباقه الذهبيه"
  }, {
    id: 3,
    name: "الباقه البرونزيه",
    value: "الباقه البرونزيه"
  }, {
    id: 4,
    name: "قص الشعر",
    value: "قص الشعر"
  }, {
    id: 5,
    name: "حلاقة الذقن",
    value: "حلاقة الذقن"
  }, {
    id: 6,
    name: "الصبغات",
    value: "الصبغات"
  }, {
    id: 7,
    name: "معالجات الشعر",
    value: "معالجات الشعر"
  }, {
    id: 8,
    name: "تدليك الوجه",
    value: "تدليك الوجه"
  }, {
    id: 9,
    name: "العنايه باليدين والقدمين",
    value: "العنايه باليدين والقدمين"
  }];
  console.log(info);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-screen min-h-screen flex relative py-32",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ImageWithLayers__WEBPACK_IMPORTED_MODULE_6__["default"], {
      image: "/images/image_1.png",
      layers: ["bg-black bg-opacity-90", "bg-black bg-opacity-30"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F",
        image: "/images/icon_9.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col items-center justify-center w-full h-full bg-gray-100 bg-opacity-30 space-y-9 py-9",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col text-gray-500 xl:flex-row w-full items-center justify-center space-y-9 xl:space-y-0 xl:space-x-9 xl:space-x-reverse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                return handleChange("name", e.target.value);
              },
              type: "text",
              placeholder: "\u0627\u062F\u062E\u0644 \u0627\u0633\u0645\u0643",
              className: "p-3 w-full border-gray-500 rounded-lg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12 flex items-center p-3 border-gray-500 rounded-lg bg-white outline-none space-x-2 space-x-reverse",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                return handleChange("phone", e.target.value);
              },
              type: "number",
              placeholder: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643",
              className: " w-full ",
              minLength: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "",
              children: "+966"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              className: "p-3 w-full border-gray-500 rounded-lg",
              onChange: function onChange(e) {
                return handleChange("type", e.target.value);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "\u0646\u0648\u0639 \u0627\u0644\u062E\u062F\u0645\u0647"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this), types.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: item.value,
                  children: item.name
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full flex space-x-3 space-x-reverse items-center p-3 text-right border-gray-500 rounded-lg text-gray-500 bg-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                className: "flex-shrink-0",
                onChange: function onChange(e) {
                  return handleTime(e.target.value);
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "",
                  children: "\u0627\u0644\u0633\u0627\u0639\u0647"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this), ["9 Am", "10 Am", "11 Am", "12 Pm", "1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm", "8 Pm", "9 Pm", "10 Pm", "11 Pm"].map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i,
                    children: i
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  return handleDate(e.target.value);
                },
                type: "date",
                placeholder: "\u0627\u062F\u062E\u0644 \u0627\u0644\u0645\u064A\u0639\u0627\u062F",
                className: "flex-grow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), loader ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "animate-ping bg-secondary w-6 h-6 rounded-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12",
          children: "\u0627\u062D\u062C\u0632 \u0645\u0639\u0646\u0627"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);
};

_s(NinethMainSection, "R86AJeRFysQrKYJtoejR4UZUDFo=");

_c = NinethMainSection;
/* harmony default export */ __webpack_exports__["default"] = (NinethMainSection);

var _c;

$RefreshReg$(_c, "NinethMainSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvTmluZXRoTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbIk5pbmV0aE1haW5TZWN0aW9uIiwidXNlU3RhdGUiLCJuYW1lIiwicGhvbmUiLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJpbmZvIiwic2V0SW5mbyIsImxvYWRlciIsInNldExvYWRlciIsImhhbmRsZUNoYW5nZSIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJsZW5ndGgiLCJuZXdQaG9uZSIsIkF4aW9zIiwiYmFzZVVSTCIsIkFQSSIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjb252ZXJ0VG9Gb3JtRGF0YSIsInJlcyIsInJlc3BvbnNlIiwibXNnIiwiaGFuZGxlRGF0ZSIsImhhbmRsZVRpbWUiLCJ0eXBlcyIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxRQUFJLEVBQUUsVUFIeUI7QUFJL0JDLFFBQUksRUFBRSxFQUp5QjtBQUsvQkMsUUFBSSxFQUFFO0FBTHlCLEdBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFBQSxtQkFTRlAsc0RBQVEsQ0FBQyxLQUFELENBVE47QUFBQSxNQVN2QlEsTUFUdUI7QUFBQSxNQVNmQyxTQVRlOztBQVc5QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFELEVBQUtD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QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxnQkFHTDtBQUFRLG1CQUFTLEVBQUMsMEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJGRCxDQTNLRDs7R0FBTVQsaUI7O0tBQUFBLGlCO0FBNktTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzdmYmQwNWM2OGY2ZWNkNjllNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0JhciBmcm9tIFwiLi4vRmxvYXRpbmdCYXJcIjtcclxuaW1wb3J0IEltYWdlV2l0aExheWVycyBmcm9tIFwiLi4vSW1hZ2VXaXRoTGF5ZXJzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9oZWxwZXIvQ09OU1RcIjtcclxuaW1wb3J0IGNvbnZlcnRUb0Zvcm1EYXRhIGZyb20gXCIuLi8uLi9oZWxwZXIvY29udmVydFRvRm9ybURhdGFcIjtcclxuXHJcbmNvbnN0IE5pbmV0aE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIHR5cGU6IFwi2YLYtSDYp9mE2LTYudixXCIsXHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgdGltZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SW5mbyh7IC4uLmluZm8sIFtpZF06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbmZvLnBob25lKTtcclxuICAgIGlmICghaW5mby5uYW1lIHx8ICFpbmZvLnBob25lIHx8ICFpbmZvLmRhdGUpIHtcclxuICAgICAgYWxlcnQoXCLYqNix2KzYp9ihINmF2YTYpiDYrNmF2YrYuSDYp9mE2KjZitin2YbYp9iqXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5waG9uZS5sZW5ndGggIT09IDkpIHtcclxuICAgICAgYWxlcnQoXCLYqNix2KzYp9ihINin2K/Yrtin2YQg2LHZgtmFINmH2KfYqtmBINi12K3ZititXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3UGhvbmUgPSBcIis5NjZcIiArIGluZm8ucGhvbmU7XHJcbiAgICBzZXRJbmZvKHsgLi4uaW5mbywgcGhvbmU6IG5ld1Bob25lIH0pO1xyXG4gICAgc2V0TG9hZGVyKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3Moe1xyXG4gICAgICAgIGJhc2VVUkw6IEFQSSxcclxuICAgICAgICB1cmw6IFwiL2FwaS9yZXNlcnZhdGlvbi9hZGRcIixcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGRhdGE6IGNvbnZlcnRUb0Zvcm1EYXRhKGluZm8pLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgICAgYWxlcnQoXCLZhNmC2K8g2KrZhSDYrdis2LIg2KfZhNmF2YjYudivXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZylcclxuICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcbiAgICAgIGVsc2UgYWxlcnQoXCLZgdi02YQg2K3YrNiyINin2YTZhdmI2LnYryDYrdin2YjZhCDZhdmGINis2K/ZitivXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURhdGUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldEluZm8oe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICBkYXRlOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRpbWUgPSAodmFsdWUpID0+IHtcclxuICAgIHNldEluZm8oe1xyXG4gICAgICAuLi5pbmZvLFxyXG4gICAgICB0aW1lOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHR5cGVzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCLYp9mE2KjYp9mC2Ycg2KfZhNmB2LbZitmHXCIsIHZhbHVlOiBcItin2YTYqNin2YLZhyDYp9mE2YHYttmK2YdcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCLYp9mE2KjYp9mC2Ycg2KfZhNiw2YfYqNmK2YdcIiwgdmFsdWU6IFwi2KfZhNio2KfZgtmHINin2YTYsNmH2KjZitmHXCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwi2KfZhNio2KfZgtmHINin2YTYqNix2YjZhtiy2YrZh1wiLCB2YWx1ZTogXCLYp9mE2KjYp9mC2Ycg2KfZhNio2LHZiNmG2LLZitmHXCIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6IFwi2YLYtSDYp9mE2LTYudixXCIsIHZhbHVlOiBcItmC2LUg2KfZhNi02LnYsVwiIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiBcItit2YTYp9mC2Kkg2KfZhNiw2YLZhlwiLCB2YWx1ZTogXCLYrdmE2KfZgtipINin2YTYsNmC2YZcIiB9LFxyXG4gICAgeyBpZDogNiwgbmFtZTogXCLYp9mE2LXYqNi62KfYqlwiLCB2YWx1ZTogXCLYp9mE2LXYqNi62KfYqlwiIH0sXHJcbiAgICB7IGlkOiA3LCBuYW1lOiBcItmF2LnYp9mE2KzYp9iqINin2YTYtNi52LFcIiwgdmFsdWU6IFwi2YXYudin2YTYrNin2Kog2KfZhNi02LnYsVwiIH0sXHJcbiAgICB7IGlkOiA4LCBuYW1lOiBcItiq2K/ZhNmK2YMg2KfZhNmI2KzZh1wiLCB2YWx1ZTogXCLYqtiv2YTZitmDINin2YTZiNis2YdcIiB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogXCLYp9mE2LnZhtin2YrZhyDYqNin2YTZitiv2YrZhiDZiNin2YTZgtiv2YXZitmGXCIsXHJcbiAgICAgIHZhbHVlOiBcItin2YTYudmG2KfZitmHINio2KfZhNmK2K/ZitmGINmI2KfZhNmC2K/ZhdmK2YZcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5mbyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIG1pbi1oLXNjcmVlbiBmbGV4IHJlbGF0aXZlIHB5LTMyXCI+XHJcbiAgICAgIDxJbWFnZVdpdGhMYXllcnNcclxuICAgICAgICBpbWFnZT1cIi9pbWFnZXMvaW1hZ2VfMS5wbmdcIlxyXG4gICAgICAgIGxheWVycz17W1wiYmctYmxhY2sgYmctb3BhY2l0eS05MFwiLCBcImJnLWJsYWNrIGJnLW9wYWNpdHktMzBcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgPEZsb2F0aW5nQmFyIHRleHQ9XCLYp9it2KzYsiDZhdmI2LnYr1wiIGltYWdlPVwiL2ltYWdlcy9pY29uXzkucG5nXCIgLz5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgYmctb3BhY2l0eS0zMCBzcGFjZS15LTkgcHktOVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtZ3JheS01MDAgeGw6ZmxleC1yb3cgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTkgeGw6c3BhY2UteS0wIHhsOnNwYWNlLXgtOSB4bDpzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2K/YrtmEINin2LPZhdmDXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMiBmbGV4IGl0ZW1zLWNlbnRlciBwLTMgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgYmctd2hpdGUgb3V0bGluZS1ub25lIHNwYWNlLXgtMiBzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwicGhvbmVcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItix2YLZhSDZh9in2KrZgdmDXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPis5NjY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJ0eXBlXCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+2YbZiNi5INin2YTYrtiv2YXZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3R5cGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggc3BhY2UteC0zIHNwYWNlLXgtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcC0zIHRleHQtcmlnaHQgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUaW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtin2YTYs9in2LnZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgIFwiOSBBbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAgQW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjExIEFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMyBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNCBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNyBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiOCBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiOSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjExIFBtXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0+e2l9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVEYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2K/YrtmEINin2YTZhdmK2LnYp9ivXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7bG9hZGVyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBiZy1zZWNvbmRhcnkgdy02IGgtNiByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2Vjb25kYXJ5IGhvdmVyOmJnLXByaW1hcnkgdy0xMC8xMiBsZzp3LTgvMTIgeGw6dy0yLzEyXCI+XHJcbiAgICAgICAgICAgICAg2KfYrdis2LIg2YXYudmG2KdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmluZXRoTWFpblNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=