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
    code: "+966",
    phone_number: "",
    phone: info.code + info.phone_number,
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
      var res;
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
              // let newPhone = "+966" + info.phone;
              // setInfo({ ...info, phone: newPhone });
              setLoader(true);
              _context.prev = 9;
              _context.next = 12;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                baseURL: _helper_CONST__WEBPACK_IMPORTED_MODULE_9__["API"],
                url: "/api/reservation/add",
                method: "POST",
                data: Object(_helper_convertToFormData__WEBPACK_IMPORTED_MODULE_10__["default"])(info)
              });

            case 12:
              res = _context.sent;
              setLoader(false);
              alert("لقد تم حجز الموعد");
              _context.next = 22;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](9);
              console.log(_context.t0.response);
              setLoader(false);
              if (_context.t0.response && _context.t0.response.data && _context.t0.response.data.msg) alert(_context.t0.response.data.msg);else alert("فشل حجز الموعد حاول من جديد");

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 17]]);
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
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F",
        image: "/images/icon_9.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-10/12 lg:w-8/12 xl:w-2/12 flex items-center p-3 border-gray-500 rounded-lg bg-white outline-none space-x-2 space-x-reverse",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                return handleChange("phone_number", e.target.value);
              },
              type: "number",
              placeholder: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643",
              className: " w-full ",
              minLength: "10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "",
              children: "966+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
                lineNumber: 127,
                columnNumber: 17
              }, _this), types.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: item.value,
                  children: item.name
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
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
                  lineNumber: 141,
                  columnNumber: 19
                }, _this), ["9 Am", "10 Am", "11 Am", "12 Pm", "1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm", "8 Pm", "9 Pm", "10 Pm", "11 Pm"].map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i,
                    children: i
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
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
                lineNumber: 162,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), loader ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "animate-ping bg-secondary w-6 h-6 rounded-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12",
          children: "\u0627\u062D\u062C\u0632 \u0645\u0639\u0646\u0627"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this);
};

