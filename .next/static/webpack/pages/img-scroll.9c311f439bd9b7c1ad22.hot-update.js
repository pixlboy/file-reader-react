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



const ImageScroll = () => {
  _s();

  const {
    0: currentSpeakerId,
    1: setCurrentSpeakerId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: mouseEvtCount,
    1: setMouseEvtCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.document.title = `SpeakerID ${currentSpeakerId}`;
    console.log(`Current speaker id - ${currentSpeakerId}`);
  }, [currentSpeakerId]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, mouseEvtCount), [1124, 823, 187, 1269, 1530].map(id => {
    return __jsx("div", {
      key: id,
      onMouseOver: () => {
        setCurrentSpeakerId(id);
        setMouseEvtCount(mouseEvtCount + 1);
        console.log(`You hovered: ${currentSpeakerId}`);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: `/images/bw/Speaker-${id}.jpg`,
      secondaryImg: `/images/Speaker-${id}.jpg`,
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }));
  }));
};

_s(ImageScroll, "7cvJejk9NRPWhkAK/WoYAlp+GQE=");

_c = ImageScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageScroll); // import React, { useEffect, useState } from 'react';
// import ImageToggleOnScroll from '../src/ImageToggleOnScroll';
// const ImageChangeOnScroll = () => {
//   const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
//   const [mouseEventCnt, setMouseEventCnt] = useState(0);
//   useEffect(() => {
//     window.document.title = `SpeakerId: ${currentSpeakerId}`;
//     console.log(`useEffect: setting title to ${currentSpeakerId}`);
//   }, [currentSpeakerId]);
//   return (
//     <div>
//       <span>mouseEventCnt: {mouseEventCnt}</span>
//       {[1124, 823, 187, 1269, 1530].map((speakerId) => {
//         return (
//           <div
//             key={speakerId}
//             onMouseOver={() => {
//               setCurrentSpeakerId(speakerId);
//               setMouseEventCnt(mouseEventCnt + 1);
//               console.log(`onMouseOver:${speakerId}`);
//             }}
//           >
//             <ImageToggleOnScroll
//               primaryImg={`/images/bw/Speaker-${speakerId}.jpg`}
//               secondaryImg={`/images/Speaker-${speakerId}.jpg`}
//               alt=""
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default ImageChangeOnScroll;

var _c;

$RefreshReg$(_c, "ImageScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1nLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJJbWFnZVNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwidXNlU3RhdGUiLCJtb3VzZUV2dENvdW50Iiwic2V0TW91c2VFdnRDb3VudCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFFdEIsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQyxzREFBUSxDQUFDLENBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLEdBQXlCLGFBQVlSLGdCQUFpQixFQUF0RDtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBYSx3QkFBdUJWLGdCQUFpQixFQUFyRDtBQUNILEdBSFEsRUFHTixDQUFDQSxnQkFBRCxDQUhNLENBQVQ7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNHLGFBQVQsQ0FESixFQUdRLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCUSxHQUE3QixDQUFrQ0MsRUFBRCxJQUFRO0FBQ3JDLFdBQ0k7QUFDSSxTQUFHLEVBQUVBLEVBRFQ7QUFFSSxpQkFBVyxFQUFFLE1BQU07QUFDZlgsMkJBQW1CLENBQUNXLEVBQUQsQ0FBbkI7QUFDQVIsd0JBQWdCLENBQUNELGFBQWEsR0FBQyxDQUFmLENBQWhCO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLGdCQUFlVixnQkFBaUIsRUFBN0M7QUFDSCxPQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPSSxNQUFDLGdFQUFEO0FBQ0ksZ0JBQVUsRUFBRyxzQkFBcUJZLEVBQUcsTUFEekM7QUFFSSxrQkFBWSxFQUFHLG1CQUFrQkEsRUFBRyxNQUZ4QztBQUdJLFNBQUcsRUFBQyxFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQSixDQURKO0FBZUgsR0FoQkQsQ0FIUixDQURKO0FBd0JILENBbENEOztHQUFNYixXOztLQUFBQSxXO0FBb0NTQSwwRUFBZixFLENBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1nLXNjcm9sbC45YzMxMWY0MzliZDliN2MxYWQyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlU2Nyb2xsID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50U3BlYWtlcklkLCBzZXRDdXJyZW50U3BlYWtlcklkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21vdXNlRXZ0Q291bnQsIHNldE1vdXNlRXZ0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklEICR7Y3VycmVudFNwZWFrZXJJZH1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHNwZWFrZXIgaWQgLSAke2N1cnJlbnRTcGVha2VySWR9YCk7XHJcbiAgICB9LCBbY3VycmVudFNwZWFrZXJJZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0cm9uZz57bW91c2VFdnRDb3VudH08L3N0cm9uZz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgWzExMjQsIDgyMywgMTg3LCAxMjY5LCAxNTMwXS5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNwZWFrZXJJZChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW91c2VFdnRDb3VudChtb3VzZUV2dENvdW50KzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgaG92ZXJlZDogJHtjdXJyZW50U3BlYWtlcklkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbWc9e2AvaW1hZ2VzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2AvaW1hZ2VzL1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTY3JvbGw7XHJcblxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcclxuXHJcbi8vIGNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW2N1cnJlbnRTcGVha2VySWQsIHNldEN1cnJlbnRTcGVha2VySWRdID0gdXNlU3RhdGUoMCk7XHJcbi8vICAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuLy8gICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50U3BlYWtlcklkfWApO1xyXG4vLyAgIH0sIFtjdXJyZW50U3BlYWtlcklkXSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiB7bW91c2VFdmVudENudH08L3NwYW4+XHJcbi8vICAgICAgIHtbMTEyNCwgODIzLCAxODcsIDEyNjksIDE1MzBdLm1hcCgoc3BlYWtlcklkKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgICAga2V5PXtzcGVha2VySWR9XHJcbi8vICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgc2V0Q3VycmVudFNwZWFrZXJJZChzcGVha2VySWQpO1xyXG4vLyAgICAgICAgICAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArIDEpO1xyXG4vLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbk1vdXNlT3Zlcjoke3NwZWFrZXJJZH1gKTtcclxuLy8gICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcclxuLy8gICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL2ltYWdlcy9idy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4vLyAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9pbWFnZXMvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cclxuLy8gICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgfSl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==