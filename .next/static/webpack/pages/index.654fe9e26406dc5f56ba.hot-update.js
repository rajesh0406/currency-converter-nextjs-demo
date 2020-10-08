webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\git-test\\Nextjs\\bitprice\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Index(props) {
  _s();

  var _this = this;

  var currencylist = [];
  currencylist = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("currencylist"), props.posts.rates);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      amount = _useState[0],
      setamount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("USD"),
      from = _useState2[0],
      setFrom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("INR"),
      to = _useState3[0],
      setTo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      result = _useState4[0],
      setResult = _useState4[1];

  var currencies = ["USD", "INR", "GBP", "EUR", "AUD", "CAD", "CNY", "JPY", "CHF", "BGN", "HRK", "CZK", "DKK", "HUF", "ISK", "NOK", "PLN", "RON", "RUB", "SEK", "CHF", "TRY", "GBP", "BRL", "CAD", "MXN", "USD", "ZAR"];

  var convertCurrency = function convertCurrency() {
    /*https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}&amount=${amount}*/
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.exchangeratesapi.io/latest?base=USD").then(function (data) {
      console.log(data);
      var value = amount * data.data.rates[to];
      setResult(value);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return __jsx("div", {
    className: "jsx-2035709732" + " " + "Converter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Currency converter")), __jsx("h2", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Latest Foreign currency exchange rates"), __jsx("table", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, props.posts.rates.map(function (post) {
    return __jsx("tr", {
      className: "jsx-2035709732",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, __jsx("th", {
      className: "jsx-2035709732",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 33
      }
    }, post));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2035709732",
    __self: this
  }, "@media only screen and (min-width:900px){.Converter.jsx-2035709732{margin-top:3%;margin-left:40%;}}table.jsx-2035709732{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;}th.jsx-2035709732,td.jsx-2035709732{text-align:left;padding:16px;}tr.jsx-2035709732:nth-child(even){background-color:#f2f2f2;}.Form.jsx-2035709732 input.jsx-2035709732,select.jsx-2035709732{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-2035709732 button.jsx-2035709732{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-2035709732 h3.jsx-2035709732{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-2035709732 h2.jsx-2035709732 span.jsx-2035709732{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUk4QixBQU1RLEFBT1QsQUFLUyxBQUliLEFBUUssQUFRSyxBQVVDLFlBekJQLEVBdEJHLEVBYU4sQ0FpQkssSUFrQnRCLENBVnVCLEdBaENGLEFBWW5CLEdBS29CLENBVHBCLENBWkUsS0E2QjRCLE1BUWYsQ0FoQ0YsSUFpQitCLE9BaEJwQixDQWdDWCxPQVJDLEtBU0csT0FSSCxFQXhCZCxNQWlDYSxJQWhCZixBQVFBLFFBVUEiLCJmaWxlIjoiQzpcXGdpdC10ZXN0XFxOZXh0anNcXGJpdHByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgY29uc3QgY3VycmVuY3lsaXN0PVtdO1xyXG4gICAgY3VycmVuY3lsaXN0PXByb3BzLnBvc3RzLnJhdGVzXHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY3VycmVuY2llcz1bXCJVU0RcIixcIklOUlwiLFwiR0JQXCIsXCJFVVJcIixcIkFVRFwiLFwiQ0FEXCIsXCJDTllcIixcIkpQWVwiLFwiQ0hGXCIsXCJCR05cIixcIkhSS1wiLFwiQ1pLXCIsXCJES0tcIixcIkhVRlwiLFwiSVNLXCJcclxuICAgICxcIk5PS1wiLFwiUExOXCIsXCJST05cIixcIlJVQlwiLFwiU0VLXCIsXCJDSEZcIixcIlRSWVwiLFwiR0JQXCIsXCJCUkxcIixcIkNBRFwiLFwiTVhOXCIsXCJVU0RcIixcIlpBUlwiXTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDI+TGF0ZXN0IEZvcmVpZ24gY3VycmVuY3kgZXhjaGFuZ2UgcmF0ZXM8L2gyPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucG9zdHMucmF0ZXMubWFwKChwb3N0KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57cG9zdH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gICAgICAgICAgICAuQ29udmVydGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkZvcm0gaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuRm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgyIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEJylcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
}

