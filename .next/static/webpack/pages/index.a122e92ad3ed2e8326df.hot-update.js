webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
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



function Index() {
  _s();

  var _this = this;

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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.exchangeratesapi.io/latest").then(function (data) {
      console.log(data.data.rates[to]);
      var value = amount * data.data.rates[to];
      setResult(value);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return __jsx("div", {
    className: "jsx-2367301165" + " " + "Converter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Currency converter")), __jsx("h2", {
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Currency "), " Converter ", __jsx("span", {
    role: "img",
    "aria-label": "money",
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 46
    }
  }, "\uD83D\uDCB5"), " "), __jsx("div", {
    className: "jsx-2367301165" + " " + "Form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("input", {
    name: "amount",
    type: "text",
    value: amount,
    onChange: function onChange(e) {
      return setamount(e.target.value);
    },
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("select", {
    name: "from",
    onChange: function onChange(e) {
      return setFrom(e.target.value);
    },
    value: from,
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, currencies.map(function (cur) {
    return __jsx("option", {
      value: cur,
      className: "jsx-2367301165",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, cur);
  })), __jsx("select", {
    name: "to",
    onChange: function onChange(e) {
      return setTo(e.target.value);
    },
    value: to,
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, currencies.map(function (cur) {
    return __jsx("option", {
      value: cur,
      className: "jsx-2367301165",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, cur);
  })), __jsx("button", {
    onClick: convertCurrency,
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Convert")), result && __jsx("h3", {
    className: "jsx-2367301165",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, result, " ", to), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2367301165",
    __self: this
  }, ".Converter.jsx-2367301165{margin-top:15%;margin-left:35%;}.Form.jsx-2367301165 input.jsx-2367301165,select.jsx-2367301165{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-2367301165 button.jsx-2367301165{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-2367301165 h3.jsx-2367301165{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-2367301165 h2.jsx-2367301165 span.jsx-2367301165{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEUyxBQUkyQixBQUtGLEFBUUssQUFRSyxBQVVDLFlBekJQLEdBTEQsRUFhRyxJQWtCdEIsQ0FWdUIsTUFmRCxHQUp0QixJQVlnQyxNQVFmLEtBZjZCLFFBZ0IvQixPQVJDLEtBU0csT0FSSCxRQVNELElBaEJmLEFBUUEsUUFVQSIsImZpbGUiOiJDOlxcZ2l0LXRlc3RcXE5leHRqc1xcYml0cHJpY2VcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY3VycmVuY2llcz1bXCJVU0RcIixcIklOUlwiLFwiR0JQXCIsXCJFVVJcIixcIkFVRFwiLFwiQ0FEXCIsXCJDTllcIixcIkpQWVwiLFwiQ0hGXCIsXCJCR05cIixcIkhSS1wiLFwiQ1pLXCIsXCJES0tcIixcIkhVRlwiLFwiSVNLXCJcclxuICAgICxcIk5PS1wiLFwiUExOXCIsXCJST05cIixcIlJVQlwiLFwiU0VLXCIsXCJDSEZcIixcIlRSWVwiLFwiR0JQXCIsXCJCUkxcIixcIkNBRFwiLFwiTVhOXCIsXCJVU0RcIixcIlpBUlwiXTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YS5yYXRlc1t0b10pXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMj48c3Bhbj5DdXJyZW5jeSA8L3NwYW4+IENvbnZlcnRlciA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm1vbmV5XCI+JiN4MWY0YjU7PC9zcGFuPiA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFtb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZyb21cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PnNldEZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zyb219XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRUbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG99XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb252ZXJ0Q3VycmVuY3l9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHJlc3VsdCAmJiAgIDxoMz57cmVzdWx0fSB7dG99PC9oMz59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Gb3JtIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
}

_s(Index, "Qj8Hrp/p1qxemNNaqMLqcKle0zA=");

_c = Index;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldGFtb3VudCIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInJlc3VsdCIsInNldFJlc3VsdCIsImN1cnJlbmNpZXMiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJhdGVzIiwidmFsdWUiLCJlcnJvciIsImUiLCJ0YXJnZXQiLCJtYXAiLCJjdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxLQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsQ0FBRCxDQUROO0FBQUEsTUFDcEJDLE1BRG9CO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFTkYsc0RBQVEsQ0FBQyxLQUFELENBRkY7QUFBQSxNQUVwQkcsSUFGb0I7QUFBQSxNQUVmQyxPQUZlOztBQUFBLG1CQUdWSixzREFBUSxDQUFDLEtBQUQsQ0FIRTtBQUFBLE1BR3BCSyxFQUhvQjtBQUFBLE1BR2pCQyxLQUhpQjs7QUFBQSxtQkFJRk4sc0RBQVEsQ0FBQyxLQUFELENBSk47QUFBQSxNQUlwQk8sTUFKb0I7QUFBQSxNQUliQyxTQUphOztBQUszQixNQUFNQyxVQUFVLEdBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkIsRUFBeUIsS0FBekIsRUFBK0IsS0FBL0IsRUFBcUMsS0FBckMsRUFBMkMsS0FBM0MsRUFBaUQsS0FBakQsRUFBdUQsS0FBdkQsRUFBNkQsS0FBN0QsRUFBbUUsS0FBbkUsRUFBeUUsS0FBekUsRUFBK0UsS0FBL0UsRUFBcUYsS0FBckYsRUFDaEIsS0FEZ0IsRUFDVixLQURVLEVBQ0osS0FESSxFQUNFLEtBREYsRUFDUSxLQURSLEVBQ2MsS0FE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QUFBLGVBMUJKLENBTEEsRUFrQ0VILE1BQU0sSUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTCxPQUFjRixFQUFkLENBbENkO0FBQUE7QUFBQTtBQUFBLCs5S0FGSjtBQStFSDs7R0FqR3VCTixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExMjJlOTJhZDNlZDJlODMyNmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpe1xyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGN1cnJlbmNpZXM9W1wiVVNEXCIsXCJJTlJcIixcIkdCUFwiLFwiRVVSXCIsXCJBVURcIixcIkNBRFwiLFwiQ05ZXCIsXCJKUFlcIixcIkNIRlwiLFwiQkdOXCIsXCJIUktcIixcIkNaS1wiLFwiREtLXCIsXCJIVUZcIixcIklTS1wiXHJcbiAgICAsXCJOT0tcIixcIlBMTlwiLFwiUk9OXCIsXCJSVUJcIixcIlNFS1wiLFwiQ0hGXCIsXCJUUllcIixcIkdCUFwiLFwiQlJMXCIsXCJDQURcIixcIk1YTlwiLFwiVVNEXCIsXCJaQVJcIl07XHJcbiAgICBjb25zdCBjb252ZXJ0Q3VycmVuY3k9KCk9PnsvKmh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9JHtmcm9tfSZzeW1ib2xzPSR7dG99JmFtb3VudD0ke2Ftb3VudH0qL1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3RgKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEucmF0ZXNbdG9dKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZT1hbW91bnQqZGF0YS5kYXRhLnJhdGVzW3RvXVxyXG4gICAgICAgICAgICBzZXRSZXN1bHQodmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udmVydGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkN1cnJlbmN5IGNvbnZlcnRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDI+PHNwYW4+Q3VycmVuY3kgPC9zcGFuPiBDb252ZXJ0ZXIgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJtb25leVwiPiYjeDFmNGI1Ozwvc3Bhbj4gPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRhbW91bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRGcm9tKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmcm9tfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoY3VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjdXJ9PntjdXJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0b1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+c2V0VG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RvfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoY3VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjdXJ9PntjdXJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29udmVydEN1cnJlbmN5fT5Db252ZXJ0PC9idXR0b24+XHJcbiAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyByZXN1bHQgJiYgICA8aDM+e3Jlc3VsdH0ge3RvfTwvaDM+fVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNSU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9