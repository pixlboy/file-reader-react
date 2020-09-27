module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/img-scroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/img-scroll.js":
/*!*****************************!*\
  !*** ./pages/img-scroll.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "D:\\MyCode\\file-reader-react\\pages\\img-scroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageScroll = () => {
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

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\MyCode\\file-reader-react\\src\\ImageToggleOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW1nLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkltYWdlU2Nyb2xsIiwiY3VycmVudFNwZWFrZXJJZCIsInNldEN1cnJlbnRTcGVha2VySWQiLCJ1c2VTdGF0ZSIsIm1vdXNlRXZ0Q291bnQiLCJzZXRNb3VzZUV2dENvdW50IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpZCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpblZpZXciLCJzZXRJblZpZXciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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LE1BQU0sQ0FBQ3NCLFdBQTlDO0FBQ0QsR0FIRDs7QUFLQXZCLHlEQUFTLENBQUMsTUFBTTtBQUNkYyxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBRSxhQUFTLENBQUNDLFFBQVEsRUFBVCxDQUFUO0FBQ0FoQixVQUFNLENBQUN1QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFPLE1BQU07QUFDWHhCLFlBQU0sQ0FBQ3lCLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFFBQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCVCxhQUFTLENBQUNDLFFBQVEsRUFBVCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQ0UsT0FBRyxFQUNESixTQUFTLEdBQ1Asb0ZBRE8sR0FFUEUsTUFBTSxHQUFHTCxZQUFILEdBQWtCRCxVQUo5QjtBQU1FLE9BQUcsRUFBQyxFQU5OO0FBT0UsT0FBRyxFQUFFRSxRQVBQO0FBUUUsU0FBSyxFQUFDLEtBUlI7QUFTRSxVQUFNLEVBQUMsS0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFhRCxDQXRDRDs7QUF3Q2VILGtGQUFmLEUsQ0FFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUN6RkEsa0MiLCJmaWxlIjoicGFnZXMvaW1nLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW1nLXNjcm9sbC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcclxuXHJcblxyXG5jb25zdCBJbWFnZVNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFttb3VzZUV2dENvdW50LCBzZXRNb3VzZUV2dENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYFNwZWFrZXJJRCAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBzcGVha2VyIGlkIC0gJHtjdXJyZW50U3BlYWtlcklkfWApO1xyXG4gICAgfSwgW2N1cnJlbnRTcGVha2VySWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e21vdXNlRXZ0Q291bnR9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFsxMTI0LCA4MjMsIDE4NywgMTI2OSwgMTUzMF0ubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTcGVha2VySWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vdXNlRXZ0Q291bnQobW91c2VFdnRDb3VudCsxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGhvdmVyZWQ6ICR7Y3VycmVudFNwZWFrZXJJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL2ltYWdlcy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL2ltYWdlcy9TcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlU2Nyb2xsO1xyXG5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbCc7XHJcblxyXG4vLyBjb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IFtjdXJyZW50U3BlYWtlcklkLCBzZXRDdXJyZW50U3BlYWtlcklkXSA9IHVzZVN0YXRlKDApO1xyXG4vLyAgIGNvbnN0IFttb3VzZUV2ZW50Q250LCBzZXRNb3VzZUV2ZW50Q250XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYFNwZWFrZXJJZDogJHtjdXJyZW50U3BlYWtlcklkfWA7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKTtcclxuLy8gICB9LCBbY3VycmVudFNwZWFrZXJJZF0pO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgPHNwYW4+bW91c2VFdmVudENudDoge21vdXNlRXZlbnRDbnR9PC9zcGFuPlxyXG4vLyAgICAgICB7WzExMjQsIDgyMywgMTg3LCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgICAgIGtleT17c3BlYWtlcklkfVxyXG4vLyAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHNldEN1cnJlbnRTcGVha2VySWQoc3BlYWtlcklkKTtcclxuLy8gICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKTtcclxuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb25Nb3VzZU92ZXI6JHtzcGVha2VySWR9YCk7XHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXHJcbi8vICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YC9pbWFnZXMvYncvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cclxuLy8gICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2AvaW1hZ2VzL1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbi8vICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgIH0pfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuIFxyXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZyBcclxuICAgICAgc3JjPXtcclxuICAgICAgICBpc0xvYWRpbmcgXHJcbiAgICAgICAgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSdcclxuICAgICAgICA6IGluVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWdcclxuICAgICAgfVxyXG4gICAgICBhbHQ9XCJcIlxyXG4gICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICB3aWR0aD1cIjIwMFwiXHJcbiAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbi8vICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4vLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbi8vICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuLy8gICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuLy8gICAgIH07XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8aW1nXHJcbi8vICAgICAgIHNyYz17XHJcbi8vICAgICAgICAgaXNMb2FkaW5nXHJcbi8vICAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcclxuLy8gICAgICAgICAgIDogaW5WaWV3XHJcbi8vICAgICAgICAgICA/IHNlY29uZGFyeUltZ1xyXG4vLyAgICAgICAgICAgOiBwcmltYXJ5SW1nXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYWx0PVwiXCJcclxuLy8gICAgICAgcmVmPXtpbWFnZVJlZn1cclxuLy8gICAgICAgd2lkdGg9XCIyMDBcIlxyXG4vLyAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4vLyAgICAgLz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==