_s(NinethMainSection, "AjaZoTZmMzZ1Hw5a87pOz3IRoXQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvTmluZXRoTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbIk5pbmV0aE1haW5TZWN0aW9uIiwidXNlU3RhdGUiLCJuYW1lIiwiY29kZSIsInBob25lX251bWJlciIsInBob25lIiwiaW5mbyIsInR5cGUiLCJkYXRlIiwidGltZSIsInNldEluZm8iLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJoYW5kbGVDaGFuZ2UiLCJpZCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwibGVuZ3RoIiwiQXhpb3MiLCJiYXNlVVJMIiwiQVBJIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImNvbnZlcnRUb0Zvcm1EYXRhIiwicmVzIiwicmVzcG9uc2UiLCJtc2ciLCJoYW5kbGVEYXRlIiwiaGFuZGxlVGltZSIsInR5cGVzIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxRQUFJLEVBQUUsTUFGeUI7QUFHL0JDLGdCQUFZLEVBQUUsRUFIaUI7QUFJL0JDLFNBQUssRUFBRUMsSUFBSSxDQUFDSCxJQUFMLEdBQVlHLElBQUksQ0FBQ0YsWUFKTztBQUsvQkcsUUFBSSxFQUFFLFVBTHlCO0FBTS9CQyxRQUFJLEVBQUUsRUFOeUI7QUFPL0JDLFFBQUksRUFBRTtBQVB5QixHQUFELENBREY7QUFBQSxNQUN2QkgsSUFEdUI7QUFBQSxNQUNqQkksT0FEaUI7O0FBQUEsbUJBV0ZULHNEQUFRLENBQUMsS0FBRCxDQVhOO0FBQUEsTUFXdkJVLE1BWHVCO0FBQUEsTUFXZkMsU0FYZTs7QUFhOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDbENMLFdBQU8saUNBQU1KLElBQU4scUdBQWFRLEVBQWIsRUFBa0JDLEtBQWxCLEdBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlkLElBQUksQ0FBQ0QsS0FBakI7O0FBRm1CLG9CQUdmLENBQUNDLElBQUksQ0FBQ0osSUFBTixJQUFjLENBQUNJLElBQUksQ0FBQ0QsS0FBcEIsSUFBNkIsQ0FBQ0MsSUFBSSxDQUFDRSxJQUhwQjtBQUFBO0FBQUE7QUFBQTs7QUFJakJhLG1CQUFLLENBQUMseUJBQUQsQ0FBTDtBQUppQjs7QUFBQTtBQUFBLG9CQU9mZixJQUFJLENBQUNELEtBQUwsQ0FBV2lCLE1BQVgsS0FBc0IsQ0FQUDtBQUFBO0FBQUE7QUFBQTs7QUFRakJELG1CQUFLLENBQUMsMkJBQUQsQ0FBTDtBQVJpQjs7QUFBQTtBQVduQjtBQUNBO0FBQ0FULHVCQUFTLENBQUMsSUFBRCxDQUFUO0FBYm1CO0FBQUE7QUFBQSxxQkFlQ1csNENBQUssQ0FBQztBQUN0QkMsdUJBQU8sRUFBRUMsaURBRGE7QUFFdEJDLG1CQUFHLEVBQUUsc0JBRmlCO0FBR3RCQyxzQkFBTSxFQUFFLE1BSGM7QUFJdEJDLG9CQUFJLEVBQUVDLDBFQUFpQixDQUFDdkIsSUFBRDtBQUpELGVBQUQsQ0FmTjs7QUFBQTtBQWVYd0IsaUJBZlc7QUFxQmpCbEIsdUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQVMsbUJBQUssQ0FBQyxtQkFBRCxDQUFMO0FBdEJpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCakJGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFNVyxRQUFsQjtBQUNBbkIsdUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQSxrQkFBSSxZQUFNbUIsUUFBTixJQUFrQixZQUFNQSxRQUFOLENBQWVILElBQWpDLElBQXlDLFlBQU1HLFFBQU4sQ0FBZUgsSUFBZixDQUFvQkksR0FBakUsRUFDRVgsS0FBSyxDQUFDLFlBQU1VLFFBQU4sQ0FBZUgsSUFBZixDQUFvQkksR0FBckIsQ0FBTCxDQURGLEtBRUtYLEtBQUssQ0FBQyw2QkFBRCxDQUFMOztBQTVCWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWdDQSxNQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2xCLEtBQUQsRUFBVztBQUM1QkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQUwsV0FBTyxpQ0FDRkosSUFERTtBQUVMRSxVQUFJLEVBQUVPO0FBRkQsT0FBUDtBQUlELEdBTkQ7O0FBUUEsTUFBTW1CLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNuQixLQUFELEVBQVc7QUFDNUJMLFdBQU8saUNBQ0ZKLElBREU7QUFFTEcsVUFBSSxFQUFFTTtBQUZELE9BQVA7QUFJRCxHQUxEOztBQU9BLE1BQU1vQixLQUFLLEdBQUcsQ0FDWjtBQUFFckIsTUFBRSxFQUFFLENBQU47QUFBU1osUUFBSSxFQUFFLGVBQWY7QUFBZ0NhLFNBQUssRUFBRTtBQUF2QyxHQURZLEVBRVo7QUFBRUQsTUFBRSxFQUFFLENBQU47QUFBU1osUUFBSSxFQUFFLGdCQUFmO0FBQWlDYSxTQUFLLEVBQUU7QUFBeEMsR0FGWSxFQUdaO0FBQUVELE1BQUUsRUFBRSxDQUFOO0FBQVNaLFFBQUksRUFBRSxrQkFBZjtBQUFtQ2EsU0FBSyxFQUFFO0FBQTFDLEdBSFksRUFJWjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTWixRQUFJLEVBQUUsVUFBZjtBQUEyQmEsU0FBSyxFQUFFO0FBQWxDLEdBSlksRUFLWjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTWixRQUFJLEVBQUUsYUFBZjtBQUE4QmEsU0FBSyxFQUFFO0FBQXJDLEdBTFksRUFNWjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTWixRQUFJLEVBQUUsU0FBZjtBQUEwQmEsU0FBSyxFQUFFO0FBQWpDLEdBTlksRUFPWjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTWixRQUFJLEVBQUUsZUFBZjtBQUFnQ2EsU0FBSyxFQUFFO0FBQXZDLEdBUFksRUFRWjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTWixRQUFJLEVBQUUsYUFBZjtBQUE4QmEsU0FBSyxFQUFFO0FBQXJDLEdBUlksRUFTWjtBQUNFRCxNQUFFLEVBQUUsQ0FETjtBQUVFWixRQUFJLEVBQUUsMEJBRlI7QUFHRWEsU0FBSyxFQUFFO0FBSFQsR0FUWSxDQUFkO0FBZ0JBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsSUFBWjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFLLEVBQUMscUJBRFI7QUFFRSxZQUFNLEVBQUUsQ0FBQyx3QkFBRCxFQUEyQix3QkFBM0I7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyx3REFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQWEsWUFBSSxFQUFDLG1EQUFsQjtBQUE4QixhQUFLLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxnQkFBUSxFQUFFVSxZQURaO0FBRUUsaUJBQVMsRUFBQyxrR0FGWjtBQUFBLGdDQUlFO0FBQUssbUJBQVMsRUFBQyxtSUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFO0FBQ0Usc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPSixZQUFZLENBQUMsTUFBRCxFQUFTSSxDQUFDLENBQUNtQixNQUFGLENBQVNyQixLQUFsQixDQUFuQjtBQUFBLGVBRFo7QUFFRSxrQkFBSSxFQUFDLE1BRlA7QUFHRSx5QkFBVyxFQUFDLG1EQUhkO0FBSUUsdUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLDhIQUFmO0FBQUEsb0NBQ0U7QUFDRSxzQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsdUJBQU9KLFlBQVksQ0FBQyxjQUFELEVBQWlCSSxDQUFDLENBQUNtQixNQUFGLENBQVNyQixLQUExQixDQUFuQjtBQUFBLGVBRFo7QUFFRSxrQkFBSSxFQUFDLFFBRlA7QUFHRSx5QkFBVyxFQUFDLG1EQUhkO0FBSUUsdUJBQVMsRUFBQyxVQUpaO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUFNLHVCQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBbUJFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyx1Q0FEWjtBQUVFLHNCQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSx1QkFBT0osWUFBWSxDQUFDLE1BQUQsRUFBU0ksQ0FBQyxDQUFDbUIsTUFBRixDQUFTckIsS0FBbEIsQ0FBbkI7QUFBQSxlQUZaO0FBQUEsc0NBSUU7QUFBUSxxQkFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsRUFLR29CLEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxvQ0FDVDtBQUFzQix1QkFBSyxFQUFFQSxJQUFJLENBQUN2QixLQUFsQztBQUFBLDRCQUNHdUIsSUFBSSxDQUFDcEM7QUFEUixtQkFBYW9DLElBQUksQ0FBQ3hCLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFM7QUFBQSxlQUFWLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUFnQ0U7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHFIQUFmO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSx3QkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEseUJBQU9pQixVQUFVLENBQUNqQixDQUFDLENBQUNtQixNQUFGLENBQVNyQixLQUFWLENBQWpCO0FBQUEsaUJBRlo7QUFBQSx3Q0FJRTtBQUFRLHVCQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixFQUtHLENBQ0MsTUFERCxFQUVDLE9BRkQsRUFHQyxPQUhELEVBSUMsT0FKRCxFQUtDLE1BTEQsRUFNQyxNQU5ELEVBT0MsTUFQRCxFQVFDLE1BUkQsRUFTQyxNQVRELEVBVUMsTUFWRCxFQVdDLE1BWEQsRUFZQyxNQVpELEVBYUMsTUFiRCxFQWNDLE9BZEQsRUFlQyxPQWZELEVBZ0JDc0IsR0FoQkQsQ0FnQkssVUFBQ0UsQ0FBRDtBQUFBLHNDQUNKO0FBQVEseUJBQUssRUFBRUEsQ0FBZjtBQUFBLDhCQUFtQkE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESTtBQUFBLGlCQWhCTCxDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQTBCRTtBQUNFLHdCQUFRLEVBQUUsa0JBQUN0QixDQUFEO0FBQUEseUJBQU9nQixVQUFVLENBQUNoQixDQUFDLENBQUNtQixNQUFGLENBQVNyQixLQUFWLENBQWpCO0FBQUEsaUJBRFo7QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSwyQkFBVyxFQUFDLHFFQUhkO0FBSUUseUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQXdFR0osTUFBTSxnQkFDTDtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGdCQUdMO0FBQVEsbUJBQVMsRUFBQywwRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkZELENBN0tEOztHQUFNWCxpQjs7S0FBQUEsaUI7QUErS1NBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY3NjQyYTFhZmI3YjMyNjQ5M2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZsb2F0aW5nQmFyIGZyb20gXCIuLi9GbG9hdGluZ0JhclwiO1xyXG5pbXBvcnQgSW1hZ2VXaXRoTGF5ZXJzIGZyb20gXCIuLi9JbWFnZVdpdGhMYXllcnNcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9DT05TVFwiO1xyXG5pbXBvcnQgY29udmVydFRvRm9ybURhdGEgZnJvbSBcIi4uLy4uL2hlbHBlci9jb252ZXJ0VG9Gb3JtRGF0YVwiO1xyXG5cclxuY29uc3QgTmluZXRoTWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGNvZGU6IFwiKzk2NlwiLFxyXG4gICAgcGhvbmVfbnVtYmVyOiBcIlwiLFxyXG4gICAgcGhvbmU6IGluZm8uY29kZSArIGluZm8ucGhvbmVfbnVtYmVyLFxyXG4gICAgdHlwZTogXCLZgti1INin2YTYtNi52LFcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICB0aW1lOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRJbmZvKHsgLi4uaW5mbywgW2lkXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGluZm8ucGhvbmUpO1xyXG4gICAgaWYgKCFpbmZvLm5hbWUgfHwgIWluZm8ucGhvbmUgfHwgIWluZm8uZGF0ZSkge1xyXG4gICAgICBhbGVydChcItio2LHYrNin2KEg2YXZhNimINis2YXZiti5INin2YTYqNmK2KfZhtin2KpcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLnBob25lLmxlbmd0aCAhPT0gOSkge1xyXG4gICAgICBhbGVydChcItio2LHYrNin2KEg2KfYr9iu2KfZhCDYsdmC2YUg2YfYp9iq2YEg2LXYrdmK2K1cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGxldCBuZXdQaG9uZSA9IFwiKzk2NlwiICsgaW5mby5waG9uZTtcclxuICAgIC8vIHNldEluZm8oeyAuLi5pbmZvLCBwaG9uZTogbmV3UGhvbmUgfSk7XHJcbiAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgYmFzZVVSTDogQVBJLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3Jlc2VydmF0aW9uL2FkZFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogY29udmVydFRvRm9ybURhdGEoaW5mbyksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xyXG4gICAgICBhbGVydChcItmE2YLYryDYqtmFINit2KzYsiDYp9mE2YXZiNi52K9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKVxyXG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgZWxzZSBhbGVydChcItmB2LTZhCDYrdis2LIg2KfZhNmF2YjYudivINit2KfZiNmEINmF2YYg2KzYr9mK2K9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0SW5mbyh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIGRhdGU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGltZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SW5mbyh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIHRpbWU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZXMgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcItin2YTYqNin2YLZhyDYp9mE2YHYttmK2YdcIiwgdmFsdWU6IFwi2KfZhNio2KfZgtmHINin2YTZgdi22YrZh1wiIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiBcItin2YTYqNin2YLZhyDYp9mE2LDZh9io2YrZh1wiLCB2YWx1ZTogXCLYp9mE2KjYp9mC2Ycg2KfZhNiw2YfYqNmK2YdcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCLYp9mE2KjYp9mC2Ycg2KfZhNio2LHZiNmG2LLZitmHXCIsIHZhbHVlOiBcItin2YTYqNin2YLZhyDYp9mE2KjYsdmI2YbYstmK2YdcIiB9LFxyXG4gICAgeyBpZDogNCwgbmFtZTogXCLZgti1INin2YTYtNi52LFcIiwgdmFsdWU6IFwi2YLYtSDYp9mE2LTYudixXCIgfSxcclxuICAgIHsgaWQ6IDUsIG5hbWU6IFwi2K3ZhNin2YLYqSDYp9mE2LDZgtmGXCIsIHZhbHVlOiBcItit2YTYp9mC2Kkg2KfZhNiw2YLZhlwiIH0sXHJcbiAgICB7IGlkOiA2LCBuYW1lOiBcItin2YTYtdio2LrYp9iqXCIsIHZhbHVlOiBcItin2YTYtdio2LrYp9iqXCIgfSxcclxuICAgIHsgaWQ6IDcsIG5hbWU6IFwi2YXYudin2YTYrNin2Kog2KfZhNi02LnYsVwiLCB2YWx1ZTogXCLZhdi52KfZhNis2KfYqiDYp9mE2LTYudixXCIgfSxcclxuICAgIHsgaWQ6IDgsIG5hbWU6IFwi2KrYr9mE2YrZgyDYp9mE2YjYrNmHXCIsIHZhbHVlOiBcItiq2K/ZhNmK2YMg2KfZhNmI2KzZh1wiIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA5LFxyXG4gICAgICBuYW1lOiBcItin2YTYudmG2KfZitmHINio2KfZhNmK2K/ZitmGINmI2KfZhNmC2K/ZhdmK2YZcIixcclxuICAgICAgdmFsdWU6IFwi2KfZhNi52YbYp9mK2Ycg2KjYp9mE2YrYr9mK2YYg2YjYp9mE2YLYr9mF2YrZhlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zb2xlLmxvZyhpbmZvKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gbWluLWgtc2NyZWVuIGZsZXggcmVsYXRpdmUgcHktMzJcIj5cclxuICAgICAgPEltYWdlV2l0aExheWVyc1xyXG4gICAgICAgIGltYWdlPVwiL2ltYWdlcy9pbWFnZV8xLnBuZ1wiXHJcbiAgICAgICAgbGF5ZXJzPXtbXCJiZy1ibGFjayBiZy1vcGFjaXR5LTkwXCIsIFwiYmctYmxhY2sgYmctb3BhY2l0eS0zMFwiXX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgZmxleC1ncm93IHNwYWNlLXktMjBcIj5cclxuICAgICAgICA8RmxvYXRpbmdCYXIgdGV4dD1cItin2K3YrNiyINmF2YjYudivXCIgaW1hZ2U9XCIvaW1hZ2VzL2ljb25fOS5wbmdcIiAvPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTEwMCBiZy1vcGFjaXR5LTMwIHNwYWNlLXktOSBweS05XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1ncmF5LTUwMCB4bDpmbGV4LXJvdyB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktOSB4bDpzcGFjZS15LTAgeGw6c3BhY2UteC05IHhsOnNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfYr9iu2YQg2KfYs9mF2YNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHctZnVsbCBib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgeGw6dy0yLzEyIGZsZXggaXRlbXMtY2VudGVyIHAtMyBib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZyBiZy13aGl0ZSBvdXRsaW5lLW5vbmUgc3BhY2UteC0yIHNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJwaG9uZV9udW1iZXJcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItix2YLZhSDZh9in2KrZgdmDXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPjk2Nis8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJ0eXBlXCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+2YbZiNi5INin2YTYrtiv2YXZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3R5cGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggc3BhY2UteC0zIHNwYWNlLXgtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcC0zIHRleHQtcmlnaHQgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUaW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtin2YTYs9in2LnZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgIFwiOSBBbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAgQW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjExIEFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMyBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNCBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNiBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNyBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiOCBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiOSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjExIFBtXCIsXHJcbiAgICAgICAgICAgICAgICAgIF0ubWFwKChpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aX0+e2l9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVEYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2K/YrtmEINin2YTZhdmK2LnYp9ivXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7bG9hZGVyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBiZy1zZWNvbmRhcnkgdy02IGgtNiByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctc2Vjb25kYXJ5IGhvdmVyOmJnLXByaW1hcnkgdy0xMC8xMiBsZzp3LTgvMTIgeGw6dy0yLzEyXCI+XHJcbiAgICAgICAgICAgICAg2KfYrdis2LIg2YXYudmG2KdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmluZXRoTWFpblNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=