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

  var currencylist = JSON.parse(props.posts.rates);

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
  }, "Latest Foreign currency exchange rates"), __jsx("ul", {
    className: "jsx-2035709732",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }
  }, currencylist.map(function (post) {
    return __jsx("li", {
      className: "jsx-2035709732",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, post);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2035709732",
    __self: this
  }, "@media only screen and (min-width:900px){.Converter.jsx-2035709732{margin-top:3%;margin-left:40%;}}table.jsx-2035709732{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;}th.jsx-2035709732,td.jsx-2035709732{text-align:left;padding:16px;}tr.jsx-2035709732:nth-child(even){background-color:#f2f2f2;}.Form.jsx-2035709732 input.jsx-2035709732,select.jsx-2035709732{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-2035709732 button.jsx-2035709732{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-2035709732 h3.jsx-2035709732{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-2035709732 h2.jsx-2035709732 span.jsx-2035709732{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUk4QixBQU1RLEFBT1QsQUFLUyxBQUliLEFBUUssQUFRSyxBQVVDLFlBekJQLEVBdEJHLEVBYU4sQ0FpQkssSUFrQnRCLENBVnVCLEdBaENGLEFBWW5CLEdBS29CLENBVHBCLENBWkUsS0E2QjRCLE1BUWYsQ0FoQ0YsSUFpQitCLE9BaEJwQixDQWdDWCxPQVJDLEtBU0csT0FSSCxFQXhCZCxNQWlDYSxJQWhCZixBQVFBLFFBVUEiLCJmaWxlIjoiQzpcXGdpdC10ZXN0XFxOZXh0anNcXGJpdHByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgY29uc3QgY3VycmVuY3lsaXN0PUpTT04ucGFyc2UocHJvcHMucG9zdHMucmF0ZXMpO1xyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGN1cnJlbmNpZXM9W1wiVVNEXCIsXCJJTlJcIixcIkdCUFwiLFwiRVVSXCIsXCJBVURcIixcIkNBRFwiLFwiQ05ZXCIsXCJKUFlcIixcIkNIRlwiLFwiQkdOXCIsXCJIUktcIixcIkNaS1wiLFwiREtLXCIsXCJIVUZcIixcIklTS1wiXHJcbiAgICAsXCJOT0tcIixcIlBMTlwiLFwiUk9OXCIsXCJSVUJcIixcIlNFS1wiLFwiQ0hGXCIsXCJUUllcIixcIkdCUFwiLFwiQlJMXCIsXCJDQURcIixcIk1YTlwiLFwiVVNEXCIsXCJaQVJcIl07XHJcbiAgICBjb25zdCBjb252ZXJ0Q3VycmVuY3k9KCk9PnsvKmh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9JHtmcm9tfSZzeW1ib2xzPSR7dG99JmFtb3VudD0ke2Ftb3VudH0qL1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0RgKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZT1hbW91bnQqZGF0YS5kYXRhLnJhdGVzW3RvXVxyXG4gICAgICAgICAgICBzZXRSZXN1bHQodmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udmVydGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkN1cnJlbmN5IGNvbnZlcnRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgyPkxhdGVzdCBGb3JlaWduIGN1cnJlbmN5IGV4Y2hhbmdlIHJhdGVzPC9oMj5cclxuICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lsaXN0Lm1hcCgocG9zdCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntwb3N0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgICAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRCcpXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0cyxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImN1cnJlbmN5bGlzdCIsIkpTT04iLCJwYXJzZSIsInBvc3RzIiwicmF0ZXMiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldGFtb3VudCIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInJlc3VsdCIsInNldFJlc3VsdCIsImN1cnJlbmNpZXMiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZXJyb3IiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNDLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxZQUFZLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsS0FBdkIsQ0FBbkI7O0FBRGtCLGtCQUVPQyxzREFBUSxDQUFDLENBQUQsQ0FGZjtBQUFBLE1BRVhDLE1BRlc7QUFBQSxNQUVKQyxTQUZJOztBQUFBLG1CQUdHRixzREFBUSxDQUFDLEtBQUQsQ0FIWDtBQUFBLE1BR1hHLElBSFc7QUFBQSxNQUdOQyxPQUhNOztBQUFBLG1CQUlESixzREFBUSxDQUFDLEtBQUQsQ0FKUDtBQUFBLE1BSVhLLEVBSlc7QUFBQSxNQUlSQyxLQUpROztBQUFBLG1CQUtPTixzREFBUSxDQUFDLEtBQUQsQ0FMZjtBQUFBLE1BS1hPLE1BTFc7QUFBQSxNQUtKQyxTQUxJOztBQU1sQixNQUFNQyxVQUFVLEdBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkIsRUFBeUIsS0FBekIsRUFBK0IsS0FBL0IsRUFBcUMsS0FBckMsRUFBMkMsS0FBM0MsRUFBaUQsS0FBakQsRUFBdUQsS0FBdkQsRUFBNkQsS0FBN0QsRUFBbUUsS0FBbkUsRUFBeUUsS0FBekUsRUFBK0UsS0FBL0UsRUFBcUYsS0FBckYsRUFDaEIsS0FEZ0IsRUFDVixLQURVLEVBQ0osS0FESSxFQUNFLEtBREYsRUFDUSxLQURSLEVBQ2MsS0FEZCxFQUNvQixLQURwQixFQUMwQixLQUQxQixFQUNnQyxLQURoQyxFQUNzQyxLQUR0QyxFQUM0QyxLQUQ1QyxFQUNrRCxLQURsRCxFQUN3RCxLQUR4RCxDQUFqQjs7QUFFQSxNQUFNQyxlQUFlLEdBQUMsU0FBaEJBLGVBQWdCLEdBQUk7QUFBQztBQUN2QkMsZ0RBQUssQ0FBQ0MsR0FBTixvREFDQ0MsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBUTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFVBQU1HLEtBQUssR0FBQ2hCLE1BQU0sR0FBQ2EsSUFBSSxDQUFDQSxJQUFMLENBQVVmLEtBQVYsQ0FBZ0JNLEVBQWhCLENBQW5CO0FBQ0FHLGVBQVMsQ0FBQ1MsS0FBRCxDQUFUO0FBQ0gsS0FMRCxXQUtTLFVBQUFDLEtBQUssRUFBRTtBQUNaSCxhQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNILEtBUEQ7QUFTSCxHQVZEOztBQVdBLFNBRUk7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FKSixFQUtHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVTdkIsWUFBWSxDQUFDd0IsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsV0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQURhO0FBQUEsR0FBakIsQ0FGVCxDQUxIO0FBQUE7QUFBQTtBQUFBLHV5TEFGSjtBQTRFSDs7R0EvRlMzQixLOztLQUFBQSxLOztBQTJHT0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzkzYjZhZDdmMjIzMGVlYzc5ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiBmdW5jdGlvbiBJbmRleChwcm9wcyl7XHJcbiAgICBjb25zdCBjdXJyZW5jeWxpc3Q9SlNPTi5wYXJzZShwcm9wcy5wb3N0cy5yYXRlcyk7XHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY3VycmVuY2llcz1bXCJVU0RcIixcIklOUlwiLFwiR0JQXCIsXCJFVVJcIixcIkFVRFwiLFwiQ0FEXCIsXCJDTllcIixcIkpQWVwiLFwiQ0hGXCIsXCJCR05cIixcIkhSS1wiLFwiQ1pLXCIsXCJES0tcIixcIkhVRlwiLFwiSVNLXCJcclxuICAgICxcIk5PS1wiLFwiUExOXCIsXCJST05cIixcIlJVQlwiLFwiU0VLXCIsXCJDSEZcIixcIlRSWVwiLFwiR0JQXCIsXCJCUkxcIixcIkNBRFwiLFwiTVhOXCIsXCJVU0RcIixcIlpBUlwiXTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDI+TGF0ZXN0IEZvcmVpZ24gY3VycmVuY3kgZXhjaGFuZ2UgcmF0ZXM8L2gyPlxyXG4gICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeWxpc3QubWFwKChwb3N0KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3Bvc3R9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gICAgICAgICAgICAuQ29udmVydGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkZvcm0gaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuRm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgyIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEJylcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9