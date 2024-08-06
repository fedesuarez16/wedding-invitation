"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_add_to_calendar_hoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-add-to-calendar-hoc */ "./node_modules/react-add-to-calendar-hoc/lib/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\fedes\\ar-wedding\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();













var useAudio = function useAudio(url) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      audio = _useState[0],
      setAudio = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true),
      playing = _useState2[0],
      setPlaying = _useState2[1];

  var toggle = function toggle() {
    return setPlaying(!playing);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    var toggleMusic = /*#__PURE__*/function () {
      var _ref = (0,C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!playing) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return audio.play();

              case 3:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return audio.pause();

              case 8:
                _context.t0 = _context.sent;

              case 9:
                return _context.abrupt("return", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function toggleMusic() {
        return _ref.apply(this, arguments);
      };
    }();

    if (audio) {
      toggleMusic();
    }
  }, [playing, audio]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!audio) {
      setAudio(new Audio(url));
    }

    if (audio) {
      audio.addEventListener("ended", function () {
        return setPlaying(false);
      });
    }

    return function () {
      if (audio) {
        audio.removeEventListener("ended", function () {
          return setPlaying(false);
        });
        setAudio(null);
      }
    };
  }, [audio, url]);
  return [playing, toggle];
};

_s(useAudio, "1+AaV/2VjNy61DWiCIHFSksYghs=");

function submitForm(_x, _x2) {
  return _submitForm.apply(this, arguments);
}

function _submitForm() {
  _submitForm = (0,C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e, params) {
    var setName,
        res,
        _args3 = arguments;
    return C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setName = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : null;
            e.preventDefault();

            if (!(params && params.constructor === Object)) {
              _context3.next = 12;
              break;
            }

            if (Boolean(params.name)) {
              _context3.next = 6;
              break;
            }

            alert("Harap isi nama");
            return _context3.abrupt("return", false);

          case 6:
            _context3.next = 8;
            return fetch("/api/attend", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(params)
            });

          case 8:
            res = _context3.sent;

            if (res.ok) {
              setName("");
              alert("Terima kasih telah mengisi " + params.name || 0);
            }

            if (res.status === 429) {
              alert("Maaf, kamu sudah mengisi nama");
            }

            return _context3.abrupt("return", true);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _submitForm.apply(this, arguments);
}

