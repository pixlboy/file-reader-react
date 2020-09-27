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
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return __jsx("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "100",
    height: "100",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLE1BQU1BLG1CQUFtQixHQUFHLENBQUM7QUFBRUMsWUFBRjtBQUFjQztBQUFkLENBQUQsS0FBa0M7QUFBQTs7QUFFNUQsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsSUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxLQUFELENBQXBDOztBQUVBLFFBQU1HLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQU1DLElBQUksR0FBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCQyxxQkFBakIsRUFBYjtBQUNBLFdBQU9GLElBQUksQ0FBQ0csR0FBTCxJQUFZLENBQVosSUFBaUJILElBQUksQ0FBQ0ksTUFBTCxJQUFlQyxNQUFNLENBQUNDLFdBQTlDO0FBQ0QsR0FIRDs7QUFLQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RaLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FHLGFBQVMsQ0FBQ0MsUUFBUSxFQUFULENBQVQ7QUFDQU0sVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDWEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxRQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQlgsYUFBUyxDQUFDQyxRQUFRLEVBQVQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUNFLE9BQUcsRUFDREwsU0FBUyxHQUNQLG9GQURPLEdBRVBHLE1BQU0sR0FBR04sWUFBSCxHQUFrQkQsVUFKOUI7QUFNRSxPQUFHLEVBQUMsRUFOTjtBQU9FLE9BQUcsRUFBRUUsUUFQUDtBQVFFLFNBQUssRUFBQyxLQVJSO0FBU0UsVUFBTSxFQUFDLEtBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBYUQsQ0F0Q0Q7O0dBQU1ILG1COztLQUFBQSxtQjtBQXdDU0Esa0ZBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltZy1zY3JvbGwuODcxOWQxOTc0YTg2MjBiMDE0ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuIFxyXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZyBcclxuICAgICAgc3JjPXtcclxuICAgICAgICBpc0xvYWRpbmcgXHJcbiAgICAgICAgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSdcclxuICAgICAgICA6IGluVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWdcclxuICAgICAgfVxyXG4gICAgICBhbHQ9XCJcIlxyXG4gICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbi8vICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4vLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbi8vICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuLy8gICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuLy8gICAgIH07XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8aW1nXHJcbi8vICAgICAgIHNyYz17XHJcbi8vICAgICAgICAgaXNMb2FkaW5nXHJcbi8vICAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcclxuLy8gICAgICAgICAgIDogaW5WaWV3XHJcbi8vICAgICAgICAgICA/IHNlY29uZGFyeUltZ1xyXG4vLyAgICAgICAgICAgOiBwcmltYXJ5SW1nXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYWx0PVwiXCJcclxuLy8gICAgICAgcmVmPXtpbWFnZVJlZn1cclxuLy8gICAgICAgd2lkdGg9XCIyMDBcIlxyXG4vLyAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4vLyAgICAgLz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==