webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\git-test\\Nextjs\\bitprice\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Index(props) {
  _s();

  var _this = this;

  var currencylist = props.posts.rates;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      amount = _useState[0],
      setamount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("USD"),
      from = _useState2[0],
      setFrom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("INR"),
      to = _useState3[0],
      setTo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      result = _useState4[0],
      setResult = _useState4[1];

  var currencies = ["USD", "INR", "GBP", "EUR", "AUD", "CAD", "CNY", "JPY", "CHF", "BGN", "HRK", "CZK", "DKK", "HUF", "ISK", "NOK", "PLN", "RON", "RUB", "SEK", "CHF", "TRY", "GBP", "BRL", "CAD", "MXN", "USD", "ZAR"];

  var convertCurrency = function convertCurrency() {
    /*https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}&amount=${amount}*/
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.exchangeratesapi.io/latest?base=USD").then(function (data) {
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
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Currency converter")), __jsx("h2", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Latest Foreign currency exchange rates"), __jsx("table", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, currencylist.map(function (post) {
    return __jsx("tr", {
      className: "jsx-2035709732",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, __jsx("th", {
      className: "jsx-2035709732",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 33
      }
    }, post));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2035709732",
    __self: this
  }, "@media only screen and (min-width:900px){.Converter.jsx-2035709732{margin-top:3%;margin-left:40%;}}table.jsx-2035709732{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;}th.jsx-2035709732,td.jsx-2035709732{text-align:left;padding:16px;}tr.jsx-2035709732:nth-child(even){background-color:#f2f2f2;}.Form.jsx-2035709732 input.jsx-2035709732,select.jsx-2035709732{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-2035709732 button.jsx-2035709732{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-2035709732 h3.jsx-2035709732{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-2035709732 h2.jsx-2035709732 span.jsx-2035709732{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDUyxBQUk4QixBQU1RLEFBT1QsQUFLUyxBQUliLEFBUUssQUFRSyxBQVVDLFlBekJQLEVBdEJHLEVBYU4sQ0FpQkssSUFrQnRCLENBVnVCLEdBaENGLEFBWW5CLEdBS29CLENBVHBCLENBWkUsS0E2QjRCLE1BUWYsQ0FoQ0YsSUFpQitCLE9BaEJwQixDQWdDWCxPQVJDLEtBU0csT0FSSCxFQXhCZCxNQWlDYSxJQWhCZixBQVFBLFFBVUEiLCJmaWxlIjoiQzpcXGdpdC10ZXN0XFxOZXh0anNcXGJpdHByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgdmFyIGN1cnJlbmN5bGlzdD1wcm9wcy5wb3N0cy5yYXRlc1xyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGN1cnJlbmNpZXM9W1wiVVNEXCIsXCJJTlJcIixcIkdCUFwiLFwiRVVSXCIsXCJBVURcIixcIkNBRFwiLFwiQ05ZXCIsXCJKUFlcIixcIkNIRlwiLFwiQkdOXCIsXCJIUktcIixcIkNaS1wiLFwiREtLXCIsXCJIVUZcIixcIklTS1wiXHJcbiAgICAsXCJOT0tcIixcIlBMTlwiLFwiUk9OXCIsXCJSVUJcIixcIlNFS1wiLFwiQ0hGXCIsXCJUUllcIixcIkdCUFwiLFwiQlJMXCIsXCJDQURcIixcIk1YTlwiLFwiVVNEXCIsXCJaQVJcIl07XHJcbiAgICBjb25zdCBjb252ZXJ0Q3VycmVuY3k9KCk9PnsvKmh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9JHtmcm9tfSZzeW1ib2xzPSR7dG99JmFtb3VudD0ke2Ftb3VudH0qL1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0RgKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZT1hbW91bnQqZGF0YS5kYXRhLnJhdGVzW3RvXVxyXG4gICAgICAgICAgICBzZXRSZXN1bHQodmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udmVydGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkN1cnJlbmN5IGNvbnZlcnRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgyPkxhdGVzdCBGb3JlaWduIGN1cnJlbmN5IGV4Y2hhbmdlIHJhdGVzPC9oMj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5bGlzdC5tYXAoKHBvc3QpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAgICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0QnKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImN1cnJlbmN5bGlzdCIsInBvc3RzIiwicmF0ZXMiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldGFtb3VudCIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInJlc3VsdCIsInNldFJlc3VsdCIsImN1cnJlbmNpZXMiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZXJyb3IiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNDLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBOztBQUNsQixNQUFJQyxZQUFZLEdBQUNELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxLQUE3Qjs7QUFEa0Isa0JBRU9DLHNEQUFRLENBQUMsQ0FBRCxDQUZmO0FBQUEsTUFFWEMsTUFGVztBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR0dGLHNEQUFRLENBQUMsS0FBRCxDQUhYO0FBQUEsTUFHWEcsSUFIVztBQUFBLE1BR05DLE9BSE07O0FBQUEsbUJBSURKLHNEQUFRLENBQUMsS0FBRCxDQUpQO0FBQUEsTUFJWEssRUFKVztBQUFBLE1BSVJDLEtBSlE7O0FBQUEsbUJBS09OLHNEQUFRLENBQUMsS0FBRCxDQUxmO0FBQUEsTUFLWE8sTUFMVztBQUFBLE1BS0pDLFNBTEk7O0FBTWxCLE1BQU1DLFVBQVUsR0FBQyxDQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWEsS0FBYixFQUFtQixLQUFuQixFQUF5QixLQUF6QixFQUErQixLQUEvQixFQUFxQyxLQUFyQyxFQUEyQyxLQUEzQyxFQUFpRCxLQUFqRCxFQUF1RCxLQUF2RCxFQUE2RCxLQUE3RCxFQUFtRSxLQUFuRSxFQUF5RSxLQUF6RSxFQUErRSxLQUEvRSxFQUFxRixLQUFyRixFQUNoQixLQURnQixFQUNWLEtBRFUsRUFDSixLQURJLEVBQ0UsS0FERixFQUNRLEtBRFIsRUFDYyxLQURkLEVBQ29CLEtBRHBCLEVBQzBCLEtBRDFCLEVBQ2dDLEtBRGhDLEVBQ3NDLEtBRHRDLEVBQzRDLEtBRDVDLEVBQ2tELEtBRGxELEVBQ3dELEtBRHhELENBQWpCOztBQUVBLE1BQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsR0FBSTtBQUFDO0FBQ3ZCQyxnREFBSyxDQUFDQyxHQUFOLG9EQUNDQyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFRO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsVUFBTUcsS0FBSyxHQUFDaEIsTUFBTSxHQUFDYSxJQUFJLENBQUNBLElBQUwsQ0FBVWYsS0FBVixDQUFnQk0sRUFBaEIsQ0FBbkI7QUFDQUcsZUFBUyxDQUFDUyxLQUFELENBQVQ7QUFDSCxLQUxELFdBS1MsVUFBQUMsS0FBSyxFQUFFO0FBQ1pILGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0gsS0FQRDtBQVNILEdBVkQ7O0FBV0EsU0FFSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFyQixZQUFZLENBQUNzQixHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxXQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFMLENBREosQ0FEUztBQUFBLEdBQWpCLENBRlIsQ0FMSjtBQUFBO0FBQUE7QUFBQSxtMkxBRko7QUE2RUg7O0dBaEdTekIsSzs7S0FBQUEsSzs7QUE0R09BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxZDhlMjc1YzI0ZjcyMzE4ODhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgdmFyIGN1cnJlbmN5bGlzdD1wcm9wcy5wb3N0cy5yYXRlc1xyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGN1cnJlbmNpZXM9W1wiVVNEXCIsXCJJTlJcIixcIkdCUFwiLFwiRVVSXCIsXCJBVURcIixcIkNBRFwiLFwiQ05ZXCIsXCJKUFlcIixcIkNIRlwiLFwiQkdOXCIsXCJIUktcIixcIkNaS1wiLFwiREtLXCIsXCJIVUZcIixcIklTS1wiXHJcbiAgICAsXCJOT0tcIixcIlBMTlwiLFwiUk9OXCIsXCJSVUJcIixcIlNFS1wiLFwiQ0hGXCIsXCJUUllcIixcIkdCUFwiLFwiQlJMXCIsXCJDQURcIixcIk1YTlwiLFwiVVNEXCIsXCJaQVJcIl07XHJcbiAgICBjb25zdCBjb252ZXJ0Q3VycmVuY3k9KCk9PnsvKmh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9JHtmcm9tfSZzeW1ib2xzPSR7dG99JmFtb3VudD0ke2Ftb3VudH0qL1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0RgKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZT1hbW91bnQqZGF0YS5kYXRhLnJhdGVzW3RvXVxyXG4gICAgICAgICAgICBzZXRSZXN1bHQodmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udmVydGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkN1cnJlbmN5IGNvbnZlcnRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgyPkxhdGVzdCBGb3JlaWduIGN1cnJlbmN5IGV4Y2hhbmdlIHJhdGVzPC9oMj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5bGlzdC5tYXAoKHBvc3QpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAgICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0QnKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=