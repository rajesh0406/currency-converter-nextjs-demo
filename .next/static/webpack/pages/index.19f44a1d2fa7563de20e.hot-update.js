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
    /**/
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.exchangeratesapi.io/latest?base=".concat(from, "&symbols=").concat(to, "&amount=").concat(amount)).then(function (data) {
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
  }))), __jsx("h2", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Currency "), " Converter ", __jsx("span", {
    role: "img",
    "aria-label": "money",
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 50
    }
  }, "\uD83D\uDCB5"), " "), __jsx("div", {
    className: "jsx-905052484" + " " + "Form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("input", {
    name: "amount",
    type: "text",
    value: amount,
    onChange: function onChange(e) {
      return setamount(e.target.value);
    },
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("select", {
    name: "from",
    onChange: function onChange(e) {
      return setFrom(e.target.value);
    },
    value: from,
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, currencies.map(function (cur) {
    return __jsx("option", {
      value: cur.key,
      className: "jsx-905052484",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, cur.key);
  })), __jsx("select", {
    name: "to",
    onChange: function onChange(e) {
      return setTo(e.target.value);
    },
    value: to,
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, currencies.map(function (cur) {
    return __jsx("option", {
      value: cur.key,
      className: "jsx-905052484",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, cur.key);
  })), __jsx("button", {
    onClick: convertCurrency,
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Convert")), result && __jsx("h4", {
    className: "jsx-905052484",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, result, " ", to), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "905052484",
    __self: this
  }, "@media only screen and (min-width:900px){.Converter.jsx-905052484{margin-top:3%;margin-left:40%;}}@media only screen and (max-width:899px){.Converter.jsx-905052484{margin-left:30vw;}}.currency-table.jsx-905052484{height:300px;overflow:auto;width:40%;}table.jsx-905052484{border-collapse:collapse;width:100%;border-spacing:0;border:1px solid #ddd;}th.jsx-905052484,td.jsx-905052484{text-align:left;padding:16px;}tr.jsx-905052484:nth-child(even){background-color:#f2f2f2;}.Form.jsx-905052484 input.jsx-905052484,select.jsx-905052484{padding:5px;margin:5px 10px;border-radius:5px;border:1px solid rgba(119,119,119,0.5);}.Form.jsx-905052484 button.jsx-905052484{padding:5px 10px;border-radius:5px;background:rgb(11,170,59);color:white;border:none;}.Converter.jsx-905052484 h3.jsx-905052484{background-color:#ccc;border-radius:10px;padding:15px;width:300px;font-size:30px;color:black;}.Converter.jsx-905052484 h2.jsx-905052484 span.jsx-905052484{color:rgb(11,170,59);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnaXQtdGVzdFxcTmV4dGpzXFxiaXRwcmljZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFUyxBQUk4QixBQU9HLEFBSVIsQUFNYSxBQVFULEFBS1MsQUFJYixBQVFLLEFBUUssQUFVQyxZQXpCUCxDQXZCSCxDQVhNLEVBeUJOLENBbEJiLEFBbUNrQixJQWtCdEIsQ0FWdUIsR0FqQ1QsQUFhWixFQWxCWSxDQXVCUSxDQVRwQixDQXhCRSxLQXlDNEIsQ0F6QlgsQ0FKckIsSUFxQ2lCLEtBZjZCLE9BaEJwQixDQWdDWCxPQVJDLEtBU0csT0FSSCxFQXhCZCxNQWlDYSxJQWhCZixBQVFBLFFBVUEiLCJmaWxlIjoiQzpcXGdpdC10ZXN0XFxOZXh0anNcXGJpdHByaWNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xyXG4gICAgdmFyIGN1cnJlbmN5bGlzdD1wcm9wcy5wb3N0cy5yYXRlcztcclxuICAgICBjb25zdCBjdXJyZW5jaWVzPVtdO1xyXG4gICAgIGNvbnN0IGN1cnJlbmN5VmFsdWU9W107XHJcbiAgICBmb3IodmFyIGkgaW4gY3VycmVuY3lsaXN0KVxyXG4gICAge1xyXG4gICAgICAgIGN1cnJlbmNpZXMucHVzaCh7a2V5OmksdmFsdWU6Y3VycmVuY3lsaXN0W2ldfSlcclxuICAgIH0gXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW5jaWVzKVxyXG4gICAgY29uc3QgW2Ftb3VudCxzZXRhbW91bnRdPXVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2Zyb20sc2V0RnJvbV09dXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgICBjb25zdCBbdG8sc2V0VG9dPXVzZVN0YXRlKFwiSU5SXCIpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCxzZXRSZXN1bHRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNvbnZlcnRDdXJyZW5jeT0oKT0+ey8qKi9cclxuICAgICAgICBBeGlvcy5nZXQoYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9JHtmcm9tfSZzeW1ib2xzPSR7dG99JmFtb3VudD0ke2Ftb3VudH1gKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZT1hbW91bnQqZGF0YS5kYXRhLnJhdGVzW3RvXVxyXG4gICAgICAgICAgICBzZXRSZXN1bHQodmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udmVydGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkN1cnJlbmN5IGNvbnZlcnRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGgyPkxhdGVzdCBGb3JlaWduIGN1cnJlbmN5IGV4Y2hhbmdlIHJhdGVzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeS10YWJsZVwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcy5tYXAoKHBvc3QpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0LmtleX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57cG9zdC52YWx1ZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyPjxzcGFuPkN1cnJlbmN5IDwvc3Bhbj4gQ29udmVydGVyIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibW9uZXlcIj4mI3gxZjRiNTs8L3NwYW4+IDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0YW1vdW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+c2V0RnJvbShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZnJvbX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbmNpZXMubWFwKGN1ciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y3VyLmtleX0+e2N1ci5rZXl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0b1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+c2V0VG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RvfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoY3VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjdXIua2V5fT57Y3VyLmtleX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb252ZXJ0Q3VycmVuY3l9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHJlc3VsdCAmJiAgIDxoND57cmVzdWx0fSB7dG99PC9oND59XHJcbiAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgICAgICAgICAgLkNvbnZlcnRlcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODk5cHgpe1xyXG4gICAgICAgICAgICAuQ29udmVydGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzB2dztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VycmVuY3ktdGFibGV7XHJcbiAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAuRm9ybSBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC41KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5Db252ZXJ0ZXIgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTEsIDE3MCwgNTkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT1VU0QnKVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcG9zdHMsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\\\git-test\\\\Nextjs\\\\bitprice\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImN1cnJlbmN5bGlzdCIsInBvc3RzIiwicmF0ZXMiLCJjdXJyZW5jaWVzIiwiY3VycmVuY3lWYWx1ZSIsImkiLCJwdXNoIiwia2V5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRhbW91bnQiLCJmcm9tIiwic2V0RnJvbSIsInRvIiwic2V0VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjb252ZXJ0Q3VycmVuY3kiLCJBeGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJtYXAiLCJwb3N0IiwiZSIsInRhcmdldCIsImN1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQyxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbEIsTUFBSUMsWUFBWSxHQUFDRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsS0FBN0I7QUFDQyxNQUFNQyxVQUFVLEdBQUMsRUFBakI7QUFDQSxNQUFNQyxhQUFhLEdBQUMsRUFBcEI7O0FBQ0QsT0FBSSxJQUFJQyxDQUFSLElBQWFMLFlBQWIsRUFDQTtBQUNJRyxjQUFVLENBQUNHLElBQVgsQ0FBZ0I7QUFBQ0MsU0FBRyxFQUFDRixDQUFMO0FBQU9HLFdBQUssRUFBQ1IsWUFBWSxDQUFDSyxDQUFEO0FBQXpCLEtBQWhCO0FBQ0g7O0FBQ0RJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaOztBQVJrQixrQkFTT1Esc0RBQVEsQ0FBQyxDQUFELENBVGY7QUFBQSxNQVNYQyxNQVRXO0FBQUEsTUFTSkMsU0FUSTs7QUFBQSxtQkFVR0Ysc0RBQVEsQ0FBQyxLQUFELENBVlg7QUFBQSxNQVVYRyxJQVZXO0FBQUEsTUFVTkMsT0FWTTs7QUFBQSxtQkFXREosc0RBQVEsQ0FBQyxLQUFELENBWFA7QUFB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QUE7QUFBQTtBQUFBLE9BQXlCdUIsR0FBRyxDQUFDdkIsR0FBN0IsQ0FEZTtBQUFBLEdBQWxCLENBTEwsQ0FSSixFQWlCSTtBQUNJLFFBQUksRUFBQyxJQURUO0FBRUksWUFBUSxFQUFFLGtCQUFDcUIsQ0FBRDtBQUFBLGFBQU1YLEtBQUssQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNyQixLQUFWLENBQVg7QUFBQSxLQUZkO0FBR0ksU0FBSyxFQUFFUSxFQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLYixVQUFVLENBQUN1QixHQUFYLENBQWUsVUFBQUksR0FBRztBQUFBLFdBQ2Y7QUFBUSxXQUFLLEVBQUVBLEdBQUcsQ0FBQ3ZCLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QnVCLEdBQUcsQ0FBQ3ZCLEdBQTdCLENBRGU7QUFBQSxHQUFsQixDQUxMLENBakJKLEVBMEJJO0FBQVEsV0FBTyxFQUFFYSxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkosQ0FsQkEsRUErQ0VGLE1BQU0sSUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTCxPQUFjRixFQUFkLENBL0NkO0FBQUE7QUFBQTtBQUFBLDY3UEFGSjtBQTBISDs7R0FsSlNsQixLOztLQUFBQSxLOztBQThKT0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTlmNDRhMWQyZmE3NTYzZGUyMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiBmdW5jdGlvbiBJbmRleChwcm9wcyl7XHJcbiAgICB2YXIgY3VycmVuY3lsaXN0PXByb3BzLnBvc3RzLnJhdGVzO1xyXG4gICAgIGNvbnN0IGN1cnJlbmNpZXM9W107XHJcbiAgICAgY29uc3QgY3VycmVuY3lWYWx1ZT1bXTtcclxuICAgIGZvcih2YXIgaSBpbiBjdXJyZW5jeWxpc3QpXHJcbiAgICB7XHJcbiAgICAgICAgY3VycmVuY2llcy5wdXNoKHtrZXk6aSx2YWx1ZTpjdXJyZW5jeWxpc3RbaV19KVxyXG4gICAgfSBcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbmNpZXMpXHJcbiAgICBjb25zdCBbYW1vdW50LHNldGFtb3VudF09dXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbZnJvbSxzZXRGcm9tXT11c2VTdGF0ZShcIlVTRFwiKTtcclxuICAgIGNvbnN0IFt0byxzZXRUb109dXNlU3RhdGUoXCJJTlJcIik7XHJcbiAgICBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY29udmVydEN1cnJlbmN5PSgpPT57LyoqL1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/YmFzZT0ke2Zyb219JnN5bWJvbHM9JHt0b30mYW1vdW50PSR7YW1vdW50fWApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlPWFtb3VudCpkYXRhLmRhdGEucmF0ZXNbdG9dXHJcbiAgICAgICAgICAgIHNldFJlc3VsdCh2YWx1ZSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb252ZXJ0ZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3VycmVuY3kgY29udmVydGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDI+TGF0ZXN0IEZvcmVpZ24gY3VycmVuY3kgZXhjaGFuZ2UgcmF0ZXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLm1hcCgocG9zdCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3Bvc3Qua2V5fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntwb3N0LnZhbHVlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+PHNwYW4+Q3VycmVuY3kgPC9zcGFuPiBDb252ZXJ0ZXIgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJtb25leVwiPiYjeDFmNGI1Ozwvc3Bhbj4gPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXRhbW91bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRGcm9tKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmcm9tfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY2llcy5tYXAoY3VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjdXIua2V5fT57Y3VyLmtleX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5zZXRUbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dG99XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW5jaWVzLm1hcChjdXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2N1ci5rZXl9PntjdXIua2V5fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbnZlcnRDdXJyZW5jeX0+Q29udmVydDwvYnV0dG9uPlxyXG4gICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgcmVzdWx0ICYmICAgPGg0PntyZXN1bHR9IHt0b308L2g0Pn1cclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gICAgICAgICAgICAuQ29udmVydGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo4OTlweCl7XHJcbiAgICAgICAgICAgIC5Db252ZXJ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDozMHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXJyZW5jeS10YWJsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5Gb3JtIGlucHV0LCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkZvcm0gYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDExLCAxNzAsIDU5KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLkNvbnZlcnRlciBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMSwgMTcwLCA1OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRCcpXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0cyxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==