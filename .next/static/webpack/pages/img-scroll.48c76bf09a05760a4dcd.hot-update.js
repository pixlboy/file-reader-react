webpackHotUpdate_N_E("pages/img-scroll",{

/***/ "./pages/img-scroll.js":
/*!*****************************!*\
  !*** ./pages/img-scroll.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "D:\\MyCode\\file-reader-react\\pages\\img-scroll.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageChangeOnScroll = () => {
  _s();

  const {
    0: currentSpeakerId,
    1: setCurrentSpeakerId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: mouseEventCnt,
    1: setMouseEventCnt
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "mouseEventCnt: ", mouseEventCnt), [1124, 823, 187, 1269, 1530].map(speakerId => {
    return __jsx("div", {
      key: speakerId,
      onMouseOver: () => {
        setCurrentSpeakerId(speakerId);
        setMouseEventCnt(mouseEventCnt + 1);
        console.log(`onMouseOver:${speakerId}`);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: `/images/bw/Speaker-${speakerId}.jpg`,
      secondaryImg: `/images/Speaker-${speakerId}.jpg`,
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }));
  }));
};

_s(ImageChangeOnScroll, "XDXVveCh0mFDHA6S/A4AclRGIAU=");

_c = ImageChangeOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

var _c;

$RefreshReg$(_c, "ImageChangeOnScroll");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1nLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwiY3VycmVudFNwZWFrZXJJZCIsInNldEN1cnJlbnRTcGVha2VySWQiLCJ1c2VTdGF0ZSIsIm1vdXNlRXZlbnRDbnQiLCJzZXRNb3VzZUV2ZW50Q250IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcGVha2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsTUFBTTtBQUFBOztBQUNoQyxRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENDLHNEQUFRLENBQUMsQ0FBRCxDQUF4RDtBQUNBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DRixzREFBUSxDQUFDLENBQUQsQ0FBbEQ7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsS0FBaEIsR0FBeUIsY0FBYVIsZ0JBQWlCLEVBQXZEO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUE4QlYsZ0JBQWlCLEVBQTVEO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXNCRyxhQUF0QixDQURGLEVBRUcsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkJRLEdBQTdCLENBQWtDQyxTQUFELElBQWU7QUFDL0MsV0FDRTtBQUNFLFNBQUcsRUFBRUEsU0FEUDtBQUVFLGlCQUFXLEVBQUUsTUFBTTtBQUNqQlgsMkJBQW1CLENBQUNXLFNBQUQsQ0FBbkI7QUFDQVIsd0JBQWdCLENBQUNELGFBQWEsR0FBRyxDQUFqQixDQUFoQjtBQUNBTSxlQUFPLENBQUNDLEdBQVIsQ0FBYSxlQUFjRSxTQUFVLEVBQXJDO0FBQ0QsT0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUUsTUFBQyxnRUFBRDtBQUNFLGdCQUFVLEVBQUcsc0JBQXFCQSxTQUFVLE1BRDlDO0FBRUUsa0JBQVksRUFBRyxtQkFBa0JBLFNBQVUsTUFGN0M7QUFHRSxTQUFHLEVBQUMsRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FERjtBQWdCRCxHQWpCQSxDQUZILENBREY7QUF1QkQsQ0FoQ0Q7O0dBQU1iLG1COztLQUFBQSxtQjtBQWtDU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1nLXNjcm9sbC40OGM3NmJmMDlhMDU3NjBhNGRjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcclxuXHJcbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsIHNldEN1cnJlbnRTcGVha2VySWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50U3BlYWtlcklkfWApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPm1vdXNlRXZlbnRDbnQ6IHttb3VzZUV2ZW50Q250fTwvc3Bhbj5cclxuICAgICAge1sxMTI0LCA4MjMsIDE4NywgMTI2OSwgMTUzMF0ubWFwKChzcGVha2VySWQpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e3NwZWFrZXJJZH1cclxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XHJcbiAgICAgICAgICAgICAgc2V0TW91c2VFdmVudENudChtb3VzZUV2ZW50Q250ICsgMSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiR7c3BlYWtlcklkfWApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgIHByaW1hcnlJbWc9e2AvaW1hZ2VzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL2ltYWdlcy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9