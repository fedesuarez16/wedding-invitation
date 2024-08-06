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
  _submitForm = (0,C_Users_fedes_ar_wedding_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e, params) {
    var setName,
        res,
        _args2 = arguments;
    return C_Users_fedes_ar_wedding_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setName = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
            e.preventDefault();

            if (!(params && params.constructor === Object)) {
              _context2.next = 12;
              break;
            }

            if (Boolean(params.name)) {
              _context2.next = 6;
              break;
            }

            alert("Harap isi nama");
            return _context2.abrupt("return", false);

          case 6:
            _context2.next = 8;
            return fetch("/api/attend", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(params)
            });

          case 8:
            res = _context2.sent;

            if (res.ok) {
              setName("");
              alert("Terima kasih telah mengisi " + params.name || 0);
            }

            if (res.status === 429) {
              alert("Maaf, kamu sudah mengisi nama");
            }

            return _context2.abrupt("return", true);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
          lineNumber: 224,
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
                    lineNumber: 231,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                    className: "wedding-subtitle",
                    children: "\"Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los r\xEDos pueden extinguirlo\" Cantares 8:6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconright.png",
            alt: "Left Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconleft.png",
            alt: "Right Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "invitation-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            children: "Ceremonia y Fiesta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "D\xEDa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: ["S\xE1bado 4 de noviembre de 2023", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 47
              }, this), "20:15 hs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "AGENDAR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Lugar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Sal\xF3n Mar\xEDa Luisa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "CONFIRMAR ASISTENCIA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Direcci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Av. Bartolom\xE9 de Castro 2100, Catamarca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              className: "inactive",
              children: "\xBFC\xD3MO LLEGAR?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Conoce todos los detalles sobre la tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "party-details-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Fiesta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Hagamos juntos una fiesta \xE9pica. Aqu\xED algunos detalles a tener en cuenta."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "party-details-cards",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon music-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "M\xFAsica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "\xBFCu\xE1l es la canci\xF3n que no debe faltar en la PlayList de la fiesta?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "SUGERIR CANCI\xD3N"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon dress-code-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Dress Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Una orientaci\xF3n para tu vestuario"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon tips-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tips y Notas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Informaci\xF3n adicional para tener en cuenta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "+ INFO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "love-portraits-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Retratos de Nuestro Amor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Un minuto, un segundo, un instante que queda en la eternidad"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "photos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "images\\img1.jpeg",
              alt: "Foto 1"
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
              src: "images\\bg2.jpeg",
              alt: "Foto 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/images/img3.jpeg",
              alt: "Foto 3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 308,
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
                lineNumber: 330,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Perjalanan singkat kami mulai saat pertama kali kenal, bertemu kembali, hingga menjadi pasangan sah."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
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
                    lineNumber: 341,
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
                        lineNumber: 347,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "2012"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 350,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Di sekolah SMPN 37 Surabaya, Kami menjadi teman sekelas, yaitu saat memasuki kelas 9 yang dimana saat itu tahun ajarannya adalah 2012. Kami tidak begitu akrab, hanya sekedar kenal saja."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 353,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 352,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
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
                    lineNumber: 363,
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
                        lineNumber: 369,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "Desember 2017"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 370,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Kami dipertemukan kembali pada tempat kerja yang bersebelahan, tempat kerja kami hanya beda gedung saja. Saat itu Afif bertempat kerja di Graha Bumi Surabaya, sedangkan Rianti bertempat kerja di Hotel Bumi Surabaya. Kami mulai berkenalan dan saling sapa lewat sosial media. Disinilah awal kami mulai PDKT dan berpacaran :)."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 373,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 372,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
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
                    lineNumber: 386,
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
                        lineNumber: 392,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "20 Desember 2020"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 393,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "3 tahun lamanya kami berpacaran dan mulai memutuskan untuk ke langkah yang lebih jauh lagi. Afif mulai berniat melamar pasangannya, Rianti dengan bismillah tawakallah"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 396,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
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
                    lineNumber: 406,
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
                        lineNumber: 412,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                        className: "date",
                        children: "15 Juli 2021"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 413,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 411,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                      className: "timeline-body",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                        children: "Alhamdulillah, dengan ridho Allah SWT, Afif melangkah lebih jauh lagi dengan meminang pasangannya, Rianti menjadi istri sah. Banyak rintangan yang kami hadapi, salah satunya kondisi pandemi Covid-19 yang lagi tinggi saat itu, harus melakukan syarat dan anjuran pemerintah dengan orang yang terbatas. Akan tetapi, Alhamdulillah acara berjalan dengan lancar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 416,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 415,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
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
                lineNumber: 439,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Coming Soon!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 440,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "(Ditunggu ya, kita belum foto post weddingnya)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
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
                      lineNumber: 460,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 21
                  }, this), ". All Rights Reserved."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
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
                      lineNumber: 467,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 466,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
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
                      lineNumber: 475,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 474,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
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
                      lineNumber: 486,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 482,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 456,
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
                        lineNumber: 496,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 495,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 494,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 493,
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
                        lineNumber: 503,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 502,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 501,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 500,
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
                        lineNumber: 513,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 512,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 508,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
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
                        lineNumber: 520,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 519,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 518,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 517,
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
                        lineNumber: 527,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 526,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 525,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 524,
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
                        lineNumber: 534,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 533,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 532,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 531,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 452,
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
            lineNumber: 547,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "musicbtn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          onClick: toggle,
          children: playing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-pause"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 555,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-play"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 557,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNkYTViZTUzOGMzMTQ4MGE0YWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDeEIsa0JBQTBCTCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEdBQWY7O0FBRUFQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLFdBQVc7QUFBQSxxUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2xCSCxPQURrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUNGRixLQUFLLENBQUNNLElBQU4sRUFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBQ21CTixLQUFLLENBQUNPLEtBQU4sRUFEbkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhGLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBR0EsUUFBSUwsS0FBSixFQUFXO0FBQ1RLLE1BQUFBLFdBQVc7QUFDWjtBQUNGLEdBUFEsRUFPTixDQUFDSCxPQUFELEVBQVVGLEtBQVYsQ0FQTSxDQUFUO0FBU0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0ssS0FBTCxFQUFZO0FBQ1ZDLE1BQUFBLFFBQVEsQ0FBQyxJQUFJTyxLQUFKLENBQVVULEdBQVYsQ0FBRCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSUMsS0FBSixFQUFXO0FBQ1RBLE1BQUFBLEtBQUssQ0FBQ1MsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0M7QUFBQSxlQUFNTixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLE9BQWhDO0FBQ0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1gsVUFBSUgsS0FBSixFQUFXO0FBQ1RBLFFBQUFBLEtBQUssQ0FBQ1UsbUJBQU4sQ0FBMEIsT0FBMUIsRUFBbUM7QUFBQSxpQkFBTVAsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxTQUFuQztBQUNBRixRQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRixLQUxEO0FBTUQsR0FiUSxFQWFOLENBQUNELEtBQUQsRUFBUUQsR0FBUixDQWJNLENBQVQ7QUFlQSxTQUFPLENBQUNHLE9BQUQsRUFBVUUsTUFBVixDQUFQO0FBQ0QsQ0EvQkQ7O0dBQU1OOztTQWlDU2E7Ozs7O29RQUFmLGtCQUEwQkMsQ0FBMUIsRUFBNkJDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUNDLFlBQUFBLE9BQXJDLDhEQUErQyxJQUEvQztBQUNFRixZQUFBQSxDQUFDLENBQUNHLGNBQUY7O0FBREYsa0JBR01GLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxXQUFQLEtBQXVCQyxNQUh2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFJU0MsT0FBTyxDQUFDTCxNQUFNLENBQUNNLElBQVIsQ0FKaEI7QUFBQTtBQUFBO0FBQUE7O0FBS01DLFlBQUFBLEtBQUssQ0FBQyxnQkFBRCxDQUFMO0FBTE4sOENBTWEsS0FOYjs7QUFBQTtBQUFBO0FBQUEsbUJBUXNCQyxLQUFLLGdCQUFnQjtBQUNyQ0MsY0FBQUEsTUFBTSxFQUFFLE1BRDZCO0FBRXJDQyxjQUFBQSxPQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVCxlQUY0QjtBQUtyQ0MsY0FBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWIsTUFBZjtBQUwrQixhQUFoQixDQVIzQjs7QUFBQTtBQVFVYyxZQUFBQSxHQVJWOztBQWdCSSxnQkFBSUEsR0FBRyxDQUFDQyxFQUFSLEVBQVk7QUFDVmQsY0FBQUEsT0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBTSxjQUFBQSxLQUFLLENBQUMsZ0NBQWdDUCxNQUFNLENBQUNNLElBQXZDLElBQStDLENBQWhELENBQUw7QUFDRDs7QUFFRCxnQkFBSVEsR0FBRyxDQUFDRSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJULGNBQUFBLEtBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0Q7O0FBdkJMLDhDQXlCVyxJQXpCWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTZCZSxTQUFTVSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUEwQmhDLFFBQVEsQ0FBQyxvQkFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT0ksT0FBUDtBQUFBLE1BQWdCRSxNQUFoQjs7QUFDQSxtQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU95QixJQUFQO0FBQUEsTUFBYUwsT0FBYjs7QUFFQSxNQUFNaUIsYUFBYSxHQUFHbEMsc0RBQU0sQ0FBQyxrQkFBRCxDQUFOLENBQTJCbUMsRUFBM0IsQ0FBOEIsY0FBOUIsQ0FBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLGFBQWEsQ0FBQ0csS0FBZCxHQUFzQkMsR0FBdEIsQ0FBMEIsQ0FBMUIsRUFBNkIsT0FBN0IsQ0FBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUd2QywrREFBQSxDQUFnQm9DLFdBQVcsQ0FBQ0ksSUFBWixDQUFpQk4sYUFBakIsQ0FBaEIsRUFBaURPLE9BQWpELEVBQWpCOztBQUVBLG1CQUEwQjVDLCtDQUFRLENBQUM7QUFDakM2QyxJQUFBQSxLQUFLLEVBQUUsMkJBRDBCO0FBRWpDQyxJQUFBQSxXQUFXLEVBQ1QsMkZBSCtCO0FBSWpDQyxJQUFBQSxRQUFRLEVBQUUsNkNBSnVCO0FBS2pDVixJQUFBQSxhQUFhLEVBQUVBLGFBQWEsQ0FBQ1csTUFBZCxDQUFxQixrQkFBckIsQ0FMa0I7QUFNakNULElBQUFBLFdBQVcsRUFBRUEsV0FBVyxDQUFDUyxNQUFaLENBQW1CLGtCQUFuQixDQU5vQjtBQU9qQ04sSUFBQUEsUUFBUSxFQUFSQTtBQVBpQyxHQUFELENBQWxDO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBVUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxRQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxPQUFiLFNBQWFBLE9BQWI7QUFBQSx3QkFDYjtBQUFHLGVBQVMsRUFBQyx3QkFBYjtBQUFzQyxhQUFPLEVBQUVBLE9BQS9DO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURhO0FBQUEsR0FBZjs7QUFLQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFFBQUdGLFFBQUgsU0FBR0EsUUFBSDtBQUFBLHdCQUNmO0FBQUksZUFBUyxFQUFDLHFDQUFkO0FBQUEsZ0JBQXFEQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGU7QUFBQSxHQUFqQjs7QUFHQSxNQUFNRyxxQkFBcUIsR0FBR3JELGtFQUFnQixDQUFDaUQsTUFBRCxFQUFTRyxRQUFULENBQTlDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBSyxFQUFDLFNBRlI7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUNFLFdBQUcsRUFBQyxNQUROO0FBRUUsWUFBSSxFQUFDLFdBRlA7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLFlBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVlFO0FBQ0UsV0FBRyxFQUFDLE1BRE47QUFFRSxZQUFJLEVBQUMsV0FGUDtBQUdFLGFBQUssRUFBQyxPQUhSO0FBSUUsWUFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBa0JFO0FBQU0sV0FBRyxFQUFDLFVBQVY7QUFBcUIsWUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUFvQkU7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGLGVBcUJFO0FBQU0saUJBQVMsRUFBQyxpQkFBaEI7QUFBa0MsZUFBTyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkYsZUF1QkU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQXdCRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGLGVBeUJFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGLGVBNkJFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkYsZUFnQ0U7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0YsZUFpQ0U7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0YsZUFrQ0U7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0YsZUFtQ0U7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsZUFvQ0U7QUFDRSxnQkFBUSxFQUFDLGdCQURYO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDRixlQXdDRTtBQUFNLFlBQUksRUFBQyxlQUFYO0FBQTJCLGVBQU8sRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENGLGVBeUNFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0YsZUEwQ0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDRixlQTJDRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBK0NFLCtEQUFDLG9EQUFEO0FBQ0UsY0FBUSxFQUFDLG1CQURYO0FBRUUsU0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DRixlQW9ERSwrREFBQyxvREFBRDtBQUFRLGNBQVEsRUFBQyxtQkFBakI7QUFBcUMsU0FBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwREYsZUFzREUsK0RBQUMsb0RBQUQ7QUFDRSxjQUFRLEVBQUMsbUJBRFg7QUFFRSxTQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdERGLGVBMkRFLCtEQUFDLG9EQUFEO0FBQVEsY0FBUSxFQUFDLG1CQUFqQjtBQUFxQyxTQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNERixlQTZERSwrREFBQyxvREFBRDtBQUNFLGNBQVEsRUFBQyxtQkFEWDtBQUVFLFNBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3REYsZUFrRUUsK0RBQUMsb0RBQUQ7QUFDRSxjQUFRLEVBQUMsbUJBRFg7QUFFRSxTQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEVGLGVBdUVFLCtEQUFDLG9EQUFEO0FBQVEsY0FBUSxFQUFDLG1CQUFqQjtBQUFxQyxTQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFRixlQTBFRSwrREFBQyxvREFBRDtBQUNFLGNBQVEsRUFBQyxtQkFEWDtBQUVFLFNBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExRUYsZUErRUUsK0RBQUMsb0RBQUQ7QUFDRSxjQUFRLEVBQUMsbUJBRFg7QUFFRSxTQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0VGLGVBbUZFLCtEQUFDLG9EQUFEO0FBQ0UsY0FBUSxFQUFDLG1CQURYO0FBRUUsU0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5GRixlQXdGRSwrREFBQyxvREFBRDtBQUNFLGNBQVEsRUFBQyxtQkFEWDtBQUVFLFNBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4RkYsZUE2RkUsK0RBQUMsb0RBQUQ7QUFBUSxjQUFRLEVBQUMsbUJBQWpCO0FBQXFDLFNBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0ZGLGVBOEZFLCtEQUFDLG9EQUFEO0FBQVEsUUFBRSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5RkYsZUFrSEU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEhGLGVBb0hFO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBQSw4QkFDRTtBQUNFLFVBQUUsRUFBQyxnQkFETDtBQUVFLGlCQUFTLEVBQUMsZUFGWjtBQUdFLFlBQUksRUFBQyxRQUhQO0FBSUUseUNBQThCLEtBSmhDO0FBQUEsZ0NBTUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVFFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHlCQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMsZ0NBQWY7QUFBQSwwQ0FDRTtBQUFJLDZCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQUssNkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsZUFJRTtBQUFJLDZCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQXlCRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLHVCQUFUO0FBQWlDLGVBQUcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkYsZUE0QkU7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxzQkFBVDtBQUFnQyxlQUFHLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBb0NFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsMEVBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVdFO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQVEsdUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEYsZUFnQkU7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENGLGVBa0VFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQWFFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFRixlQTJGRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBQyxtQkFBVDtBQUE0QixpQkFBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUMsa0JBQVQ7QUFBMkIsaUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU9FO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFDLG1CQUFUO0FBQTZCLGlCQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNGRixlQTZHRTtBQUFLLFVBQUUsRUFBQyxvQkFBUjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsZ0VBQWY7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQywyQkFBZjtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQyxzQkFBZDtBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBQyxhQUFkO0FBQUEsMENBQ0U7QUFDRSw2QkFBUyxFQUFDLGdCQURaO0FBRUUseUJBQUssRUFBRTtBQUFFRSxzQkFBQUEsZUFBZSxFQUFFO0FBQW5CO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUtFO0FBQUssNkJBQVMsRUFBQyxnQkFBZjtBQUFBLDRDQUNFO0FBQUssK0JBQVMsRUFBQyxrQkFBZjtBQUFBLDhDQUNFO0FBQUksaUNBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixlQUlFO0FBQU0saUNBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFPRTtBQUFLLCtCQUFTLEVBQUMsZUFBZjtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBdUJFO0FBQUksMkJBQVMsRUFBQywrQkFBZDtBQUFBLDBDQUNFO0FBQ0UsNkJBQVMsRUFBQyxnQkFEWjtBQUVFLHlCQUFLLEVBQUU7QUFBRUEsc0JBQUFBLGVBQWUsRUFBRTtBQUFuQjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFLRTtBQUFLLDZCQUFTLEVBQUMsZ0JBQWY7QUFBQSw0Q0FDRTtBQUFLLCtCQUFTLEVBQUMsa0JBQWY7QUFBQSw4Q0FDRTtBQUFJLGlDQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRTtBQUFNLGlDQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBS0U7QUFBSywrQkFBUyxFQUFDLGVBQWY7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF2QkYsZUE4Q0U7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSwwQ0FDRTtBQUNFLDZCQUFTLEVBQUMsZ0JBRFo7QUFFRSx5QkFBSyxFQUFFO0FBQUVBLHNCQUFBQSxlQUFlLEVBQUU7QUFBbkI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBS0U7QUFBSyw2QkFBUyxFQUFDLGdCQUFmO0FBQUEsNENBQ0U7QUFBSywrQkFBUyxFQUFDLGtCQUFmO0FBQUEsOENBQ0U7QUFBSSxpQ0FBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLGVBRUU7QUFBTSxpQ0FBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUtFO0FBQUssK0JBQVMsRUFBQyxlQUFmO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBOUNGLGVBa0VFO0FBQUksMkJBQVMsRUFBQywrQkFBZDtBQUFBLDBDQUNFO0FBQ0UsNkJBQVMsRUFBQyxnQkFEWjtBQUVFLHlCQUFLLEVBQUU7QUFBRUEsc0JBQUFBLGVBQWUsRUFBRTtBQUFuQjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFLRTtBQUFLLDZCQUFTLEVBQUMsZ0JBQWY7QUFBQSw0Q0FDRTtBQUFLLCtCQUFTLEVBQUMsa0JBQWY7QUFBQSw4Q0FDRTtBQUFJLGlDQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFFRTtBQUFNLGlDQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBS0U7QUFBSywrQkFBUyxFQUFDLGVBQWY7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdHRixlQTBORTtBQUFLLFVBQUUsRUFBQyxlQUFSO0FBQXdCLGlCQUFTLEVBQUMsb0JBQWxDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxnRUFBZjtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExTkYsZUEyT0U7QUFBUSxVQUFFLEVBQUMsY0FBWDtBQUEwQixZQUFJLEVBQUMsYUFBL0I7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFPLDJCQUFTLEVBQUMsT0FBakI7QUFBQSxzQ0FDVSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEVixPQUNxQyxFQURyQyxlQUVFLCtEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxrQkFBWDtBQUE4Qiw0QkFBUSxNQUF0QztBQUFBLDJDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFRRTtBQUFPLDJCQUFTLEVBQUMsT0FBakI7QUFBQSxrREFDb0IsR0FEcEIsZUFFRSwrREFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsdUJBQVg7QUFBbUMsNEJBQVEsTUFBM0M7QUFBQSwyQ0FDRTtBQUFHLDRCQUFNLEVBQUMsUUFBVjtBQUFtQix5QkFBRyxFQUFDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkYsZUFnQkU7QUFBTywyQkFBUyxFQUFDLE9BQWpCO0FBQUEsaURBQ21CLEdBRG5CLGVBRUUsK0RBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLDhCQUFYO0FBQTBDLDRCQUFRLE1BQWxEO0FBQUEsMkNBQ0U7QUFBRyw0QkFBTSxFQUFDLFFBQVY7QUFBbUIseUJBQUcsRUFBQyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCRixlQXdCRTtBQUFBLHVEQUN5QixHQUR6QixlQUVFLCtEQUFDLGtEQUFEO0FBQ0Usd0JBQUksRUFBQywyQ0FEUDtBQUVFLDRCQUFRLE1BRlY7QUFBQSwyQ0FJRTtBQUFHLDRCQUFNLEVBQUMsUUFBVjtBQUFtQix5QkFBRyxFQUFDLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQXFDRTtBQUFJLHlCQUFTLEVBQUMsb0JBQWQ7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFLCtEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxrQ0FBWDtBQUE4Qyw0QkFBUSxNQUF0RDtBQUFBLDJDQUNFO0FBQUcsNEJBQU0sRUFBQyxRQUFWO0FBQW1CLHlCQUFHLEVBQUMsWUFBdkI7QUFBQSw2Q0FDRTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBUUU7QUFBQSx5Q0FDRSwrREFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsb0NBQVg7QUFBZ0QsNEJBQVEsTUFBeEQ7QUFBQSwyQ0FDRTtBQUFHLDRCQUFNLEVBQUMsUUFBVjtBQUFtQix5QkFBRyxFQUFDLFlBQXZCO0FBQUEsNkNBQ0U7QUFBRyxpQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRixlQWVFO0FBQUEseUNBQ0UsK0RBQUMsa0RBQUQ7QUFDRSx3QkFBSSxFQUFDLDZCQURQO0FBRUUsNEJBQVEsTUFGVjtBQUFBLDJDQUlFO0FBQUcsNEJBQU0sRUFBQyxRQUFWO0FBQW1CLHlCQUFHLEVBQUMsWUFBdkI7QUFBQSw2Q0FDRTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWZGLGVBeUJFO0FBQUEseUNBQ0UsK0RBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLG9DQUFYO0FBQWdELDRCQUFRLE1BQXhEO0FBQUEsMkNBQ0U7QUFBRyw0QkFBTSxFQUFDLFFBQVY7QUFBbUIseUJBQUcsRUFBQyxZQUF2QjtBQUFBLDZDQUNFO0FBQUcsaUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBekJGLGVBZ0NFO0FBQUEseUNBQ0UsK0RBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLDhCQUFYO0FBQTBDLDRCQUFRLE1BQWxEO0FBQUEsMkNBQ0U7QUFBRyw0QkFBTSxFQUFDLFFBQVY7QUFBbUIseUJBQUcsRUFBQyxZQUF2QjtBQUFBLDZDQUNFO0FBQUcsaUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaENGLGVBdUNFO0FBQUEseUNBQ0UsK0RBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLGtCQUFYO0FBQThCLDRCQUFRLE1BQXRDO0FBQUEsMkNBQ0U7QUFBQSw2Q0FDRTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNPRixlQXdVRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyxVQUF0QjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhVRixlQStVRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNFO0FBQUcsaUJBQU8sRUFBRWhELE1BQVo7QUFBQSxvQkFDR0YsT0FBTyxnQkFDTjtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNLGdCQUdOO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9VRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwSEY7QUFBQSxrQkFERjtBQWdkRDs7SUE1ZXVCNEI7VUFDSWhDOzs7S0FESmdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWcgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkVG9DYWxlbmRhckhPQyBmcm9tIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyLWhvY1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuXHJcbmNvbnN0IHVzZUF1ZGlvID0gKHVybCkgPT4ge1xyXG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldFBsYXlpbmcoIXBsYXlpbmcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlTXVzaWMgPSBhc3luYyAoKSA9PlxyXG4gICAgICBwbGF5aW5nID8gYXdhaXQgYXVkaW8ucGxheSgpIDogYXdhaXQgYXVkaW8ucGF1c2UoKTtcclxuXHJcbiAgICBpZiAoYXVkaW8pIHtcclxuICAgICAgdG9nZ2xlTXVzaWMoKTtcclxuICAgIH1cclxuICB9LCBbcGxheWluZywgYXVkaW9dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXVkaW8pIHtcclxuICAgICAgc2V0QXVkaW8obmV3IEF1ZGlvKHVybCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGF1ZGlvKSB7XHJcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCAoKSA9PiBzZXRQbGF5aW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoYXVkaW8pIHtcclxuICAgICAgICBhdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgKCkgPT4gc2V0UGxheWluZyhmYWxzZSkpO1xyXG4gICAgICAgIHNldEF1ZGlvKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFthdWRpbywgdXJsXSk7XHJcblxyXG4gIHJldHVybiBbcGxheWluZywgdG9nZ2xlXTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEZvcm0oZSwgcGFyYW1zLCBzZXROYW1lID0gbnVsbCkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaWYgKHBhcmFtcyAmJiBwYXJhbXMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgaWYgKCFCb29sZWFuKHBhcmFtcy5uYW1lKSkge1xyXG4gICAgICBhbGVydChcIkhhcmFwIGlzaSBuYW1hXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9hdHRlbmRgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgc2V0TmFtZShcIlwiKTtcclxuICAgICAgYWxlcnQoXCJUZXJpbWEga2FzaWggdGVsYWggbWVuZ2lzaSBcIiArIHBhcmFtcy5uYW1lIHx8IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MjkpIHtcclxuICAgICAgYWxlcnQoXCJNYWFmLCBrYW11IHN1ZGFoIG1lbmdpc2kgbmFtYVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3BsYXlpbmcsIHRvZ2dsZV0gPSB1c2VBdWRpbyhcIi9tdXNpYy93ZWRkaW5nLm1wM1wiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3RhcnREYXRldGltZSA9IG1vbWVudChcIjIwMjEtMTAtMTAgMTM6MDBcIikudHooXCJBc2lhL0pha2FydGFcIik7XHJcbiAgY29uc3QgZW5kRGF0ZXRpbWUgPSBzdGFydERhdGV0aW1lLmNsb25lKCkuYWRkKDQsIFwiaG91cnNcIik7XHJcbiAgY29uc3QgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24oZW5kRGF0ZXRpbWUuZGlmZihzdGFydERhdGV0aW1lKSkuYXNIb3VycygpO1xyXG5cclxuICBjb25zdCBbZXZlbnQsIHNldEV2ZW50XSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiBcIkFjYXJhIE5pa2FoIFJpYW50aSAmIEFmaWZcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkV2ZW50IGFjYXJhIHJlc2Vwc2kgbmlrYWggcmlhbnRpICYgYWZpZiB5YW5nIGRpc2VsZW5nZ2FyYWthbiBwYWRhIHRhbmdnYWwgMTAgb2t0b2JlciAyMDIxXCIsXHJcbiAgICBsb2NhdGlvbjogXCJKbC4gUGxvc28gSVgtQSBuby4gMTAsIFN1cmFiYXlhLCBKYXdhIFRpbXVyXCIsXHJcbiAgICBzdGFydERhdGV0aW1lOiBzdGFydERhdGV0aW1lLmZvcm1hdChcIllZWVlNTUREVEhIbW1zc1pcIiksXHJcbiAgICBlbmREYXRldGltZTogZW5kRGF0ZXRpbWUuZm9ybWF0KFwiWVlZWU1NRERUSEhtbXNzWlwiKSxcclxuICAgIGR1cmF0aW9uLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgb25DbGljayB9KSA9PiAoXHJcbiAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApO1xyXG4gIGNvbnN0IERyb3Bkb3duID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duIGFuaW1hdGVkLWZhc3QgZmFkZUluVXBNZW51XCI+e2NoaWxkcmVufTwvdWw+XHJcbiAgKTtcclxuICBjb25zdCBBZGRUb0NhbGVuZGFyRHJvcGRvd24gPSBBZGRUb0NhbGVuZGFySE9DKEJ1dHRvbiwgRHJvcGRvd24pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxyXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcclxuICAgICAgICAgIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcclxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIj48L2xpbms+XHJcblxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5Cb2RhICZtZGFzaDsgTWlrYSAmIFJhbWk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJpYW50aSAmIEFmaWYgV2VkZGluZyBXZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJhZmlmLCByaWFudGksIHdlZGRpbmcsIG5pa2FoLCBrYXdpbiwgbmlrYWhhbiwgYWZpZiBhYmRpbGxhaCBqdXN1ZiwgcmlhbnRpIGR3aSBsZXN0YXJpLCBha2FkLCBha2FkIG5pa2FoLCBsYW5kaW5nIHBhZ2UsIHJlc2Vwc2ksIHJlc2Vwc2kgbmlrYWhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJhZmlmLmRldlwiIC8+XHJcblxyXG4gICAgICAgIHsvKiBGYWNlYm9vayBhbmQgVHdpdHRlciBpbnRlZ3JhdGlvbiAqL31cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIldlZGRpbmcgLSBSaWFudGkgJiBBZmlmXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93ZWRkaW5nLmFmaWYuZGV2L1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiUmlhbnRpICYgQWZpZiBXZWRkaW5nIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJSaWFudGkgJiBBZmlmIFdlZGRpbmcgV2Vic2l0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJXZWRkaW5nIC0gUmlhbnRpICYgQWZpZlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93ZWRkaW5nLmFmaWYuZGV2L1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiBtb2Rlcm5penIgKi99XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvbW9kZXJuaXpyLTIuNi4yLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIGpRdWVyeSAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL2pxdWVyeS5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIGpRdWVyeSBFYXNpbmcgKi99XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvanF1ZXJ5LmVhc2luZy4xLjMuanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBCb290c3RyYXAgKi99XHJcbiAgICAgIDxTY3JpcHQgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiIHNyYz1cIi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBXYXlwb2ludHMgKi99XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvanF1ZXJ5LndheXBvaW50cy5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBDYXJvdXNlbCAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9vd2wuY2Fyb3VzZWwubWluLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8gY291bnRUbyAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL2pxdWVyeS5jb3VudFRvLmpzXCI+PC9TY3JpcHQ+XHJcblxyXG4gICAgICB7LyogLy8gU3RlbGxhciAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkuc3RlbGxhci5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBNYWduaWZpYyBQb3B1cCAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkubWFnbmlmaWMtcG9wdXAubWluLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL21hZ25pZmljLXBvcHVwLW9wdGlvbnMuanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcblxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL3NpbXBseUNvdW50ZG93bi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIE1haW4gKi99XHJcbiAgICAgIDxTY3JpcHQgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiIHNyYz1cIi9qcy9tYWluLmpzXCI+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHQgaWQ9XCJteS1zY3JpcHRcIj5cclxuICAgICAgICB7YFxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoXCIyMDI0LTEwLTEwXCIpO1xyXG5cclxuICAgICAgICAvLyBkZWZhdWx0IGV4YW1wbGVcclxuICAgICAgICBzaW1wbHlDb3VudGRvd24oJy5zaW1wbHktY291bnRkb3duLW9uZScsIHtcclxuICAgICAgICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtb250aDogZC5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgZGF5OiBkLmdldERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2pRdWVyeSBleGFtcGxlXHJcbiAgICAgICAgJCgnI3NpbXBseS1jb3VudGRvd24tbG9zYW5nZScpLnNpbXBseUNvdW50ZG93bih7XHJcbiAgICAgICAgICAgIHllYXI6IGQuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgbW9udGg6IGQuZ2V0TW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIGRheTogZC5nZXREYXRlKCksXHJcbiAgICAgICAgICAgIGVuYWJsZVV0YzogZmFsc2VcclxuICAgICAgICB9KTtgfVxyXG4gICAgICA8L1NjcmlwdD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmg1Y28tbG9hZGVyXCIgLz5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlXCI+XHJcbiAgICAgICAgPGhlYWRlclxyXG4gICAgICAgICAgaWQ9XCJ3ZWRkaW5nLWhlYWRlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3ZWRkaW5nLWNvdmVyXCJcclxuICAgICAgICAgIHJvbGU9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgZGF0YS1zdGVsbGFyLWJhY2tncm91bmQtcmF0aW89XCIwLjVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VkZGluZy1vdmVybGF5XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLWNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS10YWJsZS1jZWxsIGFuaW1hdGUtYm94XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWRkaW5nLXRpdGxlXCI+TWlrYSAmIFJhbWk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2VkZGluZy1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb21vIGxsYW1hIGRpdmluYSBlcyBlbCBmdWVnbyBhcmRpZW50ZSBkZWwgYW1vci4gTmkgbGFzIG11Y2hhcyBhZ3VhcyBwdWVkZW4gYXBhZ2FybG8sIG5pIGxvcyByw61vcyBwdWVkZW4gZXh0aW5ndWlybG9cIiBDYW50YXJlcyA4OjZcclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucmlnaHQucG5nXCIgYWx0PVwiTGVmdCBJY29uXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ubGVmdC5wbmdcIiBhbHQ9XCJSaWdodCBJY29uXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52aXRhdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxPkNlcmVtb25pYSB5IEZpZXN0YTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxoMj5Ew61hPC9oMj5cclxuICAgICAgICAgICAgICA8cD5Tw6FiYWRvIDQgZGUgbm92aWVtYnJlIGRlIDIwMjM8YnIgLz4yMDoxNSBoczwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uPkFHRU5EQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGgyPkx1Z2FyPC9oMj5cclxuICAgICAgICAgICAgICA8cD5TYWzDs24gTWFyw61hIEx1aXNhPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+Q09ORklSTUFSIEFTSVNURU5DSUE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGgyPkRpcmVjY2nDs248L2gyPlxyXG4gICAgICAgICAgICAgIDxwPkF2LiBCYXJ0b2xvbcOpIGRlIENhc3RybyAyMTAwLCBDYXRhbWFyY2E8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbmFjdGl2ZVwiPsK/Q8OTTU8gTExFR0FSPzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8aDI+VGFyamV0YTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+Q29ub2NlIHRvZG9zIGxvcyBkZXRhbGxlcyBzb2JyZSBsYSB0YXJqZXRhPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+VkVSIE3DgVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydHktZGV0YWlscy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5GaWVzdGE8L2gxPlxyXG4gICAgICAgICAgPHA+SGFnYW1vcyBqdW50b3MgdW5hIGZpZXN0YSDDqXBpY2EuIEFxdcOtIGFsZ3Vub3MgZGV0YWxsZXMgYSB0ZW5lciBlbiBjdWVudGEuPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0eS1kZXRhaWxzLWNhcmRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBtdXNpYy1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyPk3DunNpY2E8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPsK/Q3XDoWwgZXMgbGEgY2FuY2nDs24gcXVlIG5vIGRlYmUgZmFsdGFyIGVuIGxhIFBsYXlMaXN0IGRlIGxhIGZpZXN0YT88L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5TVUdFUklSIENBTkNJw5NOPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZHJlc3MtY29kZS1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyPkRyZXNzIENvZGU8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlVuYSBvcmllbnRhY2nDs24gcGFyYSB0dSB2ZXN0dWFyaW88L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5WRVIgTcOBUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRpcHMtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5UaXBzIHkgTm90YXM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPkluZm9ybWFjacOzbiBhZGljaW9uYWwgcGFyYSB0ZW5lciBlbiBjdWVudGE8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj4rIElORk88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb3ZlLXBvcnRyYWl0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5SZXRyYXRvcyBkZSBOdWVzdHJvIEFtb3I8L2gxPlxyXG4gICAgICAgICAgPHA+VW4gbWludXRvLCB1biBzZWd1bmRvLCB1biBpbnN0YW50ZSBxdWUgcXVlZGEgZW4gbGEgZXRlcm5pZGFkPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxpbWcxLmpwZWdcIiBhbHQ9XCJGb3RvIDFcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzXFxiZzIuanBlZ1wiIGFsdD1cIkZvdG8gMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZzMuanBlZ1wiIGFsdD1cIkZvdG8gM1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICB7LyogY291cGxlIHN0b3J5ICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJmaDVjby1jb3VwbGUtc3RvcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTIgdGV4dC1jZW50ZXIgZmg1Y28taGVhZGluZyBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNlcml0YSBLYW1pPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBQZXJqYWxhbmFuIHNpbmdrYXQga2FtaSBtdWxhaSBzYWF0IHBlcnRhbWEga2FsaSBrZW5hbCwgYmVydGVtdVxyXG4gICAgICAgICAgICAgICAgICBrZW1iYWxpLCBoaW5nZ2EgbWVuamFkaSBwYXNhbmdhbiBzYWguXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1tZC1vZmZzZXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRpbWVsaW5lIGFuaW1hdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lLWJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltYWdlcy9jb3VwbGUtMS5qcGcpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aW1lbGluZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhYXQgSmFkaSBUZW1hbiBTZWtlbGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4yMDEyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGkgc2Vrb2xhaCBTTVBOIDM3IFN1cmFiYXlhLCBLYW1pIG1lbmphZGkgdGVtYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWtlbGFzLCB5YWl0dSBzYWF0IG1lbWFzdWtpIGtlbGFzIDkgeWFuZyBkaW1hbmEgc2FhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0dSB0YWh1biBhamFyYW5ueWEgYWRhbGFoIDIwMTIuIEthbWkgdGlkYWsgYmVnaXR1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWtyYWIsIGhhbnlhIHNla2VkYXIga2VuYWwgc2FqYS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lbGluZS1pbnZlcnRlZCBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lLWJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltYWdlcy9jb3VwbGUtMi5qcGcpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aW1lbGluZS10aXRsZVwiPktldGVtdSBMYWdpPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPkRlc2VtYmVyIDIwMTc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBLYW1pIGRpcGVydGVtdWthbiBrZW1iYWxpIHBhZGEgdGVtcGF0IGtlcmphIHlhbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZXJzZWJlbGFoYW4sIHRlbXBhdCBrZXJqYSBrYW1pIGhhbnlhIGJlZGEgZ2VkdW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FqYS4gU2FhdCBpdHUgQWZpZiBiZXJ0ZW1wYXQga2VyamEgZGkgR3JhaGEgQnVtaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1cmFiYXlhLCBzZWRhbmdrYW4gUmlhbnRpIGJlcnRlbXBhdCBrZXJqYSBkaSBIb3RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJ1bWkgU3VyYWJheWEuIEthbWkgbXVsYWkgYmVya2VuYWxhbiBkYW4gc2FsaW5nIHNhcGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXdhdCBzb3NpYWwgbWVkaWEuIERpc2luaWxhaCBhd2FsIGthbWkgbXVsYWkgUERLVCBkYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZXJwYWNhcmFuIDopLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFuaW1hdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGltZWxpbmUtYmFkZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1hZ2VzL2NvdXBsZS0zLmpwZylcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbWVsaW5lLXRpdGxlXCI+TGFtYXJhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4yMCBEZXNlbWJlciAyMDIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMyB0YWh1biBsYW1hbnlhIGthbWkgYmVycGFjYXJhbiBkYW4gbXVsYWkgbWVtdXR1c2thblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVudHVrIGtlIGxhbmdrYWggeWFuZyBsZWJpaCBqYXVoIGxhZ2kuIEFmaWYgbXVsYWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZXJuaWF0IG1lbGFtYXIgcGFzYW5nYW5ueWEsIFJpYW50aSBkZW5nYW4gYmlzbWlsbGFoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGF3YWthbGxhaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpbWVsaW5lLWludmVydGVkIGFuaW1hdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGltZWxpbmUtYmFkZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1hZ2VzL2NvdXBsZS00LmpwZylcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpbWVsaW5lLXRpdGxlXCI+QWthZCBOaWthaDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj4xNSBKdWxpIDIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBbGhhbWR1bGlsbGFoLCBkZW5nYW4gcmlkaG8gQWxsYWggU1dULCBBZmlmIG1lbGFuZ2thaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlYmloIGphdWggbGFnaSBkZW5nYW4gbWVtaW5hbmcgcGFzYW5nYW5ueWEsIFJpYW50aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbmphZGkgaXN0cmkgc2FoLiBCYW55YWsgcmludGFuZ2FuIHlhbmcga2FtaSBoYWRhcGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsYWggc2F0dW55YSBrb25kaXNpIHBhbmRlbWkgQ292aWQtMTkgeWFuZyBsYWdpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGluZ2dpIHNhYXQgaXR1LCBoYXJ1cyBtZWxha3VrYW4gc3lhcmF0IGRhbiBhbmp1cmFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVtZXJpbnRhaCBkZW5nYW4gb3JhbmcgeWFuZyB0ZXJiYXRhcy4gQWthbiB0ZXRhcGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWxoYW1kdWxpbGxhaCBhY2FyYSBiZXJqYWxhbiBkZW5nYW4gbGFuY2FyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEdhbGxlcnkgQ29taW5nIFNvb24gKE5nZW50ZW5pIFBvc3QgV2VkZGluZyBkaXNpaykgKi99XHJcbiAgICAgICAgPGRpdiBpZD1cImZoNWNvLWdhbGxlcnlcIiBjbGFzc05hbWU9XCJmaDVjby1zZWN0aW9uLWdyYXlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTIgdGV4dC1jZW50ZXIgZmg1Y28taGVhZGluZyBhbmltYXRlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkZvdG8gRm90bzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db21pbmcgU29vbiE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4oRGl0dW5nZ3UgeWEsIGtpdGEgYmVsdW0gZm90byBwb3N0IHdlZGRpbmdueWEpPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgey8qIGZvb3RlciAqL31cclxuICAgICAgICA8Zm9vdGVyIGlkPVwiZmg1Y28tZm9vdGVyXCIgcm9sZT1cImNvbnRlbnRpbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb3B5cmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSB7XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9hZmlmLmRldlwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+YWZpZi5kZXY8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzIGZvciBEZXNpZ257XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZnJlZWh0bWw1LmNvL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGUkVFSFRNTDUuY29cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcyBmb3IgTXVzaWN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvX3BSX2NXNGJEZUVcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5ndSBGZWF0LiBBbmRpZW4gLSBTYWF0IEJhaGFnaWEgfCBWQyBUcmluaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzIGZvciBCYWNrZ3JvdW5kc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3Bob3Rvcy9iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCYWNrZ3JvdW5kIHBob3RvIGNyZWF0ZWQgYnkgamNvbXAgLSB3d3cuZnJlZXBpay5jb21cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmg1Y28tc29jaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9idW5nYW1ib2hsYWhcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2luc3RhZ3IuYW0vYWZpZi5hYmRpbGxhaC5qXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYi5tZS9hZmlmYWJkaWxsYWhqXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWZhY2Vib29rXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2xpbmtlZGluLmNvbS9pbi9hZmlmanVzdWYvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbGlua2VkaW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8veW91dHViZS5jb20vQGFmaWZkZXZcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi15b3V0dWJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2FmaWYuZGV2XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nbG9iZTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgey8qIGdvIHRvIHRvcCBidXR0b24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3RvdG9wIGpzLXRvcFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJqcy1nb3RvcFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogbXVzaWMgYnV0dG9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVzaWNidG5cIj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgIHtwbGF5aW5nID8gKFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGF1c2VcIj48L2k+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1wbGF5XCI+PC9pPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIlNjcmlwdCIsIkltZyIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWRkVG9DYWxlbmRhckhPQyIsIm1vbWVudCIsInVzZUF1ZGlvIiwidXJsIiwiYXVkaW8iLCJzZXRBdWRpbyIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwidG9nZ2xlIiwidG9nZ2xlTXVzaWMiLCJwbGF5IiwicGF1c2UiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VibWl0Rm9ybSIsImUiLCJwYXJhbXMiLCJzZXROYW1lIiwicHJldmVudERlZmF1bHQiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsIkJvb2xlYW4iLCJuYW1lIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwic3RhdHVzIiwiSG9tZSIsInN0YXJ0RGF0ZXRpbWUiLCJ0eiIsImVuZERhdGV0aW1lIiwiY2xvbmUiLCJhZGQiLCJkdXJhdGlvbiIsImRpZmYiLCJhc0hvdXJzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiZm9ybWF0IiwiZXZlbnQiLCJzZXRFdmVudCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsIkRyb3Bkb3duIiwiQWRkVG9DYWxlbmRhckRyb3Bkb3duIiwiYmFja2dyb3VuZEltYWdlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==