_s(Index, "Qj8Hrp/p1qxemNNaqMLqcKle0zA=");

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjdXJyZW5jeWxpc3QiLCJwb3N0cyIsInJhdGVzIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRhbW91bnQiLCJmcm9tIiwic2V0RnJvbSIsInRvIiwic2V0VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjdXJyZW5jaWVzIiwiY29udmVydEN1cnJlbmN5IiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImVycm9yIiwibWFwIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUNDLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxZQUFZLEdBQUMsRUFBbkI7QUFDQUEsY0FBWSw4R0FBQ0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEtBQWIsQ0FBWjs7QUFGa0Isa0JBR09DLHNEQUFRLENBQUMsQ0FBRCxDQUhmO0FBQUEsTUFHWEMsTUFIVztBQUFBLE1BR0pDLFNBSEk7O0FBQUEsbUJBSUdGLHNEQUFRLENBQUMsS0FBRCxDQUpYO0FBQUEsTUFJWEcsSUFKVztBQUFBLE1BSU5DLE9BSk07O0FBQUEsbUJBS0RKLHNEQUFRLENBQUMsS0FBRCxDQUxQO0FBQUEsTUFLWEssRUFMVztBQUFBLE1BS1JDLEtBTFE7O0FBQUEsbUJBTU9OLHNEQUFRLENBQUMsS0FBRCxDQU5mO0FBQUEsTUFNWE8sTUFOVztBQUFBLE1BTUpDLFNBTkk7O0FBT2xCLE1BQU1DLFVBQVUsR0FBQyxDQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWEsS0FBYixFQUFtQixLQUFuQixFQUF5QixLQUF6QixFQUErQixLQUEvQixFQUFxQyxLQUFyQyxFQUEyQyxLQUEzQyxFQUFpRCxLQUFqRCxFQUF1RCxLQUF2RCxFQUE2RCxLQUE3RCxFQUFtRSxLQUFuRSxFQUF5RSxLQUF6RSxFQUErRSxLQUEvRSxFQUFxRixLQUFyRixFQUNoQixLQURnQixFQUNWLEtBRFUsRUFDSixLQURJLEVBQ0UsS0FERixFQUNRLEtBRFIsRUFDYyxLQURkLEVBQ29CLEtBRHBCLEVBQzBCLEtBRDFCLEVBQ2dDLEtBRGhDLEVBQ3NDLEtBRHRDLEVBQzRDLEtBRDVDLEVBQ2tELEtBRGxELEVBQ3dELEtBRHhELENBQWpCOztBQUVBLE1BQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsR0FBSTtBQUFDO0FBQ3ZCQyxnREFBSyxDQUFDQyxHQUFOLG9EQUNDQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFRO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsVUFBTUcsS0FBSyxHQUFDaEIsTUFBTSxHQUFDYSxJQUFJLENBQUNBLElBQUwsQ0FBVWYsS0FBVixDQUFnQk0sRUFBaEIsQ0FBbkI7QUFDQUcsZUFBUyxDQUFDUyxLQUFELENBQVQ7QUFDSCxLQUxELFdBS1MsVUFBQUMsS0FBSyxFQUFFO0FBQ1pILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0gsS0FQRDtBQVNILEdBVkQ7O0FBV0EsU0FFSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVF0QixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsS0FBWixDQUFrQm9CLEdBQWxCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxXQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFMLENBREosQ0FEYztBQUFBLEdBQXRCLENBRlIsQ0FMSjtBQUFBO0FBQUE7QUFBQSwyNExBRko7QUE2RUg7O0dBakdTekIsSzs7S0FBQUEsSzs7QUE2R09BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY1NGZlOWUyNjQwNmRjNWY1NmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiBmdW5jdGlvbiBJbmRleChwcm9wcyl7XHJcbiAgICBjb25zdCBjdXJyZW5jeWxpc3Q9W107XHJcbiAgICBjdXJyZW5jeWxpc3Q9cHJvcHMucG9zdHMucmF0ZXNcclxuICAgIGNvbnN0IFthbW91bnQsc2V0YW1vdW50XT11c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtmcm9tLHNldEZyb21dPXVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gICAgY29uc3QgW3RvLHNldFRvXT11c2VTdGF0ZShcIklOUlwiKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsc2V0UmVzdWx0XT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBjdXJyZW5jaWVzPVtcIlVTRFwiLFwiSU5SXCIsXCJHQlBcIixcIkVVUlwiLFwiQVVEXCIsXCJDQURcIixcIkNOWVwiLFwiSlBZXCIsXCJDSEZcIixcIkJHTlwiLFwiSFJLXCIsXCJDWktcIixcIkRLS1wiLFwiSFVGXCIsXCJJU0tcIlxyXG4gICAgLFwiTk9LXCIsXCJQTE5cIixcIlJPTlwiLFwiUlVCXCIsXCJTRUtcIixcIkNIRlwiLFwiVFJZXCIsXCJHQlBcIixcIkJSTFwiLFwiQ0FEXCIsXCJNWE5cIixcIlVTRFwiLFwiWkFSXCJdO1xyXG4gICAgY29uc3QgY29udmVydEN1cnJlbmN5PSgpPT57LypodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPSR7ZnJvbX0mc3ltYm9scz0ke3RvfSZhbW91bnQ9JHthbW91bnR9Ki9cclxuICAgICAgICBBeGlvcy5nZXQoYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEYClcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU9YW1vdW50KmRhdGEuZGF0YS5yYXRlc1t0b11cclxuICAgICAgICAgICAgc2V0UmVzdWx0KHZhbHVlKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnZlcnRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DdXJyZW5jeSBjb252ZXJ0ZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoMj5MYXRlc3QgRm9yZWlnbiBjdXJyZW5jeSBleGNoYW5nZSByYXRlczwvaDI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5wb3N0cy5yYXRlcy5tYXAoKHBvc3QpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAgICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0QnKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=