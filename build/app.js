var factorialPixel =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pixelUrl = __webpack_require__(1);

var _pixelUrl2 = _interopRequireDefault(_pixelUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `factorialPixelDomain` can be setup by the host this way
 * the cookie can be written in staging.factorialhr.com
 * for example
 */

var script = document.getElementById('factorial-pixel');
var customDomain = script ? script.getAttribute('data-domain') : null;
var domain = customDomain || 'https://factorialhr.com';
var origin = document.location.origin;
var images = domain === origin ? [''] : [domain, ''];

images.forEach(function (imageDomain) {
  var img = document.createElement('img');
  img.src = '' + imageDomain + (0, _pixelUrl2.default)(document);
  img.width = 1;
  img.height = 1;
  img.style = 'display:none;';
  document.body.appendChild(img);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestParameters2 = __webpack_require__(2);

var _requestParameters3 = _interopRequireDefault(_requestParameters2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (document) {
  var _requestParameters = (0, _requestParameters3.default)(document),
      language = _requestParameters.language,
      landingPage = _requestParameters.landingPage,
      gclid = _requestParameters.gclid;

  var mc = document.location.href.match(/mc=(.*)/);
  var attributes = ['mc=' + (mc ? mc[1] : ''), 'referer=' + encodeURI(document.referrer), 'language=' + language, 'landing_page=' + landingPage, 'gclid=' + gclid].join('&');

  return '/internal/pixel?' + attributes;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestParameters;
function requestParameters(document) {
  var path = document.location.origin + document.location.pathname;
  var search = document.location.search;
  var landing = encodeURI(path);
  var locale = document.querySelector('html').lang.split('-')[0];
  var gclid = new URLSearchParams(search).get('gclid');

  return {
    language: locale,
    landingPage: landing,
    gclid: gclid
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);