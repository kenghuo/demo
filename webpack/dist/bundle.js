/*!
 * @author: 'kenghuo'
 * @name: 'webpack 入门读物'
 */!function(n){var _={};function t(e){if(_[e])return _[e].exports;var r=_[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=_,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var _ in r)t.d(n,_,function(e){return r[e]}.bind(null,_));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s="./app/main.js")}({"./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./app/module.js");\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./app/main.js");\n\r\n\r\n\r\ndocument.getElementById(\'app\').appendChild(_module__WEBPACK_IMPORTED_MODULE_0___default()());\n\n//# sourceURL=webpack:///./app/main.js?')},"./app/module.js":
/*!***********************!*\
  !*** ./app/module.js ***!
  \***********************/
/*! no static exports found */function(module,exports){eval("// moudle.js\r\nmodule.exports = function () {\r\n    let div = document.createElement('div');\r\n    div.id = 'div';\r\n    div.textContent = \"Hi there and greetings!\";\r\n    return div;\r\n};\n\n//# sourceURL=webpack:///./app/module.js?")}});