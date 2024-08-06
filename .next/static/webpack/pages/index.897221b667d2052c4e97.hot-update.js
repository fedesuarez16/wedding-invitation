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

var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
    modalContent = _useState3[0],
    setModalContent = _useState3[1];

var openModal = function openModal(content) {
  return setModalContent(content);
};

var closeModal = function closeModal() {
  return setModalContent(null);
};

var modalData = {
  dressCode: {
    title: "Dress Code",
    content: "Formal attire is required."
  },
  tipsNotas: {
    title: "Tips y Notas",
    content: "Be sure to arrive on time and enjoy the celebration."
  }
};

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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      name = _useState4[0],
      setName = _useState4[1];

  var startDatetime = moment_timezone__WEBPACK_IMPORTED_MODULE_9___default()("2021-10-10 13:00").tz("Asia/Jakarta");
  var endDatetime = startDatetime.clone().add(4, "hours");
  var duration = moment_timezone__WEBPACK_IMPORTED_MODULE_9___default().duration(endDatetime.diff(startDatetime)).asHours();

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    title: "Acara Nikah Rianti & Afif",
    description: "Event acara resepsi nikah rianti & afif yang diselenggarakan pada tanggal 10 oktober 2021",
    location: "Jl. Ploso IX-A no. 10, Surabaya, Jawa Timur",
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    duration: duration
  }),
      event = _useState5[0],
      setEvent = _useState5[1];

  var Button = function Button(_ref2) {
    var children = _ref2.children,
        onClick = _ref2.onClick;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
      className: "btn btn-default btn-sm",
      onClick: onClick,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 116,
      columnNumber: 5
    }, _this);
  };

  var AddToCalendarDropdown = (0,react_add_to_calendar_hoc__WEBPACK_IMPORTED_MODULE_8__.default)(Button, Dropdown);

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      modalContent = _useState6[0],
      setModalContent = _useState6[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Boda \u2014 Mika & Rami"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "description",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "keywords",
        content: "afif, rianti, wedding, nikah, kawin, nikahan, afif abdillah jusuf, rianti dwi lestari, akad, akad nikah, landing page, resepsi, resepsi nikah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "author",
        content: "afif.dev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:title",
        content: "Wedding - Rianti & Afif"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://wedding.afif.dev/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        property: "og:description",
        content: "Rianti & Afif Wedding Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Wedding - Rianti & Afif"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:url",
        content: "https://wedding.afif.dev/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "twitter:card",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/modernizr-2.6.2.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.easing.1.3.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.waypoints.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/owl.carousel.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.countTo.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.stellar.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/jquery.magnific-popup.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/magnific-popup-options.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/simplyCountdown.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      strategy: "beforeInteractive",
      src: "/js/main.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "my-script",
      children: "\n        var d = new Date(\"2024-10-10\");\n\n        // default example\n        simplyCountdown('.simply-countdown-one', {\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate()\n        });\n\n        //jQuery example\n        $('#simply-countdown-losange').simplyCountdown({\n            year: d.getFullYear(),\n            month: d.getMonth() + 1,\n            day: d.getDate(),\n            enableUtc: false\n        });"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "fh5co-loader"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
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
          lineNumber: 248,
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
                    lineNumber: 255,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                    className: "divider"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
                    className: "wedding-subtitle",
                    children: "\"Como llama divina es el fuego ardiente del amor. Ni las muchas aguas pueden apagarlo, ni los r\xEDos pueden extinguirlo\" Cantares 8:6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconright.png",
            alt: "Left Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "icon-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: "/images/iconleft.png",
            alt: "Right Icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "invitation-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            children: "Ceremonia y Fiesta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "D\xEDa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: ["S\xE1bado 4 de noviembre de 2023", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 47
              }, this), "20:15 hs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "AGENDAR"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Lugar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Sal\xF3n Mar\xEDa Luisa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "CONFIRMAR ASISTENCIA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Direcci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Av. Bartolom\xE9 de Castro 2100, Catamarca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              className: "inactive",
              children: "\xBFC\xD3MO LLEGAR?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "detail",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Conoce todos los detalles sobre la tarjeta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "party-details-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Fiesta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Hagamos juntos una fiesta \xE9pica. Aqu\xED algunos detalles a tener en cuenta."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "party-details-cards",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon music-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "M\xFAsica"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "\xBFCu\xE1l es la canci\xF3n que no debe faltar en la PlayList de la fiesta?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              children: "SUGERIR CANCI\xD3N"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon dress-code-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Dress Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Una orientaci\xF3n para tu vestuario"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              className: "button",
              onClick: function onClick() {
                return openModal(modalData.dressCode);
              },
              children: "VER M\xC1S"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "icon tips-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
              children: "Tips y Notas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
              children: "Informaci\xF3n adicional para tener en cuenta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              onClick: function onClick() {
                return openModal(modalData.tipsNotas);
              },
              children: "+ INFO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }, this), modalContent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "modal fade in",
        tabIndex: "-1",
        role: "dialog",
        style: {
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "modal-dialog",
          role: "document",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "modal-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "modal-header",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
                type: "button",
                className: "close",
                onClick: closeModal,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h4", {
                className: "modal-title",
                children: modalContent.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "modal-body",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: modalContent.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "modal-footer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
                type: "button",
                className: "btn btn-default",
                onClick: closeModal,
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "love-portraits-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "Retratos de Nuestro Amor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Un minuto, un segundo, un instante que queda en la eternidad"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
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
              lineNumber: 359,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "images\\bg2.jpeg",
              alt: "Foto 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "photo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "/images/img3.jpeg",
              alt: "Foto 3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 354,
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
                children: "Confirma tu asistencia!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "Coming Soon!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
                children: "(Ditunggu ya, kita belum foto post weddingnya)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
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
                      lineNumber: 398,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 397,
                    columnNumber: 21
                  }, this), ". All Rights Reserved."]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 395,
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
                      lineNumber: 405,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
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
                      lineNumber: 413,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 412,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
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
                      lineNumber: 424,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 420,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 394,
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
                        lineNumber: 434,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 433,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 432,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 431,
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
                        lineNumber: 441,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 440,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 439,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 438,
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
                        lineNumber: 451,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 450,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 446,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
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
                        lineNumber: 458,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 457,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 456,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
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
                        lineNumber: 465,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 464,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 463,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 462,
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
                        lineNumber: 472,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 471,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 470,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 390,
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
            lineNumber: 485,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "musicbtn",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          onClick: toggle,
          children: playing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-pause"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
            className: "icon-play"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Home, "uCawjg6oa3CdkNEOignfzYUhK9s=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODk3MjIxYjY2N2QyMDUyYzRlOTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFBQTs7QUFDeEIsa0JBQTBCTCwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPTSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJQLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBR0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEdBQWY7O0FBS0FQLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLFdBQVc7QUFBQSxxUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2xCSCxPQURrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUNGRixLQUFLLENBQUNNLElBQU4sRUFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBQ21CTixLQUFLLENBQUNPLEtBQU4sRUFEbkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVhGLFdBQVc7QUFBQTtBQUFBO0FBQUEsT0FBakI7O0FBR0EsUUFBSUwsS0FBSixFQUFXO0FBQ1RLLE1BQUFBLFdBQVc7QUFDWjtBQUNGLEdBUFEsRUFPTixDQUFDSCxPQUFELEVBQVVGLEtBQVYsQ0FQTSxDQUFUO0FBU0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUks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RixlQWtQRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyxVQUF0QjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxQRixlQXlQRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNFO0FBQUcsaUJBQU8sRUFBRXpELE1BQVo7QUFBQSxvQkFDR0YsT0FBTyxnQkFDTjtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNLGdCQUdOO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwSEY7QUFBQSxrQkFERjtBQTBYRDs7SUExWnVCcUM7VUFDSXpDOzs7S0FESnlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWcgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkVG9DYWxlbmRhckhPQyBmcm9tIFwicmVhY3QtYWRkLXRvLWNhbGVuZGFyLWhvY1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuXHJcbmNvbnN0IHVzZUF1ZGlvID0gKHVybCkgPT4ge1xyXG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcclxuXHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZU11c2ljID0gYXN5bmMgKCkgPT5cclxuICAgICAgcGxheWluZyA/IGF3YWl0IGF1ZGlvLnBsYXkoKSA6IGF3YWl0IGF1ZGlvLnBhdXNlKCk7XHJcblxyXG4gICAgaWYgKGF1ZGlvKSB7XHJcbiAgICAgIHRvZ2dsZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgfSwgW3BsYXlpbmcsIGF1ZGlvXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWF1ZGlvKSB7XHJcbiAgICAgIHNldEF1ZGlvKG5ldyBBdWRpbyh1cmwpKTtcclxuICAgIH1cclxuICAgIGlmIChhdWRpbykge1xyXG4gICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgKCkgPT4gc2V0UGxheWluZyhmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGF1ZGlvKSB7XHJcbiAgICAgICAgYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsICgpID0+IHNldFBsYXlpbmcoZmFsc2UpKTtcclxuICAgICAgICBzZXRBdWRpbyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbYXVkaW8sIHVybF0pO1xyXG5cclxuICByZXR1cm4gW3BsYXlpbmcsIHRvZ2dsZV07XHJcbn07XHJcblxyXG5jb25zdCBbbW9kYWxDb250ZW50LCBzZXRNb2RhbENvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5jb25zdCBvcGVuTW9kYWwgPSAoY29udGVudCkgPT4gc2V0TW9kYWxDb250ZW50KGNvbnRlbnQpO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxDb250ZW50KG51bGwpO1xyXG5cclxuY29uc3QgbW9kYWxEYXRhID0ge1xyXG4gIGRyZXNzQ29kZToge1xyXG4gICAgdGl0bGU6IFwiRHJlc3MgQ29kZVwiLFxyXG4gICAgY29udGVudDogXCJGb3JtYWwgYXR0aXJlIGlzIHJlcXVpcmVkLlwiLFxyXG4gIH0sXHJcbiAgdGlwc05vdGFzOiB7XHJcbiAgICB0aXRsZTogXCJUaXBzIHkgTm90YXNcIixcclxuICAgIGNvbnRlbnQ6IFwiQmUgc3VyZSB0byBhcnJpdmUgb24gdGltZSBhbmQgZW5qb3kgdGhlIGNlbGVicmF0aW9uLlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdWJtaXRGb3JtKGUsIHBhcmFtcywgc2V0TmFtZSA9IG51bGwpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgIGlmICghQm9vbGVhbihwYXJhbXMubmFtZSkpIHtcclxuICAgICAgYWxlcnQoXCJIYXJhcCBpc2kgbmFtYVwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYXR0ZW5kYCwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHNldE5hbWUoXCJcIik7XHJcbiAgICAgIGFsZXJ0KFwiVGVyaW1hIGthc2loIHRlbGFoIG1lbmdpc2kgXCIgKyBwYXJhbXMubmFtZSB8fCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDI5KSB7XHJcbiAgICAgIGFsZXJ0KFwiTWFhZiwga2FtdSBzdWRhaCBtZW5naXNpIG5hbWFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwbGF5aW5nLCB0b2dnbGVdID0gdXNlQXVkaW8oXCIvbXVzaWMvd2VkZGluZy5tcDNcIik7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN0YXJ0RGF0ZXRpbWUgPSBtb21lbnQoXCIyMDIxLTEwLTEwIDEzOjAwXCIpLnR6KFwiQXNpYS9KYWthcnRhXCIpO1xyXG4gIGNvbnN0IGVuZERhdGV0aW1lID0gc3RhcnREYXRldGltZS5jbG9uZSgpLmFkZCg0LCBcImhvdXJzXCIpO1xyXG4gIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKGVuZERhdGV0aW1lLmRpZmYoc3RhcnREYXRldGltZSkpLmFzSG91cnMoKTtcclxuXHJcbiAgY29uc3QgW2V2ZW50LCBzZXRFdmVudF0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJBY2FyYSBOaWthaCBSaWFudGkgJiBBZmlmXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJFdmVudCBhY2FyYSByZXNlcHNpIG5pa2FoIHJpYW50aSAmIGFmaWYgeWFuZyBkaXNlbGVuZ2dhcmFrYW4gcGFkYSB0YW5nZ2FsIDEwIG9rdG9iZXIgMjAyMVwiLFxyXG4gICAgbG9jYXRpb246IFwiSmwuIFBsb3NvIElYLUEgbm8uIDEwLCBTdXJhYmF5YSwgSmF3YSBUaW11clwiLFxyXG4gICAgc3RhcnREYXRldGltZTogc3RhcnREYXRldGltZS5mb3JtYXQoXCJZWVlZTU1ERFRISG1tc3NaXCIpLFxyXG4gICAgZW5kRGF0ZXRpbWU6IGVuZERhdGV0aW1lLmZvcm1hdChcIllZWVlNTUREVEhIbW1zc1pcIiksXHJcbiAgICBkdXJhdGlvbixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIG9uQ2xpY2sgfSkgPT4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxuICBjb25zdCBEcm9wZG93biA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93biBhbmltYXRlZC1mYXN0IGZhZGVJblVwTWVudVwiPntjaGlsZHJlbn08L3VsPlxyXG4gICk7XHJcbiAgY29uc3QgQWRkVG9DYWxlbmRhckRyb3Bkb3duID0gQWRkVG9DYWxlbmRhckhPQyhCdXR0b24sIERyb3Bkb3duKTtcclxuXHJcbiAgY29uc3QgW21vZGFsQ29udGVudCwgc2V0TW9kYWxDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXHJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxyXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxyXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiPjwvbGluaz5cclxuXHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkJvZGEgJm1kYXNoOyBNaWthICYgUmFtaTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmlhbnRpICYgQWZpZiBXZWRkaW5nIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgICAgY29udGVudD1cImFmaWYsIHJpYW50aSwgd2VkZGluZywgbmlrYWgsIGthd2luLCBuaWthaGFuLCBhZmlmIGFiZGlsbGFoIGp1c3VmLCByaWFudGkgZHdpIGxlc3RhcmksIGFrYWQsIGFrYWQgbmlrYWgsIGxhbmRpbmcgcGFnZSwgcmVzZXBzaSwgcmVzZXBzaSBuaWthaFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImFmaWYuZGV2XCIgLz5cclxuXHJcbiAgICAgICAgey8qIEZhY2Vib29rIGFuZCBUd2l0dGVyIGludGVncmF0aW9uICovfVxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiV2VkZGluZyAtIFJpYW50aSAmIEFmaWZcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dlZGRpbmcuYWZpZi5kZXYvXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJSaWFudGkgJiBBZmlmIFdlZGRpbmcgV2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIlJpYW50aSAmIEFmaWYgV2VkZGluZyBXZWJzaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIldlZGRpbmcgLSBSaWFudGkgJiBBZmlmXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dlZGRpbmcuYWZpZi5kZXYvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIG1vZGVybml6ciAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9tb2Rlcm5penItMi42LjIubWluLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8galF1ZXJ5ICovfVxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvanF1ZXJ5Lm1pbi5qc1wiPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8galF1ZXJ5IEVhc2luZyAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkuZWFzaW5nLjEuMy5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIEJvb3RzdHJhcCAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIFdheXBvaW50cyAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9qcXVlcnkud2F5cG9pbnRzLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIENhcm91c2VsICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL293bC5jYXJvdXNlbC5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIHsvKiAvLyBjb3VudFRvICovfVxyXG4gICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIiBzcmM9XCIvanMvanF1ZXJ5LmNvdW50VG8uanNcIj48L1NjcmlwdD5cclxuXHJcbiAgICAgIHsvKiAvLyBTdGVsbGFyICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL2pxdWVyeS5zdGVsbGFyLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIC8vIE1hZ25pZmljIFBvcHVwICovfVxyXG4gICAgICA8U2NyaXB0XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvbWFnbmlmaWMtcG9wdXAtb3B0aW9ucy5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuXHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBzcmM9XCIvanMvc2ltcGx5Q291bnRkb3duLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogLy8gTWFpbiAqL31cclxuICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2pzL21haW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBpZD1cIm15LXNjcmlwdFwiPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShcIjIwMjQtMTAtMTBcIik7XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgZXhhbXBsZVxyXG4gICAgICAgIHNpbXBseUNvdW50ZG93bignLnNpbXBseS1jb3VudGRvd24tb25lJywge1xyXG4gICAgICAgICAgICB5ZWFyOiBkLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIG1vbnRoOiBkLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBkYXk6IGQuZ2V0RGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8valF1ZXJ5IGV4YW1wbGVcclxuICAgICAgICAkKCcjc2ltcGx5LWNvdW50ZG93bi1sb3NhbmdlJykuc2ltcGx5Q291bnRkb3duKHtcclxuICAgICAgICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtb250aDogZC5nZXRNb250aCgpICsgMSxcclxuICAgICAgICAgICAgZGF5OiBkLmdldERhdGUoKSxcclxuICAgICAgICAgICAgZW5hYmxlVXRjOiBmYWxzZVxyXG4gICAgICAgIH0pO2B9XHJcbiAgICAgIDwvU2NyaXB0PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaDVjby1sb2FkZXJcIiAvPlxyXG5cclxuICAgICAgPGRpdiBpZD1cInBhZ2VcIj5cclxuICAgICAgICA8aGVhZGVyXHJcbiAgICAgICAgICBpZD1cIndlZGRpbmctaGVhZGVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndlZGRpbmctY292ZXJcIlxyXG4gICAgICAgICAgcm9sZT1cImJhbm5lclwiXHJcbiAgICAgICAgICBkYXRhLXN0ZWxsYXItYmFja2dyb3VuZC1yYXRpbz1cIjAuNVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWRkaW5nLW92ZXJsYXlcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VkZGluZy1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZGRpbmctY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LXRhYmxlLWNlbGwgYW5pbWF0ZS1ib3hcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndlZGRpbmctdGl0bGVcIj5NaWthICYgUmFtaTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3ZWRkaW5nLXN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkNvbW8gbGxhbWEgZGl2aW5hIGVzIGVsIGZ1ZWdvIGFyZGllbnRlIGRlbCBhbW9yLiBOaSBsYXMgbXVjaGFzIGFndWFzIHB1ZWRlbiBhcGFnYXJsbywgbmkgbG9zIHLDrW9zIHB1ZWRlbiBleHRpbmd1aXJsb1wiIENhbnRhcmVzIDg6NlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25yaWdodC5wbmdcIiBhbHQ9XCJMZWZ0IEljb25cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tcmlnaHRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25sZWZ0LnBuZ1wiIGFsdD1cIlJpZ2h0IEljb25cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZpdGF0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDE+Q2VyZW1vbmlhIHkgRmllc3RhPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGgyPkTDrWE8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlPDoWJhZG8gNCBkZSBub3ZpZW1icmUgZGUgMjAyMzxiciAvPjIwOjE1IGhzPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+QUdFTkRBUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8aDI+THVnYXI8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlNhbMOzbiBNYXLDrWEgTHVpc2E8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5DT05GSVJNQVIgQVNJU1RFTkNJQTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8aDI+RGlyZWNjacOzbjwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+QXYuIEJhcnRvbG9tw6kgZGUgQ2FzdHJvIDIxMDAsIENhdGFtYXJjYTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImluYWN0aXZlXCI+wr9Dw5NNTyBMTEVHQVI/PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxoMj5UYXJqZXRhPC9oMj5cclxuICAgICAgICAgICAgICA8cD5Db25vY2UgdG9kb3MgbG9zIGRldGFsbGVzIHNvYnJlIGxhIHRhcmpldGE8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5WRVIgTcOBUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnR5LWRldGFpbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+Rmllc3RhPC9oMT5cclxuICAgICAgICAgIDxwPkhhZ2Ftb3MganVudG9zIHVuYSBmaWVzdGEgw6lwaWNhLiBBcXXDrSBhbGd1bm9zIGRldGFsbGVzIGEgdGVuZXIgZW4gY3VlbnRhLjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydHktZGV0YWlscy1jYXJkc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gbXVzaWMtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5Nw7pzaWNhPC9oMj5cclxuICAgICAgICAgICAgICA8cD7Cv0N1w6FsIGVzIGxhIGNhbmNpw7NuIHF1ZSBubyBkZWJlIGZhbHRhciBlbiBsYSBQbGF5TGlzdCBkZSBsYSBmaWVzdGE/PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+U1VHRVJJUiBDQU5DScOTTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGRyZXNzLWNvZGUtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5EcmVzcyBDb2RlPC9oMj5cclxuICAgICAgICAgICAgICA8cD5VbmEgb3JpZW50YWNpw7NuIHBhcmEgdHUgdmVzdHVhcmlvPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKG1vZGFsRGF0YS5kcmVzc0NvZGUpfT5WRVIgTcOBUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHRpcHMtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj5UaXBzIHkgTm90YXM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPkluZm9ybWFjacOzbiBhZGljaW9uYWwgcGFyYSB0ZW5lciBlbiBjdWVudGE8L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwobW9kYWxEYXRhLnRpcHNOb3Rhcyl9PisgSU5GTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7bW9kYWxDb250ZW50ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBpblwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57bW9kYWxDb250ZW50LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD57bW9kYWxDb250ZW50LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvdmUtcG9ydHJhaXRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPlJldHJhdG9zIGRlIE51ZXN0cm8gQW1vcjwvaDE+XHJcbiAgICAgICAgICA8cD5VbiBtaW51dG8sIHVuIHNlZ3VuZG8sIHVuIGluc3RhbnRlIHF1ZSBxdWVkYSBlbiBsYSBldGVybmlkYWQ8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3Rvc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXGltZzEuanBlZ1wiIGFsdD1cIkZvdG8gMVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXNcXGJnMi5qcGVnXCIgYWx0PVwiRm90byAyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMy5qcGVnXCIgYWx0PVwiRm90byAzXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICB7LyogR2FsbGVyeSBDb21pbmcgU29vbiAoTmdlbnRlbmkgUG9zdCBXZWRkaW5nIGRpc2lrKSAqL31cclxuICAgICAgICA8ZGl2IGlkPVwiZmg1Y28tZ2FsbGVyeVwiIGNsYXNzTmFtZT1cImZoNWNvLXNlY3Rpb24tZ3JheVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMiB0ZXh0LWNlbnRlciBmaDVjby1oZWFkaW5nIGFuaW1hdGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q29uZmlybWEgdHUgYXNpc3RlbmNpYSE8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+Q29taW5nIFNvb24hPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KERpdHVuZ2d1IHlhLCBraXRhIGJlbHVtIGZvdG8gcG9zdCB3ZWRkaW5nbnlhKTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHsvKiBmb290ZXIgKi99XHJcbiAgICAgICAgPGZvb3RlciBpZD1cImZoNWNvLWZvb3RlclwiIHJvbGU9XCJjb250ZW50aW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0ge1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vYWZpZi5kZXZcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPmFmaWYuZGV2PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcyBmb3IgRGVzaWdue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2ZyZWVodG1sNS5jby9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRlJFRUhUTUw1LmNvXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGFua3MgZm9yIE11c2lje1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3lvdXR1LmJlL19wUl9jVzRiRGVFXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVuZ3UgRmVhdC4gQW5kaWVuIC0gU2FhdCBCYWhhZ2lhIHwgVkMgVHJpbml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcyBmb3IgQmFja2dyb3VuZHN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9waG90b3MvYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja2dyb3VuZCBwaG90byBjcmVhdGVkIGJ5IGpjb21wIC0gd3d3LmZyZWVwaWsuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZoNWNvLXNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYnVuZ2FtYm9obGFoXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyLmFtL2FmaWYuYWJkaWxsYWgualwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmIubWUvYWZpZmFiZGlsbGFoalwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1mYWNlYm9va1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vYWZpZmp1c3VmL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxpbmtlZGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3lvdXR1YmUuY29tL0BhZmlmZGV2XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24teW91dHViZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9hZmlmLmRldlwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZ2xvYmUyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICAgIHsvKiBnbyB0byB0b3AgYnV0dG9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ290b3RvcCBqcy10b3BcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwianMtZ290b3BcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1hcnJvdy11cFwiPjwvaT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIG11c2ljIGJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11c2ljYnRuXCI+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICB7cGxheWluZyA/IChcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXBhdXNlXCI+PC9pPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tcGxheVwiPjwvaT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXYgPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiU2NyaXB0IiwiSW1nIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRUb0NhbGVuZGFySE9DIiwibW9tZW50IiwidXNlQXVkaW8iLCJ1cmwiLCJhdWRpbyIsInNldEF1ZGlvIiwicGxheWluZyIsInNldFBsYXlpbmciLCJ0b2dnbGUiLCJ0b2dnbGVNdXNpYyIsInBsYXkiLCJwYXVzZSIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbENvbnRlbnQiLCJzZXRNb2RhbENvbnRlbnQiLCJvcGVuTW9kYWwiLCJjb250ZW50IiwiY2xvc2VNb2RhbCIsIm1vZGFsRGF0YSIsImRyZXNzQ29kZSIsInRpdGxlIiwidGlwc05vdGFzIiwic3VibWl0Rm9ybSIsImUiLCJwYXJhbXMiLCJzZXROYW1lIiwicHJldmVudERlZmF1bHQiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsIkJvb2xlYW4iLCJuYW1lIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsIm9rIiwic3RhdHVzIiwiSG9tZSIsInN0YXJ0RGF0ZXRpbWUiLCJ0eiIsImVuZERhdGV0aW1lIiwiY2xvbmUiLCJhZGQiLCJkdXJhdGlvbiIsImRpZmYiLCJhc0hvdXJzIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsImZvcm1hdCIsImV2ZW50Iiwic2V0RXZlbnQiLCJCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJEcm9wZG93biIsIkFkZFRvQ2FsZW5kYXJEcm9wZG93biIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9