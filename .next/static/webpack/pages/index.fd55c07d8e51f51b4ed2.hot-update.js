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
    name: "قص الشعر",
    value: "قص الشعر"
  }, {
    id: 2,
    name: "حلاقة الذقن",
    value: "حلاقة الذقن"
  }, {
    id: 3,
    name: "الصبغات",
    value: "الصبغات"
  }, {
    id: 4,
    name: "معالجات الشعر",
    value: "معالجات الشعر"
  }, {
    id: 5,
    name: "تدليك الوجه",
    value: "تدليك الوجه"
  }, {
    id: 6,
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
      lineNumber: 86,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-white flex flex-col flex-grow space-y-20",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FloatingBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F",
        image: "/images/icon_9.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
              lineNumber: 98,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "",
              children: "+966"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
                lineNumber: 120,
                columnNumber: 17
              }, _this), types.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: item.value,
                  children: item.name
                }, item.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
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
                  lineNumber: 134,
                  columnNumber: 19
                }, _this), ["9 Am", "10 Am", "11 Am", "12 Pm", "1 Pm", "2 Pm", "3 Pm", "4 Pm", "5 Pm", "6 Pm", "7 Pm", "8 Pm", "9 Pm", "10 Pm", "11 Pm"].map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i,
                    children: i
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
                lineNumber: 155,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), loader ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "animate-ping bg-secondary w-6 h-6 rounded-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12",
          children: "\u0627\u062D\u062C\u0632 \u0645\u0639\u0646\u0627"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvTmluZXRoTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbIk5pbmV0aE1haW5TZWN0aW9uIiwidXNlU3RhdGUiLCJuYW1lIiwicGhvbmUiLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJpbmZvIiwic2V0SW5mbyIsImxvYWRlciIsInNldExvYWRlciIsImhhbmRsZUNoYW5nZSIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJsZW5ndGgiLCJBeGlvcyIsImJhc2VVUkwiLCJBUEkiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiY29udmVydFRvRm9ybURhdGEiLCJyZXMiLCJyZXNwb25zZSIsIm1zZyIsImhhbmRsZURhdGUiLCJoYW5kbGVUaW1lIiwidHlwZXMiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsUUFBSSxFQUFFLFVBSHlCO0FBSS9CQyxRQUFJLEVBQUUsRUFKeUI7QUFLL0JDLFFBQUksRUFBRTtBQUx5QixHQUFELENBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBQUEsbUJBU0ZQLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTdkJRLE1BVHVCO0FBQUEsTUFTZkMsU0FUZTs7QUFXOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7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LEVBTUMsTUFORCxFQU9DLE1BUEQsRUFRQyxNQVJELEVBU0MsTUFURCxFQVVDLE1BVkQsRUFXQyxNQVhELEVBWUMsTUFaRCxFQWFDLE1BYkQsRUFjQyxPQWRELEVBZUMsT0FmRCxFQWdCQ3NCLEdBaEJELENBZ0JLLFVBQUNFLENBQUQ7QUFBQSxzQ0FDSjtBQUFRLHlCQUFLLEVBQUVBLENBQWY7QUFBQSw4QkFBbUJBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREk7QUFBQSxpQkFoQkwsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUEwQkU7QUFDRSx3QkFBUSxFQUFFLGtCQUFDdEIsQ0FBRDtBQUFBLHlCQUFPZ0IsVUFBVSxDQUFDaEIsQ0FBQyxDQUFDbUIsTUFBRixDQUFTckIsS0FBVixDQUFqQjtBQUFBLGlCQURaO0FBRUUsb0JBQUksRUFBQyxNQUZQO0FBR0UsMkJBQVcsRUFBQyxxRUFIZDtBQUlFLHlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUF3RUdKLE1BQU0sZ0JBQ0w7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxnQkFHTDtBQUFRLG1CQUFTLEVBQUMsMEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJGRCxDQXRLRDs7R0FBTVQsaUI7O0tBQUFBLGlCO0FBd0tTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDU1YzA3ZDhlNTFmNTFiNGVkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0JhciBmcm9tIFwiLi4vRmxvYXRpbmdCYXJcIjtcclxuaW1wb3J0IEltYWdlV2l0aExheWVycyBmcm9tIFwiLi4vSW1hZ2VXaXRoTGF5ZXJzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi8uLi9oZWxwZXIvQ09OU1RcIjtcclxuaW1wb3J0IGNvbnZlcnRUb0Zvcm1EYXRhIGZyb20gXCIuLi8uLi9oZWxwZXIvY29udmVydFRvRm9ybURhdGFcIjtcclxuXHJcbmNvbnN0IE5pbmV0aE1haW5TZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIHR5cGU6IFwi2YLYtSDYp9mE2LTYudixXCIsXHJcbiAgICBkYXRlOiBcIlwiLFxyXG4gICAgdGltZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SW5mbyh7IC4uLmluZm8sIFtpZF06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbmZvLnBob25lKTtcclxuICAgIGlmICghaW5mby5uYW1lIHx8ICFpbmZvLnBob25lIHx8ICFpbmZvLmRhdGUpIHtcclxuICAgICAgYWxlcnQoXCLYqNix2KzYp9ihINmF2YTYpiDYrNmF2YrYuSDYp9mE2KjZitin2YbYp9iqXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5waG9uZS5sZW5ndGggIT09IDkpIHtcclxuICAgICAgYWxlcnQoXCLYqNix2KzYp9ihINin2K/Yrtin2YQg2LHZgtmFINmH2KfYqtmBINi12K3ZititXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBBeGlvcyh7XHJcbiAgICAgICAgYmFzZVVSTDogQVBJLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3Jlc2VydmF0aW9uL2FkZFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogY29udmVydFRvRm9ybURhdGEoaW5mbyksXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xyXG4gICAgICBhbGVydChcItmE2YLYryDYqtmFINit2KzYsiDYp9mE2YXZiNi52K9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKVxyXG4gICAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgZWxzZSBhbGVydChcItmB2LTZhCDYrdis2LIg2KfZhNmF2YjYudivINit2KfZiNmEINmF2YYg2KzYr9mK2K9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGF0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0SW5mbyh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIGRhdGU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGltZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0SW5mbyh7XHJcbiAgICAgIC4uLmluZm8sXHJcbiAgICAgIHRpbWU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZXMgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcItmC2LUg2KfZhNi02LnYsVwiLCB2YWx1ZTogXCLZgti1INin2YTYtNi52LFcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCLYrdmE2KfZgtipINin2YTYsNmC2YZcIiwgdmFsdWU6IFwi2K3ZhNin2YLYqSDYp9mE2LDZgtmGXCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwi2KfZhNi12KjYutin2KpcIiwgdmFsdWU6IFwi2KfZhNi12KjYutin2KpcIiB9LFxyXG4gICAgeyBpZDogNCwgbmFtZTogXCLZhdi52KfZhNis2KfYqiDYp9mE2LTYudixXCIsIHZhbHVlOiBcItmF2LnYp9mE2KzYp9iqINin2YTYtNi52LFcIiB9LFxyXG4gICAgeyBpZDogNSwgbmFtZTogXCLYqtiv2YTZitmDINin2YTZiNis2YdcIiwgdmFsdWU6IFwi2KrYr9mE2YrZgyDYp9mE2YjYrNmHXCIgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIG5hbWU6IFwi2KfZhNi52YbYp9mK2Ycg2KjYp9mE2YrYr9mK2YYg2YjYp9mE2YLYr9mF2YrZhlwiLFxyXG4gICAgICB2YWx1ZTogXCLYp9mE2LnZhtin2YrZhyDYqNin2YTZitiv2YrZhiDZiNin2YTZgtiv2YXZitmGXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnNvbGUubG9nKGluZm8pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBtaW4taC1zY3JlZW4gZmxleCByZWxhdGl2ZSBweS0zMlwiPlxyXG4gICAgICA8SW1hZ2VXaXRoTGF5ZXJzXHJcbiAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2ltYWdlXzEucG5nXCJcclxuICAgICAgICBsYXllcnM9e1tcImJnLWJsYWNrIGJnLW9wYWNpdHktOTBcIiwgXCJiZy1ibGFjayBiZy1vcGFjaXR5LTMwXCJdfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgc3BhY2UteS0yMFwiPlxyXG4gICAgICAgIDxGbG9hdGluZ0JhciB0ZXh0PVwi2KfYrdis2LIg2YXZiNi52K9cIiBpbWFnZT1cIi9pbWFnZXMvaWNvbl85LnBuZ1wiIC8+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktMTAwIGJnLW9wYWNpdHktMzAgc3BhY2UteS05IHB5LTlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWdyYXktNTAwIHhsOmZsZXgtcm93IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS05IHhsOnNwYWNlLXktMCB4bDpzcGFjZS14LTkgeGw6c3BhY2UteC1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBsZzp3LTgvMTIgeGw6dy0yLzEyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9iv2K7ZhCDYp9iz2YXZg1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgdy1mdWxsIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTIgZmxleCBpdGVtcy1jZW50ZXIgcC0zIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBzcGFjZS14LTIgc3BhY2UteC1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShcInBob25lXCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYsdmC2YUg2YfYp9iq2YHZg1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj4rOTY2PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTJcIj5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgdy1mdWxsIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwidHlwZVwiLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtmG2YjYuSDYp9mE2K7Yr9mF2Yc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHt0eXBlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IHNwYWNlLXgtMyBzcGFjZS14LXJldmVyc2UgaXRlbXMtY2VudGVyIHAtMyB0ZXh0LXJpZ2h0IGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLWxnIHRleHQtZ3JheS01MDAgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVGltZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7Yp9mE2LPYp9i52Yc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICBcIjkgQW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjEwIEFtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMSBBbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTIgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjEgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjIgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjMgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjQgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjUgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjYgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjcgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjggUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjkgUG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjEwIFBtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMSBQbVwiLFxyXG4gICAgICAgICAgICAgICAgICBdLm1hcCgoaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l9PntpfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9iv2K7ZhCDYp9mE2YXZiti52KfYr1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2xvYWRlciA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYmctc2Vjb25kYXJ5IHctNiBoLTYgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWxnIGJnLXNlY29uZGFyeSBob3ZlcjpiZy1wcmltYXJ5IHctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgINin2K3YrNiyINmF2LnZhtinXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pbmV0aE1haW5TZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9