function Home() {
  _s2();

  var _this = this;

  var _useAudio = useAudio("/music/wedding.mp3"),
      _useAudio2 = (0,C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useAudio, 2),
      playing = _useAudio2[0],
      toggle = _useAudio2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      name = _useState3[0],
      setName = _useState3[1];

  var startDatetime = moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()("2021-10-10 13:00").tz("Asia/Jakarta");
  var endDatetime = startDatetime.clone().add(4, "hours");
  var duration = moment_timezone__WEBPACK_IMPORTED_MODULE_9___default().duration(endDatetime.diff(startDatetime)).asHours();

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    title: "Acara Nikah Rianti & Afif",
    description: "Event acara resepsi nikah rianti & afif yang diselenggarakan pada tanggal 10 oktober 2021",
    location: "Jl. Ploso IX-A no. 10, Surabaya, Jawa Timur",
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    duration: duration
  }),
      event = _useState4[0],
      setEvent = _useState4[1];

  var Button = function Button(_ref2) {
    var children = _ref2.children,
        onClick = _ref2.onClick;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
      className: "btn btn-default btn-sm",
      onClick: onClick,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, _this);
  };

  var Dropdown = function Dropdown(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
      className: "dropdown animated-fast fadeInUpMenu",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, _this);
  };

  var AddToCalendarDropdown = (0,react_add_to_calendar_hoc__WEBPACK_IMPORTED_MODULE_8__.default)(Button, Dropdown);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Boda \u2014 Mika & Rami"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "description",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "keywords",
        content: "afif, rianti, wedding, nikah, kawin, nikahan, afif abdillah jusuf, rianti dwi lestari, akad, akad nikah, landing page, resepsi, resepsi nikah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "author",
        content: "afif.dev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:title",
        content: "Wedding - Rianti & Afif"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://wedding.afif.dev/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:description",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Wedding - Rianti & Afif"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:url",
        content: "https://wedding.afif.dev/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:card",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/modernizr-2.6.2.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.easing.1.3.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.waypoints.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/owl.carousel.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.countTo.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.stellar.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.magnific-popup.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/magnific-popup-options.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/simplyCountdown.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/main.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "my-script",
      children: "\n        var d = new Date(\"2024-10-10\");\n\n        // default example\n        simplyCountdown('.simply-countdown-one', {\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate()\n        });\n\n        //jQuery example\n        $('#simply-countdown-losange').simplyCountdown({\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate(),\n            enableUtc: false\n        });"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "fh5co-loader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      id: "page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("header", {
        id: "wedding-header",
        className: "wedding-cover",
        role: "banner",
        "data-stellar-background-ratio": "0.5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "wedding-overlay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "wedding-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "wedding-row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "wedding-col text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "display-table",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "display-table-cell animate-box",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
                    className: "wedding-title",
                    children: "Mika & Rami"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                    className: "wedding-subtitle",
                    children: "\"Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los r\xEDos pueden extinguirlo\" Cantares 8:6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconright.png",
            alt: "Left Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconleft.png",
            alt: "Right Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "invitation-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            children: "Ceremonia y Fiesta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "D\xEDa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: ["S\xE1bado 4 de noviembre de 2023", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 47
              }, this), "20:15 hs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "AGENDAR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Lugar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Sal\xF3n Mar\xEDa Luisa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "CONFIRMAR ASISTENCIA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Direcci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Av. Bartolom\xE9 de Castro 2100, Catamarca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              className: "inactive",
              children: "\xBFC\xD3MO LLEGAR?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Conoce todos los detalles sobre la tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "party-details-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Fiesta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Hagamos juntos una fiesta \xE9pica. Aqu\xED algunos detalles a tener en cuenta."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "party-details-cards",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon music-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "M\xFAsica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "\xBFCu\xE1l es la canci\xF3n que no debe faltar en la PlayList de la fiesta?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "SUGERIR CANCI\xD3N"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon dress-code-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Dress Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Una orientaci\xF3n para tu vestuario"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon tips-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tips y Notas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Informaci\xF3n adicional para tener en cuenta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "+ INFO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "love-portraits-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Retratos de Nuestro Amor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Un minuto, un segundo, un instante que queda en la eternidad"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "photos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "images\\bg.jpeg",
              alt: "Foto 1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "images\\bg2.jpeg",
              alt: "Foto 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/path/to/photo3.jpg",
              alt: "Foto 3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        id: "fh5co-couple-story",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                children: "Cerita Kami"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Perjalanan singkat kami mulai saat pertama kali kenal, bertemu kembali, hingga menjadi pasangan sah."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-12 col-md-offset-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                className: "timeline animate-box",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  className: "animate-box",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-badge",
                    style: {
                      backgroundImage: "url(/images/couple-1.jpg)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-panel",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-heading",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                        className: "timeline-title",
                        children: "Saat Jadi Teman Sekelas"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 344,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "2012"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 347,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Di sekolah SMPN 37 Surabaya, Kami menjadi teman sekelas, yaitu saat memasuki kelas 9 yang dimana saat itu tahun ajarannya adalah 2012. Kami tidak begitu akrab, hanya sekedar kenal saja."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 350,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 349,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  className: "timeline-inverted animate-box",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-badge",
                    style: {
                      backgroundImage: "url(/images/couple-2.jpg)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-panel",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-heading",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                        className: "timeline-title",
                        children: "Ketemu Lagi"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 366,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "Desember 2017"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 367,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Kami dipertemukan kembali pada tempat kerja yang bersebelahan, tempat kerja kami hanya beda gedung saja. Saat itu Afif bertempat kerja di Graha Bumi Surabaya, sedangkan Rianti bertempat kerja di Hotel Bumi Surabaya. Kami mulai berkenalan dan saling sapa lewat sosial media. Disinilah awal kami mulai PDKT dan berpacaran :)."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 370,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 369,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  className: "animate-box",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-badge",
                    style: {
                      backgroundImage: "url(/images/couple-3.jpg)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-panel",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-heading",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                        className: "timeline-title",
                        children: "Lamaran"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 389,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "20 Desember 2020"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 390,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 388,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "3 tahun lamanya kami berpacaran dan mulai memutuskan untuk ke langkah yang lebih jauh lagi. Afif mulai berniat melamar pasangannya, Rianti dengan bismillah tawakallah"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 393,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 392,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  className: "timeline-inverted animate-box",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-badge",
                    style: {
                      backgroundImage: "url(/images/couple-4.jpg)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 403,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "timeline-panel",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-heading",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
                        className: "timeline-title",
                        children: "Akad Nikah"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 409,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "15 Juli 2021"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 410,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Alhamdulillah, dengan ridho Allah SWT, Afif melangkah lebih jauh lagi dengan meminang pasangannya, Rianti menjadi istri sah. Banyak rintangan yang kami hadapi, salah satunya kondisi pandemi Covid-19 yang lagi tinggi saat itu, harus melakukan syarat dan anjuran pemerintah dengan orang yang terbatas. Akan tetapi, Alhamdulillah acara berjalan dengan lancar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 413,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 412,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        id: "fh5co-gallery",
        className: "fh5co-section-gray",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-8 col-md-offset-2 text-center fh5co-heading animate-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                children: "Foto Foto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 436,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Coming Soon!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 437,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "(Ditunggu ya, kita belum foto post weddingnya)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        id: "fh5co-counter",
        className: "fh5co-bg fh5co-counter",
        style: {
          backgroundImage: "url(/images/img_bg_5.jpg)"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "overlay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "display-t",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "display-tc",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "col-md-6 col-sm-6 animate-box",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "feature-center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "icon",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-users"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 459,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 458,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "counter js-counter",
                      "data-from": "0",
                      "data-to": "450",
                      "data-speed": "5000",
                      "data-refresh-interval": "50",
                      children: "1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 462,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "counter-label",
                      children: "Perkiraan Undangan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 471,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 457,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "col-md-6 col-sm-6 animate-box",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "feature-center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "icon",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-bowl"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 477,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 476,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "counter js-counter",
                      "data-from": "0",
                      "data-to": "1000",
                      "data-speed": "5000",
                      "data-refresh-interval": "50",
                      children: "1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 480,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "counter-label",
                      children: "Perkiraan Catering"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 489,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 475,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 455,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        id: "fh5co-started",
        className: "fh5co-bg",
        style: {
          backgroundImage: "url(/images/img_bg_4.jpg)"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "overlay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row animate-box",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-8 col-md-offset-2 text-center fh5co-heading",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                children: "Sudah Datang?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 508,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Silakan isi nama untuk nandain kalau kamu sudah datang ya \uD83E\uDD7A\uD83D\uDC49\uD83D\uDC48"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Kalau bisa yang kasih nama lengkap biar gk bingung \uD83D\uDE0A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row animate-box",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-10 col-md-offset-1",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
                name: "attendForm",
                action: "/api/attend",
                method: "post",
                onSubmit: /*#__PURE__*/function () {
                  var _ref4 = (0,C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
                    return C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return submitForm(e, {
                              name: name
                            }, setName);

                          case 2:
                            return _context2.abrupt("return", _context2.sent);

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }(),
                className: "form-inline",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "col-md-6 col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
                      htmlFor: "name",
                      className: "sr-only",
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 527,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                      type: "name",
                      className: "form-control",
                      id: "name",
                      placeholder: "Nama kamu siapa?",
                      name: "name",
                      value: name,
                      onChange: function onChange(e) {
                        return setName(e.currentTarget.value);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 530,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 526,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 525,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "col-md-6 col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
                    type: "submit",
                    className: "btn btn-default btn-block",
                    children: "Hadir \u270B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 542,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 541,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 518,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
        id: "fh5co-footer",
        role: "contentinfo",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "row copyright",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "col-md-12 text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("small", {
                  className: "block",
                  children: ["\xA9 ", new Date().getFullYear(), " ", "", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://afif.dev",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      children: "afif.dev"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 561,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 560,
                    columnNumber: 21
                  }, this), ". All Rights Reserved."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 558,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("small", {
                  className: "block",
                  children: ["Thanks for Design", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://freehtml5.co/",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: "FREEHTML5.co"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 568,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 567,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 565,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("small", {
                  className: "block",
                  children: ["Thanks for Music", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://youtu.be/_pR_cW4bDeE",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Ungu Feat. Andien - Saat Bahagia | VC Trinity"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 576,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 575,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 573,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("small", {
                  children: ["Thanks for Backgrounds", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://www.freepik.com/photos/background",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Background photo created by jcomp - www.freepik.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 587,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 583,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 581,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 557,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
                className: "fh5co-social-icons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://twitter.com/bungambohlah",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-twitter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 597,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 596,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 595,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 594,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://instagr.am/afif.abdillah.j",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-instagram"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 604,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 603,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 602,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 601,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://fb.me/afifabdillahj",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-facebook"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 614,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 613,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 609,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 608,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://linkedin.com/in/afifjusuf/",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-linkedin"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 621,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 620,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 619,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 618,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://youtube.com/@afifdev",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-youtube"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 628,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 627,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 626,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 625,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "https://afif.dev",
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                        className: "icon-globe2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 635,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 634,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 633,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 632,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 593,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 556,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "gototop js-top",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          href: "#",
          className: "js-gotop",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-arrow-up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 648,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "musicbtn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          onClick: toggle,
          children: playing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-pause"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 656,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-play"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 658,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Home, "6p2GuZtqqCBCpul3Ld6xn4NxkqU=", false, function () {
  return [useAudio];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhhMTlkMjUyMTViNzk2NWQxNjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDeEIsa0JBQTBCTCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEdBQWY7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLFdBQVc7QUFBQSxxUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2xCSCxPQURrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUNGRixLQUFLLENBQUNNLElBQU4sRUFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBQ21CTixLQUFLLENBQUNPLEtBQU4sRUFEbkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhGLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBR0EsUUFBSUwsS0FBSixFQUFXO0FBQ1RLLE1BQUFBLFdBQVc7QUFDWjtBQUNGLEdBUFEsRUFPTixDQUFDSCxPQUFELEVBQVVGLEtBQVYsQ0FQTSxDQUFUO0FBU0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUks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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpWRixlQThhRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyxVQUF0QjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlhRixlQXFiRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNFO0FBQUcsaUJBQU8sRUFBRWxELE1BQVo7QUFBQSxvQkFDR0YsT0FBTyxnQkFDTjtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNLGdCQUdOO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuSEY7QUFBQSxrQkFERjtBQXFqQkQ7O0lBamxCdUI0QjtVQUNJaEM7OztLQURKZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltZyBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRUb0NhbGVuZGFySE9DIGZyb20gXCJyZWFjdC1hZGQtdG8tY2FsZW5kYXItaG9jXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC10aW1lem9uZVwiO1xyXG5cclxuY29uc3QgdXNlQXVkaW8gPSAodXJsKSA9PiB7XHJcbiAgY29uc3QgW2F1ZGlvLCBzZXRBdWRpb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0UGxheWluZyghcGxheWluZyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVNdXNpYyA9IGFzeW5jICgpID0+XHJcbiAgICAgIHBsYXlpbmcgPyBhd2FpdCBhdWRpby5wbGF5KCkgOiBhd2FpdCBhdWRpby5wYXVzZSgpO1xyXG5cclxuICAgIGlmIChhdWRpbykge1xyXG4gICAgICB0b2dnbGVNdXNpYygpO1xyXG4gICAgfVxyXG4gIH0sIFtwbGF5aW5nLCBhdWRpb10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdWRpbykge1xyXG4gICAgICBzZXRBdWRpbyhuZXcgQXVkaW8odXJsKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXVkaW8pIHtcclxuICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsICgpID0+IHNldFBsYXlpbmcoZmFsc2UpKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChhdWRpbykge1xyXG4gICAgICAgIGF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoKSA9PiBzZXRQbGF5aW5nKGZhbHNlKSk7XHJcbiAgICAgICAgc2V0QXVkaW8obnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW2F1ZGlvLCB1cmxdKTtcclxuXHJcbiAgcmV0dXJuIFtwbGF5aW5nLCB0b2dnbGVdO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3VibWl0Rm9ybShlLCBwYXJhbXMsIHNldE5hbWUgPSBudWxsKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBpZiAocGFyYW1zICYmIHBhcmFtcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICBpZiAoIUJvb2xlYW4ocGFyYW1zLm5hbWUpKSB7XHJcbiAgICAgIGFsZXJ0KFwiSGFyYXAgaXNpIG5hbWFcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2F0dGVuZGAsIHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBzZXROYW1lKFwiXCIpO1xyXG4gICAgICBhbGVydChcIlRlcmltYSBrYXNpaCB0ZWxhaCBtZW5naXNpIFwiICsgcGFyYW1zLm5hbWUgfHwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDQyOSkge1xyXG4gICAgICBhbGVydChcIk1hYWYsIGthbXUgc3VkYWggbWVuZ2lzaSBuYW1hXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcGxheWluZywgdG9nZ2xlXSA9IHVzZUF1ZGlvKFwiL211c2ljL3dlZGRpbmcubXAzXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzdGFydERhdGV0aW1lID0gbW9tZW50KFwiMjAyMS0xMC0xMCAxMzowMFwiKS50eihcIkFzaWEvSmFrYXJ0YVwiKTtcclxuICBjb25zdCBlbmREYXRldGltZSA9IHN0YXJ0RGF0ZXRpbWUuY2xvbmUoKS5hZGQoNCwgXCJob3Vyc1wiKTtcclxuICBjb25zdCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihlbmREYXRldGltZS5kaWZmKHN0YXJ0RGF0ZXRpbWUpKS5hc0hvdXJzKCk7XHJcblxyXG4gIGNvbnN0IFtldmVudCwgc2V0RXZlbnRdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IFwiQWNhcmEgTmlrYWggUmlhbnRpICYgQWZpZlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRXZlbnQgYWNhcmEgcmVzZXBzaSBuaWthaCByaWFudGkgJiBhZmlmIHlhbmcgZGlzZWxlbmdnYXJha2FuIHBhZGEgdGFuZ2dhbCAxMCBva3RvYmVyIDIwMjFcIixcclxuICAgIGxvY2F0aW9uOiBcIkpsLiBQbG9zbyBJWC1BIG5vLiAxMCwgU3VyYWJheWEsIEphd2EgVGltdXJcIixcclxuICAgIHN0YXJ0RGF0ZXRpbWU6IHN0YXJ0RGF0ZXRpbWUuZm9ybWF0KFwiWVlZWU1NRERUSEhtbXNzWlwiKSxcclxuICAgIGVuZERhdGV0aW1lOiBlbmREYXRldGltZS5mb3JtYXQoXCJZWVlZTU1ERFRISG1tc3NaXCIpLFxyXG4gICAgZHVyYXRpb24sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBvbkNsaWNrIH0pID0+IChcclxuICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbiAgY29uc3QgRHJvcGRvd24gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24gYW5pbWF0ZWQtZmFzdCBmYWRlSW5VcE1lbnVcIj57Y2hpbGRyZW59PC91bD5cclxuICApO1xyXG4gIGNvbnN0IEFkZFRvQ2FsZW5kYXJEcm9wZG93biA9IEFkZFRvQ2FsZW5kYXJIT0MoQnV0dG9uLCBEcm9wZG93bik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXHJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxyXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxyXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiPjwvbGluaz5cclxuXHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkJvZGEgJm1kYXNoOyBNaWthICYgUmFtaTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmlhbnRpICYgQWZpZiBXZWRkaW5nIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgICAgY29udGVudD1cImFmaWYsIHJpYW50aSwgd2VkZGluZywgbmlrYWgsIGthd2luLCBuaWthaGFuLCBhZmlmIGFiZGlsbGFoIGp1c3VmLCByaWFudGkgZHdpIGxlc3RhcmksIGFrYWQsIGFrYWQgbmlrYWgsIGxhbmRpbmcgcGFnZSwgcmVzZXBzaSwgcmVzZXBzaSBuaWthaFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImFmaWYuZGV2XCIgLz5cclxuXHJcbiAgICAgICAgey8qIEZhY2Vib29rIGFuZCBUd2l0dGVyIGludGVncmF0aW9uICovfVxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiV2VkZGluZyAtIFJpYW50aSAmIEFmaWZcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dlZGRpbmcuYWZpZi5kZXYvXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJSaWFudGkgJiBBZmlmIFdlZGRpbmcgV2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIlJpYW50aSAmIEFmaWYgV2VkZGluZyBXZWJzaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIldlZGRpbmcgLSBSaWFudGkgJiBBZmlmXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dlZGRpbmcuYWZpZi5kZXYvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIG1vZGVybml6ciAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9tb2Rlcm5penItMi42LjIubWluLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8galF1ZXJ5ICovfVxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvanF1ZXJ5Lm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8galF1ZXJ5IEVhc2luZyAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLjEuMy5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIEJvb3RzdHJhcCAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIFdheXBvaW50cyAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkud2F5cG9pbnRzLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIENhcm91c2VsICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL293bC5jYXJvdXNlbC5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBjb3VudFRvICovfVxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvanF1ZXJ5LmNvdW50VG8uanNcIj48L1NjcmlwdD5cclxuXHJcbiAgICAgIHsvKiAvLyBTdGVsbGFyICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL2pxdWVyeS5zdGVsbGFyLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIE1hZ25pZmljIFBvcHVwICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvbWFnbmlmaWMtcG9wdXAtb3B0aW9ucy5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuXHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvc2ltcGx5Q291bnRkb3duLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8gTWFpbiAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL21haW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBpZD1cIm15LXNjcmlwdFwiPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShcIjIwMjQtMTAtMTBcIik7XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgZXhhbXBsZVxyXG4gICAgICAgIHNpbXBseUNvdW50ZG93bignLnNpbXBseS1jb3VudGRvd24tb25lJywge1xyXG4gICAgICAgICAgICB5ZWFyOiBkLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIG1vbnRoOiBkLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBkYXk6IGQuZ2V0RGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8valF1ZXJ5IGV4YW1wbGVcclxuICAgICAgICAkKCcjc2ltcGx5LWNvdW50ZG93bi1sb3NhbmdlJykuc2ltcGx5Q291bnRkb3duKHtcclxuICAgICAgICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtb250aDogZC5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgZGF5OiBkLmdldERhdGUoKSxcclxuICAgICAgICAgICAgZW5hYmxlVXRjOiBmYWxzZVxyXG4gICAgICAgIH0pO2B9XHJcbiAgICAgIDwvU2NyaXB0PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaDVjby1sb2FkZXJcIiAvPlxyXG4gICAgICA8ZGl2IGlkPVwicGFnZVwiPlxyXG4gICAgICAgIDxoZWFkZXJcclxuICAgICAgICAgIGlkPVwid2VkZGluZy1oZWFkZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwid2VkZGluZy1jb3ZlclwiXHJcbiAgICAgICAgICByb2xlPVwiYmFubmVyXCJcclxuICAgICAgICAgIGRhdGEtc3RlbGxhci1iYWNrZ3JvdW5kLXJhdGlvPVwiMC41XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS10YWJsZS1jZWxsIGFuaW1hdGUtYm94XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWRkaW5nLXRpdGxlXCI+TWlrYSAmIFJhbWk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2VkZGluZy1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb21vIGxsYW1hIGRpdmluYSBlcyBlbCBmdWVnbyBhcmRpZW50ZSBkZWwgYW1vci4gTmkgbGFzIG11Y2hhcyBhZ3VhcyBwdWVkZW4gYXBhZ2FybG8sIG5pIGxvcyByw61vcyBwdWVkZW4gZXh0aW5ndWlybG9cIiBDYW50YXJlcyA4OjZcclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucmlnaHQucG5nXCIgYWx0PVwiTGVmdCBJY29uXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ubGVmdC5wbmdcIiBhbHQ9XCJSaWdodCBJY29uXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXRhdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5DZXJlbW9uaWEgeSBGaWVzdGE8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8aDI+RMOtYTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+U8OhYmFkbyA0IGRlIG5vdmllbWJyZSBkZSAyMDIzPGJyIC8+MjA6MTUgaHM8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5BR0VOREFSPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxoMj5MdWdhcjwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+U2Fsw7NuIE1hcsOtYSBMdWlzYTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uPkNPTkZJUk1BUiBBU0lTVEVOQ0lBPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxoMj5EaXJlY2Npw7NuPC9oMj5cclxuICAgICAgICAgICAgICA8cD5Bdi4gQmFydG9sb23DqSBkZSBDYXN0cm8gMjEwMCwgQ2F0YW1hcmNhPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5hY3RpdmVcIj7Cv0PDk01PIExMRUdBUj88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlRhcmpldGE8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPkNvbm9jZSB0b2RvcyBsb3MgZGV0YWxsZXMgc29icmUgbGEgdGFyamV0YTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlZFUiBNw4FTPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LWRldGFpbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+Rmllc3RhPC9oMT5cclxuICAgICAgICAgIDxwPkhhZ2Ftb3MganVudG9zIHVuYSBmaWVzdGEgw6lwaWNhLiBBcXXDrSBhbGd1bm9zIGRldGFsbGVzIGEgdGVuZXIgZW4gY3VlbnRhLjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydHktZGV0YWlscy1jYXJkc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gbXVzaWMtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5Nw7pzaWNhPC9oMj5cclxuICAgICAgICAgICAgICA8cD7Cv0N1w6FsIGVzIGxhIGNhbmNpw7NuIHF1ZSBubyBkZWJlIGZhbHRhciBlbiBsYSBQbGF5TGlzdCBkZSBsYSBmaWVzdGE/PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+U1VHRVJJUiBDQU5DScOTTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGRyZXNzLWNvZGUtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5EcmVzcyBDb2RlPC9oMj5cclxuICAgICAgICAgICAgICA8cD5VbmEgb3JpZW50YWNpw7NuIHBhcmEgdHUgdmVzdHVhcmlvPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+VkVSIE3DgVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB0aXBzLWljb25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aDI+VGlwcyB5IE5vdGFzPC9oMj5cclxuICAgICAgICAgICAgICA8cD5JbmZvcm1hY2nDs24gYWRpY2lvbmFsIHBhcmEgdGVuZXIgZW4gY3VlbnRhPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+KyBJTkZPPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG92ZS1wb3J0cmFpdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+UmV0cmF0b3MgZGUgTnVlc3RybyBBbW9yPC9oMT5cclxuICAgICAgICAgIDxwPlVuIG1pbnV0bywgdW4gc2VndW5kbywgdW4gaW5zdGFudGUgcXVlIHF1ZWRhIGVuIGxhIGV0ZXJuaWRhZDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlc1xcYmcuanBlZ1wiIGFsdD1cIkZvdG8gMVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXGJnMi5qcGVnXCIgYWx0PVwiRm90byAyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wYXRoL3RvL3Bob3RvMy5qcGdcIiBhbHQ9XCJGb3RvIDNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgey8qIGNvdXBsZSBzdG9yeSAqL31cclxuICAgICAgICA8ZGl2IGlkPVwiZmg1Y28tY291cGxlLXN0b3J5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIHRleHQtY2VudGVyIGZoNWNvLWhlYWRpbmcgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5DZXJpdGEgS2FtaTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgUGVyamFsYW5hbiBzaW5na2F0IGthbWkgbXVsYWkgc2FhdCBwZXJ0YW1hIGthbGkga2VuYWwsIGJlcnRlbXVcclxuICAgICAgICAgICAgICAgICAga2VtYmFsaSwgaGluZ2dhIG1lbmphZGkgcGFzYW5nYW4gc2FoLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbWQtb2Zmc2V0LTBcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0aW1lbGluZSBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZS1iYWRnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWFnZXMvY291cGxlLTEuanBnKVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGltZWxpbmUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTYWF0IEphZGkgVGVtYW4gU2VrZWxhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjAxMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpIHNla29sYWggU01QTiAzNyBTdXJhYmF5YSwgS2FtaSBtZW5qYWRpIHRlbWFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VrZWxhcywgeWFpdHUgc2FhdCBtZW1hc3VraSBrZWxhcyA5IHlhbmcgZGltYW5hIHNhYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdHUgdGFodW4gYWphcmFubnlhIGFkYWxhaCAyMDEyLiBLYW1pIHRpZGFrIGJlZ2l0dVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFrcmFiLCBoYW55YSBzZWtlZGFyIGtlbmFsIHNhamEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGltZWxpbmUtaW52ZXJ0ZWQgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZS1iYWRnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWFnZXMvY291cGxlLTIuanBnKVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGltZWxpbmUtdGl0bGVcIj5LZXRlbXUgTGFnaTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj5EZXNlbWJlciAyMDE3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgS2FtaSBkaXBlcnRlbXVrYW4ga2VtYmFsaSBwYWRhIHRlbXBhdCBrZXJqYSB5YW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVyc2ViZWxhaGFuLCB0ZW1wYXQga2VyamEga2FtaSBoYW55YSBiZWRhIGdlZHVuZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhamEuIFNhYXQgaXR1IEFmaWYgYmVydGVtcGF0IGtlcmphIGRpIEdyYWhhIEJ1bWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdXJhYmF5YSwgc2VkYW5na2FuIFJpYW50aSBiZXJ0ZW1wYXQga2VyamEgZGkgSG90ZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCdW1pIFN1cmFiYXlhLiBLYW1pIG11bGFpIGJlcmtlbmFsYW4gZGFuIHNhbGluZyBzYXBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV3YXQgc29zaWFsIG1lZGlhLiBEaXNpbmlsYWggYXdhbCBrYW1pIG11bGFpIFBES1QgZGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVycGFjYXJhbiA6KS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lLWJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltYWdlcy9jb3VwbGUtMy5qcGcpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aW1lbGluZS10aXRsZVwiPkxhbWFyYW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MjAgRGVzZW1iZXIgMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDMgdGFodW4gbGFtYW55YSBrYW1pIGJlcnBhY2FyYW4gZGFuIG11bGFpIG1lbXV0dXNrYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnR1ayBrZSBsYW5na2FoIHlhbmcgbGViaWggamF1aCBsYWdpLiBBZmlmIG11bGFpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVybmlhdCBtZWxhbWFyIHBhc2FuZ2FubnlhLCBSaWFudGkgZGVuZ2FuIGJpc21pbGxhaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhd2FrYWxsYWhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lbGluZS1pbnZlcnRlZCBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lLWJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltYWdlcy9jb3VwbGUtNC5qcGcpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aW1lbGluZS10aXRsZVwiPkFrYWQgTmlrYWg8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+MTUgSnVsaSAyMDIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWxoYW1kdWxpbGxhaCwgZGVuZ2FuIHJpZGhvIEFsbGFoIFNXVCwgQWZpZiBtZWxhbmdrYWhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWJpaCBqYXVoIGxhZ2kgZGVuZ2FuIG1lbWluYW5nIHBhc2FuZ2FubnlhLCBSaWFudGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW5qYWRpIGlzdHJpIHNhaC4gQmFueWFrIHJpbnRhbmdhbiB5YW5nIGthbWkgaGFkYXBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGFoIHNhdHVueWEga29uZGlzaSBwYW5kZW1pIENvdmlkLTE5IHlhbmcgbGFnaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbmdnaSBzYWF0IGl0dSwgaGFydXMgbWVsYWt1a2FuIHN5YXJhdCBkYW4gYW5qdXJhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlbWVyaW50YWggZGVuZ2FuIG9yYW5nIHlhbmcgdGVyYmF0YXMuIEFrYW4gdGV0YXBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFsaGFtZHVsaWxsYWggYWNhcmEgYmVyamFsYW4gZGVuZ2FuIGxhbmNhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBHYWxsZXJ5IENvbWluZyBTb29uIChOZ2VudGVuaSBQb3N0IFdlZGRpbmcgZGlzaWspICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJmaDVjby1nYWxsZXJ5XCIgY2xhc3NOYW1lPVwiZmg1Y28tc2VjdGlvbi1ncmF5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIHRleHQtY2VudGVyIGZoNWNvLWhlYWRpbmcgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Gb3RvIEZvdG88L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29taW5nIFNvb24hPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KERpdHVuZ2d1IHlhLCBraXRhIGJlbHVtIGZvdG8gcG9zdCB3ZWRkaW5nbnlhKTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBjb3VudGRvd24gKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJmaDVjby1jb3VudGVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZoNWNvLWJnIGZoNWNvLWNvdW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1hZ2VzL2ltZ19iZ181LmpwZylcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LXRjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdXNlcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnRlciBqcy1jb3VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG89XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwZWVkPVwiNTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVmcmVzaC1pbnRlcnZhbD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlci1sYWJlbFwiPlBlcmtpcmFhbiBVbmRhbmdhbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYm93bFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudGVyIGpzLWNvdW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10bz1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwZWVkPVwiNTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmVmcmVzaC1pbnRlcnZhbD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlci1sYWJlbFwiPlBlcmtpcmFhbiBDYXRlcmluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIGZvcm0gYXR0ZW5kaW5nICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPVwiZmg1Y28tc3RhcnRlZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaDVjby1iZ1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWFnZXMvaW1nX2JnXzQuanBnKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yIHRleHQtY2VudGVyIGZoNWNvLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5TdWRhaCBEYXRhbmc/PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTaWxha2FuIGlzaSBuYW1hIHVudHVrIG5hbmRhaW4ga2FsYXUga2FtdSBzdWRhaCBkYXRhbmcgeWFcclxuICAgICAgICAgICAgICAgICAg8J+luvCfkYnwn5GIXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5LYWxhdSBiaXNhIHlhbmcga2FzaWggbmFtYSBsZW5na2FwIGJpYXIgZ2sgYmluZ3VuZyDwn5iKPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYW5pbWF0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdHRlbmRGb3JtXCJcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL2FwaS9hdHRlbmRcIlxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiBhd2FpdCBzdWJtaXRGb3JtKGUsIHsgbmFtZSB9LCBzZXROYW1lKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWEga2FtdSBzaWFwYT9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSGFkaXIg4pyLXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogZm9vdGVyICovfVxyXG4gICAgICAgIDxmb290ZXIgaWQ9XCJmaDVjby1mb290ZXJcIiByb2xlPVwiY29udGVudGluZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2FmaWYuZGV2XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5hZmlmLmRldjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGFua3MgZm9yIERlc2lnbntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9mcmVlaHRtbDUuY28vXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZSRUVIVE1MNS5jb1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzIGZvciBNdXNpY3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS9fcFJfY1c0YkRlRVwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbmd1IEZlYXQuIEFuZGllbiAtIFNhYXQgQmFoYWdpYSB8IFZDIFRyaW5pdHlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICBUaGFua3MgZm9yIEJhY2tncm91bmRze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vcGhvdG9zL2JhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tncm91bmQgcGhvdG8gY3JlYXRlZCBieSBqY29tcCAtIHd3dy5mcmVlcGlrLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaDVjby1zb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2J1bmdhbWJvaGxhaFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vaW5zdGFnci5hbS9hZmlmLmFiZGlsbGFoLmpcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZiLm1lL2FmaWZhYmRpbGxhaGpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZmFjZWJvb2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL2luL2FmaWZqdXN1Zi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1saW5rZWRpblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly95b3V0dWJlLmNvbS9AYWZpZmRldlwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXlvdXR1YmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYWZpZi5kZXZcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWdsb2JlMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICB7LyogZ28gdG8gdG9wIGJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdG90b3AganMtdG9wXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImpzLWdvdG9wXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYXJyb3ctdXBcIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBtdXNpYyBidXR0b24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdXNpY2J0blwiPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICAgICAge3BsYXlpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wYXVzZVwiPjwvaT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiU2NyaXB0IiwiSW1nIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRUb0NhbGVuZGFySE9DIiwibW9tZW50IiwidXNlQXVkaW8iLCJ1cmwiLCJhdWRpbyIsInNldEF1ZGlvIiwicGxheWluZyIsInNldFBsYXlpbmciLCJ0b2dnbGUiLCJ0b2dnbGVNdXNpYyIsInBsYXkiLCJwYXVzZSIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdWJtaXRGb3JtIiwiZSIsInBhcmFtcyIsInNldE5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiQm9vbGVhbiIsIm5hbWUiLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwib2siLCJzdGF0dXMiLCJIb21lIiwic3RhcnREYXRldGltZSIsInR6IiwiZW5kRGF0ZXRpbWUiLCJjbG9uZSIsImFkZCIsImR1cmF0aW9uIiwiZGlmZiIsImFzSG91cnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJmb3JtYXQiLCJldmVudCIsInNldEV2ZW50IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiRHJvcGRvd24iLCJBZGRUb0NhbGVuZGFyRHJvcGRvd24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9