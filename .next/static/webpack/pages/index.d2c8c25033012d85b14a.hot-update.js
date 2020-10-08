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
      console.log(data);
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
  }, ".Converter.jsx-2367301165{margin-top:15%;margin-left:35%;}.Form.jsx-2367301165 input.jsx-2367301165,select.jsx-2367301165{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-2367301165 button.jsx-2367301165{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-2367301165 h3.jsx-2367301165{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-2367301165 h2.jsx-2367301165 span.jsx-2367301165{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEUyxBQUkyQixBQUtGLEFBUUssQUFRSyxBQVVDLFlBekJQLEdBTEQsRUFhRyxJQWtCdEIsQ0FWdUIsTUFmRCxHQUp0QixJQVlnQyxNQVFmLEtBZjZCLFFBZ0IvQixPQVJDLEtBU0csT0FSSCxRQVNELElBaEJmLEFBUUEsUUFVQSIsImZpbGUiOiJDOlxcZ2l0LXRlc3RcXE5leHRqc1xcYml0cHJpY2VcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY3VycmVuY2llcz1bXCJVU0RcIixcIklOUlwiLFwiR0JQXCIsXCJFVVJcIixcIkFVRFwiLFwiQ0FEXCIsXCJDTllcIixcIkpQWVwiLFwiQ0hGXCIsXCJCR05cIixcIkhSS1wiLFwiQ1pLXCIsXCJES0tcIixcIkhVRlwiLFwiSVNLXCJcclxuICAgICxcIk5PS1wiLFwiUExOXCIsXCJST05cIixcIlJVQlwiLFwiU0VLXCIsXCJDSEZcIixcIlRSWVwiLFwiR0JQXCIsXCJCUkxcIixcIkNBRFwiLFwiTVhOXCIsXCJVU0RcIixcIlpBUlwiXTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMj48c3Bhbj5DdXJyZW5jeSA8L3NwYW4+IENvbnZlcnRlciA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm1vbmV5XCI+JiN4MWY0YjU7PC9zcGFuPiA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFtb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZyb21cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PnNldEZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zyb219XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRUbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG99XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb252ZXJ0Q3VycmVuY3l9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHJlc3VsdCAmJiAgIDxoMz57cmVzdWx0fSB7dG99PC9oMz59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Gb3JtIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldGFtb3VudCIsImZyb20iLCJzZXRGcm9tIiwidG8iLCJzZXRUbyIsInJlc3VsdCIsInNldFJlc3VsdCIsImN1cnJlbmNpZXMiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicmF0ZXMiLCJlcnJvciIsImUiLCJ0YXJnZXQiLCJtYXAiLCJjdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxLQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsQ0FBRCxDQUROO0FBQUEsTUFDcEJDLE1BRG9CO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFTkYsc0RBQVEsQ0FBQyxLQUFELENBRkY7QUFBQSxNQUVwQkcsSUFGb0I7QUFBQSxNQUVmQyxPQUZlOztBQUFBLG1CQUdWSixzREFBUSxDQUFDLEtBQUQsQ0FIRTtBQUFBLE1BR3BCSyxFQUhvQjtBQUFBLE1BR2pCQyxLQUhpQjs7QUFBQSxtQkFJRk4sc0RBQVEsQ0FBQyxLQUFELENBSk47QUFBQSxNQUlwQk8sTUFKb0I7QUFBQSxNQUliQyxTQUphOztBQUszQixNQUFNQyxVQUFVLEdBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkIsRUFBeUIsS0FBekIsRUFBK0IsS0FBL0IsRUFBcUMsS0FBckMsRUFBMkMsS0FBM0MsRUFBaUQsS0FBakQsRUFBdUQsS0FBdkQsRUFBNkQsS0FBN0QsRUFBbUUsS0FBbkUsRUFBeUUsS0FBekUsRUFBK0UsS0FBL0UsRUFBcUYsS0FBckYsRUFDaEIsS0FEZ0IsRUFDVixLQURVLEVBQ0osS0FESSxFQUNFLEtBREYsRUFDUSxLQURSLEVBQ2MsS0FE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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxNQUFMLE9BQWNGLEVBQWQsQ0FsQ2Q7QUFBQTtBQUFBO0FBQUEsMjhLQUZKO0FBK0VIOztHQWpHdUJOLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJjOGMyNTAzMzAxMmQ4NWIxNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY3VycmVuY2llcz1bXCJVU0RcIixcIklOUlwiLFwiR0JQXCIsXCJFVVJcIixcIkFVRFwiLFwiQ0FEXCIsXCJDTllcIixcIkpQWVwiLFwiQ0hGXCIsXCJCR05cIixcIkhSS1wiLFwiQ1pLXCIsXCJES0tcIixcIkhVRlwiLFwiSVNLXCJcclxuICAgICxcIk5PS1wiLFwiUExOXCIsXCJST05cIixcIlJVQlwiLFwiU0VLXCIsXCJDSEZcIixcIlRSWVwiLFwiR0JQXCIsXCJCUkxcIixcIkNBRFwiLFwiTVhOXCIsXCJVU0RcIixcIlpBUlwiXTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMj48c3Bhbj5DdXJyZW5jeSA8L3NwYW4+IENvbnZlcnRlciA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm1vbmV5XCI+JiN4MWY0YjU7PC9zcGFuPiA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldGFtb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZyb21cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PnNldEZyb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zyb219XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRUbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG99XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1cn0+e2N1cn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb252ZXJ0Q3VycmVuY3l9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHJlc3VsdCAmJiAgIDxoMz57cmVzdWx0fSB7dG99PC9oMz59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Gb3JtIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=