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
  var currencies = [];
  var currencyValue = [];

  for (var i in currencylist) {
    currencies.push({
      key: i,
      value: currencylist[i]
    });
  }

  console.log(currencies);

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
    className: "jsx-905052484" + " " + "Converter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Currency converter")), __jsx("h2", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Latest Foreign currency exchange rates"), __jsx("div", {
    className: "jsx-905052484" + " " + "currency-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, currencies.map(function (post) {
    return __jsx("tr", {
      className: "jsx-905052484",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, __jsx("th", {
      className: "jsx-905052484",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    }, post.key), __jsx("th", {
      className: "jsx-905052484",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, post.value));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "905052484",
    __self: this
  }, "@media only screen and (min-width:900px){.Converter.jsx-905052484{margin-top:3%;margin-left:40%;}}@media only screen and (max-width:899px){.Converter.jsx-905052484{margin-left:30vw;}}.currency-table.jsx-905052484{height:300px;overflow:auto;width:40%;}table.jsx-905052484{border-collapse:collapse;width:100%;border-spacing:0;border:1px solid #ddd;}th.jsx-905052484,td.jsx-905052484{text-align:left;padding:16px;}tr.jsx-905052484:nth-child(even){background-color:#f2f2f2;}.Form.jsx-905052484 input.jsx-905052484,select.jsx-905052484{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-905052484 button.jsx-905052484{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-905052484 h3.jsx-905052484{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-905052484 h2.jsx-905052484 span.jsx-905052484{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUk4QixBQU9HLEFBSVIsQUFNYSxBQVFULEFBS1MsQUFJYixBQVFLLEFBUUssQUFVQyxZQXpCUCxDQXZCSCxDQVhNLEVBeUJOLENBbEJiLEFBbUNrQixJQWtCdEIsQ0FWdUIsR0FqQ1QsQUFhWixFQWxCWSxDQXVCUSxDQVRwQixDQXhCRSxLQXlDNEIsQ0F6QlgsQ0FKckIsSUFxQ2lCLEtBZjZCLE9BaEJwQixDQWdDWCxPQVJDLEtBU0csT0FSSCxFQXhCZCxNQWlDYSxJQWhCZixBQVFBLFFBVUEiLCJmaWxlIjoiQzpcXGdpdC10ZXN0XFxOZXh0anNcXGJpdHByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgdmFyIGN1cnJlbmN5bGlzdD1wcm9wcy5wb3N0cy5yYXRlcztcclxuICAgICBjb25zdCBjdXJyZW5jaWVzPVtdO1xyXG4gICAgIGNvbnN0IGN1cnJlbmN5VmFsdWU9W107XHJcbiAgICBmb3IodmFyIGkgaW4gY3VycmVuY3lsaXN0KVxyXG4gICAge1xyXG4gICAgICAgIGN1cnJlbmNpZXMucHVzaCh7a2V5OmksdmFsdWU6Y3VycmVuY3lsaXN0W2ldfSlcclxuICAgIH0gXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW5jaWVzKVxyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fSovXHJcbiAgICAgICAgQXhpb3MuZ2V0KGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRGApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDI+TGF0ZXN0IEZvcmVpZ24gY3VycmVuY3kgZXhjaGFuZ2UgcmF0ZXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLm1hcCgocG9zdCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Bvc3Qua2V5fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0LnZhbHVlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAgICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg5OXB4KXtcclxuICAgICAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjMwdnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1cnJlbmN5LXRhYmxle1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkZvcm0gaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuNSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuRm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuQ29udmVydGVyIGgyIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEJylcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHBvc3RzLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImN1cnJlbmN5bGlzdCIsInBvc3RzIiwicmF0ZXMiLCJjdXJyZW5jaWVzIiwiY3VycmVuY3lWYWx1ZSIsImkiLCJwdXNoIiwia2V5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRhbW91bnQiLCJmcm9tIiwic2V0RnJvbSIsInRvIiwic2V0VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNDLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBOztBQUNsQixNQUFJQyxZQUFZLEdBQUNELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxLQUE3QjtBQUNDLE1BQU1DLFVBQVUsR0FBQyxFQUFqQjtBQUNBLE1BQU1DLGFBQWEsR0FBQyxFQUFwQjs7QUFDRCxPQUFJLElBQUlDLENBQVIsSUFBYUwsWUFBYixFQUNBO0FBQ0lHLGNBQVUsQ0FBQ0csSUFBWCxDQUFnQjtBQUFDQyxTQUFHLEVBQUNGLENBQUw7QUFBT0csV0FBSyxFQUFDUixZQUFZLENBQUNLLENBQUQ7QUFBekIsS0FBaEI7QUFDSDs7QUFDREksU0FBTyxDQUFDQyxHQUFSLENBQVlQLFVBQVo7O0FBUmtCLGtCQVNPUSxzREFBUSxDQUFDLENBQUQsQ0FUZjtBQUFBLE1BU1hDLE1BVFc7QUFBQSxNQVNKQyxTQVRJOztBQUFBLG1CQVVHRixzREFBUSxDQUFDLEtBQUQsQ0FWWDtBQUFBLE1BVVhHLElBVlc7QUFBQSxNQVVOQyxPQVZNOztBQUFBLG1CQVdESixzREFBUSxDQUFDLEtBQUQsQ0FYUDtBQUFBLE1BV1hLLEVBWFc7QUFBQSxNQVdSQyxLQVhROztBQUFBLG1CQVlPTixzREFBUSxDQUFDLEtBQUQsQ0FaZjtBQUFBLE1BWVhPLE1BWlc7QUFBQSxNQVlKQyxTQVpJOztBQWFsQixNQUFNQyxlQUFlLEdBQUMsU0FBaEJBLGVBQWdCLEdBQUk7QUFBQztBQUN2QkMsZ0RBQUssQ0FBQ0MsR0FBTixvREFDQ0MsSUFERCxDQUNNLFVBQUNDLElBQUQsRUFBUTtBQUNWZixhQUFPLENBQUNDLEdBQVIsQ0FBWWMsSUFBWjtBQUNBLFVBQU1oQixLQUFLLEdBQUNJLE1BQU0sR0FBQ1ksSUFBSSxDQUFDQSxJQUFMLENBQVV0QixLQUFWLENBQWdCYyxFQUFoQixDQUFuQjtBQUNBRyxlQUFTLENBQUNYLEtBQUQsQ0FBVDtBQUNILEtBTEQsV0FLUyxVQUFBaUIsS0FBSyxFQUFFO0FBQ1poQixhQUFPLENBQUNDLEdBQVIsQ0FBWWUsS0FBWjtBQUNILEtBUEQ7QUFTSCxHQVZEOztBQVdBLFNBRUk7QUFBQSx1Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FKSixFQUtJO0FBQUEsdUNBQWUsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRdEIsVUFBVSxDQUFDdUIsR0FBWCxDQUFlLFVBQUNDLElBQUQ7QUFBQSxXQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNwQixHQUFWLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS29CLElBQUksQ0FBQ25CLEtBQVYsQ0FGSixDQURPO0FBQUEsR0FBZixDQUZSLENBREEsQ0FMSjtBQUFBO0FBQUE7QUFBQSxxL01BRko7QUEyRkg7O0dBbkhTVixLOztLQUFBQSxLOztBQStIT0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWU5MWFjZDM5Y2ZiOGRiYWNiOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiBmdW5jdGlvbiBJbmRleChwcm9wcyl7XHJcbiAgICB2YXIgY3VycmVuY3lsaXN0PXByb3BzLnBvc3RzLnJhdGVzO1xyXG4gICAgIGNvbnN0IGN1cnJlbmNpZXM9W107XHJcbiAgICAgY29uc3QgY3VycmVuY3lWYWx1ZT1bXTtcclxuICAgIGZvcih2YXIgaSBpbiBjdXJyZW5jeWxpc3QpXHJcbiAgICB7XHJcbiAgICAgICAgY3VycmVuY2llcy5wdXNoKHtrZXk6aSx2YWx1ZTpjdXJyZW5jeWxpc3RbaV19KVxyXG4gICAgfSBcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbmNpZXMpXHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY29udmVydEN1cnJlbmN5PSgpPT57LypodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPSR7ZnJvbX0mc3ltYm9scz0ke3RvfSZhbW91bnQ9JHthbW91bnR9Ki9cclxuICAgICAgICBBeGlvcy5nZXQoYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEYClcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdmFsdWU9YW1vdW50KmRhdGEuZGF0YS5yYXRlc1t0b11cclxuICAgICAgICAgICAgc2V0UmVzdWx0KHZhbHVlKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnZlcnRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DdXJyZW5jeSBjb252ZXJ0ZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoMj5MYXRlc3QgRm9yZWlnbiBjdXJyZW5jeSBleGNoYW5nZSByYXRlczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3ktdGFibGVcIj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXMubWFwKChwb3N0KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57cG9zdC5rZXl9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Bvc3QudmFsdWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgICAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODk5cHgpe1xyXG4gICAgICAgICAgICAuQ29udmVydGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VycmVuY3ktdGFibGV7XHJcbiAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0QnKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=