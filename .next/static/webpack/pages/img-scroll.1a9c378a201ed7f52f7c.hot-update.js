webpackHotUpdate_N_E("pages/img-scroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\MyCode\\file-reader-react\\src\\ImageToggleOnScroll.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  _s();

  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = () => {
    setInView(isInView());
  };

  return __jsx("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  });
};

_s(ImageToggleOnScroll, "ZXGxYM2/GoMqCdxtGlrQhtEYGrw=");

_c = ImageToggleOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll); // import React, { useEffect, useRef, useState } from 'react';
// const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
//   const imageRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const isInView = () => {
//     const rect = imageRef.current.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
//   };
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     setIsLoading(false);
//     setInView(isInView());
//     window.addEventListener('scroll', scrollHandler);
//     return () => {
//       window.removeEventListener('scroll', scrollHandler);
//     };
//   }, []);
//   const scrollHandler = () => {
//     setInView(isInView());
//   };
//   return (
//     <img
//       src={
//         isLoading
//           ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
//           : inView
//           ? secondaryImg
//           : primaryImg
//       }
//       alt=""
//       ref={imageRef}
//       width="200"
//       height="200"
//     />
//   );
// };
// export default ImageToggleOnScroll;

var _c;

$RefreshReg$(_c, "ImageToggleOnScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLE1BQU1BLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFBQTs7QUFFNUQsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxLQUFELENBQXBDOztBQUVBLFFBQU1HLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQU1DLElBQUksR0FBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0QsR0FIRDs7QUFLQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RaLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FHLGFBQVMsQ0FBQ0MsUUFBUSxFQUFULENBQVQ7QUFDQU0sVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDWEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxDQUFUOztBQVNBLFFBQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCWCxhQUFTLENBQUNDLFFBQVEsRUFBVCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQ0UsT0FBRyxFQUNETCxTQUFTLEdBQ1Asb0ZBRE8sR0FFUEcsTUFBTSxHQUFHTixZQUFILEdBQWtCRCxVQUo5QjtBQU1FLE9BQUcsRUFBQyxFQU5OO0FBT0UsT0FBRyxFQUFFRSxRQVBQO0FBUUUsU0FBSyxFQUFDLEtBUlI7QUFTRSxVQUFNLEVBQUMsS0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFhRCxDQXRDRDs7R0FBTUgsbUI7O0tBQUFBLG1CO0FBd0NTQSxrRkFBZixFLENBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1nLXNjcm9sbC4xYTljMzc4YTIwMWVkN2Y1MmY3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4gXHJcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWcgXHJcbiAgICAgIHNyYz17XHJcbiAgICAgICAgaXNMb2FkaW5nIFxyXG4gICAgICAgID8gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT0nXHJcbiAgICAgICAgOiBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXHJcbiAgICAgIH1cclxuICAgICAgYWx0PVwiXCJcclxuICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xyXG4vLyAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4vLyAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbi8vICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbi8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbi8vICAgICB9O1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuLy8gICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGltZ1xyXG4vLyAgICAgICBzcmM9e1xyXG4vLyAgICAgICAgIGlzTG9hZGluZ1xyXG4vLyAgICAgICAgICAgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PScgLy8gMXgxZ2lmXHJcbi8vICAgICAgICAgICA6IGluVmlld1xyXG4vLyAgICAgICAgICAgPyBzZWNvbmRhcnlJbWdcclxuLy8gICAgICAgICAgIDogcHJpbWFyeUltZ1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGFsdD1cIlwiXHJcbi8vICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbi8vICAgICAgIHdpZHRoPVwiMjAwXCJcclxuLy8gICAgICAgaGVpZ2h0PVwiMjAwXCJcclxuLy8gICAgIC8+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=