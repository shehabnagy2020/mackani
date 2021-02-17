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
                }, _this), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: i,
                    children: i
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
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
                lineNumber: 139,
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
          lineNumber: 149,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "p-3 rounded-lg bg-secondary hover:bg-primary w-10/12 lg:w-8/12 xl:w-2/12",
          children: "\u0627\u062D\u062C\u0632 \u0645\u0639\u0646\u0627"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbnMvTmluZXRoTWFpblNlY3Rpb24uanN4Il0sIm5hbWVzIjpbIk5pbmV0aE1haW5TZWN0aW9uIiwidXNlU3RhdGUiLCJuYW1lIiwicGhvbmUiLCJ0eXBlIiwiZGF0ZSIsInRpbWUiLCJpbmZvIiwic2V0SW5mbyIsImxvYWRlciIsInNldExvYWRlciIsImhhbmRsZUNoYW5nZSIsImlkIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJsZW5ndGgiLCJBeGlvcyIsImJhc2VVUkwiLCJBUEkiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiY29udmVydFRvRm9ybURhdGEiLCJyZXMiLCJyZXNwb25zZSIsIm1zZyIsImhhbmRsZURhdGUiLCJoYW5kbGVUaW1lIiwidHlwZXMiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFNBQUssRUFBRSxFQUZ3QjtBQUcvQkMsUUFBSSxFQUFFLFVBSHlCO0FBSS9CQyxRQUFJLEVBQUUsRUFKeUI7QUFLL0JDLFFBQUksRUFBRTtBQUx5QixHQUFELENBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBQUEsbUJBU0ZQLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTdkJRLE1BVHVCO0FBQUEsTUFTZkMsU0FUZTs7QUFXOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7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LEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEVBQTVCLEVBQWdDc0IsR0FBaEMsQ0FBb0MsVUFBQ0UsQ0FBRDtBQUFBLHNDQUNuQztBQUFRLHlCQUFLLEVBQUVBLENBQWY7QUFBQSw4QkFBbUJBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRG1DO0FBQUEsaUJBQXBDLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBVUU7QUFDRSx3QkFBUSxFQUFFLGtCQUFDdEIsQ0FBRDtBQUFBLHlCQUFPZ0IsVUFBVSxDQUFDaEIsQ0FBQyxDQUFDbUIsTUFBRixDQUFTckIsS0FBVixDQUFqQjtBQUFBLGlCQURaO0FBRUUsb0JBQUksRUFBQyxNQUZQO0FBR0UsMkJBQVcsRUFBQyxxRUFIZDtBQUlFLHlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQXdER0osTUFBTSxnQkFDTDtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGdCQUdMO0FBQVEsbUJBQVMsRUFBQywwRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBdEpEOztHQUFNVCxpQjs7S0FBQUEsaUI7QUF3SlNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzZjRiYWEyN2RiMjY3ZjFkYjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZsb2F0aW5nQmFyIGZyb20gXCIuLi9GbG9hdGluZ0JhclwiO1xyXG5pbXBvcnQgSW1hZ2VXaXRoTGF5ZXJzIGZyb20gXCIuLi9JbWFnZVdpdGhMYXllcnNcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uL2hlbHBlci9DT05TVFwiO1xyXG5pbXBvcnQgY29udmVydFRvRm9ybURhdGEgZnJvbSBcIi4uLy4uL2hlbHBlci9jb252ZXJ0VG9Gb3JtRGF0YVwiO1xyXG5cclxuY29uc3QgTmluZXRoTWFpblNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgdHlwZTogXCLZgti1INin2YTYtNi52LFcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgICB0aW1lOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRJbmZvKHsgLi4uaW5mbywgW2lkXTogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGluZm8ucGhvbmUpO1xyXG4gICAgaWYgKCFpbmZvLm5hbWUgfHwgIWluZm8ucGhvbmUgfHwgIWluZm8uZGF0ZSkge1xyXG4gICAgICBhbGVydChcItio2LHYrNin2KEg2YXZhNimINis2YXZiti5INin2YTYqNmK2KfZhtin2KpcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpbmZvLnBob25lLmxlbmd0aCAhPT0gOSkge1xyXG4gICAgICBhbGVydChcItio2LHYrNin2KEg2KfYr9iu2KfZhCDYsdmC2YUg2YfYp9iq2YEg2LXYrdmK2K1cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zKHtcclxuICAgICAgICBiYXNlVVJMOiBBUEksXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcmVzZXJ2YXRpb24vYWRkXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiBjb252ZXJ0VG9Gb3JtRGF0YShpbmZvKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldExvYWRlcihmYWxzZSk7XHJcbiAgICAgIGFsZXJ0KFwi2YTZgtivINiq2YUg2K3YrNiyINin2YTZhdmI2LnYr1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpXHJcbiAgICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICBlbHNlIGFsZXJ0KFwi2YHYtNmEINit2KzYsiDYp9mE2YXZiNi52K8g2K3Yp9mI2YQg2YXZhiDYrNiv2YrYr1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEYXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRJbmZvKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgZGF0ZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRJbmZvKHtcclxuICAgICAgLi4uaW5mbyxcclxuICAgICAgdGltZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlcyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwi2YLYtSDYp9mE2LTYudixXCIsIHZhbHVlOiBcItmC2LUg2KfZhNi02LnYsVwiIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiBcItit2YTYp9mC2Kkg2KfZhNiw2YLZhlwiLCB2YWx1ZTogXCLYrdmE2KfZgtipINin2YTYsNmC2YZcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCLYp9mE2LXYqNi62KfYqlwiLCB2YWx1ZTogXCLYp9mE2LXYqNi62KfYqlwiIH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcItmF2LnYp9mE2KzYp9iqINin2YTYtNi52LFcIiwgdmFsdWU6IFwi2YXYudin2YTYrNin2Kog2KfZhNi02LnYsVwiIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiBcItiq2K/ZhNmK2YMg2KfZhNmI2KzZh1wiLCB2YWx1ZTogXCLYqtiv2YTZitmDINin2YTZiNis2YdcIiB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogXCLYp9mE2LnZhtin2YrZhyDYqNin2YTZitiv2YrZhiDZiNin2YTZgtiv2YXZitmGXCIsXHJcbiAgICAgIHZhbHVlOiBcItin2YTYudmG2KfZitmHINio2KfZhNmK2K/ZitmGINmI2KfZhNmC2K/ZhdmK2YZcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5mbyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIG1pbi1oLXNjcmVlbiBmbGV4IHJlbGF0aXZlIHB5LTMyXCI+XHJcbiAgICAgIDxJbWFnZVdpdGhMYXllcnNcclxuICAgICAgICBpbWFnZT1cIi9pbWFnZXMvaW1hZ2VfMS5wbmdcIlxyXG4gICAgICAgIGxheWVycz17W1wiYmctYmxhY2sgYmctb3BhY2l0eS05MFwiLCBcImJnLWJsYWNrIGJnLW9wYWNpdHktMzBcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBzcGFjZS15LTIwXCI+XHJcbiAgICAgICAgPEZsb2F0aW5nQmFyIHRleHQ9XCLYp9it2KzYsiDZhdmI2LnYr1wiIGltYWdlPVwiL2ltYWdlcy9pY29uXzkucG5nXCIgLz5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctZ3JheS0xMDAgYmctb3BhY2l0eS0zMCBzcGFjZS15LTkgcHktOVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtZ3JheS01MDAgeGw6ZmxleC1yb3cgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTkgeGw6c3BhY2UteS0wIHhsOnNwYWNlLXgtOSB4bDpzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2K/YrtmEINin2LPZhdmDXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMiBmbGV4IGl0ZW1zLWNlbnRlciBwLTMgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgYmctd2hpdGUgb3V0bGluZS1ub25lIHNwYWNlLXgtMiBzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKFwicGhvbmVcIiwgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItix2YLZhSDZh9in2KrZgdmDXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPis5NjY8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyB3LWZ1bGwgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoXCJ0eXBlXCIsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+2YbZiNi5INin2YTYrtiv2YXZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3R5cGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0udmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbGc6dy04LzEyIHhsOnctMi8xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggc3BhY2UteC0zIHNwYWNlLXgtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcC0zIHRleHQtcmlnaHQgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUaW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtin2YTYs9in2LnZhzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXS5tYXAoKGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpfT57aX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZURhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfYr9iu2YQg2KfZhNmF2YrYudin2K9cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtsb2FkZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1waW5nIGJnLXNlY29uZGFyeSB3LTYgaC02IHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC1sZyBiZy1zZWNvbmRhcnkgaG92ZXI6YmctcHJpbWFyeSB3LTEwLzEyIGxnOnctOC8xMiB4bDp3LTIvMTJcIj5cclxuICAgICAgICAgICAgICDYp9it2KzYsiDZhdi52YbYp1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOaW5ldGhNYWluU2VjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==