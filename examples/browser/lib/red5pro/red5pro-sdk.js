/*!
 * 
 *   red5pro-sdk - Red5 Pro HTML Publisher and Subscriber SDK.
 *   Author: Infrared5 Inc.
 *   Version: 4.6.0-RC8
 *   Url: https://github.com/red5pro/red5pro-html-sdk#readme
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["red5prosdk"] = factory();
	else
		root["red5prosdk"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 208);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(90);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fatal = exports.error = exports.warn = exports.debug = exports.info = exports.trace = exports.getLogger = exports.establishLogger = exports.LEVELS = undefined;

var _browserBunyan = __webpack_require__(95);

var _bunyanWriter = __webpack_require__(118);

var logger = void 0;

var formatMessage = function formatMessage(dispatcher) {
  return function (message) {
    return '(' + dispatcher + ') ' + message;
  };
};

var decorate = function decorate(level) {
  return function (source, message) {
    logger[level](formatMessage(source)(message));
  };
};

/*
 * The log levels supported.
 */
var LEVELS = exports.LEVELS = {
  TRACE: 'trace',
  INFO: 'info',
  DEBUG: 'debug',
  WARN: 'warn',
  ERROR: 'error',
  FATAL: 'fatal'

  /**
   * Establish logger to use at level.
   *
   * @param {String} level
   *        The level type from `LEVELS`.
   * @param {Array} streamList
   *        The streamList to use in creating bunyon-based logger.
   *
   * @private
   */
};var establishLogger = exports.establishLogger = function establishLogger(level) {
  var streamList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var streams = [];
  streams.push({
    level: level,
    stream: new _bunyanWriter.RawStream(),
    type: 'raw'
  });
  if (streamList) {
    var list = streamList.map(function (item) {
      item.level = level;
    });
    streams = streams.concat(list);
  }
  logger = (0, _browserBunyan.createLogger)({
    level: level,
    name: 'red5pro-sdk',
    streams: streams
  });
};

/**
 * Return the determined logger instance.
 *
 * @return {Object}
 *
 * @private
 */
var getLogger = exports.getLogger = function getLogger() {
  return logger;
};

/* Quick access to logger level types. */
var trace = exports.trace = decorate(LEVELS.TRACE);
var info = exports.info = decorate(LEVELS.INFO);
var debug = exports.debug = decorate(LEVELS.DEBUG);
var warn = exports.warn = decorate(LEVELS.WARN);
var error = exports.error = decorate(LEVELS.ERROR);
var fatal = exports.fatal = decorate(LEVELS.FATAL);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(59);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(5);

var _errors = __webpack_require__(113);

var _metadataUtil = __webpack_require__(112);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rtmpSubscriberAssignments = [];

/* Properties and methods related to interaction with the screenfull.js library. */
var fullscreenHandlers = [];
var screenfullHandlerAssigned = false;
function enableScreenfullHandler() {
  if (!screenfullHandlerAssigned && window.screenfull && window.screenfull.enabled) {
    screenfullHandlerAssigned = true;
    window.screenfull.onchange(function () {
      var i = void 0,
          length = fullscreenHandlers.length;
      for (i = 0; i < length; i++) {
        fullscreenHandlers[i](window.screenfull.isFullscreen);
      }
    });
  }
}

/* Properies and methods related to window close operation. */
var closeHandlers = [];
function onwindowclose(e) {
  // eslint-disable-line no-unused-vars
  //  closeHandlers.forEach(h => h())
  var i = void 0,
      length = closeHandlers.length;
  for (i = 0; i < length; i++) {
    closeHandlers[i]();
  }
  // Returning a string value forces a leaving confirmation popup on the browser.
  //  e.returnValue = 'goodbye'
  //  return 'goodbye'
}

/* Check to see what the current flash version is, if plugin is enabled. */
// https://github.com/videojs/video.js/blob/master/src/js/tech/flash.js#L476
var flashVersion = function flashVersion() {
  var version = '0,0,0';
  // IE
  try {
    version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

    // other browsers
  } catch (e) {
    try {
      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
      }
    } catch (err) {
      // nada
    }
  }
  return version.split(',');
};

/* Shim for `requestAnimationFrame` of browser. */
var requestFrame = function (time) {
  return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
    return window.setTimeout(fn, time);
  };
}(1000);

/* Browser test to see if Mozilla-based. */
var isMoz = !!navigator.mozGetUserMedia;

/* Determine if current browser has touch capabilities. */
var _isTouchEnabled = 'ontouchstart' in window || window.DocumentTouch && window.document instanceof window.DocumentTouch;

// If developer has not used adapter.js.
if (!window.adapter) {
  navigator.getUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;
}

/* Proxy to browser-based, specific functions. */
exports.default = {

  requestFrame: requestFrame,

  getIsMoz: function getIsMoz() {
    return isMoz;
  },

  isTouchEnabled: function isTouchEnabled() {
    return _isTouchEnabled;
  },

  supportsWebSocket: function supportsWebSocket() {
    return !!window.WebSocket;
  },

  supportsHLS: function supportsHLS() {
    var el = document.createElement('video');
    return el.canPlayType('application/vnd.apple.mpegURL').length > 0 || el.canPlayType('application/x-mpegURL').length > 0 || el.canPlayType('audio/mpegurl').length > 0 || el.canPlayType('audio/x-mpegurl').length > 0;
  },

  supportsFlashVersion: function supportsFlashVersion(version) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    return flashVersion()[0] >= version.split(delimiter)[0];
  },

  resolveElement: function resolveElement(id) {
    try {
      var el = document.getElementById(id);
      if (!el) {
        throw new _errors.NoElementFoundError('Element with id(' + id + ') could not be found.');
      }
      return el;
    } catch (e) {
      throw new _errors.NoElementFoundError('Error in accessing element with id(' + id + '). ' + e.message);
    }
  },

  createWebSocket: function createWebSocket(url) {
    return new WebSocket(url);
  },

  setVideoSource: function setVideoSource(videoElement, mediaStream) {
    var autoplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    videoElement.onloadedmetadata = function () {
      (0, _log.debug)('[videoelement:event]', 'loadedmetadata');
      (0, _log.debug)('[video:constraints]', 'Video actual dimensions are: ' + videoElement.videoWidth + ', ' + videoElement.videoHeight);
    };
    if ('srcObject' in videoElement) {
      videoElement.srcObject = mediaStream;
    } else if (isMoz) {
      videoElement['mozSrcObject'] = mediaStream;
    } else {
      videoElement.src = window.URL.createObjectURL(mediaStream);
    }
    if (autoplay) {
      try {
        var maybePromise = videoElement.play();
        if (maybePromise) {
          maybePromise.then(function () {
            return (0, _log.debug)('[setVideoSource:action]', 'play (START)');
          }).catch(function (err) {
            return (0, _log.error)('[setVideoSource:action]', 'play (FAULT) ' + (err.message ? err.message : err));
          });
        }
      } catch (e) {
        // Mobile Browsers: Uncaught (in promise) DOMException: play() can only be initiated by a user gesture.
        videoElement.setAttribute('autoplay', false);
        videoElement.pause();
        (0, _log.error)('[setVideoSource:action]', 'play (FAULT) ' + e.message);
      }
    } else {
      try {
        videoElement.setAttribute('autoplay', false);
        videoElement.pause();
      } catch (e) {
        // nada.
      }
    }
  },

  injectScript: function injectScript(url) {
    var dfd = new _promise.DeferredPromise();
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function () {
      dfd.resolve();
    };
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        dfd.resolve();
      }
    };
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    return dfd.promise;
  },

  gUM: function gUM(constraints) {
    return (navigator.mediaDevices || navigator).getUserMedia(constraints);
  },

  setGlobal: function setGlobal(prop, value) {
    window[prop] = value;
  },

  getSwfObject: function getSwfObject() {
    return window.swfobject;
  },

  getEmbedObject: function getEmbedObject(id) {
    return document.getElementById(id);
  },

  getElementId: function getElementId(el) {
    return el.getAttribute('id');
  },

  addCloseHandler: function addCloseHandler(handler) {
    var insertValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    closeHandlers.splice(insertValue === -1 ? closeHandlers.length : insertValue, 0, handler);
    if (window.onbeforeunload !== onwindowclose) {
      window.onbeforeunload = onwindowclose;
      window.addEventListener('unload', onwindowclose);
    }
  },

  removeCloseHandler: function removeCloseHandler(handler) {
    var i = closeHandlers.length;
    while (--i > -1) {
      if (closeHandlers[i] === handler) {
        closeHandlers.slice(i, 1);
        break;
      }
    }
  },

  invoke: function invoke(methodName, data) {
    if (window.hasOwnProperty(methodName)) {
      window[methodName].call(window, data);
    }
  },

  // requires <script src="lib/screenfull/screenfull.min.js"></script>
  toggleFullScreen: function toggleFullScreen(element) {
    if (window.screenfull && window.screenfull.enabled) {
      window.screenfull.toggle(element);
    }
  },

  onFullScreenStateChange: function onFullScreenStateChange(cb) {
    fullscreenHandlers.push(cb);
    enableScreenfullHandler(window.screenfull);
  },

  onOrientationMetadata: _metadataUtil.onOrientationMetadata,

  hasAttributeDefined: function hasAttributeDefined(elem, attribute) {
    var att = elem.getAttribute(attribute);
    return att !== null && (typeof att === 'undefined' ? 'undefined' : (0, _typeof3.default)(att)) !== undefined && typeof att === 'string' && (att === '' || att === 'true' || att === attribute);
  },

  hasClassDefined: function hasClassDefined(elem, className) {
    return elem.classList.contains(className);
  },

  createElement: function createElement(tagName, opts) {
    if (tagName === 'text') {
      return document.createTextNode(opts.toString());
    }
    return document.createElement(tagName, opts);
  },

  addSubscriptionAssignmentHandler: function addSubscriptionAssignmentHandler(fn) {
    rtmpSubscriberAssignments.push(fn);
    if (window.setSubscriberId === undefined) {
      window.setSubscriberId = function (id) {
        rtmpSubscriberAssignments.shift()(id);
      };
    }
  },

  getMouseXFromEvent: function getMouseXFromEvent(event) {
    if (!event) {
      event = window.event;
    }

    if (event.pageX) {
      return event.pageX;
    } else if (event.clientX) {
      return event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    }

    return 0;
  },

  getScrollX: function getScrollX() {
    return window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  },

  createEvent: function createEvent(EventType) {
    return document.createEvent(EventType);
  },

  getGlobal: function getGlobal() {
    return window;
  }

};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A DeferredPromise allows for construction and assignment of a future fullfilment of a `Promise`.
 *
 * @private
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Future = exports.DeferredPromise = undefined;

var _promise = __webpack_require__(58);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _DeferredPromise = function _DeferredPromise() {
  var _this = this;

  (0, _classCallCheck3.default)(this, _DeferredPromise);

  this.resolve = undefined;
  this.reject = undefined;
  this.promise = new _promise2.default(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};

/**
 * A Future determines if existant DeferredPromise is available or creates and returns a new one.
 *
 * @param {DeferredPromise} deferredIfExist
 *        An object tested for truthy-ness.
 * @return {DeferredPromise}
 *
 * @private
 */


var _Future = {
  createIfNotExist: function createIfNotExist(deferredIfExist) {
    var f = deferredIfExist;
    if (!f) {
      f = new _DeferredPromise();
    }
    return f;
  }
};

var DeferredPromise = exports.DeferredPromise = _DeferredPromise;
var Future = exports.Future = _Future;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(139);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(137);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(59);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(59);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(71)('wks')
  , uid        = __webpack_require__(52)
  , Symbol     = __webpack_require__(11).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(11)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(19)
  , hide      = __webpack_require__(21)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(16)
  , IE8_DOM_DEFINE = __webpack_require__(99)
  , toPrimitive    = __webpack_require__(73)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedObjectEventTypes = exports.FailoverSubscriberEventTypes = exports.RTMPSubscriberEventTypes = exports.RTCSubscriberEventTypes = exports.SubscriberEventTypes = exports.FailoverPublisherEventTypes = exports.RTMPPublisherEventTypes = exports.RTCPublisherEventTypes = exports.PublisherEventTypes = exports.SharedObjectEvent = exports.SubscriberEvent = exports.PublisherEvent = exports.Event = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _publisherEvent = __webpack_require__(79);

Object.defineProperty(exports, 'PublisherEventTypes', {
  enumerable: true,
  get: function get() {
    return _publisherEvent.PublisherEventTypes;
  }
});
Object.defineProperty(exports, 'RTCPublisherEventTypes', {
  enumerable: true,
  get: function get() {
    return _publisherEvent.RTCPublisherEventTypes;
  }
});
Object.defineProperty(exports, 'RTMPPublisherEventTypes', {
  enumerable: true,
  get: function get() {
    return _publisherEvent.RTMPPublisherEventTypes;
  }
});
Object.defineProperty(exports, 'FailoverPublisherEventTypes', {
  enumerable: true,
  get: function get() {
    return _publisherEvent.FailoverPublisherEventTypes;
  }
});

var _subscriberEvent = __webpack_require__(80);

Object.defineProperty(exports, 'SubscriberEventTypes', {
  enumerable: true,
  get: function get() {
    return _subscriberEvent.SubscriberEventTypes;
  }
});
Object.defineProperty(exports, 'RTCSubscriberEventTypes', {
  enumerable: true,
  get: function get() {
    return _subscriberEvent.RTCSubscriberEventTypes;
  }
});
Object.defineProperty(exports, 'RTMPSubscriberEventTypes', {
  enumerable: true,
  get: function get() {
    return _subscriberEvent.RTMPSubscriberEventTypes;
  }
});
Object.defineProperty(exports, 'FailoverSubscriberEventTypes', {
  enumerable: true,
  get: function get() {
    return _subscriberEvent.FailoverSubscriberEventTypes;
  }
});

var _sharedobjectEvent = __webpack_require__(56);

Object.defineProperty(exports, 'SharedObjectEventTypes', {
  enumerable: true,
  get: function get() {
    return _sharedobjectEvent.SharedObjectEventTypes;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base class for all events.
 */
var Event = function () {
  function Event(type) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    (0, _classCallCheck3.default)(this, Event);

    this._type = type;
    this._data = data;
  }

  /**
   * Type accessor.
   *
   * @type {String}
   */


  (0, _createClass3.default)(Event, [{
    key: 'type',
    get: function get() {
      return this._type;
    }

    /**
     * Data related to event.
     *
     * @type {Object}
     */

  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);
  return Event;
}();

/**
 * Base Publisher-related Event.
 *
 * @extends Event
 */


var PublisherEvent = function (_Event) {
  (0, _inherits3.default)(PublisherEvent, _Event);

  function PublisherEvent(type, publisher, data) {
    (0, _classCallCheck3.default)(this, PublisherEvent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PublisherEvent.__proto__ || (0, _getPrototypeOf2.default)(PublisherEvent)).call(this, type, data));

    _this._publisher = publisher;
    return _this;
  }

  /**
   * The Publisher instance that dispatched the event.
   *
   * @type {Object}
   *
   * @see Red5ProPublisher
   * @see RTCPublisher
   * @see RTMPPublisher
   */


  (0, _createClass3.default)(PublisherEvent, [{
    key: 'publisher',
    get: function get() {
      return this._publisher;
    }
  }]);
  return PublisherEvent;
}(Event);

/**
 * Base Subscriber-related Event.
 *
 * @extends Event
 */


var SubscriberEvent = function (_Event2) {
  (0, _inherits3.default)(SubscriberEvent, _Event2);

  function SubscriberEvent(type, subscriber, data) {
    (0, _classCallCheck3.default)(this, SubscriberEvent);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SubscriberEvent.__proto__ || (0, _getPrototypeOf2.default)(SubscriberEvent)).call(this, type, data));

    _this2._subscriber = subscriber;
    return _this2;
  }

  /**
   * The Subscriber instance that dispatched the event.
   *
   * @type {Object}
   *
   * @see Red5ProSubscriber
   * @see RTCSubscriber
   * @see RTMPSubscriber
   * @see HLSubscriber
   */


  (0, _createClass3.default)(SubscriberEvent, [{
    key: 'subscriber',
    get: function get() {
      return this._subscriber;
    }
  }]);
  return SubscriberEvent;
}(Event);

/**
 * Base SharedObject-related Event.
 *
 * @extends Event
 */


var SharedObjectEvent = function (_Event3) {
  (0, _inherits3.default)(SharedObjectEvent, _Event3);

  function SharedObjectEvent(type, sharedObjectName, data) {
    (0, _classCallCheck3.default)(this, SharedObjectEvent);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (SharedObjectEvent.__proto__ || (0, _getPrototypeOf2.default)(SharedObjectEvent)).call(this, type, data));

    _this3._name = sharedObjectName;
    return _this3;
  }

  /**
   * The name of the Shared Object.
   *
   * @type {String}
   *
   * @see {Red5ProSharedObject}
   */


  (0, _createClass3.default)(SharedObjectEvent, [{
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);
  return SharedObjectEvent;
}(Event);

exports.Event = Event;
exports.PublisherEvent = PublisherEvent;
exports.SubscriberEvent = SubscriberEvent;
exports.SharedObjectEvent = SharedObjectEvent;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(60);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(14)
  , createDesc = __webpack_require__(37);
module.exports = __webpack_require__(17) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65)
  , defined = __webpack_require__(45);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WILDCARD = '*';
var WILDCARD_KEY = 'RED5PRO';

/**
 * Base class for an Event Emitter.
 */

var EventEmitter = function () {
  function EventEmitter() {
    (0, _classCallCheck3.default)(this, EventEmitter);

    this._callbacks = {};
    this._callbacks[WILDCARD_KEY] = [];
  }

  /**
   * Invokes event handlers.
   *
   * @param {Array} callbacks
   * @param {Event} event
   *
   * @private
   */


  (0, _createClass3.default)(EventEmitter, [{
    key: '_notify',
    value: function _notify(callbacks, event) {
      var i = void 0,
          length = callbacks.length;
      for (i = 0; i < length; i++) {
        callbacks[i](event);
      }
    }

    /**
     * Assign a callback handler to an event type.
     *
     * @param {String} type
     * @param {Function} fn
     */

  }, {
    key: 'on',
    value: function on(type, fn) {
      if (typeof fn !== 'function') {
        return;
      }

      if (type === WILDCARD) {
        this._callbacks[WILDCARD_KEY].push(fn);
        return;
      }

      if (this._callbacks[type] === undefined) {
        this._callbacks[type] = [];
      }

      if (this._callbacks[type].indexOf(fn) === -1) {
        this._callbacks[type].push(fn);
      }
    }

    /**
     * Remove a callback handler for an event type.
     *
     * @param {String} type
     * @param {Function} fn
     */

  }, {
    key: 'off',
    value: function off(type, fn) {
      var map = this._callbacks[type];
      if (type === WILDCARD) {
        map = this._callbacks[WILDCARD_KEY];
      }
      if (map) {
        var index = map.indexOf(fn);
        if (index !== -1) {
          map.splice(index, 1);
        }
      }
    }

    /**
     * Dispatch an event to be handled by any assigned callbacks.
     *
     * @param {Event} event
     */

  }, {
    key: 'trigger',
    value: function trigger(event) {
      var type = event.type;
      if (this._callbacks[type]) {
        this._notify(this._callbacks[type], event);
      }
      this._notify(this._callbacks[WILDCARD_KEY], event);
    }
  }]);
  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackControlsImpl = exports.PlaybackControls = exports.PlaybackController = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _slider = __webpack_require__(124);

var _slider2 = _interopRequireDefault(_slider);

var _event = __webpack_require__(84);

var _state = __webpack_require__(34);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'PlaybackControls';

/**
 * Interface contract for playback controller actions.
 *
 * @extends EventEmitter
 */

var SubscriberPlaybackController = function (_EventEmitter) {
  (0, _inherits3.default)(SubscriberPlaybackController, _EventEmitter);

  function SubscriberPlaybackController() {
    (0, _classCallCheck3.default)(this, SubscriberPlaybackController);
    return (0, _possibleConstructorReturn3.default)(this, (SubscriberPlaybackController.__proto__ || (0, _getPrototypeOf2.default)(SubscriberPlaybackController)).call(this));
  }

  /**
   * Request to start playing the stream.
   */


  (0, _createClass3.default)(SubscriberPlaybackController, [{
    key: 'play',
    value: function play() {}
    /**
     * Request to pause playback of stream.
     */

  }, {
    key: 'pause',
    value: function pause() {}
    /**
     * Request to resume playback od stream.
     */

  }, {
    key: 'resume',
    value: function resume() {}
    /**
     * Request to stop playback of stream.
     */

  }, {
    key: 'stop',
    value: function stop() {}
    /**
     * Request to mute the audio of the stream.
     */

  }, {
    key: 'mute',
    value: function mute() {}
    /**
     * Request to unmute the audio of the stream.
     */

  }, {
    key: 'unmute',
    value: function unmute() {}
    /**
     * Request to set volume of audio of stream.
     *
     * @param {Number} value
     *        From 0..1.
     */

  }, {
    key: 'setVolume',
    value: function setVolume(value) {} // eslint-disable-line no-unused-vars
    /**
     * Request to set playback point in time.
     *
     * @param {Number} value
     *        Either the percentage of the duration (if provided) or the time in seconds.
     * @param {Number} duration
     *        Optional duration of video (when known through VOD) to use to determine time based on first param passed as percentage.
     */

  }, {
    key: 'seekTo',
    value: function seekTo(value) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    } // eslint-disable-line no-unused-vars
    /**
     * Request to toggle fullscreen state.
     */

  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen() {}
  }]);
  return SubscriberPlaybackController;
}(_eventEmitter2.default);

/**
 * Interface for PlaybackControls used by Subscribers with `controls` and `class="red5pro-media` defined on target elements. This interface serves as a presentation controller and playback API for target DOM elements.
 *
 * You can use this as a prototype for creating and providing your own custom Playback Controls. To do so: provide an implementation of this Class as the `controls` property on the initialization configuration map provided in the `init()` call of a Subscriber.
 *
 * TODO: Fully vet the viability of developers being adhere to this contract for custom controls.
 * @private
 */


var SubscriberPlaybackControls = function () {
  function SubscriberPlaybackControls() {
    (0, _classCallCheck3.default)(this, SubscriberPlaybackControls);
  }

  /**
   * Returns the volume level.
   *
   * @return {Number} 0..1
   */


  (0, _createClass3.default)(SubscriberPlaybackControls, [{
    key: 'getVolume',
    value: function getVolume() {}

    /**
     * Sets the volume level of playback.
     *
     * @param {Number} value
     *        0..1
     */

  }, {
    key: 'setVolume',
    value: function setVolume(value) {} // eslint-disable-line no-unused-vars

    /**
     * Request to set playback point in time.
     *
     * @param {Number} value
     *        Either the percentage of the duration (if provided) or the time in seconds.
     * @param {Number} duration
     *        Optional duration of video (when known through VOD) to use to determine time based on first param passed as percentage.
     */

  }, {
    key: 'setSeekTime',
    value: function setSeekTime(value) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    } // eslint-disable-line no-unused-vars

    /**
     * Sets the playback duration of the stream, if available from VOD (Video On Demand).
     *
     * @param {Number} value
     *        In seconds.
     */

  }, {
    key: 'setPlaybackDuration',
    value: function setPlaybackDuration(value) {} // eslint-disable-line no-unused-vars

    /**
     * Returns the current playback state.
     *
     * @return {Number}
     * @see {PlaybackState}
     */

  }, {
    key: 'getState',
    value: function getState() {}

    /**
     * Set the current playback state.
     *
     * @param {Number} state
     * @see {PlaybackState}
     */

  }, {
    key: 'setState',
    value: function setState(state) {} // eslint-disable-line no-unused-vars

    /**
     * Sets playback as VOD (Video On Demand) type.
     *
     * @param {Boolean} value
     */

  }, {
    key: 'setAsVOD',
    value: function setAsVOD(value) {} // eslint-disable-line no-unused-vars

    /**
    * Enables controls and event handlers.
    *
    * @private
    */

  }, {
    key: 'enable',
    value: function enable(value) {} // eslint-disable-line no-unused-vars

  }]);
  return SubscriberPlaybackControls;
}();

/**
 * Default implementation of `SubscriberPlaybackControls` used internally in the SDK.
 *
 * @private
 */


var SubscriberPlaybackControlsImpl = function (_SubscriberPlaybackCo) {
  (0, _inherits3.default)(SubscriberPlaybackControlsImpl, _SubscriberPlaybackCo);

  function SubscriberPlaybackControlsImpl(player, container) {
    (0, _classCallCheck3.default)(this, SubscriberPlaybackControlsImpl);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SubscriberPlaybackControlsImpl.__proto__ || (0, _getPrototypeOf2.default)(SubscriberPlaybackControlsImpl)).call(this));

    _this2.player = player;
    _this2.container = container;
    _this2._controlbar = undefined;
    _this2._playPauseButton = undefined;
    _this2._muteButton = undefined;
    _this2._volumeField = undefined;
    _this2._seekTimeField = undefined;
    _this2._timeField = undefined;
    _this2._fullScreenButton = undefined;
    _this2._state = _state.PlaybackState.IDLE;
    _this2._mutedState = false;
    _this2._resumeAfterSeek = false;
    _this2._playbackDuration = 0;
    _this2._volumeValue = 1;
    _this2._onPlayPauseClickBound = _this2._onPlayPauseClick.bind(_this2);
    _this2.decorate(_this2.container);
    return _this2;
  }

  /**
   * Decorates target container with playback control elements.
   *
   * @param {Element} container
   *
   * @private
   */


  (0, _createClass3.default)(SubscriberPlaybackControlsImpl, [{
    key: 'decorate',
    value: function decorate(container) {
      (0, _log.debug)(NAME, '[decorate]');
      var controlbar = _browser2.default.createElement('div');
      controlbar.classList.add('red5pro-media-control-bar');
      this._playPauseButton = this._createPlayPauseButton();
      this._muteButton = this._createMuteButton();
      this._volumeField = this._createVolumeControl();
      this._seekTimeField = this._createSeekControl();
      this._timeField = this._createPlaybackTime();
      this._fullScreenButton = this._createFullScreenToggle();
      controlbar.appendChild(this._playPauseButton);
      controlbar.appendChild(this._timeField);
      controlbar.appendChild(this._seekTimeField.view);
      controlbar.appendChild(this._muteButton);
      controlbar.appendChild(this._volumeField.view);
      controlbar.appendChild(this._fullScreenButton);
      container.appendChild(controlbar);
      this._controlbar = controlbar;

      if (_browser2.default.isTouchEnabled()) {
        controlbar.classList.add('red5pro-media-control-bar-show');
        //    this.container.addEventListener('click', () => {
        //      controlbar.classList.toggle('red5pro-media-control-bar-show')
        //    })
      } else {
        this.container.addEventListener('mouseover', function () {
          controlbar.classList.add('red5pro-media-control-bar-show');
        });
        this.container.addEventListener('mouseout', function () {
          controlbar.classList.remove('red5pro-media-control-bar-show');
        });
      }

      this.setState(_state.PlaybackState.IDLE).onFullScreenChange(false).setSeekTime(0).enable(false);
    }

    /**
     * Click handler for play/pause control.
     *
     * @private
     */

  }, {
    key: '_onPlayPauseClick',
    value: function _onPlayPauseClick() {
      if (this.getState() === _state.PlaybackState.PLAYING) {
        this.player.pause();
      } else if (this.getState() === _state.PlaybackState.PAUSED) {
        this.player.resume();
      } else {
        this.player.play();
      }
    }

    /**
     * Creates play/pause control.
     *
     * @private
     */

  }, {
    key: '_createPlayPauseButton',
    value: function _createPlayPauseButton() {
      var button = _browser2.default.createElement('button');
      button.setAttribute('aria-label', 'Toggle Playback');
      button.classList.add('red5pro-media-control-element');
      button.classList.add('red5pro-media-element-button');
      button.classList.add('red5pro-media-playpause-button');
      return button;
    }

    /**
     * Creates mute/unmute control.
     *
     * @private
     */

  }, {
    key: '_createMuteButton',
    value: function _createMuteButton() {
      var self = this;
      var button = _browser2.default.createElement('button');
      button.setAttribute('aria-label', 'Toggle Mute Audio');
      button.classList.add('red5pro-media-control-element');
      button.classList.add('red5pro-media-element-button');
      button.classList.add('red5pro-media-muteunmute-button');
      button.addEventListener('click', function () {
        if (self.getMutedState()) {
          self.player.unmute();
          self.setMutedState(false);
        } else {
          self.player.mute();
          self.setMutedState(true);
        }
      });
      return button;
    }

    /**
     * Creates volume control.
     *
     * @private
     */

  }, {
    key: '_createVolumeControl',
    value: function _createVolumeControl() {
      var self = this;
      var slider = new _slider2.default('volume');
      slider.view.classList.add('red5pro-media-control-element');
      slider.view.classList.add('red5pro-media-volume-slider');
      slider.view.classList.add('red5pro-media-slider');
      slider.on(_event.SliderEventTypes.CHANGE, function (event) {
        var percentage = Number(event.data);
        self.player.setVolume(percentage);
      });
      return slider;
    }

    /**
     * Creates seek control.
     *
     * @private
     */

  }, {
    key: '_createSeekControl',
    value: function _createSeekControl() {
      var self = this;
      var slider = new _slider2.default('seek');
      slider.view.classList.add('red5pro-media-control-element');
      slider.view.classList.add('red5pro-media-seektime-slider');
      slider.view.classList.add('red5pro-media-slider');
      slider.on(_event.SliderEventTypes.CHANGE_START, function () {
        if (self.getState() === _state.PlaybackState.PLAYING) {
          self._resumeAfterSeek = true;
          self.player.pause();
        }
      });
      slider.on(_event.SliderEventTypes.CHANGE, function (event) {
        var percentage = Number(event.data);
        self.player.seekTo(percentage, self._playbackDuration === 0 ? undefined : self._playbackDuration);
        self.setSeekTime(percentage * self._playbackDuration, self._playbackDuration);
      });
      slider.on(_event.SliderEventTypes.CHANGE_COMPLETE, function () {
        if (self._resumeAfterSeek && self.getState() === _state.PlaybackState.PAUSED) {
          self._resumeAfterSeek = false;
          self.player.resume();
        }
      });
      return slider;
    }

    /**
     * Creates playback time field.
     *
     * @private
     */

  }, {
    key: '_createPlaybackTime',
    value: function _createPlaybackTime() {
      var span = _browser2.default.createElement('span');
      var text = _browser2.default.createElement('text', 'hello!');
      span.classList.add('red5pro-media-control-element');
      span.classList.add('red5pro-media-time-field');
      span.appendChild(text);
      return span;
    }

    /**
     * Create fullscreen toggle control.
     *
     * @private
     */

  }, {
    key: '_createFullScreenToggle',
    value: function _createFullScreenToggle() {
      var self = this;
      var button = _browser2.default.createElement('button');
      button.setAttribute('aria-label', 'Toggle Fullscreen');
      button.classList.add('red5pro-media-control-element');
      button.classList.add('red5pro-media-element-button');
      button.classList.add('red5pro-media-fullscreen-button');
      button.addEventListener('click', function () {
        self.player.toggleFullScreen();
      });
      return button;
    }

    /**
     * Enables controls and event handlers.
     *
     * @private
     */

  }, {
    key: 'enable',
    value: function enable(value) {
      if (value) {
        this._playPauseButton.classList.remove('red5pro-media-element-button-disabled');
        this._playPauseButton.addEventListener('click', this._onPlayPauseClickBound);
      } else {
        this._playPauseButton.classList.add('red5pro-media-element-button-disabled');
        this._playPauseButton.removeEventListener('click', this._onPlayPauseClickBound);
      }
    }

    /**
     * Formats the time value.
     *
     * @param {value} Number
     * @return {String}
     */

  }, {
    key: 'formatTime',
    value: function formatTime(value) {
      var hrs = 0;
      var mins = value === 0 ? 0 : parseInt(value / 60);
      var secs = 0;
      if (mins >= 60) {
        hrs = parseInt(mins / 60);
        mins = mins % 60;
      }
      secs = value === 0 ? 0 : parseInt(value % 60);

      var formattedArr = hrs < 10 ? ['0' + hrs] : [hrs];
      formattedArr.push(mins < 10 ? ['0' + mins] : [mins]);
      formattedArr.push(secs < 10 ? ['0' + secs] : [secs]);
      return formattedArr.join(':');
    }

    /**
     * Returns the volume level.
     *
     * @return {Number} 0..1
     */

  }, {
    key: 'getVolume',
    value: function getVolume() {
      return this._volumeValue;
    }

    /**
     * Sets the volume level of playback.
     *
     * @param {Number} value
     *        0..1
     */

  }, {
    key: 'setVolume',
    value: function setVolume(value) {
      this._volumeField.value = value;
      this._volumeValue = value;
      if (value === 0) {
        this.setMutedState(true);
      } else if (this.getMutedState()) {
        this.setMutedState(false);
      }
      return this;
    }

    /**
     * Request to set playback point in time.
     *
     * @param {Number} value
     *        Either the percentage of the duration (if provided) or the time in seconds.
     * @param {Number} duration
     *        Optional duration of video (when known through VOD) to use to determine time based on first param passed as percentage.
     */

  }, {
    key: 'setSeekTime',
    value: function setSeekTime(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this._seekTimeField.value = length === 0 ? 0 : value / length;
      if (this._playbackDuration !== 0 && parseInt(this._playbackDuration) <= parseInt(value)) {
        this._seekTimeField.value = 1;
      }
      this._timeField.innerText = this.formatTime(Math.floor(value));
      return this;
    }

    /**
     * Sets the playback duration of the stream, if available from VOD (Video On Demand).
     *
     * @param {Number} value
     *        In seconds.
     */

  }, {
    key: 'setPlaybackDuration',
    value: function setPlaybackDuration(value) {
      (0, _log.debug)(NAME, '[setplaybackduration]: ' + value);
      this._playbackDuration = value;
    }

    /**
     * Returns the current playback state.
     *
     * @return {Number}
     * @see {PlaybackState}
     */

  }, {
    key: 'getState',
    value: function getState() {
      return this._state;
    }

    /**
     * Set the current playback state.
     *
     * @param {Number} state
     * @see {PlaybackState}
     */

  }, {
    key: 'setState',
    value: function setState(state) {
      (0, _log.debug)(NAME, '[setState]: ' + _state.PlaybackStateReadable[state]);
      this._state = state;
      this.onStateChange(this._state);
      return this;
    }

    /**
     * Returns the current state of the playback being muted.
     * This differs from just the volume level being 0. The controls can be muted, but have a volume level greater than 0 - meaning, unmute will return back to the volume level previously set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'getMutedState',
    value: function getMutedState() {
      return 'muted' in this.player ? this.player.muted : this._mutedState;
    }

    /**
     * Sets the muted state of the playback.
     *
     * @param {Boolean} state
     */

  }, {
    key: 'setMutedState',
    value: function setMutedState(state) {
      this._mutedState = state;
      this.onMutedStateChange(this._mutedState);
      return this;
    }

    /**
     * Handler for change in state.
     *
     * @param {Number} state
     *        The PlaybackState
     *
     * @private
     */

  }, {
    key: 'onStateChange',
    value: function onStateChange(state) {
      if (state === _state.PlaybackState.PLAYING) {
        this._playPauseButton.classList.remove('red5pro-media-play-button');
        this._playPauseButton.classList.add('red5pro-media-pause-button');
      } else {
        this._playPauseButton.classList.add('red5pro-media-play-button');
        this._playPauseButton.classList.remove('red5pro-media-pause-button');
      }
      return this;
    }

    /**
     * Handler for change in mute state.
     *
     * @param {Boolean} state
     *
     * @private
     */

  }, {
    key: 'onMutedStateChange',
    value: function onMutedStateChange(state) {
      if (state) {
        this._muteButton.classList.add('red5pro-media-mute-button');
        this._muteButton.classList.remove('red5pro-media-unmute-button');
        this._volumeField.value = 0;
      } else {
        this._muteButton.classList.remove('red5pro-media-mute-button');
        this._muteButton.classList.add('red5pro-media-unmute-button');
        this._volumeField.value = this._volumeValue;
      }
    }

    /**
     * Handler for change in fullscreen state.
     *
     * @param {Boolean} isFullScreen
     *
     * @private
     */

  }, {
    key: 'onFullScreenChange',
    value: function onFullScreenChange(isFullScreen) {
      if (isFullScreen) {
        this._fullScreenButton.classList.add('red5pro-media-exit-fullscreen-button');
        this._fullScreenButton.classList.remove('red5pro-media-fullscreen-button');
      } else {
        this._fullScreenButton.classList.remove('red5pro-media-exit-fullscreen-button');
        this._fullScreenButton.classList.add('red5pro-media-fullscreen-button');
      }
      return this;
    }

    /**
     * Sets playback as VOD (Video On Demand) type.
     *
     * @param {Boolean} value
     */

  }, {
    key: 'setAsVOD',
    value: function setAsVOD(isVOD) {
      (0, _log.debug)(NAME, '[setAsVOD]: ' + isVOD);
      if (!isVOD) {
        this._seekTimeField.value = 0;
        this._seekTimeField.disabled = true;
      } else {
        this._seekTimeField.disabled = false;
      }
    }

    /**
     * Request to detach the control bar to provided container.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.enable(false);
      this.container.removeChild(this._controlbar);
    }
  }]);
  return SubscriberPlaybackControlsImpl;
}(SubscriberPlaybackControls);

var PlaybackController = exports.PlaybackController = SubscriberPlaybackController;
var PlaybackControls = exports.PlaybackControls = SubscriberPlaybackControls;
var PlaybackControlsImpl = exports.PlaybackControlsImpl = SubscriberPlaybackControlsImpl;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(181)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(66)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
var global        = __webpack_require__(11)
  , hide          = __webpack_require__(21)
  , Iterators     = __webpack_require__(29)
  , TO_STRING_TAG = __webpack_require__(9)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(136);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(52)('meta')
  , isObject = __webpack_require__(13)
  , has      = __webpack_require__(20)
  , setDesc  = __webpack_require__(14).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(25)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(108)
  , enumBugKeys = __webpack_require__(64);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(45);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackVideoEncoder = exports.PlaybackAudioEncoder = exports.PlaybackTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enumeration of Playback Types.
 */
var PlaybackTypes = exports.PlaybackTypes = (0, _freeze2.default)({
  RTC: 'rtc',
  RTMP: 'rtmp',
  HLS: 'hls'
});

/**
 * Enumeration of Audio Encoder types to request for Playback
 */
var PlaybackAudioEncoder = exports.PlaybackAudioEncoder = (0, _freeze2.default)({
  OPUS: 'Opus',
  PCMU: 'PCMU',
  PCMA: 'PCMA',
  SPEEX: 'Speex',
  NONE: 'NONE'
});

/**
 * Enumeration of Video Encoder types to request for Playback.
 */
var PlaybackVideoEncoder = exports.PlaybackVideoEncoder = (0, _freeze2.default)({
  VP8: 'VP8',
  H264: 'H264',
  NONE: 'NONE'
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackStateReadable = exports.PlaybackState = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enumeration of Playback State.
 *
 * @see {SubscriberPlaybackControls}
 */
var PlaybackState = exports.PlaybackState = (0, _freeze2.default)({
  UNAVAILABLE: 1000,
  AVAILABLE: 0,
  IDLE: 1,
  PLAYING: 2,
  PAUSED: 3
});

/**
 * Human readable playback state.
 *
 * @see {SubscriberPlaybackControls}
 * @private
 */
var PlaybackStateReadable = exports.PlaybackStateReadable = (0, _freeze2.default)({
  1000: 'Playback.UNAVAILABLE',
  0: 'Playback.AVAILABLE',
  1: 'Playback.IDLE',
  2: 'Playback.PLAYING',
  3: 'Playback.PAUSED'
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(19)
  , call        = __webpack_require__(102)
  , isArrayIter = __webpack_require__(100)
  , anObject    = __webpack_require__(16)
  , toLength    = __webpack_require__(51)
  , getIterFn   = __webpack_require__(76)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f
  , has = __webpack_require__(20)
  , TAG = __webpack_require__(9)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTCSessionDescription = exports.RTCIceCandidate = exports.RTCPeerConnection = exports.updateBandwidth = exports.forceUserMedia = exports.getUserMedia = exports.isSupported = exports.determineSupportedResolution = exports.quickResolutionSupport = undefined;

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _promise = __webpack_require__(5);

var _util = __webpack_require__(86);

var _object = __webpack_require__(41);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { NoSupportedCameraResolutionsError } from '../exception/errors'

// Resolutions borrowed from https://github.com/webrtcHacks/WebRTC-Camera-Resolution/blob/master/js/resolutionScan.js
var formats = [{
  "label": "4K(UHD)",
  "width": 3840,
  "height": 2160
}, {
  "label": "1080p(FHD)",
  "width": 1920,
  "height": 1080
}, {
  "label": "UXGA",
  "width": 1600,
  "height": 1200
}, {
  "label": "720p(HD)",
  "width": 1280,
  "height": 720
}, {
  "label": "SVGA",
  "width": 800,
  "height": 600
}, {
  "label": "VGA",
  "width": 640,
  "height": 480
}, {
  "label": "360p(nHD)",
  "width": 640,
  "height": 360
}, {
  "label": "CIF",
  "width": 352,
  "height": 288
}, {
  "label": "QVGA",
  "width": 320,
  "height": 240
}, {
  "label": "QCIF",
  "width": 176,
  "height": 144
}, {
  "label": "QQVGA",
  "width": 160,
  "height": 120
}];

/**
 * Detects if resolutions are defined on the provied constraints.
 *
 * @param {Object} constraints
 *        The Media Constraints to test against.
 * @return {Boolean}
 *
 * @private
 */
var hasResolutionsDefined = function hasResolutionsDefined(constraints) {
  return constraints.hasOwnProperty('video') && (constraints.video.hasOwnProperty('width') || constraints.video.hasOwnProperty('height'));
};

/**
 * Return value on attribute based on failover test of attribute availability on provided object.
 *
 * @param {Object} attribute
 * @return {Object}
 *
 * @private
 */
var getValueFromConstraintAttribute = function getValueFromConstraintAttribute(attribute) {
  return attribute.exact || attribute.ideal || attribute.max || attribute.min || attribute;
};

/**
 * Test if video on Media Constraint is either set to `true` or if the constraints and format objects have the same dimension values.
 *
 * @param {Object} constraints
 * @param {Object} format
 * @return {Boolean}
 *
 * @private
 */
var isExact = (0, _util.curry)(function (constraints, format) {
  if (typeof constraints.video === 'boolean') {
    return true;
  }
  var w = constraints.video.hasOwnProperty('width') ? getValueFromConstraintAttribute(constraints.video.width) : 0;
  var h = constraints.video.hasOwnProperty('height') ? getValueFromConstraintAttribute(constraints.video.height) : 0;
  var confirmed = w === format.width && h === format.height;
  if (confirmed) {
    (0, _log.debug)('[gum:isExact]', 'Found matching resolution for ' + format.width + ', ' + format.height + '.');
  }
  return confirmed;
});

/**
 * Test if the area on the provide format is lower than the area on the Media Constraints.
 * This is used in trying to find the next nearest neighbor of dimensions that the browser supports.
 *
 * @param {Object} constraints
 * @param {Object} format
 * @return {Boolean}
 *
 * @private
 */
var isLower = (0, _util.curry)(function (constraints, format) {
  var w = constraints.video.hasOwnProperty('width') ? getValueFromConstraintAttribute(constraints.video.width) : 0;
  var h = constraints.video.hasOwnProperty('height') ? getValueFromConstraintAttribute(constraints.video.height) : 0;
  var desired = w * h;
  var dimensions = format.width * format.height;
  return dimensions < desired;
});

/**
 * Returns filtered of Media Constraint format if matching the canned list of support form `formats`.
 *
 * @param {Array} formatList
 * @param {Object} constraints
 * @return {Array}
 *
 * @private
 */
var hasMatchingFormat = (0, _util.curry)(function (formatsList, constraints) {
  (0, _log.debug)('[gum:hasMatchingFormat]', 'Filtered list: ' + (0, _stringify2.default)((0, _util.filter)(isExact(constraints))(formatsList), null, 2));
  return (0, _util.filter)(isExact(constraints))(formatsList).length > 0;
});

/**
 * Returns list of filter lower resolution constraints from the provided Media constraints.
 *
 * @param {Array} formayList
 * @param {Object} constraints
 * @return {Array}
 *
 * @private
 */
var findLowerResolutions = (0, _util.curry)(function (formatsList, constraints) {
  var resIsLower = isLower(constraints);
  return (0, _util.filter)(resIsLower)(formatsList);
});

/**
 * Allows the browser to try and determine the resolution to use based on `video: true` attribute in `getUserMedia` call.
 *
 * @param {Object} data
 *        The Media Constaints object.
 * @param {Promise} p
 *        The `Promise` to resolve or reject on detemination of allowed Media Constraints on the browser.
 *
 * @private
 */
var allowBrowserToDefineResolution = function allowBrowserToDefineResolution(data, p) {
  // default to `video: true` in hopes the browser can decide on its own.
  data.video = true;
  _browser2.default.gUM(data).then(function (media) {
    p.resolve({
      media: media,
      constraints: data
    });
  }).catch(function (err) {
    // eslint-disable-line no-unused-vars
    var msg = typeof err === 'string' ? err : [err.name, err.message].join(': ');
    (0, _log.debug)('[gum:getUserMedia]', 'Failure in getUserMedia: ' + msg + '. Attempting other resolution tests...');
    (0, _log.debug)('[gUM:findformat]', 'Constraints declined by browser: ' + (0, _stringify2.default)(data, null, 2));
    p.reject('Could not find proper camera for provided constraints.');
  });
};

/**
 * Attempts to select the best resolution based on whether the browser throws an exception when requesting `MediaStream` on `getUserMedia`.
 *
 * @param {Object} data
 *        The Media Constaints object.
 * @param {Array} selections
 *        The listing of formats to test on.
 * @param {Promise} p
 *        The `Promise` to resolve or reject on detemination of allowed Media Constraints on the browser.
 *
 * @private
 */
var findNextSelection = function findNextSelection(data, selections, p) {
  if (selections.length == 0) {
    // if we got here, there is no support.
    allowBrowserToDefineResolution(data, p);
    return;
  }
  var selection = selections.shift();
  data.video.width = { exact: selection.width };
  data.video.height = { exact: selection.height };
  _browser2.default.gUM(data).then(function (media) {
    p.resolve({
      media: media,
      constraints: data
    });
  }).catch(function (err) {
    // eslint-disable-line no-unused-vars
    var msg = typeof err === 'string' ? err : [err.name, err.message].join(': ');
    (0, _log.debug)('[gum:getUserMedia]', 'Failure in getUserMedia: ' + msg + '. Attempting other resolution tests...');
    (0, _log.debug)('[gUM:findformat]', 'Constraints declined by browser: ' + (0, _stringify2.default)(data, null, 2));
    findNextSelection(data, selections, p);
  });
};

/**
 * Quick test if resolution is supported on the browser.
 *
 * @param {Object} constraints
 *
 * @private
 */
var quickResolutionSupport = exports.quickResolutionSupport = function quickResolutionSupport(constraints) {
  var data = (0, _object.deepCopy)(constraints);
  // if video: `true`, returned unscathed.
  if (typeof constraints.video === 'boolean') {
    return data;
  }
  // else, define exact.
  if (constraints.video.width) {
    data.video.width = { exact: getValueFromConstraintAttribute(constraints.video.width) };
  }
  if (constraints.video.height) {
    data.video.height = { exact: getValueFromConstraintAttribute(constraints.video.height) };
  }
  return data;
};

/**
 * Detemine the supported resolution on the browser based on the Media Constraints requested.
 *
 * @param {Object} constraints
 *
 * @private
 */
var determineSupportedResolution = exports.determineSupportedResolution = function determineSupportedResolution(constraints) {
  (0, _log.debug)('[gum:determineSupportedResolution]', 'Determine next neighbor based on constraints: ' + (0, _stringify2.default)(constraints, null, 2));
  var deferred = new _promise.DeferredPromise();
  var selections = findLowerResolutions(formats)(constraints);
  var data = (0, _object.deepCopy)(constraints);
  findNextSelection(data, selections, deferred);
  return deferred.promise;
};

/**
 * Quick test to see if WebRTC is supported in the current environment.
 *
 * @return {Boolean}
 *
 * @private
 */
var isSupported = exports.isSupported = function isSupported() {
  return _RTCPeerConnection && _RTCIceCandidate && _RTCSessionDescription;
};

/**
 * Proxy on `getUserMedia` to try and resolve to the best possible resolution for broadcast based on Media Constraints object provided.
 *
 * @param {Object} constraints
 * @return {Promise}
 *        The `Promise` will resolve or reject on properly accessing a `MediaStream` from `getUserMedia` on the browser.
 *
 * @private
 */
var getUserMedia = exports.getUserMedia = function getUserMedia(constraints) {
  // Wrapping `getUserMedia` requests in another deferred promise so we can return the selected resolutions if successful.
  var dfd = new _promise.DeferredPromise();
  var isAvailableInFormats = hasMatchingFormat(formats);
  (0, _log.debug)('[gum:getUserMedia]', 'Is Available in format listing: ' + isAvailableInFormats(constraints));
  var failover = function failover(err) {
    if (err) {
      var msg = typeof err === 'string' ? err : [err.name, err.message].join(': ');
      (0, _log.debug)('[gum:getUserMedia]', 'Failure in getUserMedia: ' + msg + '. Attempting other resolution tests...');
    }
    determineSupportedResolution(constraints).then(function (res) {
      dfd.resolve({
        media: res.media,
        constraints: res.constraints
      });
    }).catch(function (error) {
      dfd.reject({
        error: error,
        constraints: constraints
      });
    });
  };
  if (!hasResolutionsDefined(constraints)) {
    (0, _log.debug)('[gum:getUserMedia]', 'Constraints were not defined properly. Attempting failover...');
    _browser2.default.gUM(constraints).then(function (media) {
      dfd.resolve({
        media: media,
        constraints: constraints
      });
    }).catch(failover);
  } else if (isAvailableInFormats(constraints)) {
    (0, _log.debug)('[gum:getUserMedia]', 'Found constraints in list. Checking quick support for faster setup with: ' + (0, _stringify2.default)(constraints, null, 2));
    // Try quick setting of `exact` resolution...
    var available = quickResolutionSupport(constraints);
    _browser2.default.gUM(available).then(function (media) {
      dfd.resolve({
        media: media,
        constraints: available
      });
    }).catch(failover);
  } else {
    (0, _log.debug)('[gum:getUserMedia]', 'Could not find contraints in list. Attempting failover...');
    failover();
  }
  return dfd.promise;
};

/**
 * Force to call `getUserMedia` directly on the browser and bypass the resolution detection mechanism provided by other methods on this module.
 *
 * @private
 */
var forceUserMedia = exports.forceUserMedia = function forceUserMedia(constraints) {
  return _browser2.default.gUM(constraints);
};

// https://github.com/muaz-khan/WebRTC-Experiment/blob/master/RTCPeerConnection/RTCPeerConnection-v1.6.js#L158
// Muaz Khan     - github.com/muaz-khan
// MIT License   - www.WebRTC-Experiment.com/licence
// Documentation - github.com/muaz-khan/WebRTC-Experiment/tree/master/RTCPeerConnection
var updateBandwidth = exports.updateBandwidth = function updateBandwidth(options, sdp) {
  if (_browser2.default.getIsMoz()) {
    var a_index = void 0,
        l_index = void 0,
        front = void 0,
        back = void 0;
    if (options.audio) {
      a_index = sdp.indexOf('m=audio');
      l_index = sdp.indexOf('\r\n', a_index);
      front = sdp.slice(0, l_index);
      back = sdp.slice(l_index + '\r\n'.length, sdp.length);
      sdp = [front, 'b=AS:' + options.audio, back].join('\r\n');
    }
    if (options.video) {
      a_index = sdp.indexOf('m=video');
      l_index = sdp.indexOf('\r\n', a_index);
      front = sdp.slice(0, l_index);
      back = sdp.slice(l_index + '\r\n'.length, sdp.length);
      sdp = [front, 'b=AS:' + options.video, back].join('\r\n');
    }
  } else {
    sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
    if (options.audio) {
      sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + options.audio + '\r\n');
    }
    if (options.video) {
      sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + options.video + '\r\n');
    }
  }
  return sdp;
};

/* -- handled by adapter.js -- */
var _RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var _RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;
var _RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;

var RTCPeerConnection = exports.RTCPeerConnection = _RTCPeerConnection;
var RTCIceCandidate = exports.RTCIceCandidate = _RTCIceCandidate;
var RTCSessionDescription = exports.RTCSessionDescription = _RTCSessionDescription;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Deep-defines an `Object` in place with namespaced attribute value.
 *
 * @private
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metadataResolutionToObject = exports.deepCopy = exports.deepDefine = undefined;

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepDefine = exports.deepDefine = function deepDefine(object, paths, value) {
  var i = 0;
  var tail = object;
  var prop = paths.pop();
  var length = paths.length;
  for (i; i < length; i++) {
    var path = paths[i];
    tail[path] = tail[path] || {};
    tail = tail[path];
  }
  tail[prop] = value;
};

/**
 * Deep-copy utilizing JSON API.
 *
 * @private
 */
var deepCopy = exports.deepCopy = function deepCopy(obj) {
  var str = (0, _stringify2.default)(obj);
  return JSON.parse(str);
};

/**
 * Simple util to parse resolution from metadata.
 *
 * @param {String} value
 *        The resolution value from metadata: e.g, `640,480`.
 * @return {Object}
 *        The structured dimensions Object with `width` and `height` properties.
 *
 * @private
 */
var metadataResolutionToObject = exports.metadataResolutionToObject = function metadataResolutionToObject(value) {
  if (typeof value === 'string') {
    var dims = value.split(',');
    return {
      width: parseInt(dims[0]),
      height: parseInt(dims[1])
    };
  }
  return value;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackView = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProPlaybackView';
var playbackId = 'red5pro-subscriber';

/**
 * Bridge between DOM Element view and Subscriber implementation.
 * Still used, but internalized as of 4.0.0. Up for deprecation, up for discussion.
 *
 * @private
 */

var PlaybackView = exports.PlaybackView = function () {

  /**
   * @param {String} elementId
   *        The element `id` to use for playback display.
   *
   * @private
   */
  function PlaybackView() {
    var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playbackId;
    (0, _classCallCheck3.default)(this, PlaybackView);

    try {
      // Target video/audio element.
      this._targetElement = _browser2.default.resolveElement(elementId);
    } catch (e) {
      (0, _log.error)(NAME, 'Could not instantiate a new instance of Red5ProSubscriber. Reason: ' + e.message);
      throw e;
    }
  }

  /**
   * Associates Subscriber instance with this view manager.
   *
   * @param {Object} subscriber
   *        The Subscriber instance.
   *
   * @private
   */


  (0, _createClass3.default)(PlaybackView, [{
    key: 'attachSubscriber',
    value: function attachSubscriber(subscriber) {
      (0, _log.debug)(NAME, '[attachsubscriber]');
      subscriber.setView(this, _browser2.default.getElementId(this._targetElement));
    }

    /**
     * Assign the `MediaStream` object to the view.
     *
     * @param {MediaStream} mediaStream
     *
     * @private
     */

  }, {
    key: 'attachStream',
    value: function attachStream(mediaStream) {
      var autoplay = this.isAutoplay;
      (0, _log.debug)(NAME, '[attachstream]');
      _browser2.default.setVideoSource(this._targetElement, mediaStream, autoplay);
    }

    /**
     * Returns recognized `autoplay` attribute on the DOM element.
     *
     * @private
     */

  }, {
    key: 'isAutoplay',
    get: function get() {
      return _browser2.default.hasAttributeDefined(this._targetElement, 'autoplay');
    }

    /**
     * Returns the DOM element.
     *
     * @private
     */

  }, {
    key: 'view',
    get: function get() {
      return this._targetElement;
    }
  }]);
  return PlaybackView;
}();

exports.default = PlaybackView;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(35)
  , TAG = __webpack_require__(9)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(16)
  , dPs         = __webpack_require__(177)
  , enumBugKeys = __webpack_require__(64)
  , IE_PROTO    = __webpack_require__(70)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(63)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(98).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10)
  , core    = __webpack_require__(3)
  , fails   = __webpack_require__(25);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(21);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(72)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.isSupported = undefined;

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test for WebSocket support in environment.
 *
 * @return {Boolean}
 *
 * @private
 */
var isSupported = exports.isSupported = function isSupported() {
  return _browser2.default.supportsWebSocket();
};

/**
 * Attempt at creating new instance of a `WebSocket` at endpoint URL.
 *
 * @param {String} url
 * @return {WebSocket}
 *
 * @private
 */
var create = exports.create = function create(url) {
  return _browser2.default.createWebSocket(url);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishModeTypes = exports.PublishTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublishTypes = exports.PublishTypes = (0, _freeze2.default)({
  RTMP: 'rtmp',
  RTC: 'rtc'
});

var PublishModeTypes = exports.PublishModeTypes = (0, _freeze2.default)({
  LIVE: 'live',
  RECORD: 'record',
  APPEND: 'append'
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IceTransportTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enumeration of Support ICE Transport types.
 */
var IceTransportTypes = exports.IceTransportTypes = (0, _freeze2.default)({
  UDP: 'udp',
  TCP: 'tcp'
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharedObjectEventTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Common event types on SharedObject.
 *
 * @see {Red5ProSharedObject}
 */
var SharedObjectEventTypes = exports.SharedObjectEventTypes = (0, _freeze2.default)({
  CONNECT_SUCCESS: 'Connect.Success',
  CONNECT_FAILURE: 'Connect.Failure',
  PROPERTY_UPDATE: 'SharedObject.PropertyUpdate',
  METHOD_UPDATE: 'SharedObject.MethodUpdate'
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProPublishView';
var publisherId = 'red5pro-publisher';

/**
 * Bridge between DOM Element view and Publisher implementation.
 * Still used, but internalized as of 4.0.0. Up for deprecation, up for discussion.
 *
 * @private
 */

var PublishView = function () {

  /**
   * @param {String} elementId
   *        The element `id` to use for playback display.
   * @private
   */
  function PublishView() {
    var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : publisherId;
    (0, _classCallCheck3.default)(this, PublishView);

    try {
      this._targetElement = _browser2.default.resolveElement(elementId);
    } catch (e) {
      (0, _log.error)(NAME, 'Could not instantiate a new instance of Red5ProPublisher. Reason: ' + e.message);
      throw e;
    }
  }

  (0, _createClass3.default)(PublishView, [{
    key: 'attachPublisher',
    value: function attachPublisher(publisher) {
      (0, _log.debug)(NAME, '[attachpublisher]');
      publisher.setView(this, _browser2.default.getElementId(this._targetElement));
    }
  }, {
    key: 'preview',
    value: function preview(mediaStream) {
      var autoplay = this.isAutoplay;
      (0, _log.debug)(NAME, '[preview]: autoplay(' + autoplay + ')');
      _browser2.default.setVideoSource(this._targetElement, mediaStream, autoplay);
    }
  }, {
    key: 'isAutoplay',
    get: function get() {
      return _browser2.default.hasAttributeDefined(this._targetElement, 'autoplay');
    }
  }, {
    key: 'view',
    get: function get() {
      return this._targetElement;
    }
  }]);
  return PublishView;
}();

exports.default = PublishView;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(141);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(140);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(19)
  , IObject  = __webpack_require__(65)
  , toObject = __webpack_require__(32)
  , toLength = __webpack_require__(51)
  , asc      = __webpack_require__(169);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(11)
  , $export        = __webpack_require__(10)
  , meta           = __webpack_require__(30)
  , fails          = __webpack_require__(25)
  , hide           = __webpack_require__(21)
  , redefineAll    = __webpack_require__(50)
  , forOf          = __webpack_require__(36)
  , anInstance     = __webpack_require__(43)
  , isObject       = __webpack_require__(13)
  , setToStringTag = __webpack_require__(38)
  , dP             = __webpack_require__(14).f
  , each           = __webpack_require__(61)(0)
  , DESCRIPTORS    = __webpack_require__(17);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , document = __webpack_require__(11).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(46)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(69)
  , hide           = __webpack_require__(21)
  , has            = __webpack_require__(20)
  , Iterators      = __webpack_require__(29)
  , $iterCreate    = __webpack_require__(174)
  , setToStringTag = __webpack_require__(38)
  , getPrototypeOf = __webpack_require__(107)
  , ITERATOR       = __webpack_require__(9)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(48)
  , createDesc     = __webpack_require__(37)
  , toIObject      = __webpack_require__(22)
  , toPrimitive    = __webpack_require__(73)
  , has            = __webpack_require__(20)
  , IE8_DOM_DEFINE = __webpack_require__(99)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(71)('keys')
  , uid    = __webpack_require__(52);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(11)
  , core           = __webpack_require__(3)
  , LIBRARY        = __webpack_require__(46)
  , wksExt         = __webpack_require__(75)
  , defineProperty = __webpack_require__(14).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(44)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(29);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embedSwfObject = exports.defineEmbedElement = undefined;

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _promise = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replaces a `video` element with a container for embedding a Flash object.
 *
 * @param {Element} targetElement
 * @param {Element} targetParent
 *
 * @private
 */
var defineEmbedElement = exports.defineEmbedElement = function defineEmbedElement(targetElement, targetParent) {
  var dfd = new _promise.DeferredPromise();
  var elementId = targetElement.id;
  if (targetElement.nodeName.toLowerCase() === 'video') {
    var div = _browser2.default.createElement('div');
    div.id = elementId + '_rtmp';
    targetParent.appendChild(div);
    if (targetElement.parentElement) {
      targetElement.parentElement.removeChild(targetElement);
    }
    dfd.resolve(div.id);
  } else {
    dfd.resolve(elementId);
  }
  return dfd.promise;
};

/**
 * Request to embed a Flash object using SWFObject library.
 *
 * @param {String} idName
 * @param {Object} options
 *        Initialization configuration map.
 * @param {Object} flashvars
 *        The FlashVars to pass into the embedded object.
 * @param {Object} swfobject
 *        The loaded SWFObject library util.
 * @param {String} elementId
 *        The id of the Element to embed.
 * @return {Promise}
 *
 * @private
 */
var embedSwfObject = exports.embedSwfObject = function embedSwfObject(idName, options, flashvars, swfobject, elementId) {
  var dfd = new _promise.DeferredPromise();
  var params = {
    quality: 'high',
    wmode: 'opaque',
    bgcolor: options.backgroundColor || '#000',
    allowscriptaccess: 'always',
    allowfullscreen: 'true',
    allownetworking: 'all'
  };
  var attributes = {
    id: idName,
    name: idName,
    align: 'middle'
  };
  if (swfobject.hasFlashPlayerVersion(options.minFlashVersion)) {
    swfobject.embedSWF(options.swf, elementId, options.embedWidth || 640, options.embedHeight || 480, options.minFlashVersion, options.productInstallURL, flashvars, params, attributes, function (result) {
      if (result.success) {
        dfd.resolve();
      } else {
        dfd.reject('Flash Object embed failed.');
      }
    });
  } else {
    dfd.reject('Flash Player Version is not supported.');
  }
  return dfd.promise;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyOrientation = undefined;

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestFrame = _browser2.default.requestFrame;

/* || Translation Styles used on Orientation-change metadata from Mobile broadcasters. || */

var origin = ['webkitTransformOrigin', 'mozTransformOrigin', 'msTransformOrigin', 'oTransformOrigin', 'transformOrigin'];
var styles = ['webkitTransform', 'mozTransform', 'msTransform', 'oTransform', 'transform'];
var transition = ['webkitTransition', 'mozTransition', 'msTransition', 'oTransition', 'transition'];
var rotationTranslations = {
  '0': {
    origin: 'center center',
    transform: 'rotate(0deg)'
  },
  '90': {
    origin: 'left top',
    transform: 'rotate(90deg) translateY(-100%)'
  },
  '180': {
    origin: 'center center',
    transform: 'rotate(180deg)'
  },
  '270': {
    origin: 'top left',
    transform: 'rotate(270deg) translateX(-100%) translateY(0%)'
  },
  '-90': {
    origin: 'left top',
    transform: 'rotate(-90deg) translateX(-100%)'
  },
  '-180': {
    origin: 'center center',
    transform: 'rotate(-180deg)'
  },
  '-270': {
    origin: 'top left',
    transform: 'rotate(-270deg) translateY(-100%)'
  }

  /* Utility method to track and resize an element on enter frame. */
};var trackResize = function trackResize(element, raf) {
  var isRotated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return function () {
    var parent = element.parentNode;
    if (parent) {
      var pwidth = parent.clientWidth;
      var pheight = parent.clientHeight;
      if (isRotated) {
        element.style.width = pheight + 'px';
      } else {
        element.style.width = pwidth + 'px';
      }
      var ewidth = element.clientWidth;
      var eheight = element.clientHeight;
      var margin = (isRotated ? pwidth - eheight : pwidth - ewidth) * 0.5;
      element.style.position = 'relative';
      element.style.left = margin + 'px';
    }
    if (raf) {
      raf(trackResize(element, raf, isRotated));
    }
  };
};

var applyOrientation = exports.applyOrientation = function applyOrientation(element, value, resolution) {
  // eslint-disable-line no-unused-vars
  var i = void 0,
      length = styles.length;
  value = value % 360;
  var isRotated = value % 180 !== 0;
  var parent = element.parentNode;
  var pwidth = element.width ? element.width : parent.clientWidth;
  var pheight = element.height ? element.height : parent.clientHeight;
  var translations = rotationTranslations[value.toString()];
  for (i = 0; i < length; i++) {
    element.style[origin[i]] = translations.origin;
    element.style[styles[i]] = translations.transform;
    element.style[transition[i]] = 'transform 0.0s linear';
  }
  if (isRotated) {
    // const scale = pwidth > pheight ? pheight / pwidth : pwidth / pheight
    element.style.width = pheight + 'px';
    parent.style.height = pheight + 'px';
    // element.style.height = (pwidth * scale) + 'px'
  } else {
    element.style.width = pwidth + 'px';
    element.style.height = pheight + 'px';
    //    parent.style.width = pwidth + 'px'
  }

  if (document.attachEvent) {
    parent.attachEvent('resize', trackResize(element, requestFrame, isRotated));
  } else {
    trackResize(element, requestFrame, isRotated)();
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTMPPublisherEventTypes = exports.RTCPublisherEventTypes = exports.FailoverPublisherEventTypes = exports.PublisherEventTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Common Publisher-based event types.
 */
var PublisherEventTypes = exports.PublisherEventTypes = (0, _freeze2.default)({
  CONNECT_SUCCESS: 'Connect.Success',
  CONNECT_FAILURE: 'Connect.Failure',
  PUBLISH_START: 'Publish.Start',
  PUBLISH_FAIL: 'Publish.Fail',
  PUBLISH_INVALID_NAME: 'Publish.InvalidName',
  UNPUBLISH_SUCCESS: 'Unpublish.Success',
  PUBLISH_METADATA: 'Publish.Metadata',
  CONNECTION_CLOSED: 'Publisher.Connection.Closed',
  DIMENSION_CHANGE: 'Publisher.Video.DimensionChange'
});

/**
 * Event types dispacthed from and specific to `Red5ProPublisher`.
 *
 * @see {Red5ProPublisher}
 */
var FailoverPublisherEventTypes = exports.FailoverPublisherEventTypes = (0, _freeze2.default)({
  PUBLISHER_REJECT: 'Publisher.Reject',
  PUBLISHER_ACCEPT: 'Publisher.Accept'
});

/**
 * Event types dispatched from and specific to `RTCPublisher`.
 *
 * @see {RTCPublisher}
 */
var RTCPublisherEventTypes = exports.RTCPublisherEventTypes = (0, _freeze2.default)({
  MEDIA_STREAM_AVAILABLE: 'WebRTC.MediaStream.Available',
  PEER_CONNECTION_AVAILABLE: 'WebRTC.PeerConnection.Available',
  OFFER_START: 'WebRTC.Offer.Start',
  OFFER_END: 'WebRTC.Offer.End',
  ICE_TRICKLE_COMPLETE: 'WebRTC.IceTrickle.Complete'
});

/**
 * Event types dispatched from and specific to `RTMPPublisher`.
 *
 * @see {RTMPPublisher}
 */
var RTMPPublisherEventTypes = exports.RTMPPublisherEventTypes = (0, _freeze2.default)({
  EMBED_SUCCESS: 'FlashPlayer.Embed.Success',
  EMBED_FAILURE: 'FlashPlayer.Embed.Failure'
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTMPSubscriberEventTypes = exports.RTCSubscriberEventTypes = exports.FailoverSubscriberEventTypes = exports.SubscriberEventTypes = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Common event types on all Subscribers.
 */
var SubscriberEventTypes = exports.SubscriberEventTypes = (0, _freeze2.default)({
  CONNECT_SUCCESS: 'Connect.Success',
  CONNECT_FAILURE: 'Connect.Failure',
  SUBSCRIBE_START: 'Subscribe.Start',
  SUBSCRIBE_STOP: 'Subscribe.Stop',
  SUBSCRIBE_FAIL: 'Subscribe.Fail',
  SUBSCRIBE_INVALID_NAME: 'Subscribe.InvalidName',
  SUBSCRIBE_METADATA: 'Subscribe.Metadata',
  SUBSCRIBE_SEND_INVOKE: 'Subscribe.Send.Invoke',
  PLAY_UNPUBLISH: 'Subscribe.Play.Unpublish',
  CONNECTION_CLOSED: 'Subscribe.Connection.Closed',
  ORIENTATION_CHANGE: 'Subscribe.Orientation.Change',
  VOLUME_CHANGE: 'Subscribe.Volume.Change',
  PLAYBACK_TIME_UPDATE: 'Subscribe.Time.Update',
  PLAYBACK_STATE_CHANGE: 'Subscribe.Playback.Change',
  FULL_SCREEN_STATE_CHANGE: 'Subscribe.FullScreen.Change'
});

/**
 * Event types dispatched from and specific to `Red5ProSubscriber`.
 *
 * @see {Red5ProSubscriber}
 */
var FailoverSubscriberEventTypes = exports.FailoverSubscriberEventTypes = (0, _freeze2.default)({
  SUBSCRIBER_REJECT: 'Subscriber.Reject',
  SUBSCRIBER_ACCEPT: 'Subscriber.Accept'
});

/**
 * Event types dispatched from and specific to `RTCSubscriber`.
 *
 * @see {RTCSubscriber}
 */
var RTCSubscriberEventTypes = exports.RTCSubscriberEventTypes = (0, _freeze2.default)({
  PEER_CONNECTION_AVAILABLE: 'WebRTC.PeerConnection.Available',
  OFFER_START: 'WebRTC.Offer.Start',
  OFFER_END: 'WebRTC.Offer.End',
  ANSWER_START: 'WebRTC.Answer.Start',
  ANSWER_END: 'WebRTC.Answer.End',
  CANDIDATE_START: 'WebRTC.Candidate.Start',
  CANDIDATE_END: 'WebRTC.Candidate.End',
  ICE_TRICKLE_COMPLETE: 'WebRTC.IceTrickle.Complete',
  ON_ADD_STREAM: 'WebRTC.Add.Stream'
});

/**
 * Event type dispatched from and specific to `RTMPSubscriber`.
 *
 * @see {RTMPSubscriber}
 */
var RTMPSubscriberEventTypes = exports.RTMPSubscriberEventTypes = (0, _freeze2.default)({
  EMBED_SUCCESS: 'FlashPlayer.Embed.Success',
  EMBED_FAILURE: 'FlashPlayer.Embed.Failure'
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProRTMPSharedObjectHandler';

/**
 * Flash-based SharedObject handler.
 *
 * @private
 */

var RTMPSharedObjectHandler = function () {
  function RTMPSharedObjectHandler() {
    (0, _classCallCheck3.default)(this, RTMPSharedObjectHandler);

    this._element = undefined;
    this._responseHandlers = [];
  }

  /**
   * Adds a response handler for SharedObject events.
   *
   * @param {Object} handler
   */


  (0, _createClass3.default)(RTMPSharedObjectHandler, [{
    key: 'addResponseHandler',
    value: function addResponseHandler(handler) {
      this._responseHandlers.push(handler);
    }

    /**
     * Removes a response handler from SharedObject events.
     *
     * @param {Object} handler
     */

  }, {
    key: 'removeResponseHandler',
    value: function removeResponseHandler(handler) {
      var i = this._responseHandlers.length;
      var rHandler = void 0;
      while (--i > -1) {
        rHandler = this._responseHandlers[i];
        if (rHandler === handler) {
          this._responseHandlers.splice(i, 1);
          return;
        }
      }
    }

    /**
     * Handles an event from a SharedObject.
     *
     * @param {Object} event
     */

  }, {
    key: 'handleSharedObjectEvent',
    value: function handleSharedObjectEvent(event) {
      (0, _log.debug)(NAME, '[sharedobject:event]');
      var i = void 0;
      var length = this._responseHandlers.length;
      var handler = void 0;
      for (i = 0; i < length; i++) {
        handler = this._responseHandlers[i];
        if (handler.respond(JSON.parse(event))) {
          break;
        }
      }
    }

    /**
     * Assigns a global response handler for SharedObject communication through Flash object over ExternalInterface.
     *
     * @param {String} name
     * @param {Element} el
     *        The object embed element.
     */

  }, {
    key: 'assignSharedObjectResponder',
    value: function assignSharedObjectResponder(name, el) {
      var _handleSharedObjectEvent = this.handleSharedObjectEvent.bind(this);
      var elId = el.id.split('-').join('_');
      var handlerName = ['handleSharedObjectEvent', elId].join('_');
      (0, _log.debug)(NAME, '[assign:sharedobject:responder] :: ' + elId);
      (0, _log.debug)(NAME, '[sharedoject:responder] :: ' + handlerName);
      el.setSharedObjectResponder(name, handlerName);
      _browser2.default.setGlobal(handlerName, _handleSharedObjectEvent);
    }

    /**
     * Request to connect to SharedObject.
     */

  }, {
    key: 'connect',
    value: function connect(swfId) {
      this._element = _browser2.default.getEmbedObject(swfId);
      if (!this._element) {
        (0, _log.warn)('Could not locate embedded Flash object for id: ' + swfId);
      }
    }

    /**
     * Request to disconnect to SharedObject.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      while (this._responseHandlers.length > 0) {
        this._responseHandlers.shift();
      }
    }

    /**
     * Attempt to send method update to SharedObject.
     *
     * @param {String} name
     * @param {String} callName
     * @param {Object} message
     *        String or Object that will be serialized to a JSON string.
     */

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, message) {
      (0, _log.debug)(NAME, '[sendToSharedObject]');
      try {
        this._element.sharedObjectSend(name, callName, typeof message === 'string' ? message : (0, _stringify2.default)(message));
      } catch (e) {
        (0, _log.warn)('Could not send to shared object (' + name + '). Error: ' + e.message);
      }
    }

    /**
     * Attempt to update property on SharedObject.
     *
     * @param {String} name
     * @param {String} key
     * @param {Object} value
     */

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {
      (0, _log.debug)(NAME, '[sendPropertyToSharedObject]');
      try {
        this._element.sharedObjectSendProperty(name, key, value);
      } catch (e) {
        (0, _log.warn)('Could not send to shared object (' + name + '). Error: ' + e.message);
      }
    }

    /**
     * Request to get remote ShareObject by name.
     *
     * @param {String} sharedObjectName
     */

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(sharedObjectName) {
      (0, _log.debug)(NAME, '[getRemoteSharedObject]');
      try {
        this.assignSharedObjectResponder(sharedObjectName, this._element);
        this._element.getRemoteSharedObject(sharedObjectName);
      } catch (e) {
        (0, _log.warn)('Could not get remote shared object (' + name + '). Error: ' + e.message);
      }
    }

    /**
     * Request to connect to SharedObject by name.
     *
     * @param {String} sharedObjectName
     */

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(sharedObjectName) {
      (0, _log.debug)(NAME, '[connectToSharedObject]');
      try {
        this._element.connectToSharedObject(sharedObjectName);
      } catch (e) {
        (0, _log.warn)('Could not connect to shared object (' + name + '). Error: ' + e.message);
      }
    }

    /**
     * Request to close SharedObject connection by name.
     *
     * @param {String} sharedObjectName
     */

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(sharedObjectName) {
      (0, _log.debug)(NAME, '[disconnectToSharedObject]');
      try {
        this._element.disconnectFromSharedObject(sharedObjectName);
      } catch (e) {
        (0, _log.warn)('Could not disconnect to shared object (' + name + '). Error: ' + e.message);
      }
    }
  }]);
  return RTMPSharedObjectHandler;
}();

exports.default = RTMPSharedObjectHandler;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _websocket = __webpack_require__(53);

var websocket = _interopRequireWildcard(_websocket);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base Proxy for communication with WebSocket.
 *
 * @private
 */
var SocketHelper = function () {
  function SocketHelper(responder, name) {
    (0, _classCallCheck3.default)(this, SocketHelper);

    this._responder = responder;
    this._pendingPostRequests = [];
    this._websocket = undefined;
    this._connectionPromise = undefined;
    this._name = name;
    this._responseHandlers = [];
    this._isTerminated = false;
    this._retryCount = 0;
    this._retryLimit = 1;
    this._onclose = this.tearDown.bind(this);

    this._asyncTickets = [];
  }

  /**
   * Removes event handlers from WebSocket.
   *
   * @param {WebSocket} ws
   *
   * @private
   */


  (0, _createClass3.default)(SocketHelper, [{
    key: '_removeSocketHandlers',
    value: function _removeSocketHandlers(ws) {
      ws.onopen = undefined;
      ws.onmessage = undefined;
      ws.onerror = undefined;
      ws.onclose = undefined;
    }

    /**
     * Assigns event handler to WebSocket.
     *
     * @param {WebSocket} ws
     * @param {Promise}
     *        The `Promise` to reject on error in connection to WebSocket.
     *
     * @private
     */

  }, {
    key: '_addSocketHandlers',
    value: function _addSocketHandlers(ws, promise) {
      var _this = this;

      ws.onopen = function () {
        (0, _log.info)(_this._name, '[websocketopen]');
        while (_this._pendingPostRequests.length > 0) {
          _this.post(_this._pendingPostRequests.shift());
        }
      };

      ws.onerror = function (error) {
        _this.tearDown();
        (0, _log.warn)(_this._name, '[websocketerror]: Error from WebSocket. ' + error.type);
        promise.reject(error);
      };

      ws.onmessage = function (message) {
        _this.respond(message);
      };

      ws.onclose = function (event) {
        (0, _log.warn)(_this._name, '[websocketclose]: ' + event.code);
        if (_this._responder) {
          _this._responder.onSocketClose(event);
        }
        _this.tearDown();
      };
    }

    /**
     * Handler for unexpected error through WebSocket.
     *
     * @param {Object} error
     *
     * @private
     */

  }, {
    key: '_onUnexpectedSocketError',
    value: function _onUnexpectedSocketError(error) {
      if (this._responder) {
        this._responder.onSocketClose(error);
      }
      (0, _log.warn)(this._name, '[websocketerror]: Unexpected Error from WebSocket. ' + error.type + ', ' + error.detail);
      this.tearDown();
    }

    /**
     * Clears the retry count to allow for single publisher to retry again after an unpublish.
     *
     * @private
     */

  }, {
    key: 'clearRetry',
    value: function clearRetry() {
      this._retryCount = 0;
    }

    /**
     * Request to setup WebSocket connection for communication.
     *
     * @param {String} url
     *        Endpoint URL of the socket to connect to.
     * @param {Promise} setupPromise
     *        The `Promise` to resolve or reject on success of setup WebSocket connection.
     */

  }, {
    key: 'setUp',
    value: function setUp(url, setupPromise) {
      var _this2 = this;

      var isMoz = _browser2.default.getIsMoz();
      this.tearDown();
      this._isTerminated = false;
      this._connectionPromise = setupPromise;
      _browser2.default.addCloseHandler(this._onclose);
      this._websocket = websocket.create(url);
      this._addSocketHandlers(this._websocket, this._connectionPromise);
      if (isMoz && this._retryCount++ < this._retryLimit) {
        (0, _log.debug)(this._name, 'We have determined it is Firefox and are setting up a retry limit.');
        var timeout = setTimeout(function () {
          if (_this2._websocket.readyState === 0) {
            (0, _log.debug)(_this2._name, 'Our connection on Firefox to the wss endpoint has timed out. Let\'s try that again.');
            _this2.tearDown();
            _this2.setUp(url, setupPromise);
          }
          clearTimeout(timeout);
        }, 2000);
      }
    }

    /**
     * Request to tear down any WebSocket connection.
     */

  }, {
    key: 'tearDown',
    value: function tearDown() {
      this._pendingPostRequests.length = 0;
      if (typeof this._websocket !== 'undefined') {
        this._removeSocketHandlers(this._websocket);
        this._websocket.close();
      }
      this._websocket = undefined;
      this._isTerminated = true;
      while (this._responseHandlers.length > 0) {
        this._responseHandlers.shift();
      }
      _browser2.default.removeCloseHandler(this._onclose);
    }

    /**
     * Request to parse JSON from message received over WebSocket.
     *
     * @param {Object} message
     *        String or Object.
     */

  }, {
    key: 'getJsonFromSocketMessage',
    value: function getJsonFromSocketMessage(message) {
      try {
        return typeof message.data === 'string' ? JSON.parse(message.data) : message.data;
      } catch (e) {
        (0, _log.warn)(this._name, 'Could not parse message as JSON. Message= ' + message.data + '. Error= ' + e.message);
      }
      return null;
    }

    /**
     * Adds a SharedObject response handler. Handlers are requested to respond to a message in `handleMessageResponse`.
     *
     * @param {Object} handler
     */

  }, {
    key: 'addSharedObjectResponseHandler',
    value: function addSharedObjectResponseHandler(handler) {
      this._responseHandlers.push(handler);
    }

    /**
     * Removes a SharedObject response handler.
     *
     * @param {Object} handler
     */

  }, {
    key: 'removeSharedObjectResponseHandler',
    value: function removeSharedObjectResponseHandler(handler) {
      var i = this._responseHandlers.length;
      var rHandler = void 0;
      while (--i > -1) {
        rHandler = this._responseHandlers[i];
        if (rHandler === handler) {
          this._responseHandlers.splice(i, 1);
          return;
        }
      }
    }

    /**
     * Traverses list of response handlers and returns flag of it being handled within the chain.
     *
     * @param {Object} message
     * @return {Boolean}
     */

  }, {
    key: 'handleMessageResponse',
    value: function handleMessageResponse(message) {
      var i = void 0,
          handler = void 0;
      var length = this._responseHandlers.length;
      for (i = 0; i < length; i++) {
        handler = this._responseHandlers[i];
        if (handler.respond(message)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Request to post notification of end of candidates in WebRTC scenario.
     */

  }, {
    key: 'postEndOfCandidates',
    value: function postEndOfCandidates(streamName) {
      this.post({
        handleCandidate: streamName,
        data: {
          candidate: {
            type: 'candidate',
            candidate: ''
          }
        }
      });
    }

    /**
     * Request to post data over WebSocket connection.
     * Queues messages if WebSocket connection is still being established.
     *
     * @param {Object} sendRequest
     */

  }, {
    key: 'post',
    value: function post(sendRequest) {
      if (this._websocket !== undefined && this._websocket.readyState === 1 /* WebSocket.OPEN */) {
          try {
            (0, _log.debug)(this._name, '[websocket-post]: ' + (0, _stringify2.default)(sendRequest, null, 2));
            this._websocket.send((0, _stringify2.default)(sendRequest));
            return true;
          } catch (e) {
            (0, _log.debug)(this._name, 'Could not send request: ' + sendRequest + '. ' + e);
            return false;
          }
        } else if (this._websocket !== undefined && (this._websocket.readyState === 2 || this._websocket.readyState === 3)) /* WebSocket.(CLOSING | CLOSED) */{
          return false;
        } else if (this._isTerminated) {
        return false;
      } else {
        this._pendingPostRequests.push(sendRequest);
        return true;
      }
    }
  }, {
    key: 'postAsync',
    value: function postAsync(sendRequest) {
      var p = new _promise.DeferredPromise();
      var id = Math.floor(Math.random() * 0x10000).toString(16);
      sendRequest.id = id;
      sendRequest.async = true;
      this._asyncTickets.push({ id: id, promise: p });
      this.post(sendRequest);
      return p.promise;
    }

    /**
     * Responds to messages coming over the WebSocket connection.
     *
     * @param {Object} message
     */

  }, {
    key: 'respond',
    value: function respond(message) {
      // eslint-disable-line no-unused-vars
      var handled = this.handleMessageResponse(message);
      if (!handled && message.data) {
        var json = this.getJsonFromSocketMessage(message);
        if (json === null) {
          (0, _log.warn)(this._name, 'Determined websocket response not in correct format. Aborting message handle.');
          return true;
        }
        (0, _log.debug)(this._name, '[websocket-response]: ' + (0, _stringify2.default)(json, null, 2));
        if (json.isAvailable !== undefined) {
          if (typeof json.isAvailable === 'boolean' && json.isAvailable) {
            this._responder.onStreamAvailable(json);
            return true;
          } else {
            this._responder.onStreamUnavailable(json);
            return true;
          }
        } else if (json.async && json.id) {
          var ticket = this._asyncTickets.find(function (el) {
            return el.id === json.id;
          });
          var promise = ticket.promise;

          if (promise && json.data) {
            promise.resolve(json.data);
          } else if (promise && json.error) {
            promise.reject(json.error);
          }
        } else if (json.data !== undefined) {
          var data = json.data;

          if (data.message !== undefined) {
            if (data.type === 'error') {
              this._responder.onSocketMessageError(data.message, data.detail);
              return true;
            }
          } else if (data.type === 'status') {
            if (data.code === 'NetConnection.Connect.Success') {
              this._websocket.onerror = this._onUnexpectedSocketError.bind(this);
              this._connectionPromise.resolve();
              return true;
            } else if (data.code === 'NetConnection.Connect.Rejected') {
              this._connectionPromise.reject('NetConnection.Connect.Rejected');
              return true;
            }
          } else if (data.type === 'error') {
            if (data.code === 'NetConnection.Connect.Rejected') {
              this._connectionPromise.reject('NetConnection.Connect.Rejected');
              return true;
            } else if (data.code === 'NetConnection.Connect.Failed') {
              this._connectionPromise.reject('NetConnection.Connect.Failed');
              return true;
            }
          }
        }
      }
      return handled;
    }

    /**
     * Request to get SharedObject from server over WebSocket.
     *
     * @param {String} name
     */

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(name) {
      this.post({
        sharedObjectGetRemote: {
          name: name
        }
      });
    }

    /**
     * Request to connect to SharedObject from server over WebSocket.
     *
     * @param {String} name
     */

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(name) {
      this.post({
        sharedObjectConnect: {
          name: name
        }
      });
    }

    /**
     * Request to send method call to SharedObject over WebSocket.
     *
     * @param {String} name
     * @param {String} callName
     * @param {Object} data
     */

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, data) {
      this.post({
        sharedObjectSend: {
          name: name,
          call: callName,
          params: [data]
        }
      });
    }

    /**
     * Request to update property on SharedObject over WebSocket.
     *
     * @param {String} name
     * @param {String} key
     * @param {String} value
     */

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {
      this.post({
        sharedObjectSetProperty: {
          name: name,
          key: key,
          value: value
        }
      });
    }

    /**
     * Request to close the SharedObject connection over WebSocket.
     *
     * @param {String} name
     */

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(name) {
      this.post({
        sharedObjectClose: {
          name: name
        }
      });
    }

    /**
     * Returns flag of socket being closed and temrinated.
     *
     * @returns {Boolean}
     */

  }, {
    key: 'isTerminated',
    get: function get() {
      return this._isTerminated;
    }
  }]);
  return SocketHelper;
}();

exports.default = SocketHelper;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Easy decorator for setting a mutable, iteratable property on an object.
 *
 * @private
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTMPMediaConstraint = exports.RTCMediaConstraint = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _defineProperty = __webpack_require__(90);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inflate = function inflate(obj, prop, value) {
  (0, _defineProperty2.default)(obj, prop, {
    value: value,
    writable: true,
    enumerable: true
  });
};

/**
 * Default `exact` setting for `video` on `MediaConstraint` for WebRTC broadcast.
 *
 * @private
 */

var RTCMediaVideoConstraint = function RTCMediaVideoConstraint() {
  (0, _classCallCheck3.default)(this, RTCMediaVideoConstraint);

  inflate(this, 'width', {
    exact: 640
  });
  inflate(this, 'height', {
    exact: 480
  });
};

/**
 * Default RTMP video settings for braodcast.
 *
 * @private
 */


var RTMPMediaVideoConstraint = function RTMPMediaVideoConstraint() {
  (0, _classCallCheck3.default)(this, RTMPMediaVideoConstraint);

  inflate(this, 'width', 640);
  inflate(this, 'height', 480);
  inflate(this, 'force', false);
  inflate(this, 'framerate', 15);
  inflate(this, 'bandwidth', 50000);
  inflate(this, 'quality', 80);
  inflate(this, 'profile', 'baseline');
  inflate(this, 'level', 3.1);
};

/**
 * Default WebRTC media settings for broadcast.
 *
 * @private
 */


var RTCMediaConstraint = function RTCMediaConstraint() {
  var audio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  (0, _classCallCheck3.default)(this, RTCMediaConstraint);

  inflate(this, 'audio', audio);
  inflate(this, 'video', video || new RTCMediaVideoConstraint());
};

/**
 * Default RTMP media settings for broadcast.
 *
 * @private
 */


var RTMPMediaConstraint = function RTMPMediaConstraint() {
  var audio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  (0, _classCallCheck3.default)(this, RTMPMediaConstraint);

  inflate(this, 'audio', audio);
  inflate(this, 'video', video || new RTMPMediaVideoConstraint());
};

exports.RTCMediaConstraint = RTCMediaConstraint;
exports.RTMPMediaConstraint = RTMPMediaConstraint;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderEventTypes = exports.SliderEvent = undefined;

var _freeze = __webpack_require__(18);

var _freeze2 = _interopRequireDefault(_freeze);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _event = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Events for Slider Control.
 *
 * @see {SliderControl}
 *
 * @private
 */
var SliderEvent = function (_Event) {
  (0, _inherits3.default)(SliderEvent, _Event);

  function SliderEvent(type, control, data) {
    (0, _classCallCheck3.default)(this, SliderEvent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SliderEvent.__proto__ || (0, _getPrototypeOf2.default)(SliderEvent)).call(this, type, data));

    _this._control = control;
    return _this;
  }

  (0, _createClass3.default)(SliderEvent, [{
    key: 'control',
    get: function get() {
      return this._control;
    }
  }]);
  return SliderEvent;
}(_event.Event);

/**
 * Enumeration of Slider Event types.
 *
 * @private
 */


var SliderEventTypes = (0, _freeze2.default)({
  CHANGE_START: 'changestart',
  CHANGE: 'change',
  CHANGE_COMPLETE: 'changecomplete'
});

exports.SliderEvent = SliderEvent;
exports.SliderEventTypes = SliderEventTypes;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImplFactoryOrder = undefined;

var _slicedToArray2 = __webpack_require__(143);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(144);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _weakMap = __webpack_require__(142);

var _weakMap2 = _interopRequireDefault(_weakMap);

var _promise = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = new _weakMap2.default();

var pvt = function pvt(ctx) {
  if (!map.has(ctx)) {
    map.set(ctx, {});
  }

  return map.get(ctx);
};

/**
 * Implementation Factory.
 *
 * This is used by the fail-over for Publisher and Subscriber to determine browser support of order list of implementations.
 *
 * @private
 */

var ImplFactoryOrder = exports.ImplFactoryOrder = function () {
  function ImplFactoryOrder() {
    var _this = this;

    (0, _classCallCheck3.default)(this, ImplFactoryOrder);

    this.listorder = function () {
      return (/*#__PURE__*/_regenerator2.default.mark(function listorder(list) {
          return _regenerator2.default.wrap(function listorder$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(list.length > 0)) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return list.shift();

                case 3:
                  _context.next = 0;
                  break;

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, listorder, this);
        })
      );
    }();

    /**
     * Attempt to check support and initialize Class instance within the order. Optionally, can invoke an initialization with configuration object.
     *
     * @param {Object} iterator
     *        Iterator used in accessing possible Class instance next in linked list of order.
     * @param {Object} map
     *        Map of order type to Class.
     * @param {Object} options
     *        Map of initialization configurations to types.
     * @param {Promise} promise
     *        The `Promise` instance to use in resolve or reject once either a valid instance is created or order has been exhausted, respectively.
     * @param {Function} initFn
     *        Optional function to invoke upon instantiation attempt.
     * @param {String} lastError
     *        Optional - and compounded - last string error that caused a failure in establishing a supported instance. This error is delivered on the rejection of the `Promise`.
     *
     * @private
     */
    pvt(this).find = function (iterator, map, options, promise) {
      var initFn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var lastError = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      var _pvt$next = pvt(_this).next(iterator, map),
          _pvt$next2 = (0, _slicedToArray3.default)(_pvt$next, 2),
          type = _pvt$next2[0],
          Impl = _pvt$next2[1];

      if (!Impl) {
        promise.reject(lastError);
      } else {
        var p = void 0;
        var src = options[type];
        src = src || options;
        if (initFn) {
          p = new Impl()[initFn](src);
        } else {
          p = new Impl(src);
        }
        p.then(function (concrete) {
          promise.resolve(concrete);
        }).catch(function (error) {
          // eslint-disable-line no-unused-vars
          lastError = error;
          pvt(_this).find(iterator, map, options, promise, initFn, lastError);
        });
      }
    };

    /**
     * Iterate next in order.
     *
     * @private
     */
    pvt(this).next = function (order, map) {
      var Impl = void 0;
      var key = void 0;
      var next = order.next();
      if (!next.done) {
        key = next.value;
        Impl = map.get(key);
      }
      return [key, Impl];
    };
  }

  /**
   * Request to locate supported implementation and initialize it, resolving the `Promise` with the instance.
   *
   * @param {Array} order
   * @param {Object} map
   *        Map of Class to order type.
   * @param {Object} options
   *        Initialization object to pass to constructor of Class in browser test of support.
   * @param {Function} initFn
   *        Optional initialization function to invoke with the `options` config.
   *
   * @private
   */


  (0, _createClass3.default)(ImplFactoryOrder, [{
    key: 'create',
    value: function create(order, map, options) {
      var initFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var promise = new _promise.DeferredPromise();
      pvt(this).find(this.listorder(order.slice()), map, options, promise, initFn);
      return promise.promise;
    }
  }]);
  return ImplFactoryOrder;
}();

exports.default = ImplFactoryOrder;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
/**
 * Basic curry implementation.
 *
 * @private
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var curry = exports.curry = function curry(fx) {
  var arity = fx.length;
  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    } else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      };
    }
  };
};

/**
 * Basic filter implementation.
 *
 * @private
 */
var filter = exports.filter = curry(function (fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
});

/**
 * Converts a value to integer.
 *
 * @param {Object} value
 * @returns {Number}
 *
 * @private
 */
var toInt = exports.toInt = function toInt(value) {
  if (typeof value === 'string') {
    return parseInt(value, 10);
  } else {
    return Math.round(value);
  }
};

/**
 * Checks truthy-ness of `value` and returns default if false.
 *
 * @param {Object} value
 * @param {Object} defaultValue
 *
 * @private
 */
var getOrElse = exports.getOrElse = function getOrElse(value, defaultValue) {
  return value || defaultValue;
};

/**
 * Checks truthy-ness of `value` as a Number and returns default if false.
 *
 * @param {Object} value
 * @param {Object} defaultValue
 *
 * @private
 */
var getIntOrElse = exports.getIntOrElse = function getIntOrElse(value, defaultValue) {
  return !isNaN(toInt(value)) ? toInt(value) : defaultValue;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Encode the value of each key and return a new object.
 *
 * @param {Object} valueObject
 *        The object whose values should be encoded.
 * @return {Object}
 *
 * @private
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rtcSocketEndpointFromOptions = exports.encodeKeyValues = undefined;

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(91);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeKeyValues = exports.encodeKeyValues = function encodeKeyValues(valueObject) {
  var encoded = {};
  (0, _keys2.default)(valueObject).forEach(function (key, index) {
    // eslint-disable-line no-unused-vars
    encoded[key] = encodeURIComponent(valueObject[key]);
  });
  return encoded;
};

/**
 * Construct endpoint to use for WebSocket connection based on configuration object and optional params to append to query.
 *
 * @param {Object} options
 *        The configuration options provided in `init()` of WebRTC based publisher or subscriber.
 * @param {Object} params
 *        The optional params to append to the endpoint. Used by server in connection parse.
 * @private
 */
var rtcSocketEndpointFromOptions = exports.rtcSocketEndpointFromOptions = function rtcSocketEndpointFromOptions(options) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var protocol = options.wsprotocol || options.protocol;
  var port = options.wsport || options.port;
  var appEndpoint = options.context ? [options.app, options.context].join('/') : options.app;
  var endpoint = protocol + '://' + options.host + ':' + port + '/' + appEndpoint;
  if (typeof options.connectionParams !== 'undefined') {
    var encodedParams = encodeKeyValues(options.connectionParams);
    params = (0, _extends3.default)(params, encodedParams);
  }
  if (typeof params !== 'undefined') {
    var kv = [];
    (0, _keys2.default)(params).forEach(function (key, index) {
      // eslint-disable-line no-unused-vars
      kv.push([key, params[key]].join('='));
    });
    if (kv.length > 0) {
      endpoint += '?' + kv.join('&');
    }
  }

  return endpoint;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(138);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(132);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * !This is a stripped down version of Bunyan targeted specifically for the browser
 *
 * -------------------------------------------------------------------------------
 *
 * Copyright (c) 2014 Trent Mick. All rights reserved.
 * Copyright (c) 2014 Joyent Inc. All rights reserved.
 *
 * The bunyan logging library for node.js.
 *
 * -*- mode: js -*-
 * vim: expandtab:ts=4:sw=4
 */



var VERSION = '0.2.3';

// Bunyan log format version. This becomes the 'v' field on all log records.
// `0` is until I release a version '1.0.0' of node-bunyan. Thereafter,
// starting with `1`, this will be incremented if there is any backward
// incompatible change to the log record format. Details will be in
// 'CHANGES.md' (the change log).
var LOG_VERSION = 0;

//---- Internal support stuff

/**
 * A shallow copy of an object. Bunyan logging attempts to never cause
 * exceptions, so this function attempts to handle non-objects gracefully.
 */
function objCopy(obj) {
    if (typeof obj === 'undefined' || obj === null) {  // null or undefined
        return obj;
    } else if (Array.isArray(obj)) {
        return obj.slice();
    } else if (typeof (obj) === 'object') {
        var copy = {};
        Object.keys(obj).forEach(function (k) {
            copy[k] = obj[k];
        });
        return copy;
    } else {
        return obj;
    }
}

var format = function(f) {

    if(f === null) {
        return 'null';
    }

    if(typeof f !== 'string') {
        return f.toString();
    }
    var formatRegExp = /%[sdj%]/g;

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') {
            return '%';
        }
        if (i >= len) {
            return x;
        }
        switch (x) {
            case '%s': return String(args[i++]);
            case '%d': return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
                break;
            default:
                return x;
        }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
        str += ' ' + x;
    }
    return str;
};

/**
 * Gather some caller info 3 stack levels up.
 * See <http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi>.
 */
function getCaller3Info() {
    var obj = {};
    var saveLimit = Error.stackTraceLimit;
    var savePrepare = Error.prepareStackTrace;
    Error.stackTraceLimit = 3;
    //Error.captureStackTrace(this, getCaller3Info);

    Error.prepareStackTrace = function (_, stack) {
        var caller = stack[2];
        obj.file = caller.getFileName();
        obj.line = caller.getLineNumber();
        var func = caller.getFunctionName();
        if (func) {
            obj.func = func;
        }
    };
    Error.stackTraceLimit = saveLimit;
    Error.prepareStackTrace = savePrepare;
    return obj;
}


function _indent(s, indent) {
    if (!indent) {
        indent = '    ';
    }
    var lines = s.split(/\r?\n/g);
    return indent + lines.join('\n' + indent);
}


/**
 * Warn about an bunyan processing error.
 *
 * @param msg {String} Message with which to warn.
 * @param dedupKey {String} Optional. A short string key for this warning to
 *      have its warning only printed once.
 */
function _warn(msg, dedupKey) {
    if (dedupKey) {
        if (_warned[dedupKey]) {
            return;
        }
        _warned[dedupKey] = true;
    }
    console.error(msg + '\n');
}
function _haveWarned(dedupKey) {
    return _warned[dedupKey];
}
var _warned = {};


function ConsoleRawStream() {
}
ConsoleRawStream.prototype.write = function (rec) {
    if (rec.level < INFO) {
        console.log(rec);
    } else if (rec.level < WARN) {
        console.info(rec);
    } else if (rec.level < ERROR) {
        console.warn(rec);
    } else {
        console.error(rec);
    }

    if(rec.err && rec.err.stack) {
        console.error(rec.err.stack);
    }
};

function ConsoleFormattedStream() {}
ConsoleFormattedStream.prototype.write = function (rec) {

    var levelCss, defaultCss = 'color: DimGray', msgCss = 'color: SteelBlue';

    if (rec.level < DEBUG) {
        levelCss = 'color: DeepPink';
    } else if (rec.level < INFO) {
        levelCss = 'color: GoldenRod';
    } else if (rec.level < WARN) {
        levelCss = 'color: DarkTurquoise';
    } else if (rec.level < ERROR) {
        levelCss = 'color: Purple';
    } else if (rec.level < FATAL) {
        levelCss = 'color: Crimson';
    } else {
        levelCss = 'color: Black';
    }

    var loggerName = rec.childName ? rec.name + '/' + rec.childName : rec.name;

    //get level name and pad start with spacs
    var levelName = nameFromLevel[rec.level].toUpperCase();
    levelName = Array(6 - levelName.length).join(' ') + levelName;

    function padZeros(number, len) {
        return Array((len + 1) - (number + '').length).join('0') + number;
    }

    console.log('[%s:%s:%s:%s] %c%s%c: %s: %c%s',
        padZeros(rec.time.getHours(), 2), padZeros(rec.time.getMinutes(), 2),
        padZeros(rec.time.getSeconds(), 2), padZeros(rec.time.getMilliseconds(), 4),
        levelCss, levelName,
        defaultCss, loggerName,
        msgCss, rec.msg);
    if(rec.err && rec.err.stack) {
        console.log('%c%s,', levelCss, rec.err.stack);
    }
};

//---- Levels

var TRACE = 10;
var DEBUG = 20;
var INFO = 30;
var WARN = 40;
var ERROR = 50;
var FATAL = 60;

var levelFromName = {
    'trace': TRACE,
    'debug': DEBUG,
    'info': INFO,
    'warn': WARN,
    'error': ERROR,
    'fatal': FATAL
};
var nameFromLevel = {};
Object.keys(levelFromName).forEach(function (name) {
    nameFromLevel[levelFromName[name]] = name;
});


/**
 * Resolve a level number, name (upper or lowercase) to a level number value.
 *
 * @api public
 */
function resolveLevel(nameOrNum) {
    var level = (typeof (nameOrNum) === 'string' ? levelFromName[nameOrNum.toLowerCase()] : nameOrNum);
    return level;
}


//---- Logger class

/**
 * Create a Logger instance.
 *
 * @param options {Object} See documentation for full details. At minimum
 *    this must include a 'name' string key. Configuration keys:
 *      - `streams`: specify the logger output streams. This is an array of
 *        objects with these fields:
 *          - `type`: The stream type. See README.md for full details.
 *            Often this is implied by the other fields. Examples are
 *            'file', 'stream' and "raw".
 *          - `level`: Defaults to 'info'.
 *          - `path` or `stream`: The specify the file path or writeable
 *            stream to which log records are written. E.g.
 *            `stream: process.stdout`.
 *          - `closeOnExit` (boolean): Optional. Default is true for a
 *            'file' stream when `path` is given, false otherwise.
 *        See README.md for full details.
 *      - `level`: set the level for a single output stream (cannot be used
 *        with `streams`)
 *      - `stream`: the output stream for a logger with just one, e.g.
 *        `process.stdout` (cannot be used with `streams`)
 *      - `serializers`: object mapping log record field names to
 *        serializing functions. See README.md for details.
 *      - `src`: Boolean (default false). Set true to enable 'src' automatic
 *        field with log call source info.
 *    All other keys are log record fields.
 *
 * An alternative *internal* call signature is used for creating a child:
 *    new Logger(<parent logger>, <child options>[, <child opts are simple>]);
 *
 * @param _childSimple (Boolean) An assertion that the given `_childOptions`
 *    (a) only add fields (no config) and (b) no serialization handling is
 *    required for them. IOW, this is a fast path for frequent child
 *    creation.
 */
function Logger(options, _childOptions, _childSimple) {
    if (!(this instanceof Logger)) {
        return new Logger(options, _childOptions);
    }

    // Input arg validation.
    var parent;
    if (_childOptions !== undefined) {
        parent = options;
        options = _childOptions;
        if (!(parent instanceof Logger)) {
            throw new TypeError(
                'invalid Logger creation: do not pass a second arg');
        }
    }
    if (!options) {
        throw new TypeError('options (object) is required');
    }
    if (!parent) {
        if (!options.name) {
            throw new TypeError('options.name (string) is required');
        }
    } else {
        if (options.name) {
            throw new TypeError(
                'invalid options.name: child cannot set logger name');
        }
    }
    if (options.stream && options.streams) {
        throw new TypeError('cannot mix "streams" and "stream" options');
    }
    if (options.streams && !Array.isArray(options.streams)) {
        throw new TypeError('invalid options.streams: must be an array');
    }
    if (options.serializers && (typeof (options.serializers) !== 'object' || Array.isArray(options.serializers))) {
        throw new TypeError('invalid options.serializers: must be an object');
    }

    var fields, name, i;

    // Fast path for simple child creation.
    if (parent && _childSimple) {
        // `_isSimpleChild` is a signal to stream close handling that this child
        // owns none of its streams.
        this._isSimpleChild = true;

        this._level = parent._level;
        this.streams = parent.streams;
        this.serializers = parent.serializers;
        this.src = parent.src;
        fields = this.fields = {};
        var parentFieldNames = Object.keys(parent.fields);
        for (i = 0; i < parentFieldNames.length; i++) {
            name = parentFieldNames[i];
            fields[name] = parent.fields[name];
        }
        var names = Object.keys(options);
        for (i = 0; i < names.length; i++) {
            name = names[i];
            fields[name] = options[name];
        }
        return;
    }

    // Null values.
    var self = this;
    if (parent) {
        this._level = parent._level;
        this.streams = [];
        for (i = 0; i < parent.streams.length; i++) {
            var s = objCopy(parent.streams[i]);
            s.closeOnExit = false; // Don't own parent stream.
            this.streams.push(s);
        }
        this.serializers = objCopy(parent.serializers);
        this.src = parent.src;
        this.fields = objCopy(parent.fields);
        if (options.level) {
            this.level(options.level);
        }
    } else {
        this._level = Number.POSITIVE_INFINITY;
        this.streams = [];
        this.serializers = null;
        this.src = false;
        this.fields = {};
    }

    // Handle *config* options (i.e. options that are not just plain data
    // for log records).
    if (options.stream) {
        self.addStream({
            type: 'stream',
            stream: options.stream,
            closeOnExit: false,
            level: options.level
        });
    } else if (options.streams) {
        options.streams.forEach(function (s) {
            self.addStream(s, options.level);
        });
    } else if (parent && options.level) {
        this.level(options.level);
    } else if (!parent) {

        /*
         * In the browser we'll be emitting to console.log by default.
         * Any console.log worth its salt these days can nicely render
         * and introspect objects (e.g. the Firefox and Chrome console)
         * so let's emit the raw log record. Are there browsers for which
         * that breaks things?
         */
        self.addStream({
            type: 'raw',
            stream: new ConsoleRawStream(),
            closeOnExit: false,
            level: options.level
        });

    }
    if (options.serializers) {
        self.addSerializers(options.serializers);
    }
    if (options.src) {
        this.src = true;
    }

    // Fields.
    // These are the default fields for log records (minus the attributes
    // removed in this constructor). To allow storing raw log records
    // (unrendered), `this.fields` must never be mutated. Create a copy for
    // any changes.
    fields = objCopy(options);
    delete fields.stream;
    delete fields.level;
    delete fields.streams;
    delete fields.serializers;
    delete fields.src;
    if (this.serializers) {
        this._applySerializers(fields);
    }
    Object.keys(fields).forEach(function (k) {
        self.fields[k] = fields[k];
    });
}

/**
 * Add a stream
 *
 * @param stream {Object}. Object with these fields:
 *    - `type`: The stream type. See README.md for full details.
 *      Often this is implied by the other fields. Examples are
 *      'file', 'stream' and "raw".
 *    - `path` or `stream`: The specify the file path or writeable
 *      stream to which log records are written. E.g.
 *      `stream: process.stdout`.
 *    - `level`: Optional. Falls back to `defaultLevel`.
 *    - `closeOnExit` (boolean): Optional. Default is true for a
 *      'file' stream when `path` is given, false otherwise.
 *    See README.md for full details.
 * @param defaultLevel {Number|String} Optional. A level to use if
 *      `stream.level` is not set. If neither is given, this defaults to INFO.
 */
Logger.prototype.addStream = function addStream(s, defaultLevel) {
    var self = this;
    if (defaultLevel === null || defaultLevel === undefined) {
        defaultLevel = INFO;
    }

    s = objCopy(s);

    // Implicit 'type' from other args.
    if (!s.type && s.stream) {
        s.type = 'raw';
    }
    s.raw = (s.type === 'raw');  // PERF: Allow for faster check in `_emit`.

    if (s.level) {
        s.level = resolveLevel(s.level);
    } else {
        s.level = resolveLevel(defaultLevel);
    }
    if (s.level < self._level) {
        self._level = s.level;
    }

    switch (s.type) {
        case 'stream':
            if (!s.closeOnExit) {
                s.closeOnExit = false;
            }
            break;
        case 'raw':
            if (!s.closeOnExit) {
                s.closeOnExit = false;
            }
            break;
        default:
            throw new TypeError('unknown stream type "' + s.type + '"');
    }

    self.streams.push(s);
    delete self.haveNonRawStreams;  // reset
};


/**
 * Add serializers
 *
 * @param serializers {Object} Optional. Object mapping log record field names
 *    to serializing functions. See README.md for details.
 */
Logger.prototype.addSerializers = function addSerializers(serializers) {
    var self = this;

    if (!self.serializers) {
        self.serializers = {};
    }
    Object.keys(serializers).forEach(function (field) {
        var serializer = serializers[field];
        if (typeof (serializer) !== 'function') {
            throw new TypeError(format(
                'invalid serializer for "%s" field: must be a function',
                field));
        } else {
            self.serializers[field] = serializer;
        }
    });
};


/**
 * Create a child logger, typically to add a few log record fields.
 *
 * This can be useful when passing a logger to a sub-component, e.g. a
 * 'wuzzle' component of your service:
 *
 *    var wuzzleLog = log.child({component: 'wuzzle'})
 *    var wuzzle = new Wuzzle({..., log: wuzzleLog})
 *
 * Then log records from the wuzzle code will have the same structure as
 * the app log, *plus the component='wuzzle' field*.
 *
 * @param options {Object} Optional. Set of options to apply to the child.
 *    All of the same options for a new Logger apply here. Notes:
 *      - The parent's streams are inherited and cannot be removed in this
 *        call. Any given `streams` are *added* to the set inherited from
 *        the parent.
 *      - The parent's serializers are inherited, though can effectively be
 *        overwritten by using duplicate keys.
 *      - Can use `level` to set the level of the streams inherited from
 *        the parent. The level for the parent is NOT affected.
 * @param simple {Boolean} Optional. Set to true to assert that `options`
 *    (a) only add fields (no config) and (b) no serialization handling is
 *    required for them. IOW, this is a fast path for frequent child
 *    creation. See 'tools/timechild.js' for numbers.
 */
Logger.prototype.child = function (options, simple) {
    return new (this.constructor)(this, options || {}, simple);
};

/**
 * Get/set the level of all streams on this logger.
 *
 * Get Usage:
 *    // Returns the current log level (lowest level of all its streams).
 *    log.level() -> INFO
 *
 * Set Usage:
 *    log.level(INFO)       // set all streams to level INFO
 *    log.level('info')     // can use 'info' et al aliases
 */
Logger.prototype.level = function level(value) {
    if (value === undefined) {
        return this._level;
    }
    var newLevel = resolveLevel(value);
    var len = this.streams.length;
    for (var i = 0; i < len; i++) {
        this.streams[i].level = newLevel;
    }
    this._level = newLevel;
};


/**
 * Get/set the level of a particular stream on this logger.
 *
 * Get Usage:
 *    // Returns an array of the levels of each stream.
 *    log.levels() -> [TRACE, INFO]
 *
 *    // Returns a level of the identified stream.
 *    log.levels(0) -> TRACE      // level of stream at index 0
 *    log.levels('foo')           // level of stream with name 'foo'
 *
 * Set Usage:
 *    log.levels(0, INFO)         // set level of stream 0 to INFO
 *    log.levels(0, 'info')       // can use 'info' et al aliases
 *    log.levels('foo', WARN)     // set stream named 'foo' to WARN
 *
 * Stream names: When streams are defined, they can optionally be given
 * a name. For example,
 *       log = new Logger({
 *         streams: [
 *           {
 *             name: 'foo',
 *             path: '/var/log/my-service/foo.log'
 *             level: 'trace'
 *           },
 *         ...
 *
 * @param name {String|Number} The stream index or name.
 * @param value {Number|String} The level value (INFO) or alias ('info').
 *    If not given, this is a 'get' operation.
 * @throws {Error} If there is no stream with the given name.
 */
Logger.prototype.levels = function levels(name, value) {
    if (name === undefined) {
        return this.streams.map(
            function (s) {
                return s.level;
            });
    }
    var stream;
    if (typeof (name) === 'number') {
        stream = this.streams[name];
        if (stream === undefined) {
            throw new Error('invalid stream index: ' + name);
        }
    } else {
        var len = this.streams.length;
        for (var i = 0; i < len; i++) {
            var s = this.streams[i];
            if (s.name === name) {
                stream = s;
                break;
            }
        }
        if (!stream) {
            throw new Error(format('no stream with name "%s"', name));
        }
    }
    if (value === undefined) {
        return stream.level;
    } else {
        var newLevel = resolveLevel(value);
        stream.level = newLevel;
        if (newLevel < this._level) {
            this._level = newLevel;
        }
    }
};


/**
 * Apply registered serializers to the appropriate keys in the given fields.
 *
 * Pre-condition: This is only called if there is at least one serializer.
 *
 * @param fields (Object) The log record fields.
 * @param excludeFields (Object) Optional mapping of keys to `true` for
 *    keys to NOT apply a serializer.
 */
Logger.prototype._applySerializers = function (fields, excludeFields) {
    var self = this;

    // Check each serializer against these (presuming number of serializers
    // is typically less than number of fields).
    Object.keys(this.serializers).forEach(function (name) {
        if (fields[name] === undefined ||
            (excludeFields && excludeFields[name])) {
            return;
        }
        try {
            fields[name] = self.serializers[name](fields[name]);
        } catch (err) {
            _warn(format('bunyan: ERROR: Exception thrown from the "%s" ' +
                    'Bunyan serializer. This should never happen. This is a bug' +
                    'in that serializer function.\n%s',
                name, err.stack || err));
            fields[name] = format('(Error in Bunyan log "%s" serializer broke field. See stderr for details.)', name);
        }
    });
};


/**
 * Emit a log record.
 *
 * @param rec {log record}
 * @param noemit {Boolean} Optional. Set to true to skip emission
 *      and just return the JSON string.
 */
Logger.prototype._emit = function (rec, noemit) {
    var i;

    // Lazily determine if this Logger has non-'raw' streams. If there are
    // any, then we need to stringify the log record.
    if (this.haveNonRawStreams === undefined) {
        this.haveNonRawStreams = false;
        for (i = 0; i < this.streams.length; i++) {
            if (!this.streams[i].raw) {
                this.haveNonRawStreams = true;
                break;
            }
        }
    }

    // Stringify the object. Attempt to warn/recover on error.
    var str;
    if (noemit || this.haveNonRawStreams) {
        try {
            str = JSON.stringify(rec, safeCycles()) + '\n';
        } catch (e) {
            var dedupKey = e.stack.split(/\n/g, 2).join('\n');
            _warn('bunyan: ERROR: Exception in ' +
                    '`JSON.stringify(rec)`. You can install the ' +
                    '"safe-json-stringify" module to have Bunyan fallback ' +
                    'to safer stringification. Record:\n' +
                    _indent(format('%s\n%s', rec, e.stack)),
                dedupKey);
            str = format('(Exception in JSON.stringify(rec): %j. See stderr for details.)\n', e.message);

        }
    }

    if (noemit) {
        return str;
    }


    var level = rec.level;
    for (i = 0; i < this.streams.length; i++) {
        var s = this.streams[i];
        if (s.level <= level) {
            s.stream.write(s.raw ? rec : str);
        }
    }

    return str;
};


/**
 * Build a log emitter function for level minLevel. I.e. this is the
 * creator of `log.info`, `log.error`, etc.
 */
function mkLogEmitter(minLevel) {
    return function () {
        var log = this;

        function mkRecord(args) {
            var excludeFields;
            if (args[0] instanceof Error) {
                // `log.<level>(err, ...)`
                fields = {
                    // Use this Logger's err serializer, if defined.
                    err: (log.serializers && log.serializers.err ? log.serializers.err(args[0]) : Logger.stdSerializers.err(args[0]))
                };
                excludeFields = {err: true};
                if (args.length === 1) {
                    msgArgs = [fields.err.message];
                } else {
                    msgArgs = Array.prototype.slice.call(args, 1);
                }
            } else if (typeof (args[0]) !== 'object' && args[0] !== null ||
                Array.isArray(args[0])) {
                // `log.<level>(msg, ...)`
                fields = null;
                msgArgs = Array.prototype.slice.call(args);
            } else {  // `log.<level>(fields, msg, ...)`
                fields = args[0];
                msgArgs = Array.prototype.slice.call(args, 1);
            }

            // Build up the record object.
            var rec = objCopy(log.fields);
            rec.level = minLevel;
            var recFields = (fields ? objCopy(fields) : null);
            if (recFields) {
                if (log.serializers) {
                    log._applySerializers(recFields, excludeFields);
                }
                Object.keys(recFields).forEach(function (k) {
                    rec[k] = recFields[k];
                });
            }
            rec.levelName = nameFromLevel[minLevel];
            rec.msg = format.apply(log, msgArgs);
            if (!rec.time) {
                rec.time = (new Date());
            }
            // Get call source info
            if (log.src && !rec.src) {
                rec.src = getCaller3Info();
            }
            rec.v = LOG_VERSION;

            return rec;
        }

        var fields = null;
        var msgArgs = arguments;
        var rec = null;
        if (!this._emit) {
            /*
             * Show this invalid Bunyan usage warning *once*.
             *
             * See <https://github.com/trentm/node-bunyan/issues/100> for
             * an example of how this can happen.
             */
            var dedupKey = 'unbound';
            if (!_haveWarned[dedupKey]) {
                var caller = getCaller3Info();
                _warn(format('bunyan usage error: %s:%s: attempt to log with an unbound log method: `this` is: %s',
                        caller.file, caller.line, this.toString()),
                    dedupKey);
            }
            return;
        } else if (arguments.length === 0) {   // `log.<level>()`
            return (this._level <= minLevel);
        } else if (this._level > minLevel) {
            /* pass through */
        } else {
            rec = mkRecord(msgArgs);
            this._emit(rec);
        }
    };
}


/**
 * The functions below log a record at a specific level.
 *
 * Usages:
 *    log.<level>()  -> boolean is-trace-enabled
 *    log.<level>(<Error> err, [<string> msg, ...])
 *    log.<level>(<string> msg, ...)
 *    log.<level>(<object> fields, <string> msg, ...)
 *
 * where <level> is the lowercase version of the log level. E.g.:
 *
 *    log.info()
 *
 * @params fields {Object} Optional set of additional fields to log.
 * @params msg {String} Log message. This can be followed by additional
 *    arguments that are handled like
 *    [util.format](http://nodejs.org/docs/latest/api/all.html#util.format).
 */
Logger.prototype.trace = mkLogEmitter(TRACE);
Logger.prototype.debug = mkLogEmitter(DEBUG);
Logger.prototype.info = mkLogEmitter(INFO);
Logger.prototype.warn = mkLogEmitter(WARN);
Logger.prototype.error = mkLogEmitter(ERROR);
Logger.prototype.fatal = mkLogEmitter(FATAL);


//---- Standard serializers
// A serializer is a function that serializes a JavaScript object to a
// JSON representation for logging. There is a standard set of presumed
// interesting objects in node.js-land.

Logger.stdSerializers = {};

/*
 * This function dumps long stack traces for exceptions having a cause()
 * method. The error classes from
 * [verror](https://github.com/davepacheco/node-verror) and
 * [restify v2.0](https://github.com/mcavage/node-restify) are examples.
 *
 * Based on `dumpException` in
 * https://github.com/davepacheco/node-extsprintf/blob/master/lib/extsprintf.js
 */
function getFullErrorStack(ex) {
    var ret = ex.stack || ex.toString();
    if (ex.cause && typeof (ex.cause) === 'function') {
        var cex = ex.cause();
        if (cex) {
            ret += '\nCaused by: ' + getFullErrorStack(cex);
        }
    }
    return (ret);
}

// Serialize an Error object
// (Core error properties are enumerable in node 0.4, not in 0.6).
Logger.stdSerializers.err = function(err) {
    if (!err || !err.stack) {
        return err;
    }

    var obj = {
        message: err.message,
        name: err.name,
        stack: getFullErrorStack(err),
        code: err.code,
        signal: err.signal
    };
    return obj;
};


// A JSON stringifier that handles cycles safely.
// Usage: JSON.stringify(obj, safeCycles())
function safeCycles() {
    var seen = [];
    return function (key, val) {
        if (!val || typeof (val) !== 'object') {
            return val;
        }
        if (seen.indexOf(val) !== -1) {
            return '[Circular]';
        }
        seen.push(val);
        return val;
    };
}

//---- Exports

module.exports = Logger;

module.exports.TRACE = TRACE;
module.exports.DEBUG = DEBUG;
module.exports.INFO = INFO;
module.exports.WARN = WARN;
module.exports.ERROR = ERROR;
module.exports.FATAL = FATAL;
module.exports.resolveLevel = resolveLevel;
module.exports.levelFromName = levelFromName;
module.exports.nameFromLevel = nameFromLevel;

module.exports.VERSION = VERSION;
module.exports.LOG_VERSION = LOG_VERSION;

module.exports.createLogger = function createLogger(options) {
    return new Logger(options);
};

// Useful for custom `type == 'raw'` streams that may do JSON stringification
// of log records themselves. Usage:
//    var str = JSON.stringify(rec, bunyan.safeCycles());
module.exports.safeCycles = safeCycles;

//streams
module.exports.ConsoleFormattedStream = ConsoleFormattedStream;
module.exports.ConsoleRawStream = ConsoleRawStream;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(14).f
  , create      = __webpack_require__(47)
  , redefineAll = __webpack_require__(50)
  , ctx         = __webpack_require__(19)
  , anInstance  = __webpack_require__(43)
  , defined     = __webpack_require__(45)
  , forOf       = __webpack_require__(36)
  , $iterDefine = __webpack_require__(66)
  , step        = __webpack_require__(104)
  , setSpecies  = __webpack_require__(109)
  , DESCRIPTORS = __webpack_require__(17)
  , fastKey     = __webpack_require__(30).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(44)
  , from    = __webpack_require__(166);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).document && document.documentElement;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(25)(function(){
  return Object.defineProperty(__webpack_require__(63)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(29)
  , ITERATOR   = __webpack_require__(9)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(9)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(31)
  , gOPS     = __webpack_require__(68)
  , pIE      = __webpack_require__(48)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(65)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(108)
  , hiddenKeys = __webpack_require__(64).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(20)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(70)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(20)
  , toIObject    = __webpack_require__(22)
  , arrayIndexOf = __webpack_require__(167)(false)
  , IE_PROTO     = __webpack_require__(70)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(11)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(14)
  , DESCRIPTORS = __webpack_require__(17)
  , SPECIES     = __webpack_require__(9)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(19)
  , invoke             = __webpack_require__(173)
  , html               = __webpack_require__(98)
  , cel                = __webpack_require__(63)
  , global             = __webpack_require__(11)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(35)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogger = exports.LOG_LEVELS = exports.setLogLevel = exports.IceTransportTypes = exports.PlaybackVideoEncoder = exports.PlaybackAudioEncoder = exports.SharedObjectEventTypes = exports.FailoverSubscriberEventTypes = exports.RTCSubscriberEventTypes = exports.SubscriberEventTypes = exports.FailoverPublisherEventTypes = exports.RTCPublisherEventTypes = exports.PublisherEventTypes = exports.Red5ProSharedObject = exports.PlaybackControls = exports.PublisherView = exports.RTMPPublisher = exports.RTCPublisher = exports.Red5ProPublisher = exports.PlaybackView = exports.HLSSubscriber = exports.RTMPSubscriber = exports.RTCSubscriber = exports.Red5ProSubscriber = undefined;

var _index = __webpack_require__(24);

Object.defineProperty(exports, 'PlaybackControls', {
  enumerable: true,
  get: function get() {
    return _index.PlaybackControls;
  }
});

var _log = __webpack_require__(2);

var _index2 = __webpack_require__(125);

var subscriberLib = _interopRequireWildcard(_index2);

var _index3 = __webpack_require__(119);

var publisherLib = _interopRequireWildcard(_index3);

var _index4 = __webpack_require__(123);

var sharedObjectLib = _interopRequireWildcard(_index4);

var _playback = __webpack_require__(33);

var playbackEnum = _interopRequireWildcard(_playback);

var _webrtc = __webpack_require__(55);

var webrtcEnum = _interopRequireWildcard(_webrtc);

var _publisherEvent = __webpack_require__(79);

var publisherEvent = _interopRequireWildcard(_publisherEvent);

var _subscriberEvent = __webpack_require__(80);

var subscriberEvent = _interopRequireWildcard(_subscriberEvent);

var _sharedobjectEvent = __webpack_require__(56);

var sharedobjectEvent = _interopRequireWildcard(_sharedobjectEvent);

var _playback2 = __webpack_require__(42);

var _playback3 = _interopRequireDefault(_playback2);

var _publish = __webpack_require__(57);

var _publish2 = _interopRequireDefault(_publish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* ----------------------------  */
/* Subscription related references. */
/* ----------------------------  */

/**
 * The fail-over enabled Subscriber Factory.
 * @see Red5ProSubscriber
 */
/**
 * Main entry of SDK, accessible on the `window` global at `red5prosdk`.
 *
 * @file red5pro.min.js
 * @module red5prosdk
 *
 *
 */

// SDK_VERSION, LOG_LEVEL injected from webpack build.
var Red5ProSubscriber = exports.Red5ProSubscriber = subscriberLib.Red5ProSubscriber;
/**
 * The WebRTC based Subscriber.
 *
 * An instance of `RTCSubscriber` can be created explicitly using this class, or by the `Red5ProSubscriber` fail-over factory.
 * @see RTCSubscriber
 */
var RTCSubscriber = exports.RTCSubscriber = subscriberLib.RTCSubscriber;
/**
 * The Flash (utilizing RTMP protocol) based Subscriber.
 *
 * An instance of `RTMPSubscriber` can be created explicitly using this class, or by the `Red5ProSubscriber` fail-over factory.
 * @see RTMPSubscriber
 */
var RTMPSubscriber = exports.RTMPSubscriber = subscriberLib.RTMPSubscriber;
/**
 * The HLS (HTTP Live Stream) based Subscriber.
 *
 * An instance of `HLSSubscriber` can be created explicitly using this class, or by the `Red5ProSubscriber` fail-over factory.
 * @see HLSSubscriber
 */
var HLSSubscriber = exports.HLSSubscriber = subscriberLib.HLSSubscriber;
/**
 * Still used, but API-deprecated View instance for playback. Has default setup in version 4.0.0.
 * @private
 */
exports.PlaybackView = _playback3.default;

/* ----------------------------  */
/* Broadcast related references. */
/* ----------------------------  */

/**
 * The fail-over enabled Publisher Factory.
 * @see Red5ProPublisher
 */

var Red5ProPublisher = exports.Red5ProPublisher = publisherLib.Red5ProPublisher;
/**
 * The WebRTC based Publisher.<br>An instance of `RTCPublisher` can be created explicitly using this class, or by the `Red5ProPublisher` fail-over factory.
 * @see RTCPublisher
 */
var RTCPublisher = exports.RTCPublisher = publisherLib.RTCPublisher;
/**
 * The Flash (utilizing RTMP protocol) based Publisher.
 *
 * An instance of `RTMPPublisher` can be created explicitly using this class, or by the `Red5ProPublisher` fail-over factory.
 * @see RTMPPublisher
 */
var RTMPPublisher = exports.RTMPPublisher = publisherLib.RTMPPublisher;
/**
 * Still used, but API-deprecated View instance for broadcast/preview. Has default setup in version 4.0.0.
 * @private
 */
exports.PublisherView = _publish2.default;

/* Playback controls interface. */

/* Shared Object references. */
/**
 * The ShardObject class.
 * @see Red5ProSharedObject
 */
var Red5ProSharedObject = exports.Red5ProSharedObject = sharedObjectLib.Red5ProSharedObject;

/* Events */
/**
 * Enumeration of common Publisher Events.
 */
var PublisherEventTypes = exports.PublisherEventTypes = publisherEvent.PublisherEventTypes;
/**
 * Enueration of events specific to WebRTC-based Publishers.
 */
var RTCPublisherEventTypes = exports.RTCPublisherEventTypes = publisherEvent.RTCPublisherEventTypes;
/**
 * Enumeration of events specific to fail-over Publisher factory.
 */
var FailoverPublisherEventTypes = exports.FailoverPublisherEventTypes = publisherEvent.FailoverPublisherEventTypes;
/**
 * Enumeraiton of common Subscriber Events.
 */
var SubscriberEventTypes = exports.SubscriberEventTypes = subscriberEvent.SubscriberEventTypes;
/**
 * Enumeration of events specific to WebRTC-based Subscribers.
 */
var RTCSubscriberEventTypes = exports.RTCSubscriberEventTypes = subscriberEvent.RTCSubscriberEventTypes;
/**
 * Enumeration of events specific to fail-over Subscriber factory.
 */
var FailoverSubscriberEventTypes = exports.FailoverSubscriberEventTypes = subscriberEvent.FailoverSubscriberEventTypes;
/**
 * Enumeration of events for Shared Objects.
 */
var SharedObjectEventTypes = exports.SharedObjectEventTypes = sharedobjectEvent.SharedObjectEventTypes;

/* Enums */
/**
 * Enumerate Audio Encoder options for Subscribers.
 *  * `OPUS`
 *  * `PCMU`
 *  * `PCMA`
 *  * `SPEEX`
 *  * `NONE`
 */
var PlaybackAudioEncoder = exports.PlaybackAudioEncoder = playbackEnum.PlaybackAudioEncoder;
/**
 * Enumerated Video Encoder options for Subscribers.
 *  * `VP8`
 *  * `H264`
 *  * `NONE`
 */
var PlaybackVideoEncoder = exports.PlaybackVideoEncoder = playbackEnum.PlaybackVideoEncoder;

/**
 * Enumerate ICE Transport options for Publishers and Subscribers.
 * * `UDP`
 * * `TCP`
 */
var IceTransportTypes = exports.IceTransportTypes = webrtcEnum.IceTransportTypes;

(0, _log.establishLogger)('' + "debug" || _log.LEVELS.DEBUG); // eslint-disable-line no-undef

/**
 * Sets the log level for logs from the SDK
 * @param {string} level
 *    The specified log level.
 * @see LOG_LEVELS
 */
var setLogLevel = exports.setLogLevel = function setLogLevel(level) {
  if (_log.LEVELS.hasOwnProperty(level.toUpperCase())) {
    (0, _log.establishLogger)(level);
    if (console) {
      console.log('Red5 Pro SDK Version ' + "4.6.0-RC8"); // eslint-disable-line no-undef,no-console
    }
  }
};

/**
 * The enumerated log level Strings.
 *    * `TRACE`
 *    * `INFO`
 *    * `DEBUG`
 *    * `WARN`
 *    * `ERROR`
 *    * `FATAL`
 */
var LOG_LEVELS = exports.LOG_LEVELS = _log.LEVELS;
/**
 * Retrieves the Logger instance used by the SDK.
 *
 * @returns {Logger}
 *          The logger.
 */
var getLogger = exports.getLogger = _log.getLogger;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var jsonAttr = /['"](.*?)['"]:/gi;
var jsonVal = /:['"](.*?)['"]/gi;

/**
 * Reads the UTF string of the data passed in.
 *
 * @param {String} data
 * @param {Number} start
 * @param {Number} len
 *
 * @return {String}
 *         The Parsed information.
 *
 * @private
 */
function readUTF(data, start, len) {
  var result = '',
      offset = start,
      end = start + len;
  do {
    result += String.fromCharCode(data[offset++]);
  } while (offset < end);
  return result;
}

/**
 * Parses and interprets the orientation data from passed in JSON string.
 *
 * @param {String} text
 *
 * @return {Object}
 *          The parsed object with an `orientation` property if parsed properly.
 *
 * @private
 */
function parseJSONForOrientation(text) {
  try {
    var value = JSON.parse(text);
    if (value.hasOwnProperty('orientation')) {
      return {
        orientation: parseInt(value.orientation)
      };
    }
    return undefined;
  } catch (e) {
    var match = jsonAttr.exec(text);
    var match2 = void 0;
    if (match && match.length > 1) {
      match2 = jsonVal.exec(text);
      if (match[1] === 'orientation' && match2 && match2.length > 1) {
        return {
          orientation: parseInt(match2[1])
        };
      }
    }
    return undefined;
  }
}

/**
 * Event handler for metadata related to orientation information.
 *
 * @param {Element} player
 *        The media element related to the metadata.
 * @param {Function} callback
 *        The callback to invoke with the parsed orientation information.
 *
 * @private
 */
var onOrientationMetadata = exports.onOrientationMetadata = function onOrientationMetadata(player, callback) {

  var textTracks = typeof player.textTracks === 'function' ? player.textTracks() : player.textTracks;

  if (textTracks) {

    player.addTextTrack('metadata');

    textTracks.addEventListener('addtrack', function (addTrackEvent) {

      var track = addTrackEvent.track;
      track.mode = 'hidden';
      track.addEventListener('cuechange', function (cueChangeEvent) {
        var cues = void 0;
        var i = void 0;
        // Mostly Chrome.
        if (cueChangeEvent && cueChangeEvent.currentTarget) {
          cues = cueChangeEvent.currentTarget.cues;
        } else if (undefined === undefined) {
          cues = track.cues;
          cues = cues && cues.length > 0 ? cues : track.activeCues;
        } else if (undefined !== undefined) {
          // Mostly Firefox & Safari.
          cues = cues && cues.length > 0 ? cues : undefined.activeCues;
        }
        // Mostly failure.
        cues = cues || [];
        for (i = 0; i < cues.length; i++) {
          var data = cues[i];
          if (data.value) {
            var text = typeof data.value.data === 'string' ? data.value.data : readUTF(data.value.data, 0, data.size);
            var orientation = parseJSONForOrientation(text);
            if (typeof orientation !== 'undefined') {
              callback(orientation);
              break;
            }
          }
        }
      });
    });
  }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Exception for missing element when assigning Presentation Controllers for Publishers and Subscribers.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSupportedCameraResolutionsError = exports.NoElementFoundError = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoElementFoundError = exports.NoElementFoundError = function NoElementFoundError(message) {
  (0, _classCallCheck3.default)(this, NoElementFoundError);

  this.name = 'NoElementFound';
  this.message = message;
};

/**
 * Exception when requesting media with a `MediaConstraint` that the browser cannot support.
 * WebRTC Only.
 */


var NoSupportedCameraResolutionsError = exports.NoSupportedCameraResolutionsError = function NoSupportedCameraResolutionsError(message) {
  (0, _classCallCheck3.default)(this, NoSupportedCameraResolutionsError);

  this.name = 'NoSupportedCameraResolutionsError';
  this.message = message;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(93);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _socketHelper = __webpack_require__(82);

var _socketHelper2 = _interopRequireDefault(_socketHelper);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProPublisherSocket';

/**
 * Publisher-based extension of `SocketHelper`.
 *
 * @extends {SocketHelper}
 *
 * @private
 */

var PublisherSocketHelper = function (_SocketHelper) {
  (0, _inherits3.default)(PublisherSocketHelper, _SocketHelper);

  function PublisherSocketHelper(responder) {
    (0, _classCallCheck3.default)(this, PublisherSocketHelper);
    return (0, _possibleConstructorReturn3.default)(this, (PublisherSocketHelper.__proto__ || (0, _getPrototypeOf2.default)(PublisherSocketHelper)).call(this, responder, NAME));
  }

  /**
   * Override to respond to messages coming over WebSocket.
   */


  (0, _createClass3.default)(PublisherSocketHelper, [{
    key: 'respond',
    value: function respond(message) {
      if (message.data) {
        var json = this.getJsonFromSocketMessage(message);
        try {
          if (!(0, _get3.default)(PublisherSocketHelper.prototype.__proto__ || (0, _getPrototypeOf2.default)(PublisherSocketHelper.prototype), 'respond', this).call(this, message)) {
            if (json.data !== undefined) {
              if (json.data.sdp !== undefined) {
                if (json.data.sdp.type === 'answer') {
                  this._responder.onSDPAnswer(json.data);
                }
              }
              if (json.data.candidate !== undefined) {
                this._responder.onAddIceCandidate(json.data.candidate);
              }
              if (json.data.type === 'status') {
                if (json.data.code === 'NetConnection.ICE.TricleCompleted' || json.data.code === 'NetConnection.ICE.TrickleCompleted') {
                  this._responder.onSocketIceCandidateEnd();
                } else {
                  this._responder.onPublisherStatus(json.data);
                }
              }
            }
          }
        } catch (e) {
          (0, _log.error)(NAME, '[ws.onmessage] - Error in accessing message data as JSON. ' + e.message);
          this._responder.onSocketMessageError('[ws.onmessage] - Error in accessing message data as JSON. ' + e.message);
        }
      } else {
        (0, _log.warn)(NAME, '[ws.onmessage] - No Message Data.');
      }
    }
  }]);
  return PublisherSocketHelper;
}(_socketHelper2.default);

exports.default = PublisherSocketHelper;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(93);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _socketHelper = __webpack_require__(82);

var _socketHelper2 = _interopRequireDefault(_socketHelper);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProSubscriptionSocket';

/**
 * Subscriber-based extension of `SocketHelper`.
 *
 * @extends {SocketHelper}
 *
 * @private
 */

var SubscriptionSocketHelper = function (_SocketHelper) {
  (0, _inherits3.default)(SubscriptionSocketHelper, _SocketHelper);

  function SubscriptionSocketHelper(responder) {
    (0, _classCallCheck3.default)(this, SubscriptionSocketHelper);
    return (0, _possibleConstructorReturn3.default)(this, (SubscriptionSocketHelper.__proto__ || (0, _getPrototypeOf2.default)(SubscriptionSocketHelper)).call(this, responder, NAME));
  }

  /**
   * Override to respond to messages coming over WebSocket.
   */


  (0, _createClass3.default)(SubscriptionSocketHelper, [{
    key: 'respond',
    value: function respond(message) {
      if (message.data) {
        var json = this.getJsonFromSocketMessage(message);
        try {
          if (!(0, _get3.default)(SubscriptionSocketHelper.prototype.__proto__ || (0, _getPrototypeOf2.default)(SubscriptionSocketHelper.prototype), 'respond', this).call(this, message)) {
            if (json.data !== undefined) {
              if (json.data.sdp !== undefined) {
                if (json.data.sdp.type === 'offer') {
                  this._responder.onSDPOffer(json.data);
                }
              }
              if (json.data.candidate !== undefined) {
                this._responder.onAddIceCandidate(json.data.candidate);
              }
              if (json.data.type === 'status') {
                if (json.data.code === 'NetConnection.ICE.TricleCompleted' || json.data.code === 'NetConnection.ICE.TrickleCompleted') {
                  this._responder.onSocketIceCandidateEnd();
                } else if (json.data.code === 'NetStream.Play.UnpublishNotify') {
                  this._responder.onUnpublish();
                } else if (json.data.code === 'NetConnection.Connect.Closed') {
                  this._responder.onConnectionClosed();
                } else {
                  this._responder.onSubscriberStatus(json.data);
                }
              }
              if (json.data.hasOwnProperty('status')) {
                if (json.data.status === 'NetStream.Play.UnpublishNotify') {
                  this._responder.onUnpublish();
                }
              }
              if (json.type !== undefined) {
                if (json.type === 'metadata') {
                  // It is a `send` API invocation.
                  if (json.method !== undefined) {
                    this._responder.onSendReceived(json.method, json.data);
                  }
                  // Else it is normal metadata.
                  else {
                      this._responder.onMetaData(json.data);
                    }
                }
              }
            } else if (json.type !== undefined) {
              if (json.type === 'metadata') {
                this._responder.onMetaData(json.metadata);
              }
            }
          }
        } catch (e) {
          (0, _log.error)(NAME, '[ws.onmessage] - Error in accessing message data as JSON. ' + e.message);
          this._responder.onSocketMessageError('[ws.onmessage] - Error in accessing message data as JSON. ' + e.message);
        }
      } else {
        (0, _log.warn)(NAME, '[ws.onmessage] - No Message Data.');
      }
    }
  }]);
  return SubscriptionSocketHelper;
}(_socketHelper2.default);

exports.default = SubscriptionSocketHelper;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webrtc = __webpack_require__(40);

var webrtc = _interopRequireWildcard(_webrtc);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProPublishPeer';

/**
 * Proxy to Peer Connection for Publishers.
 *
 * @private
 */

var PublisherPeerHelper = function () {
  function PublisherPeerHelper(responder) {
    (0, _classCallCheck3.default)(this, PublisherPeerHelper);

    this._responder = responder;
    this._peerConnection = undefined;
  }

  /**
   * Removes handlers assigned to the peer connection instance.
   *
   * @param {RTCPeerConnection} connection
   */


  (0, _createClass3.default)(PublisherPeerHelper, [{
    key: '_removeConnectionHandlers',
    value: function _removeConnectionHandlers(connection) {
      connection.onconnectionstatechange = undefined;
      connection.oniceconnectionstatechange = undefined;
      connection.onicecandidate = undefined;
    }

    /**
     * Assigns handlers to events on the peer connection instance.
     *
     * @param {RTCPeerConnection} connection
     * @param {Promise} promise
     *        The `Promise` to resolve or reject on success of connection.
     */

  }, {
    key: '_addConnectionHandlers',
    value: function _addConnectionHandlers(connection, promise) {
      var _this = this;

      var reconnectTimeout = void 0;
      var timeoutLimit = 5000;

      connection.onconnectionstatechange = function () {
        (0, _log.debug)(NAME, '[peer.onconnectionstatechange] - State: ' + connection.connectionState);
        if (connection.connectionState === 'connected') {
          (0, _log.debug)(NAME, '[peerconnection:open]');
          if (promise) {
            promise.resolve(_this);
          }
        } else if (connection.connectionState === 'failed' || connection.connectionState === 'disconnected') {
          (0, _log.warn)(NAME, '[peerconnection:error]');
          if (promise) {
            promise.reject();
          }
        } else {
          (0, _log.debug)(NAME, '[peerconnection:' + connection.connectionState + ']');
        }
      };

      connection.onicecandidate = function (event) {
        (0, _log.debug)(NAME, '[peer.onicecandidate] - Peer Candidate: ' + event.candidate);
        if (event.candidate) {
          _this._responder.onIceCandidate(event.candidate);
        } else if (event.candidate === null) {
          // null means they have finished sending candidates back and forth?
          // Moved to notification from server on trickle end event.
          // this._responder.onIceCandidateTrickleEnd()
        }
      };

      connection.oniceconnectionstatechange = function (event) {
        var state = connection.iceConnectionState;
        (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - State: ' + state);
        if (state === 'failed') {
          if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
          }
          _this._responder.onPeerConnectionClose(event);
        } else if (state === 'disconnected') {
          // may receive a disconnect temporarily that will then return to a connection.
          reconnectTimeout = setTimeout(function () {
            (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection.');
            clearTimeout(reconnectTimeout);
            _this._responder.onPeerConnectionClose(event);
          }, timeoutLimit);
        } else {
          if (reconnectTimeout) {
            (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - Clearing timeout for reconnect.');
            clearTimeout(reconnectTimeout);
          }
        }
      };

      connection.onsignalingstatechange = function (event) {
        // eslint-disable-line no-unused-vars
        var state = connection.signalingState;
        (0, _log.debug)(NAME, '[peer.onsignalingstatechange] - State: ' + state);
      };

      connection.onicegatheringstatechange = function () {
        var state = connection.iceGatheringState;
        (0, _log.debug)(NAME, '[peer.onicegatheringstatechange] - State: ' + state);
        if (state === 'complete') {
          _this._responder.onPeerGatheringComplete();
        }
      };

      connection.onremovestream = function () {
        (0, _log.debug)(NAME, '[peer.onremovestream]');
      };
    }

    /**
     * Request to `getUserMedia` on browser.
     *
     * @param {Object} contraints
     *        The `MediaConstraints` object.
     * @return {Promise}
     */

  }, {
    key: 'getUserMedia',
    value: function getUserMedia(constraints) {
      return webrtc.getUserMedia(constraints);
    }

    /**
     * Request to force `getUserMedia` request using the provided constraints.
     *
     * @param {Object} constraints
     *        The `MediaConstraints` to force in request on `getUserMedia`.
     * @return {Promise}
     */

  }, {
    key: 'forceUserMedia',
    value: function forceUserMedia(constraints) {
      return webrtc.forceUserMedia(constraints);
    }

    /**
     * Request to create an Offer through the Peer Connection.
     *
     * @param {Object} bandwidth
     *        The optional bandwidth configuration to use in munging SDP before sending offer.
     * @param {Promise} promise
     *        The `Promise` to resolve or reject on success of sending offer on Peer Connection.
     * @return {Promise}
     */

  }, {
    key: 'createOffer',
    value: function createOffer() {
      var _this2 = this;

      var bandwidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var offerPromise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      (0, _log.debug)(NAME, '[createoffer]');
      var p = offerPromise || new _promise.DeferredPromise();
      this._peerConnection.createOffer().then(function (sessionDescription) {
        _this2.setLocalDescription(sessionDescription, bandwidth).then(function () {
          if (bandwidth) {
            sessionDescription.sdp = webrtc.updateBandwidth(bandwidth, sessionDescription.sdp);
          }
          _this2._responder.onSDPSuccess();
          p.resolve(sessionDescription);
        }).catch(function (err) {
          _this2._responder.onSDPError(err);
          p.reject(err);
        });
      }).catch(function (err) {
        (0, _log.debug)(NAME, '[createoffer:error]');
        p.reject(err);
      });
      return p.hasOwnProperty('promise') ? p.promise : p;
    }

    /**
     * Request to set local description on the Peer Connection.
     *
     * @param {Object} sessionDescription
     * @return {Promise}
     */

  }, {
    key: 'setLocalDescription',
    value: function setLocalDescription(sessionDescription) {
      (0, _log.debug)(NAME, '[setlocaldescription]');
      return this._peerConnection.setLocalDescription(sessionDescription);
    }

    /**
     * Request to set remote description.
     *
     * @param {Object} sdp
     *        The Session Description tot set on the Peer Connection.
     * @return {Promise}
     */

  }, {
    key: 'setRemoteDescription',
    value: function setRemoteDescription(sdp) {
      (0, _log.debug)(NAME, '[setremotedescription]');
      return this._peerConnection.setRemoteDescription(new webrtc.RTCSessionDescription(sdp));
    }

    /**
     * Request to add ICE candidate to Peer Connection.
     *
     * @param {Object} candidate
     * @return {Promise}
     */

  }, {
    key: 'addIceCandidate',
    value: function addIceCandidate(candidate) {
      (0, _log.debug)(NAME, '[addcandidate]');
      return this._peerConnection.addIceCandidate(candidate);
    }

    /**
     * Request to setup the proxied Peer Connection instance.
     *
     * @param {Array} iceServers
     *        List of ICE servers to use in the connection.
     * @param {Promise} setUpPromise
     *        The `Promise` to resolve or reject on in success in setting up the Peer Connection.
     * @param {String} rtcpMuxPolicy
     *        The type of mux policy to use.
     * @return {Promise}
     */

  }, {
    key: 'setUp',
    value: function setUp(iceServers) {
      var setUpPromise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var rtcpMuxPolicy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      this.tearDown();
      var p = setUpPromise || new _promise.DeferredPromise();
      try {
        var peerConfig = {
          iceServers: iceServers,
          iceCandidatePoolSize: 2,
          bundlePolicy: 'max-bundle'
        };
        if (typeof rtcpMuxPolicy !== 'undefined') {
          peerConfig.rtcpMuxPolicy = rtcpMuxPolicy;
        }
        (0, _log.debug)(NAME, '[peerconnection:setup]: ' + (0, _stringify2.default)(peerConfig, null, 2));
        var peer = new webrtc.RTCPeerConnection(peerConfig, {
          optional: [{ RtpDataChannels: false }, { googCpuOveruseDetection: true }]
        });
        this._addConnectionHandlers(peer);
        this._peerConnection = peer;
        p.resolve(peer);
      } catch (e) {
        (0, _log.warn)(NAME, 'Could not establish a PeerConnection. ' + e.message);
        p.reject(e.message);
      }
      return p.hasOwnProperty('promise') ? p.promise : p;
    }

    /**
     * Request to tear down proxied Peer Connection instance.
     */

  }, {
    key: 'tearDown',
    value: function tearDown() {
      (0, _log.debug)(NAME, '[teardown]');
      if (this._peerConnection) {
        this._removeConnectionHandlers(this._peerConnection);
        try {
          this._peerConnection.close();
        } catch (e) {
          (0, _log.warn)(NAME, '[peerconnection.close] error: ' + e.message);
        } finally {
          this._peerConnection = undefined;
        }
      }
    }

    /**
     * Accessor for the proxied RTCPeerConnection instance.
     *
     * @return {RTCPeerConnection}
     */

  }, {
    key: 'connection',
    get: function get() {
      return this._peerConnection;
    }
  }]);
  return PublisherPeerHelper;
}();

exports.default = PublisherPeerHelper;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webrtc = __webpack_require__(40);

var webrtc = _interopRequireWildcard(_webrtc);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProSubscriptionPeer';

/**
 * Utility to check if candidate is empty, and considered the end of the trickle negotiation for a subscriber.
 *
 * @param {Object} candidate
 *
 * @private
 */
var isEmptyCandidate = function isEmptyCandidate(candidate) {
  return typeof candidate === 'undefined' || typeof candidate === 'string' && candidate.length === 0;
};

/**
 * Proxy to Peer Connection for Subscribers.
 *
 * @private
 */

var SubscriptionPeerHelper = function () {
  function SubscriptionPeerHelper(responder) {
    (0, _classCallCheck3.default)(this, SubscriptionPeerHelper);

    this._responder = responder;
    this._peerConnection = undefined;
    this._pendingMediaStream = undefined;
  }

  /**
   * Removes handlers assigned to the peer connection instance.
   *
   * @param {RTCPeerConnection} connection
   */


  (0, _createClass3.default)(SubscriptionPeerHelper, [{
    key: '_removeConnectionHandlers',
    value: function _removeConnectionHandlers(connection) {
      connection.onconnectionstatechange = undefined;
      connection.oniceconnectionstatechange = undefined;
      connection.onicecandidate = undefined;
      connection.onaddstream = undefined;
      connection.ontrack = undefined;
    }

    /**
     * Assigns handlers to events on the peer connection instance.
     *
     * @param {RTCPeerConnection} connection
     * @param {Promise} promise
     *        The `Promise` to resolve or reject on success of connection.
     */

  }, {
    key: '_addConnectionHandlers',
    value: function _addConnectionHandlers(connection, promise) {
      var _this = this;

      var reconnectTimeout = void 0;
      var timeoutLimit = 5000;

      connection.onconnectionstatechange = function () {
        if (connection.connectionState === 'connected') {
          (0, _log.debug)(NAME, '[peerconnection:open]');
          if (promise) {
            promise.resolve(_this);
          }
        } else if (connection.connectionState === 'failed' || connection.connectionState === 'disconnected') {
          (0, _log.warn)(NAME, '[peerconnection:error]');
          if (promise) {
            promise.reject();
          }
        }
      };

      connection.onicecandidate = function (event) {
        (0, _log.debug)(NAME, '[peer.onicecandidate] - Peer Candidate: ' + event.candidate);
        if (event.candidate) {
          _this._responder.onIceCandidate(event.candidate);
        } else if (event.candidate === null) {
          // null means they have finished sending candidates back and forth?
          _this._responder.onIceCandidateTrickleEnd(_this._pendingMediaStream);
          _this._pendingMediaStream = undefined;
        }
      };

      connection.onaddstream = function (event) {
        (0, _log.debug)(NAME, '(onaddstream) Peer Add Stream: ' + event.stream);
        if (event.stream && _this._pendingMediaStream === undefined) {
          _this._pendingMediaStream = event.stream;
          _this._responder.onAnswerMediaStream(event.stream);
        }
      };

      // Picked up by Firefox, all others use `onaddstream`, but adapter.js will call both, so we limit.
      connection.ontrack = function (event) {
        (0, _log.debug)(NAME, '(ontrack) Peer Add Stream: ' + event.streams);
        if (event.streams && event.streams.length > 0 && _this._pendingMediaStream === undefined) {
          _this._pendingMediaStream = event.streams[0];
          _this._responder.onAnswerMediaStream(event.streams[0]);
        }
      };

      connection.oniceconnectionstatechange = function (event) {
        var state = connection.iceConnectionState;
        (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - State: ' + state);
        if (state === 'failed') {
          if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
          }
          _this._responder.onPeerConnectionClose(event);
        } else if (state === 'disconnected') {
          // may receive a disconnect temporarily that will then return to a connection.
          reconnectTimeout = setTimeout(function () {
            (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection.');
            clearTimeout(reconnectTimeout);
            _this._responder.onPeerConnectionClose(event);
          }, timeoutLimit);
        } else {
          if (reconnectTimeout) {
            (0, _log.debug)(NAME, '[peer.oniceconnectionstatechange] - Clearing timeout for reconnect.');
            clearTimeout(reconnectTimeout);
          }
        }
      };

      connection.onicegatheringstatechange = function () {
        var state = connection.iceGatheringState;
        (0, _log.debug)(NAME, '[peer.onicegatheringstatechange] - State: ' + state);
        if (state === 'complete') {
          _this._responder.onPeerGatheringComplete();
        }
      };

      connection.onicegatheringstatechange = function () {
        var state = connection.iceGatheringState;
        (0, _log.debug)(NAME, '[peer.onicegatheringstatechange] - State: ' + state);
        if (state === 'complete') {
          _this._responder.onPeerGatheringComplete();
        }
      };

      connection.onremovestream = function () {
        (0, _log.debug)(NAME, '[peer.onremovestream]');
      };
    }

    /**
     * Request to create answer on Peer Connection.
     *
     * @param {Object} sdp
     *        The Session Description to set as remote description.
     * @return {Promise}
     */

  }, {
    key: 'createAnswer',
    value: function createAnswer(sdp) {
      var _this2 = this;

      (0, _log.debug)(NAME, '[createanswer]');
      var deferred = new _promise.DeferredPromise();

      this._peerConnection.setRemoteDescription(sdp).then(this._responder.onSDPSuccess).catch(function (err) {
        _this2._responder.onSDPError(err);
      });

      this._peerConnection.createAnswer().then(function (sessionDescription) {
        _this2._peerConnection.setLocalDescription(sessionDescription).then(_this2._responder.onSDPSuccess).catch(function (err) {
          _this2._responder.onSDPError(err);
        });
        deferred.resolve(sessionDescription);
      }).catch(deferred.reject);

      return deferred.promise;
    }

    /**
     * Request to add ICE candidate to Peer Connection.
     *
     * @param {Object} candidate
     * @return {Promise}
     */

  }, {
    key: 'addIceCandidate',
    value: function addIceCandidate(candidate) {
      (0, _log.debug)(NAME, 'checking if empty...');
      if (isEmptyCandidate(candidate)) {
        (0, _log.debug)(NAME, '[addicecandidate]:: empty');
      } else {
        (0, _log.debug)(NAME, '[addicecandidate]');
        var iceCandidate = new webrtc.RTCIceCandidate({
          sdpMLineIndex: candidate.sdpMLineIndex,
          candidate: candidate.candidate
        });
        this._peerConnection.addIceCandidate(iceCandidate).then(function () {
          // nada
        }).catch(function (err) {
          (0, _log.error)(NAME, 'Error in add of ICE Candidiate + ' + err);
        });
      }
    }

    /**
     * Request to setup the proxied Peer Connection instance.
     *
     * @param {Array} iceServers
     *        List of ICE servers to use in the connection.
     * @param {Promise} setUpPromise
     *        The `Promise` to resolve or reject on in success in setting up the Peer Connection.
     * @param {String} rtcpMuxPolicy
     *        The type of mux policy to use.
     * @return {Promise}
     */

  }, {
    key: 'setUp',
    value: function setUp(iceServers) {
      var setUpPromise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var rtcpMuxPolicy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      this.tearDown();
      var p = setUpPromise || new _promise.DeferredPromise();
      try {
        var peerConfig = {
          iceServers: iceServers,
          iceCandidatePoolSize: 2,
          bundlePolicy: "max-bundle"
        };
        if (typeof rtcpMuxPolicy !== 'undefined') {
          peerConfig.rtcpMuxPolicy = rtcpMuxPolicy;
        }
        (0, _log.debug)(NAME, '[peerconnection:setup]: ' + (0, _stringify2.default)(peerConfig, null, 2));
        var peer = new webrtc.RTCPeerConnection(peerConfig, {
          optional: [{ RtpDataChannels: false }, { googCpuOveruseDetection: true }]
        });
        this._peerConnection = peer;
        this._addConnectionHandlers(peer);
        p.resolve();
      } catch (e) {
        (0, _log.warn)(NAME, 'Could not create a RTCPeerConnection. Error: ' + e.message);
        p.reject(e.message);
      }
      return p.hasOwnProperty('promise') ? p.promise : p;
    }

    /**
     * Request to tear down proxied Peer Connection instance.
     */

  }, {
    key: 'tearDown',
    value: function tearDown() {
      (0, _log.debug)(NAME, '[teardown]');
      if (this._peerConnection) {
        this._removeConnectionHandlers(this._peerConnection);
        try {
          this._peerConnection.close();
        } catch (e) {
          (0, _log.warn)(NAME, '[peerconnection.close] error: ' + e.message);
        }
      }
      this._pendingMediaStream = undefined;
      this._peerConnection = undefined;
    }

    /**
     * Accessor for the proxied RTCPeerConnection instance.
     *
     * @return {RTCPeerConnection}
     */

  }, {
    key: 'connection',
    get: function get() {
      return this._peerConnection;
    }
  }]);
  return SubscriptionPeerHelper;
}();

exports.default = SubscriptionPeerHelper;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawStream = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _browserBunyan = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Custom logger for bunyon.
 *
 * @private
 */
var RawStream = exports.RawStream = function () {
  function RawStream() {
    (0, _classCallCheck3.default)(this, RawStream);
  }

  (0, _createClass3.default)(RawStream, [{
    key: 'write',
    value: function write(rec) {
      console.log('%s - [%s] %s: %s', // eslint-disable-line no-console
      rec.time.toISOString(), rec.name, _browserBunyan.nameFromLevel[rec.level], rec.msg);
    }
  }]);
  return RawStream;
}();

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTCPublisher = exports.RTMPPublisher = exports.Red5ProPublisher = undefined;

var _set = __webpack_require__(92);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = __webpack_require__(88);

var _map2 = _interopRequireDefault(_map);

var _implFactoryOrder = __webpack_require__(85);

var _implFactoryOrder2 = _interopRequireDefault(_implFactoryOrder);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _red5proRtmp = __webpack_require__(122);

var _red5proRtmp2 = _interopRequireDefault(_red5proRtmp);

var _red5proRtc = __webpack_require__(121);

var _red5proRtc2 = _interopRequireDefault(_red5proRtc);

var _promise = __webpack_require__(5);

var _publish = __webpack_require__(54);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'Red5ProPublisher';
var publishFactory = new _implFactoryOrder2.default();
var publisherImpl = function () {
  var map = new _map2.default();
  map.set(_publish.PublishTypes.RTC, _red5proRtc2.default);
  map.set(_publish.PublishTypes.RTMP, _red5proRtmp2.default);
  return map;
}();

/**
 * Main entry for failover support of all publisher implementations.
 *
 * @extends EventEmitter
 */

var Red5ProPublisher = function (_EventEmitter) {
  (0, _inherits3.default)(Red5ProPublisher, _EventEmitter);

  function Red5ProPublisher() {
    (0, _classCallCheck3.default)(this, Red5ProPublisher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Red5ProPublisher.__proto__ || (0, _getPrototypeOf2.default)(Red5ProPublisher)).call(this));

    _this._options = undefined;
    _this._order = [_publish.PublishTypes.RTC, _publish.PublishTypes.RTMP];
    return _this;
  }

  /**
   * Utilizes Failover Publisher Factory to attempt in determining browser support for Publisher from defined order.
   *
   * @return {Promise}
   *
   * @private
   */


  (0, _createClass3.default)(Red5ProPublisher, [{
    key: '_getPublisherFromOrder',
    value: function _getPublisherFromOrder(order, options) {
      return publishFactory.create(order, publisherImpl, options, 'init');
    }

    /**
     * Returns the specified order for auto-failover.
     *
     *  @return {Array}
     *          Default: `['rtc', 'rtmp']`.
     */

  }, {
    key: 'getPublishOrder',
    value: function getPublishOrder() {
      return this._order;
    }

    /**
     * Defines the desired auto-failover order.
     *
     *  @param {Array} order
     *          The desired order. e.g, `['rtc', 'rtmp']`.
     *
     *  @return {Red5ProPublisher}
     *          This instance.
     */

  }, {
    key: 'setPublishOrder',
    value: function setPublishOrder(order) {
      // Allow for string value to define single item in order.
      order = typeof order === 'string' ? [order] : order;

      // Filter out values not available in enumeration of playback types.
      var t = order.filter(function (entry) {
        var key = void 0;
        for (key in _publish.PublishTypes) {
          if (_publish.PublishTypes[key].toLowerCase() === entry.toLowerCase()) {
            return true;
          }
        }
        return false;
      }).map(function (entry) {
        return entry.toLowerCase();
      });

      // Define new order.
      this._order = [].concat((0, _toConsumableArray3.default)(new _set2.default(t)));
      (0, _log.debug)(NAME, '[orderupdate]: ' + this._order);
      return this;
    }

    /**
     * Request to initialize and determine the proper Publisher implementation based on configuration.
     * The returned `Promise` will either resolve with the determined Publisher instance or reject with an error String in failure to determine Publisher type.
     *
     *  @param {Object} options
     *          The initialization configuration map for each desired failover tech.
     *  @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var deferred = new _promise.DeferredPromise();
      (0, _log.debug)(NAME, '[publish]');
      this._options = options;
      this._getPublisherFromOrder(this._order, this._options).then(function (publisher) {
        deferred.resolve(publisher);
      }).catch(function (err) {
        (0, _log.warn)(NAME, '[publisherror]: Could not implement a publisher: ' + err);
        deferred.reject(err);
      });
      return deferred.promise;
    }

    /**
     * Return enumerated value Publisher types used in failover order.
     * @type {Object}
     */

  }, {
    key: 'publishTypes',
    get: function get() {
      return _publish.PublishTypes;
    }
  }]);
  return Red5ProPublisher;
}(_eventEmitter2.default);

exports.Red5ProPublisher = Red5ProPublisher;
exports.RTMPPublisher = _red5proRtmp2.default;
exports.RTCPublisher = _red5proRtc2.default;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = __webpack_require__(135);

var _isNan2 = _interopRequireDefault(_isNan);

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _embed = __webpack_require__(77);

var embed = _interopRequireWildcard(_embed);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _sharedobjectHelperRtmp = __webpack_require__(81);

var _sharedobjectHelperRtmp2 = _interopRequireDefault(_sharedobjectHelperRtmp);

var _util = __webpack_require__(86);

var _object = __webpack_require__(41);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'R5ProPublisherSourceHandler';

/**
 * Determine the video dimensions setting value based on possible definition using `MediaConstraint`.
 * @private
 */
var convertDimensionOptions = function convertDimensionOptions(vo) {
  return vo.exact || vo.ideal || vo.max || vo.min || vo;
};

/**
 * Define the audio and video settings for Flash.
 * The `width` and `height` attributes relate to video. The `audio` attribute is a boolean flag.
 * @private
 */
var mediaConstraintsToFlashvars = function mediaConstraintsToFlashvars(constraints, flashvars) {
  var fv = (0, _object.deepCopy)(flashvars);
  if (typeof constraints.video === 'boolean') {
    fv.video = constraints.video;
  } else {
    var key = void 0;
    for (key in constraints.video) {
      fv[key] = convertDimensionOptions(constraints.video[key]);
    }
  }
  fv.audio = constraints.audio;
  return fv;
};

/**
 * The internal Publish Source Handler for an RTMPPublisher.
 * @private
 */

var PublisherSourceHandler = function () {

  /**
   * @param {Element} video
   *        The video DOM Element.
   * @param {String} type
   *        The publisher type: most likely, `RTMP`.
   * @param {Object} soResponder
   *        Optional responder to SharedObject API. If not provided, will generate a `RTMPSharedObjectHandler` instance internally.
   * @private
   */
  function PublisherSourceHandler(video, type) {
    var soResponder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    (0, _classCallCheck3.default)(this, PublisherSourceHandler);

    this.video = video;
    this.clone = this.video.cloneNode(true);
    this.holder = this.video.parentNode;
    this._publisherType = type;
    this._swfId = null;
    this._embedFuture = undefined;
    this._soResponder = soResponder || new _sharedobjectHelperRtmp2.default();
  }

  /**
   * Requested and used by RTMPPublisher instance in recognizing completion of embed.
   *
   * @return {Promise}
   * @private
   */


  (0, _createClass3.default)(PublisherSourceHandler, [{
    key: 'getEmbedOperation',
    value: function getEmbedOperation() {
      this._embedFuture = _promise.Future.createIfNotExist(this._embedFuture);
      return this._embedFuture.promise;
    }

    /**
     * Clean up of references and modified display.
     * @private
     */

  }, {
    key: 'cleanUp',
    value: function cleanUp() {
      // Return to prior DOM manipulation.
      this.video.remove();
      this.video = this.clone.cloneNode(true);
      this.holder.appendChild(this.video);
      this._embedFuture = undefined;
    }

    /**
     * Request to define the embedding options for a RTMPPublisher.
     *
     * @param {String} swfId
     *        The unique id to use in embedding element.
     * @param {Object} options
     *        The initialization configuration to determine flashvars from.
     * @param {String} swfUrl
     *        Optional location of the SWF file to embed. Default is relative path to `red5pro-subscriber.swf`.
     * @param {String} minFlashVersion
     *        Optional semver of minimum Flash version to determine support. Default is `10.0.0`.
     * @return {Promise}
     *        The `Promise` either resolves or rejects the success of embed on page using SWFObject.
     * @private
     */

  }, {
    key: 'addSource',
    value: function addSource(swfId, options) {
      var swfUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var minFlashVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      (0, _log.debug)(NAME, '[addsource]');
      var self = this;
      this._swfId = swfId;
      this._embedFuture = _promise.Future.createIfNotExist(this._embedFuture);
      var deferred = this._embedFuture;
      options.swf = swfUrl || options.swf;
      options.minFlashVersion = minFlashVersion || options.minFlashVersion;
      embed.defineEmbedElement(this.video, this.holder).then(function (elementId) {
        (0, _log.debug)(NAME, '[element:complete]');
        var flashvars = {
          buffer: options.buffer != null ? options.buffer : 1,
          streamMode: options.streamMode,
          streamName: options.streamName,
          appName: options.app,
          host: options.host
        };
        if (options.backgroundColor) {
          flashvars.backgroundColor = options.backgroundColor;
        }
        if (options.context) {
          flashvars.roomName = options.context;
        }
        if (options.embedWidth === '100%' || options.embedHeight === '100%') {
          flashvars.autosize = true;
        }
        if (typeof options.connectionParams !== 'undefined') {
          flashvars.connectionParams = encodeURIComponent((0, _stringify2.default)(options.connectionParams));
        }
        flashvars = mediaConstraintsToFlashvars(options.mediaConstraints, flashvars);
        return embed.embedSwfObject(swfId, options, flashvars, _browser2.default.getSwfObject(), elementId);
      }).then(function () {
        (0, _log.debug)(NAME, '[embed:complete]');
        deferred.resolve(self);
      }).catch(function (err) {
        return deferred.reject(err);
      });
      return deferred.promise;
    }

    /**
     * Request to connect to server for a broadcast session.
     *
     * @param {Object} publishOptions
     * @private
     */

  }, {
    key: 'connect',
    value: function connect(publishOptions) {
      (0, _log.debug)(NAME, '[connect]');
      var el = _browser2.default.getEmbedObject(this._swfId);
      if (el) {
        el.connect(publishOptions);
        this._soResponder.connect(this._swfId);
      } else {
        (0, _log.warn)(NAME, 'Could not determine embedded element with swf id: ' + this._swfId + '.');
      }
    }

    /**
     * Request to disconnect from server.
     *
     * @private
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      (0, _log.debug)(NAME, '[disconnect]');
      try {
        var el = _browser2.default.getEmbedObject(this._swfId);
        if (el) {
          el.disconnect();
        }
      } catch (e) {
        // nada.
      }
      this.cleanUp();
      this._soResponder.disconnect();
    }

    /**
     * Request to send a message to all subscribers.
     *
     * @param {String} methodName
     *        The method name associated with the message to be accepted by all subscribers.
     * @param {Object} data
     *        The data object to send associated with the method name.
     * @private
     */

  }, {
    key: 'send',
    value: function send(methodName, data) {
      var el = _browser2.default.getEmbedObject(this._swfId);
      if (el) {
        el.send(methodName, data);
      }
    }

    /**
     * Adds a response handler on SharedObject channel responder.
     * @private
     */

  }, {
    key: 'addSharedObjectResponseHandler',
    value: function addSharedObjectResponseHandler(handler) {
      this._soResponder.addResponseHandler(handler);
    }

    /**
     * Removes a response handler on SharedObject channel responder.
     * @private
     */

  }, {
    key: 'removeSharedObjectResponseHandler',
    value: function removeSharedObjectResponseHandler(handler) {
      this._soResponder.removeResponseHandler(handler);
    }

    /**
     * Sends message on SharedObject channel responder.
     *
     * @param {String} name
     *        The SharedObject name.
     * @param {String} callName
     *        The method name to be invoked.
     * @param {String} message
     *        The structured value to send.
     * @private
     */

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, message) {
      this._soResponder.sendToSharedObject(name, callName, message);
    }

    /**
     * Sends property update on SharedObject channel responder.
     *
     * @param {String} name
     *        The SharedObject name.
     * @param {String} key
     *        The property name on the SharedObject.
     * @param {String} value
     *        The structured property value.
     * @private
     */

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {
      this._soResponder.sendPropertyToSharedObject(name, key, value);
    }

    /**
     * Requests to get SharedObject instance from the SharedObject channel responder.
     * @private
     */

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(sharedObjectName) {
      this._soResponder.getRemoteSharedObject(sharedObjectName);
    }

    /**
     * Request to connect to a shared object.
     *
     * @param {String} sharedObjectName
     *        The name of the SharedObject.
     * @private
     */

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(sharedObjectName) {
      this._soResponder.connectToSharedObject(sharedObjectName);
    }

    /**
     * Request to close connection to a shared object.
     *
     * @param {String} sharedObjectName
     *        The name of the SharedObject.
     * @private
     */

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(sharedObjectName) {
      this._soResponder.closeSharedObject(sharedObjectName);
    }

    /**
     * Deprecated. Request to update broadcast dimensions before a broadcast.
     *
     * @param {Object} quality
     *        Expects object with following structur: `{video: {width:Int, heightInt}}
     * @private
     */

  }, {
    key: 'setMediaQuality',
    value: function setMediaQuality(quality) {
      var el = _browser2.default.getEmbedObject(this._swfId);
      if (el) {
        if (quality.video && typeof quality.video !== 'boolean') {
          var w = !isNaN(quality.video.width) ? (0, _util.toInt)(quality.video.width) : _isNan2.default;
          var h = !isNaN(quality.video.height) ? (0, _util.toInt)(quality.video.height) : _isNan2.default;
          el.updateResolution(w, h);
        }
      }
    }

    /**
     * Returns the type of implementation: `RTMP`.
     *
     * @return {String}
     * @private
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this._publisherType;
    }
  }]);
  return PublisherSourceHandler;
}();

exports.default = PublisherSourceHandler;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(58);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _webrtc = __webpack_require__(40);

var webrtc = _interopRequireWildcard(_webrtc);

var _websocket = __webpack_require__(53);

var websocket = _interopRequireWildcard(_websocket);

var _socketHelperPub = __webpack_require__(114);

var _socketHelperPub2 = _interopRequireDefault(_socketHelperPub);

var _webrtcHelperPub = __webpack_require__(116);

var _webrtcHelperPub2 = _interopRequireDefault(_webrtcHelperPub);

var _publish = __webpack_require__(57);

var _publish2 = _interopRequireDefault(_publish);

var _event = __webpack_require__(15);

var _publish3 = __webpack_require__(54);

var _webrtc2 = __webpack_require__(55);

var _promise3 = __webpack_require__(5);

var _constraint = __webpack_require__(83);

var _urlEndpoint = __webpack_require__(87);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubStartRegex = /(.*) starting/i;
var pubStopRegex = /(.*) stopping/i;
var NAME = 'RTCPublisher';
var debug = function debug(message) {
  (0, _log.debug)(NAME, message);
};
var warn = function warn(message) {
  (0, _log.warn)(NAME, message);
};
var error = function error(message) {
  (0, _log.error)(NAME, message);
};

// Default to secure settings.
var defaultOptions = {
  protocol: 'wss',
  port: 8083,
  app: 'live',
  streamMode: _publish3.PublishModeTypes.LIVE,
  mediaElementId: 'red5pro-publisher',
  iceServers: [{ urls: 'stun:stun2.l.google.com:19302' }],
  iceTransport: _webrtc2.IceTransportTypes.UDP,
  bandwidth: {
    audio: 56,
    video: 512
  },
  mediaConstraints: new _constraint.RTCMediaConstraint(),
  onGetUserMedia: undefined

  /**
   * Main entry for WebRTC-based Publisher.
   *
   * @extends EventEmitter
   */
};
var RTCPublisher = function (_EventEmitter) {
  (0, _inherits3.default)(RTCPublisher, _EventEmitter);

  function RTCPublisher() {
    (0, _classCallCheck3.default)(this, RTCPublisher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTCPublisher.__proto__ || (0, _getPrototypeOf2.default)(RTCPublisher)).call(this));

    _this._options = undefined;
    _this._view = undefined;
    _this._peerHelper = undefined;
    _this._socketHelper = undefined;
    _this._mediaStream = undefined;

    _this._streamFuture = undefined;
    _this._availableFuture = undefined;
    _this._peerFuture = undefined;
    _this._offerFuture = undefined;
    _this._sendOfferFuture = undefined;
    _this._trickleEndFuture = undefined;
    _this._publishFuture = undefined;
    _this._unpublishFuture = undefined;
    return _this;
  }

  (0, _createClass3.default)(RTCPublisher, [{
    key: '_getMediaStream',
    value: function _getMediaStream() {
      this._streamFuture = _promise3.Future.createIfNotExist(this._streamFuture);
      return this._streamFuture.promise;
    }
  }, {
    key: '_getTrickleEnd',
    value: function _getTrickleEnd() {
      return _promise3.Future.createIfNotExist(this._trickleEndFuture);
    }

    /**
     * Runs internal `getUserMedia` logic to determine broadcast constraints.
     *
     * @param {Object} options
     *        The initialization options provided in `init()`.
     *
     * @private
     */

  }, {
    key: '_gum',
    value: function _gum(options) {
      var _this2 = this;

      if (options.onGetUserMedia !== undefined) {
        debug('Requesting gUM from user-defined configuration:onGetUserMedia.');
        options.onGetUserMedia().then(function (media) {
          _this2._streamFuture.resolve(media);
        }).catch(function (err) {
          error('Could not resolve MediaAsset from provided gUM. Error - ' + err);
          _this2._streamFuture.reject(err);
        });
      } else {
        debug('Requesting gUM using mediaConstraints: ' + (0, _stringify2.default)(options.mediaConstraints, null, 2));
        this._peerHelper.getUserMedia(options.mediaConstraints).then(function (res) {
          debug('Found valid constraints: ' + (0, _stringify2.default)(res.constraints, null, 2));
          _this2.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.DIMENSION_CHANGE, _this2, res.constraints));
          _this2._streamFuture.resolve(res.media);
        }).catch(function (rej) {
          debug('Could not find valid constraint resolutions from: ' + (0, _stringify2.default)(rej.constraints, null, 2));
          error('Could not resolve MediaAsset from provided mediaConstraints. Error - ' + rej.error);
          debug('Attempting to find resolutions from original provided constraints: ' + (0, _stringify2.default)(rej.constraints, null, 2));
          // allowing to try original constraint requested.
          options.onGetUserMedia = function () {
            return _this2._peerHelper.forceUserMedia(rej.constraints);
          };
          _this2._gum(options);
        });
      }
    }

    /**
     * Invoked upon receipt from `_gum` with MediaStream instance returned from browser.
     *
     * @param {MediaStream} mediaStream
     *        The `MediaStream` object.
     *
     * @private
     */

  }, {
    key: '_onMediaStreamReceived',
    value: function _onMediaStreamReceived(mediaStream) {
      //    if (this._socketHelper && !this._socketHelper.isTerminated) {
      this._mediaStream = mediaStream;
      this.trigger(new _event.PublisherEvent(_event.RTCPublisherEventTypes.MEDIA_STREAM_AVAILABLE, this, mediaStream));
      if (this._view) {
        this._view.preview(this._mediaStream);
      }
      //    }
    }

    /**
     * Still in use, but hold-over of previous 3.x SDK versions designed to pair views and publishers. In 4.0.0 it has been internalized.
     * API deprecated.
     *
     * @private
     */

  }, {
    key: '_setViewIfNotExist',
    value: function _setViewIfNotExist(currentView) {
      var mediaElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof currentView === 'undefined' && mediaElementId !== undefined) {
        var view = new _publish2.default(mediaElementId);
        view.attachPublisher(this);
      }
    }

    /**
     * Request availability based on unique `streamName`.
     * The return from the WebSocket request will either invoke `onStreamAvailable` or `onStreamUnavailable`.
     *
     * @param {String} streamName
     *        The unique stream name to check if it is _unavailable_ - meaning free to publish against.
     * @return {Promise}
     *        The promise will resolve/reject the `_availableFuture`.
     *
     * @private
     */

  }, {
    key: '_requestAvailability',
    value: function _requestAvailability(streamName) {
      debug('[requestavailability]');
      this._availableFuture = undefined;
      this._availableFuture = _promise3.Future.createIfNotExist(this._availableFuture);
      this._socketHelper.post({
        isAvailable: streamName,
        bundle: false
      });
      return this._availableFuture.promise;
    }

    /**
     * Request to setup RTCPeerConnection instance for exchange of SDP locally and remotely.
     *
     * @param {Array} iceServers
     *        List of ICE servers
     * @return {Promise}
     *        The promise will resolve/reject the `_peerFuture`.
     *
     * @private
     */

  }, {
    key: '_createPeerConnection',
    value: function _createPeerConnection(iceServers) {
      debug('[createpeeer]');
      this._peerFuture = undefined;
      this._peerFuture = _promise3.Future.createIfNotExist(this._peerFuture);
      this._peerHelper.setUp(iceServers, this._peerFuture, this._options.rtcpMuxPolicy);
      return this._peerFuture.promise;
    }

    /**
     * Request to generate offer on Peer Connection instance.
     *
     * @param {Object} bandwidth
     *        Optional bandwidth configuration object to munge SDP.
     * @return {Promise}
     *        The promise will resolve/reject a success in creation of the offer through the Peer Connection.
     *
     * @private
     */

  }, {
    key: '_createOffer',
    value: function _createOffer() {
      var bandwidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      debug('[createoffer]');
      this._offerFuture = undefined;
      this._offerFuture = _promise3.Future.createIfNotExist(this._offerFuture);
      this._peerHelper.createOffer(bandwidth, this._offerFuture);
      return this._offerFuture.promise;
    }

    /**
     * Request to set a remote description on Peer Connection instance.
     *
     * @param {Object} sdp
     *        Object describing the Session Description.
     * @return {Promise}
     *        The promise will resolve/reject in a success in setting the remote SDP on the Peer Connection.
     *
     * @private
     */

  }, {
    key: '_setRemoteDescription',
    value: function _setRemoteDescription(sdp) {
      debug('[setremotedescription]');
      return this._peerHelper.setRemoteDescription(sdp);
    }

    /**
     * Request to send offer on WebSocket instance.
     *
     * @param {Object} sdp
     *        Object describing the Session Description.
     * @param {string} streamName
     *        The unique stream name of the broadcast.
     * @return {Promise}
     *        The promise will resolve/reject on the success of delivering an offer over the WebSocket.
     *
     * @private
     */

  }, {
    key: '_sendOffer',
    value: function _sendOffer(sdp, streamName, transport) {
      debug('[sendoffer]');
      this._sendOfferFuture = undefined;
      this._sendOfferFuture = _promise3.Future.createIfNotExist(this._sendOffFuture);
      this._socketHelper.post({
        handleOffer: streamName,
        transport: transport,
        data: {
          sdp: sdp
        }
      });
      return this._sendOfferFuture.promise;
    }

    /**
     * Request to send ICE candidate over the WebSocket.
     * This can happen several times in the ICE negotiation process.
     *
     * @param {Object} candidate
     *        The Candidate to send.
     * @param {string} streamName
     *        The associated unique stream name of the broadcast.
     *
     * @private
     */

  }, {
    key: '_sendCandidate',
    value: function _sendCandidate(candidate, streamName) {
      debug('[sendcandidate]');
      this._socketHelper.post({
        handleCandidate: streamName,
        data: {
          candidate: candidate
        }
      });
    }

    /**
     * Request on WebSocket to begin publishing.
     *
     * @param {string} streamName
     *        The unique stream name of the broadcast.
     * @param {string} mode
     *        The broadcast mode: `live`, `record` or `append`.
     * @return {Promise}
     *        The promise will resolve/reject in the request to being a broadcast.
     *
     * @private
     */

  }, {
    key: '_requestPublish',
    value: function _requestPublish(streamName, streamMode) {
      debug('[requestpublish]');
      this._publishFuture = undefined;
      this._publishFuture = _promise3.Future.createIfNotExist(this._publishFuture);
      this._socketHelper.post({
        publish: streamName,
        mode: streamMode
      });
      return this._publishFuture.promise;
    }

    /**
     * Request to stop a current broadcast.
     *
     * @param {String} streamName
     *        The unique stream name being broadcast on.
     * @return {Promise}
     *        The promise will resolve/reject on success of properly stopping a broadcast.
     *
     * @private
     */

  }, {
    key: '_requestUnpublish',
    value: function _requestUnpublish(streamName) {
      this._unpublishFuture = undefined;
      this._unpublishFuture = _promise3.Future.createIfNotExist(this._unpublishFuture);
      // If we get a false response from trying to send a close POST,
      //  it means that the socket has already been closed by another impetus -
      //  most likley loss of network or server failure.
      if (!this._socketHelper.post({
        unpublish: streamName
      })) {
        this._unpublishFuture.resolve();
      }
      return this._unpublishFuture.promise;
    }

    /**
     * Request to initialize the WebRTC-based Publisher based on configuration.
     * The returned `Promise` will either resolve with a reference to this instance or reject with an error `String` in failure.
     *
     * @param {Object} options
     *        The initialization configuration map.
     * @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var deferred = new _promise3.DeferredPromise();
      if (!webrtc.isSupported() || !websocket.isSupported()) {
        deferred.reject('Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.');
      } else {
        this._options = (0, _extends3.default)({}, defaultOptions, options);
        this._peerHelper = new _webrtcHelperPub2.default(this);
        this._socketHelper = new _socketHelperPub2.default(this);
        this._getMediaStream().then(this._onMediaStreamReceived.bind(this));
        this._gum(this._options);
        // auto preview.
        this._setViewIfNotExist(this._view, this._options.mediaElementId);
        deferred.resolve(this);
      }
      return deferred.promise;
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'setView',
    value: function setView(view) {
      this._view = view;
      if (this._mediaStream && this._view) {
        this._view.preview(this._mediaStream);
      }
      return this;
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'preview',
    value: function preview() {
      var _this3 = this;

      debug('[preview]');
      var p = new _promise2.default(function (res) {
        res(_this3);
      });
      this._setViewIfNotExist(this._view, this._options.mediaElementId);
      return p;
    }

    /**
     * Request to begin a broadcast session after initilization has occured.
     *
     * @param {String} streamName
     *        Optional stream name to broadcast on, otherwise defaulting to the `streamName` provided in `init()` configuration.
     * @param {Promise} promise
     *        Optional `Promise` object to resolve/reject on based on sequence of events in establishing a broadcast, otherwise defaulting to `Promise` created internally and returned.
     * @return {Promise}
     *        The returned `Promise` will resolve or reject on successful start of a broadcast.<br>
     *        There are several processes that occur in order to establish a WebRTC broadcast that involve - but are not limited to - ICE communication and assigning of local and remote SDPs on peer connections.
     */

  }, {
    key: 'publish',
    value: function publish() {
      var _this4 = this;

      var streamName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var promise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      debug('[publish]');
      this._options.streamName = streamName || this._options.streamName;
      var p = promise || new _promise3.DeferredPromise();
      var socketPromise = new _promise3.DeferredPromise();
      var socketurl = (0, _urlEndpoint.rtcSocketEndpointFromOptions)(this._options, {
        id: this._options.streamName
      });
      this._trickleEndFuture = this._getTrickleEnd();
      this._socketHelper.clearRetry();
      this._socketHelper.setUp(socketurl, socketPromise);
      // 0. Establish socket connection.
      socketPromise.promise
      // 1. Wait for stream attach
      .then(function () {
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_SUCCESS, _this4));
        return _this4._getMediaStream();
      })
      // 2. Request available stream to publish on
      .then(function () {
        return _this4._requestAvailability(_this4._options.streamName, _this4._options.streamType);
      })
      // 3. Create Peer Connection
      .then(function () {
        return _this4._createPeerConnection(_this4._options.iceServers);
      })
      // 4. Make Offer on Peer Connection
      .then(function (connection) {
        connection.addStream(_this4._mediaStream);
        _this4.trigger(new _event.PublisherEvent(_event.RTCPublisherEventTypes.PEER_CONNECTION_AVAILABLE, _this4, connection));
        return _this4._createOffer(_this4._options.bandwidth);
      })
      // 5. Send Offer
      .then(function (sessionDescription) {
        _this4.trigger(new _event.PublisherEvent(_event.RTCPublisherEventTypes.OFFER_START, _this4, sessionDescription));
        return _this4._sendOffer(sessionDescription, _this4._options.streamName, _this4._options.iceTransport);
      })
      // 6. Set the session description remotely
      .then(function (sdp) {
        return _this4._setRemoteDescription(sdp.sdp);
      })
      // 7. Wait until ice trickle end
      .then(function (sdp) {
        _this4.trigger(new _event.PublisherEvent(_event.RTCPublisherEventTypes.OFFER_END, _this4, sdp));
        return _this4._getTrickleEnd().promise;
      })
      // 8. Request to publish stream
      .then(function () {
        _this4.trigger(new _event.PublisherEvent(_event.RTCPublisherEventTypes.ICE_TRICKLE_COMPLETE, _this4));
        return _this4._requestPublish(_this4._options.streamName, _this4._options.streamMode);
      })
      // 9. Results in socket message of publish (see :onPublishStatus)
      .then(function () {
        p.resolve(_this4);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_START, _this4));
      }).catch(function (error) {
        p.reject(error);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_FAILURE, _this4, error));
      });
      return p.hasOwnProperty('promise') ? p.promise : p;
    }

    /**
     * Request to stop a broadcast.
     * The returned `Promise` will either resolve or reject on successful stop of broadcast.
     *
     * @return {Promise}
     */

  }, {
    key: 'unpublish',
    value: function unpublish() {
      var _this5 = this;

      debug('[unpublish]');
      var clearHelpers = function clearHelpers() {
        if (_this5._socketHelper) {
          _this5._socketHelper.tearDown();
        }
        if (_this5._peerHelper) {
          _this5._peerHelper.tearDown();
        }
      };
      this._availableFuture = undefined;
      this._peerFuture = undefined;
      this._offerFuture = undefined;
      this._sendOfferFuture = undefined;
      this._trickleEndFuture = undefined;
      this._publishFuture = undefined;
      var f = this._requestUnpublish(this._options.streamName);
      f.then(function () {
        _this5._unpublishFuture = undefined;
        //      this._mediaStream = undefined
        clearHelpers();
        _this5.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.UNPUBLISH_SUCCESS, _this5));
      });
      return f;
    }

    /**
     * Deprecated. Use `muteAudio`.
     *
     * @private
     */

  }, {
    key: 'mute',
    value: function mute() {
      // backward comatibility - to be deprecated.
      this.muteAudio();
    }

    /**
     * Deprecated. Use `unmuteAudio`.
     *
     * @private
     */

  }, {
    key: 'unmute',
    value: function unmute() {
      // backward comatibility - to be deprecated.
      this.unmuteAudio();
    }

    /**
     * Request to mute the audio of the broadcast.
     * Can only be called once the broadcast has begun.
     */

  }, {
    key: 'muteAudio',
    value: function muteAudio() {
      this._socketHelper.post({
        mute: {
          muteAudio: true
        }
      });
    }

    /**
     * Request to unmute the audio of a broadcast that has been previously muted.
     */

  }, {
    key: 'unmuteAudio',
    value: function unmuteAudio() {
      this._socketHelper.post({
        mute: {
          muteAudio: false
        }
      });
    }

    /** Request to mute (not send) the video of the broadcast.
     * Can only be called once the broadcast has begun.
     */

  }, {
    key: 'muteVideo',
    value: function muteVideo() {
      this._socketHelper.post({
        mute: {
          muteVideo: true
        }
      });
    }

    /**
     * Request to unmute (resume sending) the video of a previously video-muted broadcast.
     */

  }, {
    key: 'unmuteVideo',
    value: function unmuteVideo() {
      this._socketHelper.post({
        mute: {
          muteVideo: false
        }
      });
    }

    /**
     * Request to send a message to all subscribers.
     *
     * @param {String} methodName
     *        The method name associated with the message to be accepted by all subscribers.
     * @param {Object} data
     *        The data object to send associated with the method name.
     */

  }, {
    key: 'send',
    value: function send(methodName, data) {
      this._socketHelper.post({
        send: {
          method: methodName,
          data: typeof data === 'string' ? JSON.parse(data) : data
        }
      });
    }

    /**
     * Request to invoke a method on the Application Adapter related to the `app` config setting.
     *
     * @param {String} methodName
     *        The name of the method to invoke on thw Application Adapter
     * @param {Array} args
     *        The ordered list of arguments to invoke on the method. Do not provide anything if the method takes no arguments.
     * @return {Promise}
     */

  }, {
    key: 'callServer',
    value: function callServer(methodName, args) {
      return this._socketHelper.postAsync({
        callAdapter: {
          method: methodName,
          arguments: args
        }
      });
    }

    /**
     * Event handler for availability of stream on request over the socket.
     *
     * @private
     */

  }, {
    key: 'onStreamAvailable',
    value: function onStreamAvailable(receipt) {
      debug('[onstreamavailable]: ' + (0, _stringify2.default)(receipt, null, 2));
      this._availableFuture = _promise3.Future.createIfNotExist(this._availableFuture);
      this._availableFuture.reject('Stream with name ' + this._options.streamName + ' already has a broadcast session.');
      this.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_INVALID_NAME, this));
    }

    /**
     * Event handler for unavailability of stream on request over the socket.
     *
     * @private
     */

  }, {
    key: 'onStreamUnavailable',
    value: function onStreamUnavailable(receipt) {
      // Being unavailable, is a good thing for allowing to publish using `options.streamName`
      debug('Stream ' + this._options.streamName + ' does not exist.');
      debug('[onstreamunavailable]: ' + (0, _stringify2.default)(receipt, null, 2));
      this._availableFuture = _promise3.Future.createIfNotExist(this._availableFuture);
      this._availableFuture.resolve(true);
    }

    /**
     * Event handler for WebSocket errors.
     *
     * @private
     */

  }, {
    key: 'onSocketMessageError',
    value: function onSocketMessageError(message) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      error('Error in stream playback: ' + message + '.\n[Optional detail]: ' + detail);
      if (this._publishFuture) {
        this.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_FAIL, this));
        this._publishFuture.reject(message);
      }
    }

    /**
     * Event handler for close of WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSocketClose',
    value: function onSocketClose(closeEvent) {
      debug(NAME, '[onsocketclose]');
      if (this._peerHelper) {
        this._peerHelper.tearDown();
      }
      this.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECTION_CLOSED, this, closeEvent));
    }

    /**
     * Event handler for close of Peer Connection.
     *
     * @private
     */

  }, {
    key: 'onPeerConnectionClose',
    value: function onPeerConnectionClose(event) {
      debug(NAME, '[onpeerconnectionclose]');
      if (this._socketHelper) {
        this._socketHelper.tearDown();
      }
      this.onSocketClose(event);
    }

    /**
     * Event handler for success of SDP offer over WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSDPSuccess',
    value: function onSDPSuccess(receipt) {
      var info = receipt ? ': ' + (0, _stringify2.default)(receipt, null, 2) : '';
      debug('[onsdpsuccess]' + info);
    }

    /**
     * Event handler for error in SDP offer over WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSDPError',
    value: function onSDPError(receipt) {
      this.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_FAIL, this));
      var error = receipt ? ': ' + (0, _stringify2.default)(receipt, null, 2) : '';
      error('[onsdperror]' + error);
    }

    /**
     * Event handler for success in SDP answer over WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSDPAnswer',
    value: function onSDPAnswer(sdp) {
      debug('[sdpanswer]:: ' + (0, _stringify2.default)(sdp, null, 2));
      this._sendOfferFuture = _promise3.Future.createIfNotExist(this._sendOfferFuture);
      this._sendOfferFuture.resolve(sdp);
    }

    /**
     * Event handler for request to add ICE candidate on Peer Connection instance.
     *
     * @private
     */

  }, {
    key: 'onAddIceCandidate',
    value: function onAddIceCandidate(candidate) {
      debug('[addicecandidate]');
      this._peerHelper.addIceCandidate(candidate).then(function () {
        debug('[addicecandidate:success]');
      }).catch(function (err) {
        warn('[addicecandidate:error] - ' + err);
      });
    }

    /**
     * Event handler for receipt and request to send ICE candidate.
     *
     * @private
     */

  }, {
    key: 'onIceCandidate',
    value: function onIceCandidate(candidate) {
      debug('[icecandidatetrickle]');
      this._sendCandidate(candidate, this._options.streamName);
    }

    /**
     * Event handler for end of ICE trickle negotiation.
     *
     * @private
     */

  }, {
    key: 'onIceCandidateTrickleEnd',
    value: function onIceCandidateTrickleEnd() {
      debug('[icecandidatetrickle:end]');
    }

    /**
     * Event handler for completion of peer ice candidate gathering.
     *
     * @private
     */

  }, {
    key: 'onPeerGatheringComplete',
    value: function onPeerGatheringComplete() {
      debug('[icecandidategathering:end]');
      if (this._socketHelper) {
        this._socketHelper.postEndOfCandidates(this._options.streamName);
      }
    }

    /**
     * Event handler for end of ICE candidate notification over WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSocketIceCandidateEnd',
    value: function onSocketIceCandidateEnd() {
      debug('[socketicecandidate:end]');
      this._getTrickleEnd().resolve();
      // this._trickleEndFuture = undefined
    }

    /**
     * Publisher status event handler for start and stop of this Publisher instance.
     *
     * @private
     */

  }, {
    key: 'onPublisherStatus',
    value: function onPublisherStatus(status) {
      debug('[publisherstatus] - ' + (0, _stringify2.default)(status, null, 2));
      var stopResult = pubStopRegex.exec(status.message);
      var startResult = pubStartRegex.exec(status.message);
      if (stopResult && stopResult[1] === this._options.streamName) {
        this._unpublishFuture.resolve();
      } else if (startResult && startResult[1] === this._options.streamName) {
        this._publishFuture.resolve();
      } else {
        warn('Publisher status received, but could not handle.');
      }
    }

    /**
     * Helper method to overlay options over current configuration.
     *
     * @private
     */

  }, {
    key: 'overlayOptions',
    value: function overlayOptions(newOptions) {
      this._options = (0, _extends3.default)(this._options, newOptions);
    }

    /**
     * Returns the current WebSocket connection helper if established.
     * Used in SharedObject communication.
     *
     * @return {PublisherSocketHelper}
     *
     * @private
     */

  }, {
    key: 'getConnection',
    value: function getConnection() {
      return this._socketHelper;
    }

    /**
     * Returns the current RTCPeerConnection helper if established.
     *
     * @return {RTCPeerConnection}
     */

  }, {
    key: 'getPeerConnection',
    value: function getPeerConnection() {
      return this._peerHelper ? this._peerHelper.connection : undefined;
    }

    /**
     * Returns the `MediaStream` instance if generated through `getUserMedia` and exists for broadcast.
     *
     * @return {MediaStream}
     */

  }, {
    key: 'getMediaStream',
    value: function getMediaStream() {
      return this._mediaStream;
    }

    /**
     * Returns the initialization configuration used in `init()`.
     *
     * @return {Object}
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }

    /**
     * Returns the type of implementation: `RTC`.
     *
     * @return {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return _publish3.PublishTypes.RTC.toUpperCase();
    }
  }]);
  return RTCPublisher;
}(_eventEmitter2.default);

exports.default = RTCPublisher;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _pubSourceHandler = __webpack_require__(120);

var _pubSourceHandler2 = _interopRequireDefault(_pubSourceHandler);

var _publish = __webpack_require__(57);

var _publish2 = _interopRequireDefault(_publish);

var _event = __webpack_require__(15);

var _promise = __webpack_require__(5);

var _publish3 = __webpack_require__(54);

var _constraint = __webpack_require__(83);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'RTMPPublisher';
var defaultOptions = {
  protocol: 'rtmp',
  port: 1935,
  streamMode: 'live',
  mediaElementId: 'red5pro-publisher',
  embedWidth: '100%', // DOM display style
  embedHeight: '100%', // DOM display style
  minFlashVersion: '10.0.0',
  swf: 'lib/red5pro/red5pro-publisher.swf',
  swfobjectURL: 'lib/swfobject/swfobject.js',
  productInstallURL: 'lib/swfobject/playerProductInstall.swf',
  mediaConstraints: new _constraint.RTMPMediaConstraint()

  /**
   * Main entry for Flash-based Publisher.
   *
   * @extends EventEmitter
   */
};
var RTMPPublisher = function (_EventEmitter) {
  (0, _inherits3.default)(RTMPPublisher, _EventEmitter);

  function RTMPPublisher() {
    (0, _classCallCheck3.default)(this, RTMPPublisher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTMPPublisher.__proto__ || (0, _getPrototypeOf2.default)(RTMPPublisher)).call(this));

    _this._options = undefined;
    _this._view = undefined;
    _this._sourceHandler = undefined;
    _this._elementId = undefined;
    _this._connectFuture = undefined;
    return _this;
  }

  /**
   * Still in use for assigning document element view management to this instance.
   *
   * @private
   */


  (0, _createClass3.default)(RTMPPublisher, [{
    key: '_setViewIfNotExist',
    value: function _setViewIfNotExist(currentView) {
      var mediaElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof currentView === 'undefined' && mediaElementId !== undefined) {
        var view = new _publish2.default(mediaElementId);
        view.attachPublisher(this);
      }
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'setView',
    value: function setView(view, elementId) {
      var _this2 = this;

      this._view = view;
      this._elementId = elementId;
      if (this._sourceHandler !== undefined) {
        this._sourceHandler.disconnect();
        this._sourceHandler = undefined;
      }
      if (this._view) {
        this._sourceHandler = new _pubSourceHandler2.default(this._view.view, this.getType());
      }
      if (this._options && this._sourceHandler) {
        this._sourceHandler.addSource(this._elementId, this._options).catch(function (err) {
          (0, _log.error)(NAME, 'Could not establish proper RTMP publisher: ' + err);
          _this2.trigger(new _event.PublisherEvent(_event.RTMPPublisherEventTypes.EMBED_FAILURE, _this2));
        });
      }
      return this;
    }

    /**
     * Define a window global callback used by Flash publisher to recognize embed complete.
     *
     * @private
     */

  }, {
    key: '_setUpConnectCallback',
    value: function _setUpConnectCallback(promise) {
      var _this3 = this;

      window.setActiveId = function (successId) {
        // successId === _options.streamName
        (0, _log.debug)(NAME, 'Embed and connect() complete for publisher swf. successId(' + successId + ').');
        promise.resolve(_this3);
        _this3.trigger(new _event.PublisherEvent(_event.RTMPPublisherEventTypes.EMBED_SUCCESS, _this3));
        _this3._tearDownConnectCallback();
      };
      // TODO: Setup timeout to reject?
    }

    /**
     * Tear down global callback used in Flash publisher recognize of embed.
     *
     * @private
     */

  }, {
    key: '_tearDownConnectCallback',
    value: function _tearDownConnectCallback() {
      window.setActiveId = undefined;
    }

    /**
     * Define global function handlers for ExternalInterface to invoke for API communication.
     *
     * @private
     */

  }, {
    key: '_establishExtIntHandlers',
    value: function _establishExtIntHandlers() {
      var _this4 = this;

      var id = this._options.streamName;
      var invokeFn = function invokeFn(label) {
        return ['publisher', label, id.split('-').join('_')].join('_');
      };
      window[invokeFn('r5proConnectClosed')] = function () {
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECTION_CLOSED, _this4));
      };
      window[invokeFn('r5proConnectSuccess')] = function () {
        return _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_SUCCESS, _this4));
      };
      window[invokeFn('r5proUnpublishSuccess')] = function () {
        return _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.UNPUBLISH_SUCCESS, _this4));
      };
      window[invokeFn('r5proPublishStart')] = function () {
        _this4._connectFuture.resolve(_this4);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_START, _this4));
      };
      window[invokeFn('r5proPublishMetadata')] = function (metadata) {
        return _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_METADATA, _this4, metadata));
      };
      window[invokeFn('r5proConnectFailure')] = function () {
        _this4._connectFuture.reject(_event.PublisherEventTypes.CONNECT_FAILURE);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_FAILURE, _this4));
      };
      window[invokeFn('r5proPublishFail')] = function () {
        _this4._connectFuture.reject(_event.PublisherEventTypes.PUBLISH_FAIL);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_FAIL, _this4));
      };
      window[invokeFn('r5proPublishInvalidName')] = function () {
        _this4._connectFuture.reject(_event.PublisherEventTypes.PUBLISH_INVALID_NAME);
        _this4.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.PUBLISH_INVALID_NAME, _this4));
      };
    }

    /**
     * Request to initialize the Flash-based Publisher based on configuration.
     * The returned `Promise` will either resolve with a reference to this instance or reject with an error `String` in failure.
     *
     * @param {Object} options
     *        The initialization configuration map.
     * @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var self = this;
      var deferred = new _promise.DeferredPromise();
      var version = options.minFlashVersion || defaultOptions.minFlashVersion;
      if (!_browser2.default.supportsFlashVersion(version)) {
        deferred.reject('Could not resolve RTMPPublisher instance. Requires minimum Flash Player install of ' + version);
      } else {
        this._options = (0, _extends3.default)({}, defaultOptions, options);
        try {
          _browser2.default.injectScript(this._options.swfobjectURL).then(function () {
            (0, _log.debug)(NAME, 'SWFObject embedded.');
            if (self._sourceHandler) {
              (0, _log.debug)(NAME, 'Publish handler established.');
              return self._sourceHandler.addSource(self._elementId, self._options);
            } else {
              (0, _log.debug)(NAME, 'Publish handler not established.');
              return true;
            }
          }).then(function () {
            self._setViewIfNotExist(self._view, self._options.mediaElementId);
            deferred.resolve(self);
          }).catch(function (err) {
            (0, _log.error)(NAME, 'Could not embed Flash-based RTMP Publisher. Reason: ' + err);
            if (self._sourceHandler) {
              self._sourceHandler.disconnect();
            }
            deferred.reject(err);
            self.trigger(new _event.PublisherEvent(_event.RTMPPublisherEventTypes.EMBED_FAILURE, self));
          });
        } catch (e) {
          deferred.reject('Could not inject Flash-based Publisher into the page. Reason: ' + e.message);
          self.trigger(new _event.PublisherEvent(_event.RTMPPublisherEventTypes.EMBED_FAILURE, self));
        }
      }
      return deferred.promise;
    }

    /**
     * Request to being a broadcast session after initilization has occured.
     *
     * @param {String} streamName
     *        Optional stream name to broadcast on, otherwise defaulting to the `streamName` provided in `init()` configuration.
     * @param {Promise} promise
     *        Optional `Promise` object to resolve/reject on based on sequence of events in establishing a broadcast, otherwise defaulting to `Promise` created internally and returned.
     * @return {Promise}
     *        The returned `Promise` will resolve or reject on successful start of a broadcast.<br>
     *        There are several processes that occur in order to establish a Flash-based broadcast that involve - but are not limited to - proper embed of Flash object on page with flashvars used in establishing RTMP-based NetConnection.
     */

  }, {
    key: 'publish',
    value: function publish() {
      var _this5 = this;

      var streamName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var promise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      // eslint-disable-line no-unused-vars
      var dfd = promise || new _promise.DeferredPromise();
      this._setUpConnectCallback(dfd);
      this._options.streamName = streamName || this._options.streamName;
      var publishOptions = this._options;
      try {
        var srcHandler = this._sourceHandler;
        this._sourceHandler.getEmbedOperation().then(function () {
          (0, _log.debug)(NAME, '[handler:embed:complete]');
          var el = _browser2.default.getEmbedObject(_this5._elementId);
          if (el) {
            _this5._establishExtIntHandlers();
          }
          var count = 0;
          var limit = 100;
          var tryConnect = function tryConnect() {
            var timeout = void 0;
            timeout = setTimeout(function () {
              try {
                clearTimeout(timeout);
                srcHandler.connect((0, _stringify2.default)(publishOptions));
              } catch (e) {
                if (count++ > limit) {
                  throw e;
                } else {
                  tryConnect();
                }
              }
            }, 300);
          };
          tryConnect();
        }).catch(function (err) {
          dfd.reject(err);
          _this5.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_FAILURE, _this5));
        });
      } catch (e) {
        (0, _log.error)(NAME, '[handler:embed:error]');
        dfd.reject('Could not initiate connection sequence. Reason: ' + e.message);
        this.trigger(new _event.PublisherEvent(_event.PublisherEventTypes.CONNECT_FAILURE, this));
        this._tearDownConnectCallback();
      }
      this._connectFuture = dfd;
      return dfd.promise;
    }

    /**
     * Request to stop a broadcast.
     * The returned `Promise` will either resolve or reject on successful stop of broadcast.
     *
     * @return {Promise}
     */

  }, {
    key: 'unpublish',
    value: function unpublish() {
      var deferred = new _promise.DeferredPromise();
      try {
        _browser2.default.getEmbedObject(this._elementId).unpublish();
        deferred.resolve();
      } catch (e) {
        (0, _log.error)(NAME, 'Could not initiate publish sequence. Reason: ' + e.message);
        deferred.reject(e.message);
      }
      this._connectFuture = undefined;
      return deferred.promise;
    }

    /**
     * Request to send a message to all subscribers.
     *
     * @param {String} methodName
     *        The method name associated with the message to be accepted by all subscribers.
     * @param {Object} data
     *        The data object to send associated with the method name.
     */

  }, {
    key: 'send',
    value: function send(methodName, data) {
      this._sourceHandler.send(methodName, typeof data === 'string' ? data : (0, _stringify2.default)(data));
    }

    /**
     * Deprecated. Request to update broadcast dimensions before a broadcast.
     *
     * @param {Object} quality
     *        Expects object with following structur: `{video: {width:Int, heightInt}}
     *
     * @private
     */

  }, {
    key: 'setMediaQuality',
    value: function setMediaQuality(quality) {
      if (this._sourceHandler) {
        this._sourceHandler.setMediaQuality(quality);
      }
    }

    /**
     * Helper method to overlay options over current configuration.
     *
     * @param {Object} newOptions
     *        The options to overlay.
     *
     * @private
     */

  }, {
    key: 'overlayOptions',
    value: function overlayOptions(newOptions) {
      this._options = (0, _extends3.default)(this._options, newOptions);
    }

    /**
     * Returns the current Flash/RTMP connection helper if established.
     * Used in SharedObject communication.
     *
     * @return {PublisherSourceHandler}
     *
     * @private
     */

  }, {
    key: 'getConnection',
    value: function getConnection() {
      return this._sourceHandler;
    }

    /**
     * Returns the initialization configuration used in `init()`.
     *
     * @return {Object}
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }

    /**
     * Returns the type of implementation: `RTMP`.
     *
     * @return {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return _publish3.PublishTypes.RTMP.toUpperCase();
    }
  }]);
  return RTMPPublisher;
}(_eventEmitter2.default);

exports.default = RTMPPublisher;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Red5ProSharedObject = undefined;

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(91);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _index = __webpack_require__(15);

var _sharedobjectEvent = __webpack_require__(56);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'Red5ProSharedObject';
var SO_SUBTYPE_PROPERTY = 4;
var SO_SUBTYPE_METHOD = 6;

var debug = function debug(soName, message) {
  (0, _log.debug)([NAME, soName].join(':'), message);
};
var warn = function warn(soName, message) {
  (0, _log.warn)([NAME, soName].join(':'), message);
};
var error = function error(soName, message) {
  (0, _log.error)([NAME, soName].join(':'), message);
};

var decodeMessageIfJSONString = function decodeMessageIfJSONString(message) {
  return typeof message === 'string' ? JSON.parse(message) : message;
};

/**
 * Defines the structure of a Property Data notification object.
 *
 * @private
 */

var PropertyData = function () {
  function PropertyData(key, value) {
    (0, _classCallCheck3.default)(this, PropertyData);

    this.key = key;
    this.value = value;
  }

  (0, _createClass3.default)(PropertyData, [{
    key: 'toObject',
    value: function toObject() {
      var obj = {};
      obj[this.key] = this.value;
      return obj;
    }
  }]);
  return PropertyData;
}();

/**
 * Defines the structure of a Method Data notification object.
 *
 * @private
 */


var MethodData = function () {
  function MethodData(methodName, message) {
    (0, _classCallCheck3.default)(this, MethodData);

    this.methodName = methodName;
    var messageList = void 0;
    if (Object.prototype.toString.call(message) === '[object Array]') {
      var i = void 0;
      var msg = void 0;
      var length = message.length;
      messageList = [];
      for (i = 0; i < length; i++) {
        msg = decodeMessageIfJSONString(message[i]);
        if (Object.prototype.toString.call(message) === '[object Array]') {
          messageList = messageList.concat(msg);
        } else {
          messageList.push(msg);
        }
      }
    } else {
      messageList = [decodeMessageIfJSONString(message)];
    }
    this.message = messageList.length === 1 ? messageList[0] : messageList;
  }

  (0, _createClass3.default)(MethodData, [{
    key: 'toObject',
    value: function toObject() {
      return {
        methodName: this.methodName,
        message: this.message
      };
    }
  }]);
  return MethodData;
}();

/**
 * Main entry for Shared Object associated with Publishers and Subscribers.
 *
 * @extends EventEmitter
 */


var Red5ProSharedObject = function (_EventEmitter) {
  (0, _inherits3.default)(Red5ProSharedObject, _EventEmitter);

  /**
   * The API on this object is limited as it communicates along with message channel connection of a previously established Publisher or Subscriber, of which you provide in the constuctor.
   *
   * Event handlers should be assigned to new `Red5ProSharedObject` instances in order to handle notifications over the communication channel.
   *
   * @param {String} name
   *        The name of the Shared Object to connect to.
   * @param {Object} connection
   *        The connection delegate to send and receive Shared Object notifications on.
   *        This will either be a previously established Publisher or Subscriber instance.
   */
  function Red5ProSharedObject(name, connection) {
    (0, _classCallCheck3.default)(this, Red5ProSharedObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Red5ProSharedObject.__proto__ || (0, _getPrototypeOf2.default)(Red5ProSharedObject)).call(this));

    _this._name = name;
    _this._socket = connection.getConnection();
    _this._socket.addSharedObjectResponseHandler(_this);
    _this._onclose = _this.close.bind(_this);
    try {
      debug(_this._name, '[sharedobject:connect:attempt]');
      // Immediately invoke request on shared object through the `getConnection()`
      //  instance of a Publisher or Subscriber (whomever invoked this constructor).
      _this._socket.getRemoteSharedObject(_this._name);
      _browser2.default.addCloseHandler(_this._onclose, 0);
    } catch (e) {
      error(_this._name, '[sharedobject:connect:error]: ' + e.message);
    }
    return _this;
  }

  /**
   * Attempt to parse message into a Object.
   *
   * @param {Object} message
   *        Either a JSON string or object.
   *
   * @private
   */


  (0, _createClass3.default)(Red5ProSharedObject, [{
    key: '_getJsonFromSocketMessage',
    value: function _getJsonFromSocketMessage(message) {
      try {
        return typeof message.data === 'string' ? JSON.parse(message.data) : message.data;
      } catch (e) {
        warn(this._name, 'Could not parse message as JSON. Message= ' + message.data + '. Error= ' + e.message);
      }
      return null;
    }

    /**
     * Dispatch of PROPERTY_UPDATE with information.
     *
     * @param {Object} valueObject
     *        Optional value object to send in notification.
     *
     * @private
     */

  }, {
    key: '_notifyOfPropertyValues',
    value: function _notifyOfPropertyValues(valueObject) {
      if ((0, _keys2.default)(valueObject).length === 0) {
        this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, {}));
      } else {
        var key = void 0;
        for (key in valueObject) {
          this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new PropertyData(key, valueObject[key]).toObject()));
        }
      }
    }

    /**
     * Dispatch of PROPERTY_UPDATE or METHOD_UPDATE based on event(s).
     *
     * @param {Array} events
     *        A list of events to iterate through and dispatch notifications from.
     *
     * @private
     */

  }, {
    key: '_notifyOfEvents',
    value: function _notifyOfEvents(events) {
      var i = void 0,
          event = void 0;
      var handled = false;
      var length = events.length;
      for (i = 0; i < length; i++) {
        event = events[i];
        switch (event.subtype) {
          case SO_SUBTYPE_PROPERTY:
            this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new PropertyData(event.attribute, event.value).toObject()));
            handled = true;
            break;
          case SO_SUBTYPE_METHOD:
            this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.METHOD_UPDATE, this._name, new MethodData(event.method, event.value).toObject()));
            handled = true;
            break;
        }
      }
      return handled;
    }

    /**
     * Invoked by connection channel to handle message and dispatch appropriate notifications.
     *
     * @private
     */

  }, {
    key: 'respond',
    value: function respond(message) {
      if (message.data) {
        var json = this._getJsonFromSocketMessage(message);
        if (json === null) {
          warn(this._name, 'Determined websocket response not in correct format. Aborting message handle.');
          return true;
        }
        if (json.data !== undefined) {
          if (json.data.name === this._name) {
            debug(this._name, '[sharedobject-response]: ' + (0, _stringify2.default)(json, null, 2));
            if (json.data.status === 'SharedObject.Status.GetRemote' && json.data.message === 'Success') {
              this._socket.connectToSharedObject(this._name);
              return true;
            } else if (json.data.status === 'SharedObject.Status.GetRemote' && json.data.message === 'Fail') {
              this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.CONNECT_FAILURE, this._name));
              return true;
            } else if (json.data.status === 'SharedObject.Status.Connect' && json.data.message === 'Success') {
              this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.CONNECT_SUCCESS, this._name));
              return true;
            } else if (json.data.status === 'SharedObject.Status.Connect' && json.data.message === 'Fail') {
              this.trigger(new _index.SharedObjectEvent(_sharedobjectEvent.SharedObjectEventTypes.CONNECT_FAILURE, this._name));
              return true;
            } else if (json.data.type === 'sharedobject') {
              if (json.data.hasOwnProperty('events')) {
                return this._notifyOfEvents(json.data.events);
              } else if (json.data.hasOwnProperty('value')) {
                return this._notifyOfPropertyValues(json.data.value);
              }
            }
          } else {
            debug('Unhandled Socket exchange: ' + (0, _stringify2.default)(json, null, 2));
          }
        }
      }
      return false;
    }
  }, {
    key: 'send',
    value: function send(messageName, data) {
      this._socket.sendToSharedObject(this._name, messageName, data);
    }
  }, {
    key: 'setProperty',
    value: function setProperty(key, value) {
      this._socket.sendPropertyToSharedObject(this._name, key, value);
    }
  }, {
    key: 'close',
    value: function close() {
      if (this._socket === undefined) {
        warn('Socket no longer exist to close shared object properly.');
      }
      this._socket.closeSharedObject(this._name);
      if (this._socket) {
        this._socket.removeSharedObjectResponseHandler(this);
      }
      this._socket = undefined;
      this._name = undefined;
      _browser2.default.removeCloseHandler(this._onclose);
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this._name;
    }
  }]);
  return Red5ProSharedObject;
}(_eventEmitter2.default);

exports.Red5ProSharedObject = Red5ProSharedObject;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _event = __webpack_require__(84);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'ControlSlider';

/**
 * Custom slider control for Playback Controls.
 *
 * @private
 */

var ControlSlider = function (_EventEmitter) {
  (0, _inherits3.default)(ControlSlider, _EventEmitter);

  function ControlSlider(type) {
    (0, _classCallCheck3.default)(this, ControlSlider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ControlSlider.__proto__ || (0, _getPrototypeOf2.default)(ControlSlider)).call(this));

    NAME = [NAME, type].join('::');
    (0, _log.debug)(NAME, '[init]');
    _this._container = _browser2.default.createElement('div');
    _this._button = _this.createButton();
    _this._track = _this.createTrack();
    _this._progressBar = _this.createProgressBar();
    _this._container.appendChild(_this._track);
    _this._container.appendChild(_this._progressBar);
    _this._container.appendChild(_this._button);
    _this._value = 0; // 0 - 1
    _this._disabled = false;
    _this._eventStartPosition = 0;
    _this._layout();
    _this._mouseupHandler = _this._mouseup.bind(_this);
    _this._mousedownHandler = _this._mousedown.bind(_this);
    _this._mousemoveHandler = _this._mousemove.bind(_this);
    _this._touchupHandler = _this._touchproxy.bind(_this);
    _this._touchdownHandler = _this._touchproxy.bind(_this);
    _this._touchmoveHandler = _this._touchproxy.bind(_this);
    _this._updateHandlers(_this._disabled);
    return _this;
  }

  /**
   * Touch event proxy to bubble out mouse events for handling interaction.
   *
   * @private
   */


  (0, _createClass3.default)(ControlSlider, [{
    key: '_touchproxy',
    value: function _touchproxy(event) {
      event.preventDefault();
      if (event.touches.length > 1 || event.type == "touchend" && event.touches.length > 0) {
        return;
      }
      var evt = _browser2.default.createEvent('MouseEvent');
      var type = void 0,
          touch = void 0;
      var t = event.originalTarget || event.target;
      switch (event.type) {
        case 'touchstart':
          type = 'mousedown';
          touch = event.changedTouches[0];
          break;
        case 'touchmove':
          type = 'mousemove';
          touch = event.changedTouches[0];
          break;
        case 'touchend':
          type = 'mouseup';
          touch = event.changedTouches[0];
          break;
      }

      evt.initMouseEvent(type, true, true, t.ownerDocument.defaultView, 0, touch.screenX, touch.screenY, touch.clientX, touch.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, 0, null);
      t.dispatchEvent(evt);
    }

    /**
     * Event handler for mouse up.
     *
     * @private
     */

  }, {
    key: '_mouseup',
    value: function _mouseup() {
      this._eventStartPosition = 0;
      document.removeEventListener('mousemove', this._mousemoveHandler);
      document.removeEventListener('mouseup', this._mouseupHandler);
      document.removeEventListener('touchmove', this._touchmoveHandler);
      document.removeEventListener('touchup', this._touchupHandler);
      this.trigger(new _event.SliderEvent(_event.SliderEventTypes.CHANGE_COMPLETE, this));
    }

    /**
     * Event handler for mouse move.
     *
     * @private
     */

  }, {
    key: '_mousemove',
    value: function _mousemove(event) {
      var positionOffset = _browser2.default.getMouseXFromEvent(event) - this._eventStartPosition;
      var rect = this._button.parentNode.getBoundingClientRect();
      var position = this._eventStartPosition + positionOffset - rect.left; // - environment.getScrollX()
      position = Math.max(0, position);
      position = Math.min(position, rect.width);
      var percentage = position / rect.width;
      this.trigger(new _event.SliderEvent(_event.SliderEventTypes.CHANGE, this, percentage));
    }

    /**
     * Event handler for mouse down.
     *
     * @private
     */

  }, {
    key: '_mousedown',
    value: function _mousedown(event) {
      this._eventStartPosition = _browser2.default.getMouseXFromEvent(event);
      this.trigger(new _event.SliderEvent(_event.SliderEventTypes.CHANGE_START, this));
      document.addEventListener('mousemove', this._mousemoveHandler);
      document.addEventListener('mouseup', this._mouseupHandler);
      document.addEventListener('touchmove', this._touchmoveHandler);
      document.addEventListener('touchup', this._touchupHandler);
    }

    /**
     * Adds or removes control hanlders based on flag of overall control being disabled.
     *
     * @param {Boolean} isDisabled
     *
     * @private
     */

  }, {
    key: '_updateHandlers',
    value: function _updateHandlers(isDisabled) {
      this._eventStartPosition = 0;
      if (isDisabled) {
        this._track.removeEventListener('click', this._mousemoveHandler);
        this._progressBar.removeEventListener('click', this._mousemoveHandler);
        this._button.removeEventListener('mousedown', this._mousedownHandler);
        document.removeEventListener('mousemove', this._mousemoveHandler);
        document.removeEventListener('mouseup', this._mouseupHandler);
        document.removeEventListener('touchmove', this._touchmoveHandler);
        document.removeEventListener('touchup', this._touchupHandler);
        this._track.classList.add('red5pro-media-slider-disabled');
        this._progressBar.classList.add('red5pro-media-slider-disabled');
        this._button.classList.add('red5pro-media-slider-disabled');
      } else {
        this._track.addEventListener('click', this._mousemoveHandler);
        this._progressBar.addEventListener('click', this._mousemoveHandler);
        this._button.addEventListener('mousedown', this._mousedownHandler);
        this._button.addEventListener('touchstart', this._touchdownHandler);
        this._track.classList.remove('red5pro-media-slider-disabled');
        this._progressBar.classList.remove('red5pro-media-slider-disabled');
        this._button.classList.remove('red5pro-media-slider-disabled');
      }
    }

    /**
     * Re-layout sub controls.
     *
     * @private
     */

  }, {
    key: '_layout',
    value: function _layout() {
      var position = this._progressBar.parentNode.clientWidth * this._value;
      this._progressBar.style.width = position + 'px';
      this._button.style.left = position - this._button.clientWidth * 0.5 + 'px';
    }

    /**
     * Creates the button element.
     *
     * @private
     */

  }, {
    key: 'createButton',
    value: function createButton() {
      var span = _browser2.default.createElement('span');
      span.classList.add('red5pro-media-slider-button');
      return span;
    }

    /**
     * Creates the progress bar element.
     *
     * @private
     */

  }, {
    key: 'createProgressBar',
    value: function createProgressBar() {
      var span = _browser2.default.createElement('span');
      span.classList.add('red5pro-media-slider-progress');
      return span;
    }

    /**
     * Creates the track element.
     *
     * @private
     */

  }, {
    key: 'createTrack',
    value: function createTrack() {
      var span = _browser2.default.createElement('span');
      span.classList.add('red5pro-media-slider-track');
      return span;
    }

    /**
     * Returns the current value.
     *
     * @return {Number}
     */

  }, {
    key: 'value',
    get: function get() {
      return this._value;
    }

    /**
     * Sets the current value.
     *
     * @param {Number} 0..1
     */
    ,
    set: function set(percentValue /* 0 - 1 */) {
      this._value = percentValue;
      this._layout();
    }

    /**
     * Returns disabled flag.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this._disabled;
    }

    /**
     * Sets the disabled flag.
     *
     * @param {Boolean} bool
     */
    ,
    set: function set(bool) {
      this._disabled = bool;
      this._updateHandlers(bool);
    }

    /**
     * Returns the target container this control is assigned to in the DOM.
     *
     * @return {Element}
     */

  }, {
    key: 'view',
    get: function get() {
      return this._container;
    }
  }]);
  return ControlSlider;
}(_eventEmitter2.default);

exports.default = ControlSlider;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTMPSubscriber = exports.HLSSubscriber = exports.RTCSubscriber = exports.Red5ProSubscriber = undefined;

var _set = __webpack_require__(92);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = __webpack_require__(88);

var _map2 = _interopRequireDefault(_map);

var _implFactoryOrder = __webpack_require__(85);

var _implFactoryOrder2 = _interopRequireDefault(_implFactoryOrder);

var _eventEmitter = __webpack_require__(23);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _red5proRtc = __webpack_require__(127);

var _red5proRtc2 = _interopRequireDefault(_red5proRtc);

var _red5proRtmp = __webpack_require__(128);

var _red5proRtmp2 = _interopRequireDefault(_red5proRtmp);

var _red5proHls = __webpack_require__(126);

var _red5proHls2 = _interopRequireDefault(_red5proHls);

var _promise = __webpack_require__(5);

var _playback = __webpack_require__(33);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'Red5ProSubscriber';

var playbackFactory = new _implFactoryOrder2.default();
var playbackImpl = function () {
  var map = new _map2.default();
  map.set(_playback.PlaybackTypes.RTC, _red5proRtc2.default);
  map.set(_playback.PlaybackTypes.RTMP, _red5proRtmp2.default);
  map.set(_playback.PlaybackTypes.HLS, _red5proHls2.default);
  return map;
}();

/**
 * Main entry for failover support of all subscriber implementations.
 *
 * @extends EventEmitter
 */

var Red5ProSubscriber = function (_EventEmitter) {
  (0, _inherits3.default)(Red5ProSubscriber, _EventEmitter);

  function Red5ProSubscriber() {
    (0, _classCallCheck3.default)(this, Red5ProSubscriber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Red5ProSubscriber.__proto__ || (0, _getPrototypeOf2.default)(Red5ProSubscriber)).call(this));

    _this._options = undefined;
    _this._order = [_playback.PlaybackTypes.RTC, _playback.PlaybackTypes.RTMP, _playback.PlaybackTypes.HLS];
    return _this;
  }

  /**
   * Utilizes Failover Publisher Factory to attempt in determining browser support for Publisher from defined order.
   *
   * @return {Promise}
   *
   * @private
   */


  (0, _createClass3.default)(Red5ProSubscriber, [{
    key: '_getPlaybackFromOrder',
    value: function _getPlaybackFromOrder(order, options) {
      return playbackFactory.create(order, playbackImpl, options, 'init');
    }

    /**
     * Returns the specified order for auto-failover.
     *
     *  @return {Array}
     *          Default: `['rtc', 'rtmp', 'hls']`.
     */

  }, {
    key: 'getPlaybackOrder',
    value: function getPlaybackOrder() {
      return this._order;
    }

    /**
     * Defines the desired auto-failover order.
     *
     *  @param {Array} order
     *          The desired order. e.g, `['rtc', 'rtmp', 'hls']`.
     */

  }, {
    key: 'setPlaybackOrder',
    value: function setPlaybackOrder(order) {
      // Allow for string value to define single item in order.
      order = typeof order === 'string' ? [order] : order;

      // Filter out values not available in enumeration of playback types.
      var t = order.filter(function (entry) {
        var key = void 0;
        for (key in _playback.PlaybackTypes) {
          if (_playback.PlaybackTypes[key].toLowerCase() === entry.toLowerCase()) {
            return true;
          }
        }
        return false;
      }).map(function (entry) {
        return entry.toLowerCase();
      });

      // Define new order.
      this._order = [].concat((0, _toConsumableArray3.default)(new _set2.default(t)));
      (0, _log.debug)(NAME, '[orderupdate]: ' + this._order);
      return this;
    }

    /**
     * Request to initialize and determine the proper Subscriber implementation based on configuration.
     *
     * The returned `Promise` will either resolve with the determined Subscriber instance or reject with an error String in failure to determine Subscriber type.
     *
     *  @param {Object} options
     *          The initialization configuration map for each desired failover tech.
     *  @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      this._options = options;
      var deferred = new _promise.DeferredPromise();
      (0, _log.debug)(NAME, '[init]');
      this._getPlaybackFromOrder(this._order, this._options).then(function (subscriber) {
        (0, _log.debug)(NAME, '[init:success]: subscriber found ' + subscriber.getType());
        deferred.resolve(subscriber);
      }).catch(function (err) {
        (0, _log.warn)(NAME, '[playerror]: Could not implement a subscriber: ' + err);
        deferred.reject(err);
      });
      return deferred.promise;
    }

    /**
     * Return enumerated value Subscriber types used in failover order.
     * @type {Object}
     */

  }, {
    key: 'playbackTypes',
    get: function get() {
      return _playback.PlaybackTypes;
    }
  }]);
  return Red5ProSubscriber;
}(_eventEmitter2.default);

exports.Red5ProSubscriber = Red5ProSubscriber;
exports.RTCSubscriber = _red5proRtc2.default;
exports.HLSSubscriber = _red5proHls2.default;
exports.RTMPSubscriber = _red5proRtmp2.default;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _red5proSourceHandlerHls = __webpack_require__(129);

var _red5proSourceHandlerHls2 = _interopRequireDefault(_red5proSourceHandlerHls);

var _playback = __webpack_require__(42);

var _playback2 = _interopRequireDefault(_playback);

var _index = __webpack_require__(24);

var _event = __webpack_require__(15);

var _playback3 = __webpack_require__(33);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'HLSSubscriber';

// Default to secure settings.
var defaultOptions = {
  protocol: 'https',
  port: 443,
  app: 'live',
  mimeType: 'application/x-mpegURL',
  mediaElementId: 'red5pro-subscriber',
  autoLayoutOrientation: true

  /**
   * Util to return the endpoint for an HLS video file.
   *
   * @param {Object} options
   *        The initialization object.
   * @return {String}
   *
   * @private
   */
};var optionsToHlsURL = function optionsToHlsURL(options) {
  var protocol = options.hlsprotocol ? options.hlsprotocol : options.protocol;
  var port = options.hlsport ? options.hlsport : options.port;
  var appEndpoint = options.context ? [options.app, options.context].join('/') : options.app;
  return protocol + '://' + options.host + ':' + port + '/' + appEndpoint + '/' + options.streamName + '.m3u8';
};

/**
 * Main entry for HLS-based Subscriber.
 *
 * @extends EventEmitter
 * @extends SubscriberPlaybackController
 */

var HLSSubscriber = function (_PlaybackController) {
  (0, _inherits3.default)(HLSSubscriber, _PlaybackController);

  function HLSSubscriber() {
    (0, _classCallCheck3.default)(this, HLSSubscriber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HLSSubscriber.__proto__ || (0, _getPrototypeOf2.default)(HLSSubscriber)).call(this));

    _this._options = undefined;
    _this._view = undefined;
    _this._sourceHandler = undefined;
    _this._viewResolver = new _promise.DeferredPromise();
    _this._subscriptionResolver = new _promise.DeferredPromise();
    _this._boundBubbleSubscriberEvents = _this.bubbleSubscriberEvents.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(HLSSubscriber, [{
    key: '_getViewResolverPromise',
    value: function _getViewResolverPromise() {
      return this._viewResolver.promise;
    }
  }, {
    key: '_getSubscriptionResolverPromise',
    value: function _getSubscriptionResolverPromise() {
      return this._subscriptionResolver.promise;
    }

    /**
     * Proxy event bubbler through handler instance.
     *
     * @private
     */

  }, {
    key: 'bubbleSubscriberEvents',
    value: function bubbleSubscriberEvents(event) {
      if (event.type === _event.SubscriberEventTypes.SUBSCRIBE_START) {
        this._subscriptionResolver.resolve(this);
      }
      this.trigger(new _event.SubscriberEvent(event.type, this, event.data));
    }

    /**
     * Gloms the Playback Controls API onto this instance to provide ease in use.
     *
     * @param {Object} handler
     *        The method request handler to bind and forward calls on.
     *
     * @private
     */

  }, {
    key: '_glomSourceHandlerAPI',
    value: function _glomSourceHandlerAPI(handler) {
      var _this2 = this;

      this.play = handler.play.bind(handler);
      this.pause = handler.pause.bind(handler);
      this.resume = handler.resume.bind(handler);
      this.stop = handler.stop.bind(handler);
      this.mute = handler.mute.bind(handler);
      this.unmute = handler.unmute.bind(handler);
      this.setVolume = handler.setVolume.bind(handler);
      this.seekTo = handler.seekTo.bind(handler);
      this.toggleFullScreen = handler.toggleFullScreen.bind(handler);
      handler.on('*', function (event) {
        _this2.trigger(new _event.SubscriberEvent(event.type, _this2, event.data));
      });
    }

    /**
     * Still in use, but hold-over of previous 3.x SDK versions designed to pair views and subscribers. In 4.0.0 it has been internalized.
     * API deprecated.
     *
     * @private
     */

  }, {
    key: '_setViewIfNotExist',
    value: function _setViewIfNotExist(currentView) {
      var mediaElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof currentView === 'undefined' && mediaElementId !== undefined) {
        var view = new _playback2.default(mediaElementId);
        view.attachSubscriber(this);
      }
    }

    /**
     * Attempt to initialize the subscription handler for HLS.
     *
     * @param {Object} options
     *        The initialization configuration.
     * @param {Object} handler
     *        The handler instance that will manage view interaction and events.
     *
     * @private
     */

  }, {
    key: '_initHandler',
    value: function _initHandler(options) {
      var _this3 = this;

      var urlRegex = /^http(|s).*\.m3u8/g;
      var url = this._options.streamName.match(urlRegex) ? this._options.streamName : optionsToHlsURL(this._options);
      this._sourceHandler.on('*', this._boundBubbleSubscriberEvents);
      this._sourceHandler.addSource(url, options.mimeType, options).then(function () {
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_SUCCESS));
      }).catch(function (err) {
        (0, _log.error)(NAME, 'Could not establish an HLS Subscriber: ' + err);
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_FAILURE));
      });
    }

    /**
     * Request to initialize the HLS-based Subscriber based on configuration.
     * The returned `Promise` will either resolve with a reference to this instance or reject with an error `String` in failure.
     *
     * @param {Object} options
     *        The initialization configuration map.
     * @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var _this4 = this;

      var deferred = new _promise.DeferredPromise();
      if (!_browser2.default.supportsHLS()) {
        (0, _log.warn)(NAME, 'Could not resolve HLSSubscriber instance.');
        deferred.reject('Could not resolve HLSSubscriber instance.');
      } else {
        this._options = (0, _extends3.default)({}, defaultOptions, options);
        this._setViewIfNotExist(this._view, this._options.mediaElementId);
        this._getViewResolverPromise().then(function (view) {
          _this4._sourceHandler = new _red5proSourceHandlerHls2.default(view.view, _this4.getType());
          _this4._glomSourceHandlerAPI(_this4._sourceHandler);
          if (_this4._options) {
            _this4._initHandler(_this4._options);
          }
        });
        deferred.resolve(this);
      }
      return deferred.promise;
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'setView',
    value: function setView(view) {
      this._view = view;
      this._viewResolver.resolve(view);
      return this;
    }

    /**
     * Request to begin subscribing to a stream.
     *
     * @return {Promise}
     *          The returned `Promise` will resolve or reject on successful start of playback.
     */

  }, {
    key: 'subscribe',
    value: function subscribe() {
      return this._getSubscriptionResolverPromise();
    }

    /**
     * Request to stop a subscription.
     * The returned `Promise` will either resolve or reject on successful stop of subscription.
     *
     * @return {Promise}
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      (0, _log.debug)(NAME, '[unscubscribe]');
      var deferred = new _promise.DeferredPromise();
      try {
        this._sourceHandler.stop();
        this._sourceHandler.disconnect();
        deferred.resolve();
      } catch (e) {
        deferred.reject(e.message);
      }
      return deferred.promise;
    }

    /**
     * Returns connection handler for playback.
     *
     * @return {Object}
     */

  }, {
    key: 'getConnection',
    value: function getConnection() {
      return this._sourceHandler;
    }

    /**
     * Returns reference to playback controls if available.
     *
     * @return {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._sourceHandler ? this._sourceHandler.getControls() : undefined;
    }

    /**
     * Returns the initialization configuration used in `init()`.
     *
     * @return {Object}
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }

    /**
     * Returns the target view Element.
     *
     * @return {Element}
     */

  }, {
    key: 'getPlayer',
    value: function getPlayer() {
      return this._view.view;
    }

    /**
     * Returns the type of implementation: `RTC`.
     *
     * @return {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return _playback3.PlaybackTypes.HLS.toUpperCase();
    }
  }]);
  return HLSSubscriber;
}(_index.PlaybackController);

exports.default = HLSSubscriber;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _translationUtil = __webpack_require__(78);

var _webrtc = __webpack_require__(40);

var webrtc = _interopRequireWildcard(_webrtc);

var _websocket = __webpack_require__(53);

var websocket = _interopRequireWildcard(_websocket);

var _red5proSourceHandlerRtc = __webpack_require__(130);

var _red5proSourceHandlerRtc2 = _interopRequireDefault(_red5proSourceHandlerRtc);

var _socketHelperSub = __webpack_require__(115);

var _socketHelperSub2 = _interopRequireDefault(_socketHelperSub);

var _webrtcHelperSub = __webpack_require__(117);

var _webrtcHelperSub2 = _interopRequireDefault(_webrtcHelperSub);

var _playback = __webpack_require__(42);

var _playback2 = _interopRequireDefault(_playback);

var _controls = __webpack_require__(24);

var _object = __webpack_require__(41);

var _urlEndpoint = __webpack_require__(87);

var _event = __webpack_require__(15);

var _playback3 = __webpack_require__(33);

var _webrtc2 = __webpack_require__(55);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subStartRegex = /(.*) starting/i;
var NAME = 'RTCSubscriber';

/**
 * Simple generation og unique subscriber id.
 *
 * @return {String}
 *
 * @private
 */
var generateSubscriptionId = function generateSubscriptionId() {
  var id = Math.floor(Math.random() * 0x10000).toString(16);
  return 'subscriber-' + id;
};

// Default to secure settings.
var defaultOptions = {
  protocol: 'wss',
  port: 8083,
  app: 'live',
  autoLayoutOrientation: true,
  mediaElementId: 'red5pro-subscriber',
  iceServers: [{ urls: 'stun:stun2.l.google.com:19302' }],
  iceTransport: _webrtc2.IceTransportTypes.UDP,
  maintainConnectionOnSubscribeErrors: false

  /**
   * Main entry for WebRTC-based Subscriber.
   *
   * @extends EventEmitter
   * @extends SubscriberPlaybackController
   */
};
var RTCSubscriber = function (_PlaybackController) {
  (0, _inherits3.default)(RTCSubscriber, _PlaybackController);

  function RTCSubscriber() {
    (0, _classCallCheck3.default)(this, RTCSubscriber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTCSubscriber.__proto__ || (0, _getPrototypeOf2.default)(RTCSubscriber)).call(this));

    _this._view = undefined;
    _this._options = undefined;
    _this._peerHelper = undefined;
    _this._socketHelper = undefined;
    _this._connectionClosed = true;
    _this._sourceHandler = undefined;
    _this._mediaStream = undefined;
    _this._viewResolver = new _promise.DeferredPromise();
    _this._availabilityResolver = new _promise.DeferredPromise();
    _this._subscriptionResolver = new _promise.DeferredPromise();
    _this._orientation = 0;
    return _this;
  }

  (0, _createClass3.default)(RTCSubscriber, [{
    key: '_getViewResolverPromise',
    value: function _getViewResolverPromise() {
      return this._viewResolver.promise;
    }
  }, {
    key: '_getAvailabilityResolverPromise',
    value: function _getAvailabilityResolverPromise() {
      return this._availabilityResolver.promise;
    }
  }, {
    key: '_getSubscriptionResolverPromise',
    value: function _getSubscriptionResolverPromise() {
      return this._subscriptionResolver.promise;
    }

    /**
     * Gloms the Playback Controls API onto this instance to provide ease in use.
     *
     * @param {Object} handler
     *        The method request handler to bind and forward calls on.
     *
     * @private
     */

  }, {
    key: '_glomSourceHandlerAPI',
    value: function _glomSourceHandlerAPI(handler) {
      var _this2 = this;

      this.play = handler.play.bind(handler);
      this.pause = handler.pause.bind(handler);
      this.resume = handler.resume.bind(handler);
      this.stop = handler.stop.bind(handler);
      this.mute = handler.mute.bind(handler);
      this.unmute = handler.unmute.bind(handler);
      this.setVolume = handler.setVolume.bind(handler);
      this.seekTo = handler.seekTo.bind(handler);
      this.toggleFullScreen = handler.toggleFullScreen.bind(handler);
      handler.on('*', function (event) {
        _this2.trigger(new _event.SubscriberEvent(event.type, _this2, event.data));
      });
    }

    /**
     * Still in use, but hold-over of previous 3.x SDK versions designed to pair views and subscribers. In 4.0.0 it has been internalized.
     * API deprecated.
     *
     * @private
     */

  }, {
    key: '_setViewIfNotExist',
    value: function _setViewIfNotExist(currentView) {
      var mediaElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof currentView === 'undefined' && mediaElementId !== undefined) {
        var view = new _playback2.default(mediaElementId);
        view.attachSubscriber(this);
      }
    }

    /**
     * Attempt to initialize the subscription handler for WebRTC.
     *
     * @param {Object} options
     *        The initialization configuration.
     * @param {Object} handler
     *        The handler instance that will manage view interaction and events.
     *
     * @private
     */

  }, {
    key: '_initHandler',
    value: function _initHandler(options, handler) {
      if (options && handler) {
        handler.on('*', this._boundBubbleSubscriberEvents);
        handler.addSource(options);
      }
    }

    /**
     * Request available stream by name on server through WebSocket request.
     *
     * @param {String} streamName
     *        The name of the stream to look up.
     * @private
     */

  }, {
    key: '_requestAvailability',
    value: function _requestAvailability(streamName) {
      (0, _log.debug)(NAME, '[requestavailability]');
      // message on socket returns -> onStream(Un)Available
      this._socketHelper.post({
        isAvailable: streamName
      });
    }

    /**
     * Request offer over WebSocket.
     *
     * @param {String} streamName
     *        The name of the stream to subscribe to.
     * @param {String} subscriptionId
     *        The unique id of this subscriber.
     * @param {String} vEncoding
     *        Optional encoding type for video. Defaults to server selection.
     * @param {String} aEncoding
     *        Optional encoding type for audio. Defaults to server selection.
     *
     * @private
     */

  }, {
    key: '_requestOffer',
    value: function _requestOffer(streamName, subscriptionId, transport) {
      var vEncoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var aEncoding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      (0, _log.debug)(NAME, '[requestoffer]');
      var offer = {
        requestOffer: streamName,
        requestId: subscriptionId,
        transport: transport
      };
      if (typeof vEncoding !== 'undefined' && vEncoding !== _playback3.PlaybackVideoEncoder.NONE) {
        offer.videoEncoding = vEncoding;
      }
      if (typeof aEncoding !== 'undefined' && aEncoding !== _playback3.PlaybackAudioEncoder.NONE) {
        offer.audioEncoding = aEncoding;
      }
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.OFFER_START, this));
      // message on socket returns -> onSDPOffer
      this._socketHelper.post(offer);
    }

    /**
     * Creates and sends an answer based on provided SDP.
     *
     * @param {Object} sdp
     *        The SDP object to use in creating an SDP answer to send back.
     *
     * @private
     */

  }, {
    key: '_requestAnswer',
    value: function _requestAnswer(sdp) {
      var _this3 = this;

      (0, _log.debug)(NAME, '[requestanswer]');
      // invokes -> sendAnswer
      this._peerHelper.createAnswer(sdp).then(function (sessionDescription) {
        (0, _log.debug)(NAME, '[onanswercreated]');
        (0, _log.debug)(NAME, '[> sendanswer]');
        _this3._sendAnswer(_this3._options.streamName, _this3._options.subscriptionId, sessionDescription);
      }).catch(function (error) {
        _this3.onSDPError(error);
      });
    }

    /**
     * Posts SDP answer to server over WebSocket.
     *
     * @param {String} streamName
     *        The target stream name.
     * @param {String} subscriptionId
     *        The unique id of this subscriber.
     * @param {Object} sdp
     *        The SDP to send as an answer.
     *
     * @private
     */

  }, {
    key: '_sendAnswer',
    value: function _sendAnswer(streamName, subscriptionId, sdp) {
      (0, _log.debug)(NAME, '[sendanswer]: streamname(' + streamName + '), subscriptionid(' + subscriptionId + ')');
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.ANSWER_START, this, sdp));
      // message on socket response -> onAddIceCandidate
      // message on peer response -> onaddstream
      this._socketHelper.post({
        handleAnswer: streamName,
        requestId: subscriptionId,
        data: {
          sdp: sdp
        }
      });
    }

    /**
     * Sends a candidate to the server over WebSocket.
     *
     * @param {Object} candidate
     *        The peer candidate description.
     *
     * @private
     */

  }, {
    key: '_sendCandidate',
    value: function _sendCandidate(candidate) {
      (0, _log.debug)(NAME, '[sendcandidate]');
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.CANDIDATE_START, this, candidate));
      // message on peer response -> onicecandidate
      this._socketHelper.post({
        handleCandidate: this._options.streamName,
        requestId: this._options.subscriptionId,
        data: {
          candidate: candidate
        }
      });
    }

    /**
     * Setup and connect to begin a subscription.
     * This is invoked once the availability of the stream is recognized on the server and notified on this instance.
     *
     * @param {Array} iceServers
     *        The ICE server list to use in trickle.
     *
     * @private
     */

  }, {
    key: '_connect',
    value: function _connect(iceServers) {
      var _this4 = this;

      (0, _log.debug)(NAME, '[connect]');
      this._options.iceServers = iceServers;
      var p = this._peerHelper.setUp(this._options.iceServers, undefined, this._options.rtcpMuxPolicy);
      p.then(function () {
        _this4._requestOffer(_this4._options.streamName, _this4._options.subscriptionId, _this4._options.iceTransport, _this4._options.videoEncoding, _this4._options.audioEncoding);
      }).catch(function () {
        (0, _log.warn)(NAME, 'Could not establish RTCPeerConnection.');
        _this4.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_FAILURE, _this4));
      });
      //  TODO: Normalize returns to either all be chainable or not be chainable
      return this;
    }

    /**
     * Disconnect and teardown after close of subscription.
     *
     * @private
     */

  }, {
    key: '_disconnect',
    value: function _disconnect() {
      (0, _log.debug)(NAME, '[disconnect]');
      if (this._socketHelper) {
        this._socketHelper.tearDown();
      }
      if (this._peerHelper) {
        this._peerHelper.tearDown();
      }
      if (this._sourceHandler) {
        this._sourceHandler.disconnect();
      }
      this._connectionClosed = true;
    }

    /**
     * Request to kick off autoplay if setting is flagged.
     *
     * @param {Object} options
     *        The initialization object.
     * @param {Element} view
     *        The target element view that will playback the stream.
     *
     * @private
     */

  }, {
    key: '_playIfAutoplaySet',
    value: function _playIfAutoplaySet(options, view) {
      if (options && view) {
        options.autoplay = _browser2.default.hasAttributeDefined(view.view, 'autoplay');
        if (options.autoplay) {
          this.play();
        }
      }
    }

    /**
     * Request to begin subscription on server over WebSocket.
     *
     * @private
     */

  }, {
    key: '_sendSubscribe',
    value: function _sendSubscribe() {
      (0, _log.debug)(NAME, '[sendsubscribe]');
      this._socketHelper.post({
        subscribe: this._options.streamName,
        requestId: this._options.subscriptionId
      });
    }

    /**
     * Request to initialize the WebRTC-based Subscriber based on configuration.
     * The returned `Promise` will either resolve with a reference to this instance or reject with an error `String` in failure.
     *
     * @param {Object} options
     *        The initialization configuration map.
     * @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var _this5 = this;

      var deferred = new _promise.DeferredPromise();
      if (!webrtc.isSupported() || !websocket.isSupported()) {
        deferred.reject('Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.');
      } else {
        this._disconnect();
        this._options = (0, _extends3.default)({}, defaultOptions, options);
        this._options.subscriptionId = this._options.subscriptionId || generateSubscriptionId();

        this._peerHelper = new _webrtcHelperSub2.default(this);
        this._socketHelper = new _socketHelperSub2.default(this);
        var socketPromise = new _promise.DeferredPromise();
        var socketurl = (0, _urlEndpoint.rtcSocketEndpointFromOptions)(this._options, {
          id: this._options.subscriptionId
        });

        socketPromise.promise.then(function () {
          deferred.resolve(_this5);
          _this5._connectionClosed = false;
          _this5.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_SUCCESS, _this5));
        }).catch(function (error) {
          deferred.reject(error);
          _this5.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_FAILURE, _this5, error));
        });
        this._socketHelper.setUp(socketurl, socketPromise);
      }
      return deferred.promise;
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'setView',
    value: function setView(view) {
      this._view = view;
      this._viewResolver.resolve(this._view);
      return this;
    }

    /**
     * Request to begin subscribing to a stream.
     *
     * @return {Promise}
     *          The returned `Promise` will resolve or reject on successful start of playback.
     *        There are several processes that occur in order to establish a WebRTC subscription that involve - but are not limited to - ICE communication and assigning of local and remote SDPs on peer connections.
     */

  }, {
    key: 'subscribe',
    value: function subscribe() {
      var _this6 = this;

      this._getViewResolverPromise().then(function (view) {
        _this6._sourceHandler = new _red5proSourceHandlerRtc2.default(view.view, _this6.getType());
        _this6._glomSourceHandlerAPI(_this6._sourceHandler);
        _this6._initHandler(_this6._options, _this6._sourceHandler);
      });
      this._getAvailabilityResolverPromise().then(function () {
        _this6._connect(_this6._options.iceServers);
      });
      this._setViewIfNotExist(this._view, this._options.mediaElementId);
      this._requestAvailability(this._options.streamName, this._options.streamType);
      return this._getSubscriptionResolverPromise();
    }

    /**
     * Request to stop a subscription.
     * The returned `Promise` will either resolve or reject on successful stop of subscription.
     *
     * @return {Promise}
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      (0, _log.debug)(NAME, '[unsubscribe]');
      var deferred = new _promise.DeferredPromise();
      this.stop();
      this._disconnect();
      this._mediaStream = undefined;
      deferred.resolve(this);
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_STOP, this));
      return deferred.promise;
    }

    /**
     * Event handler for stream being available on server.
     *
     * @private
     */

  }, {
    key: 'onStreamAvailable',
    value: function onStreamAvailable(receipt) {
      (0, _log.debug)(NAME, '[onstreamavailable]: ' + (0, _stringify2.default)(receipt, null, 2));
      this._availabilityResolver.resolve(this);
    }

    /**
     * Event handler for stream being unavailable on server.
     *
     * @private
     */

  }, {
    key: 'onStreamUnavailable',
    value: function onStreamUnavailable(receipt) {
      (0, _log.debug)(NAME, 'Stream ' + this._options.streamName + ' does not exist.');
      (0, _log.debug)(NAME, '[onstreamunavailable]: ' + (0, _stringify2.default)(receipt, null, 2));
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, this));
      this._availabilityResolver.reject('Stream ' + this._options.streamName + ' does not exist.');
      this._subscriptionResolver.reject('Stream ' + this._options.streamName + ' does not exist.');
      if (!this._options.maintainConnectionOnSubscribeErrors) {
        this._disconnect();
      } else {
        // Reset promise for possible retry.
        this._availabilityResolver = new _promise.DeferredPromise();
        this._subscriptionResolver = new _promise.DeferredPromise();
      }
    }

    /**
     * Event handler for success of SDP being added remotely and locally through the Peer Connection.
     *
     * @param {Object} receipt
     *
     * @private
     */

  }, {
    key: 'onSDPSuccess',
    value: function onSDPSuccess(receipt) {
      (0, _log.debug)(NAME, '[onsdpsuccess]: ' + (0, _stringify2.default)(receipt, null, 2));
    }

    /**
     * Event handler for success in SDP offer.
     *
     * @param {Object} receipt
     *        The optional successful object.
     *
     * @private
     */

  }, {
    key: 'onSDPOffer',
    value: function onSDPOffer(receipt) {
      (0, _log.debug)(NAME, '[onsdpoffer]: ' + (0, _stringify2.default)(receipt, null, 2));
      var sdp = new webrtc.RTCSessionDescription(receipt.sdp);
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.OFFER_END, this));
      this._requestAnswer(sdp);
    }

    /**
     * Event handler for all errors related to SDP through the Peer Connection.
     *
     * @param {Object} receipt
     *        The optional error object.
     *
     * @private
     */

  }, {
    key: 'onSDPError',
    value: function onSDPError(receipt) {
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_FAIL, this, receipt));
      this._subscriptionResolver.reject('Invalid SDP.');
      (0, _log.error)(NAME, '[onsdperror]');
      (0, _log.error)(NAME, receipt);
    }

    /**
     * Event handler for receipt of a `MediaStream`.
     *
     * @param {MediaStream} stream
     *        The stream returned on the Peer Connection.
     *
     * @private
     */

  }, {
    key: 'onAnswerMediaStream',
    value: function onAnswerMediaStream() {
      var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      // eslint-disable-line no-unused-vars
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.ANSWER_END, this));
    }

    /**
     * Event handler on receipt of ICE candidate.
     *
     * @param {Object} candidate
     *        The ICE candidate.
     *
     * @private
     */

  }, {
    key: 'onIceCandidate',
    value: function onIceCandidate(candidate) {
      (0, _log.debug)(NAME, '[onicecandidate]');
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.CANDIDATE_END, this));
      this._sendCandidate(candidate);
    }

    /**
     * Event handler for end of ICE communication (trickle).
     *
     * @param {MediaStream} stream
     *        The `MediaStream` that has become available post-trickle.
     *
     * @private
     */

  }, {
    key: 'onIceCandidateTrickleEnd',
    value: function onIceCandidateTrickleEnd(stream) {
      var _this7 = this;

      (0, _log.debug)(NAME, '[onicetrickleend]');
      this._getViewResolverPromise().then(function (view) {
        view.attachStream(stream);
        _this7._mediaStream = stream;
        _this7.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.ON_ADD_STREAM, _this7, _this7._mediaStream));
      });
    }

    /**
     * Event handler to add ICE candidate to Peer Connection.
     *
     * @param {Object} candidate
     *
     * @private
     */

  }, {
    key: 'onAddIceCandidate',
    value: function onAddIceCandidate(candidate) {
      (0, _log.debug)(NAME, '[onaddicecandidate]');
      this._peerHelper.addIceCandidate(candidate);
    }

    /**
     * Event handler for completion of peer ice candidate gathering.
     *
     * @private
     */

  }, {
    key: 'onPeerGatheringComplete',
    value: function onPeerGatheringComplete() {
      (0, _log.debug)('[icecandidategathering:end]');
      if (this._socketHelper) {
        this._socketHelper.postEndOfCandidates(this._options.streamName);
      }
    }

    /**
     * Event handler for notification of end in ice candidates over the WebSocket.
     *
     * @private
     */

  }, {
    key: 'onSocketIceCandidateEnd',
    value: function onSocketIceCandidateEnd() {
      (0, _log.debug)(NAME, '[onsocketicecandidateend]');
      this.trigger(new _event.SubscriberEvent(_event.RTCSubscriberEventTypes.ICE_TRICKLE_COMPLETE, this));
      this._sendSubscribe();
    }

    /**
     * General event handler for errors coming over the WebSocket.
     *
     * @param {String} message
     * @param {Object} detail
     *        Optional additional detail.
     *
     * @private
     */

  }, {
    key: 'onSocketMessageError',
    value: function onSocketMessageError(message) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      (0, _log.error)(NAME, 'Error in stream subscription: ' + message + '.\n[Optional detail]: ' + detail);
      this._subscriptionResolver.reject('Error in stream subscription: ' + message + '.');
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_FAIL, this, message));
    }

    /**
     * Event handler for close on the WebSocket.
     *
     * @param {Event} closeEvent
     *
     * @private
     */

  }, {
    key: 'onSocketClose',
    value: function onSocketClose(closeEvent) {
      (0, _log.debug)(NAME, '[onsocketclose]');
      if (this._peerHelper) {
        this._peerHelper.tearDown();
      }
      this.onConnectionClosed(closeEvent);
    }

    /**
     * Event handler for close of Peer Connection.
     *
     * @param {Event} event
     *
     * @private
     */

  }, {
    key: 'onPeerConnectionClose',
    value: function onPeerConnectionClose(event) {
      (0, _log.debug)(NAME, '[onpeerconnectionclose]');
      if (this._socketHelper) {
        this._socketHelper.tearDown();
      }
      this.onSocketClose(event);
    }

    /**
     * Event handler for `Unpublish` of stream subscribed to. Occurs when a broadcaster stops their stream while this subscription stream is open.
     *
     * @private
     */

  }, {
    key: 'onUnpublish',
    value: function onUnpublish() {
      (0, _log.debug)(NAME, '[onunpublish]');
      if (this._sourceHandler) {
        this._sourceHandler.unpublish();
      }
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAY_UNPUBLISH, this));
    }

    /**
     * Event handler for connection on stream being closed.
     *
     * @private
     */

  }, {
    key: 'onConnectionClosed',
    value: function onConnectionClosed() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!this._connectionClosed) {
        (0, _log.debug)(NAME, '[onconnectionclosed]');
        this._disconnect();
        this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECTION_CLOSED, this, event));
      }
    }

    /**
     * Event handler for accepting data through the `send` API of a Publisher. This is the receiving end of the communication channel in which a Publisher can send data to all subscribers.
     *
     * @param {String} methodName
     *        The target method name associated with the communication.
     * @param {Object} data
     *        The data being sent.
     *
     * @private
     */

  }, {
    key: 'onSendReceived',
    value: function onSendReceived(methodName, data) {
      if (methodName === 'onMetaData') {
        this.onMetaData(data);
      } else {
        // environment.invoke(methodName, data)
        this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, this, {
          methodName: methodName,
          data: data
        }));
      }
    }

    /**
     * Event handler for status notifications of the subscription stream coming over the WebSocket.
     *
     * @param {Object} status
     *        The status object.
     *
     * @private
     */

  }, {
    key: 'onSubscriberStatus',
    value: function onSubscriberStatus(status) {
      (0, _log.debug)(NAME, '[subscriberstatus] - ' + (0, _stringify2.default)(status, null, 2));
      var startResult = subStartRegex.exec(status.message);
      if (startResult && startResult[1] === this._options.streamName) {
        this._subscriptionResolver.resolve(this);
        this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_START, this));
        this._playIfAutoplaySet(this._options, this._view);
      }
    }

    /**
     * Event handler for metadata being sent related to the subscription stream coming over the WebSocket.
     *
     * @param {Object} metadata
     *
     * @private
     */

  }, {
    key: 'onMetaData',
    value: function onMetaData(metadata) {
      if (typeof metadata.orientation !== 'undefined' && metadata.orientation !== this._orientation) {
        this._orientation = metadata.orientation;
        if (this._options.autoLayoutOrientation) {
          (0, _translationUtil.applyOrientation)(this._view.view, parseInt(metadata.orientation, 10), (0, _object.metadataResolutionToObject)(metadata.resolution));
          if (this._sourceHandler) {
            this._sourceHandler.handleOrientationChange(parseInt(metadata.orientation));
          }
        }
        this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.ORIENTATION_CHANGE, this, {
          orientation: parseInt(metadata.orientation),
          viewElement: this._view.view
        }));
      }
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_METADATA, this, metadata));
    }

    /**
     * Request to invoke a method on the Application Adapter related to the `app` config setting.
     *
     * @param {String} methodName
     *        The name of the method to invoke on thw Application Adapter
     * @param {Array} args
     *        The ordered list of arguments to invoke on the method. Do not provide anything if the method takes no arguments.
     * @return {Promise}
     */

  }, {
    key: 'callServer',
    value: function callServer(methodName, args) {
      return this._socketHelper.postAsync({
        callAdapter: {
          method: methodName,
          arguments: args
        }
      });
    }

    /**
     * Enters subscriber into standby mode - keeping connection open but not bothering to consume video or audio.
     */

  }, {
    key: 'enableStandby',
    value: function enableStandby() {
      this._socketHelper.post({
        standby: true
      });
    }

    /**
     * Removes subscriber from standby mode - turning the audio and video back on and consumable after a mute request.
     */

  }, {
    key: 'disableStandby',
    value: function disableStandby() {
      this._socketHelper.post({
        standby: false
      });
    }

    /**
     * Returns the current WebSocket connection helper if established.
     * Used in SharedObject communication.
     *
     * @return {PublisherSocketHelper}
     *
     * @private
     */

  }, {
    key: 'getConnection',
    value: function getConnection() {
      return this._socketHelper;
    }

    /**
     * Returns the current RTCPeerConnection helper if established.
     *
     * @return {RTCPeerConnection}
     */

  }, {
    key: 'getPeerConnection',
    value: function getPeerConnection() {
      return this._peerHelper ? this._peerHelper.connection : undefined;
    }

    /**
     * Returns the `MediaStream` instance if generated through `getUserMedia` and exists for broadcast.
     *
     * @return {MediaStream}
     */

  }, {
    key: 'getMediaStream',
    value: function getMediaStream() {
      return this._mediaStream;
    }

    /**
     * Returns reference to playback controls if available.
     *
     * @return {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._sourceHandler ? this._sourceHandler.getControls() : undefined;
    }

    /**
     * Returns the target view Element.
     *
     * @return {Element}
     */

  }, {
    key: 'getPlayer',
    value: function getPlayer() {
      return this._view.view;
    }

    /**
     * Returns the initialization configuration used in `init()`.
     *
     * @return {Object}
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }

    /**
     * Returns the type of implementation: `RTC`.
     *
     * @return {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return _playback3.PlaybackTypes.RTC.toUpperCase();
    }
  }]);
  return RTCSubscriber;
}(_controls.PlaybackController);

exports.default = RTCSubscriber;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(58);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _red5proSourceHandlerRtmp = __webpack_require__(131);

var _red5proSourceHandlerRtmp2 = _interopRequireDefault(_red5proSourceHandlerRtmp);

var _playback = __webpack_require__(42);

var _playback2 = _interopRequireDefault(_playback);

var _controls = __webpack_require__(24);

var _event = __webpack_require__(15);

var _playback3 = __webpack_require__(33);

var _state = __webpack_require__(34);

var _promise3 = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'RTMPSubcriber';

var defaultOptions = {
  protocol: 'rtmp',
  port: 1935,
  width: 320, // media playback
  height: 240, // media playback
  embedWidth: '100%', // DOM display style
  embedHeight: '100%', // DOM display style
  minFlashVersion: '10.0.0',
  swf: 'lib/red5pro/red5pro-subscriber.swf',
  swfobjectURL: 'lib/swfobject/swfobject.js',
  productInstallUrl: 'lib/swfobject/playerProductInstall.swf',
  mediaElementId: 'red5pro-subscriber'

  /**
   * Main entry for Flash-based Subscriber over RTMP.
   *
   * @extends EventEmitter
   * @extends SubscriberPlaybackController
   */
};
var RTMPSubscriber = function (_PlaybackController) {
  (0, _inherits3.default)(RTMPSubscriber, _PlaybackController);

  function RTMPSubscriber() {
    (0, _classCallCheck3.default)(this, RTMPSubscriber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTMPSubscriber.__proto__ || (0, _getPrototypeOf2.default)(RTMPSubscriber)).call(this));

    _this._options = undefined;
    _this._view = undefined;
    _this._sourceHandler = undefined;
    _this._elementId = undefined;
    _this._embedPromise = undefined;
    _this._getEmbedPromise().then(function () {
      _this.onEmbedComplete();
    }).catch(function (err) {
      return _this.onEmbedFailure(err);
    });
    _this._viewResolver = new _promise3.DeferredPromise();
    _this._subscriptionResolver = new _promise3.DeferredPromise();
    return _this;
  }

  (0, _createClass3.default)(RTMPSubscriber, [{
    key: '_getViewResolverPromise',
    value: function _getViewResolverPromise() {
      return this._viewResolver.promise;
    }
  }, {
    key: '_getSubscriptionResolverPromise',
    value: function _getSubscriptionResolverPromise() {
      return this._subscriptionResolver.promise;
    }
  }, {
    key: '_getEmbedPromise',
    value: function _getEmbedPromise() {
      this._embedPromise = _promise3.Future.createIfNotExist(this._embedPromise);
      return this._embedPromise.promise;
    }

    /**
     * Gloms the Playback Controls API onto this instance to provide ease in use.
     *
     * @param {Object} handler
     *        The method request handler to bind and forward calls on.
     *
     * @private
     */

  }, {
    key: '_glomSourceHandlerAPI',
    value: function _glomSourceHandlerAPI(handler) {
      var _this2 = this;

      /*
       * || Note ||
       * play() is not glommed as it needs to be handled differently.
       */

      this.pause = handler.pause.bind(handler);
      this.resume = handler.resume.bind(handler);
      this.stop = handler.stop.bind(handler);
      this.mute = handler.mute.bind(handler);
      this.unmute = handler.unmute.bind(handler);
      this.setVolume = handler.setVolume.bind(handler);
      this.seekTo = handler.seekTo.bind(handler);
      this.toggleFullScreen = handler.toggleFullScreen.bind(handler);
      handler.on('*', function (event) {
        _this2.trigger(new _event.SubscriberEvent(event.type, _this2, event.data));
      });
    }

    /**
     * Still in use, but hold-over of previous 3.x SDK versions designed to pair views and subscribers. In 4.0.0 it has been internalized.
     * API deprecated.
     *
     * @private
     */

  }, {
    key: '_setViewIfNotExist',
    value: function _setViewIfNotExist(currentView) {
      var mediaElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof currentView === 'undefined' && mediaElementId !== undefined) {
        var view = new _playback2.default(mediaElementId);
        view.attachSubscriber(this);
      }
    }

    /**
     * Define global function handlers for ExternalInterface to invoke for API communication.
     *
     * @private
     */

  }, {
    key: '_establishExtIntHandlers',
    value: function _establishExtIntHandlers(id) {
      var _this3 = this;

      (0, _log.debug)(NAME, 'Subscriber ID provided to client: (' + id + ').');
      var invokeFn = function invokeFn(label) {
        return ['subscriber', label, id.split('-').join('_')].join('_');
      };
      window[invokeFn('r5proConnectClosed')] = function () {
        return _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECTION_CLOSED, _this3));
      };
      window[invokeFn('r5proConnectSuccess')] = function () {
        return _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_SUCCESS, _this3));
      };
      window[invokeFn('r5proConnectFailure')] = function () {
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.CONNECT_FAILURE, _this3));
      };
      window[invokeFn('r5proSubscribeStop')] = function () {
        return _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_STOP, _this3));
      };
      window[invokeFn('r5proSubscribeMetadata')] = function (metadata) {
        return _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_METADATA, _this3, JSON.parse(metadata)));
      };
      window[invokeFn('r5proSubscribeUnpublish')] = function () {
        return _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAY_UNPUBLISH, _this3));
      };
      window[invokeFn('r5proSubscribeSendInvoke')] = function (payload) {
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, _this3, typeof payload === 'string' ? JSON.parse(payload) : payload));
      };
      window[invokeFn('r5proSubscribePlayRequest')] = function () {
        _this3.play();
      };
      window[invokeFn('r5proSubscribeStart')] = function () {
        _this3._subscriptionResolver.resolve(_this3);
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_START, _this3));
      };
      window[invokeFn('r5proSubscribeInvalidName')] = function () {
        _this3._subscriptionResolver.reject('NetStream.Play.StreamNotFound', _this3);
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, _this3));
      };
      window[invokeFn('r5proSubscribeFail')] = function () {
        _this3._subscriptionResolver.reject('NetStream.Failed', _this3);
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_FAIL, _this3));
      };
      window[invokeFn('r5proSubscribeVolumeChange')] = function (payload) {
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.VOLUME_CHANGE, _this3, {
          volume: JSON.parse(payload).volume
        }));
      };
      window[invokeFn('r5proSubscribePlaybackTimeChange')] = function (payload) {
        var data = JSON.parse(payload);
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, _this3, {
          time: data.value,
          duration: data.duration
        }));
      };
      window[invokeFn('r5proSubscribePlaybackStateChange')] = function (payload) {
        var code = JSON.parse(payload).code;
        _this3.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, _this3, {
          code: code,
          state: _state.PlaybackStateReadable[code]
        }));
      };
    }

    /**
     * Request to initialize the HLS-based Subscriber based on configuration.
     * The returned `Promise` will either resolve with a reference to this instance or reject with an error `String` in failure.
     *
     * @param {Object} options
     *        The initialization configuration map.
     * @return {Promise}
     */

  }, {
    key: 'init',
    value: function init(options) {
      var _this4 = this;

      var deferred = new _promise3.DeferredPromise();
      var version = options.minFlashVersion || defaultOptions.minFlashVersion;
      if (!_browser2.default.supportsFlashVersion(version)) {
        (0, _log.warn)(NAME, 'Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of ' + version + '.');
        deferred.reject('Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of ' + version + '.');
      } else {
        this._options = (0, _extends3.default)({}, defaultOptions, options);
        var establishSourceHandler = function establishSourceHandler() {
          _this4._getViewResolverPromise().then(function (view) {
            _this4._sourceHandler = new _red5proSourceHandlerRtmp2.default(_this4, view.view, _this4.getType());
            _this4._glomSourceHandlerAPI(_this4._sourceHandler);
            if (_this4._options) {
              var dfd = _this4._embedPromise;
              _this4._sourceHandler.addSource(_this4._elementId, _this4._options).then(function (subscriberId) {
                _this4._establishExtIntHandlers(subscriberId);
                dfd.resolve(_this4);
              }).catch(function (err) {
                return dfd.reject(err);
              });
            }
          });
        };

        try {
          _browser2.default.injectScript(this._options.swfobjectURL).then(function () {
            var embedDfd = _this4._embedPromise;
            (0, _log.debug)(NAME, 'SWFObject embedded.');
            if (_this4._sourceHandler) {
              _this4._sourceHandler.addSource(_this4._elementId, _this4._options).then(function (subscriberId) {
                _this4._establishExtIntHandlers(subscriberId);
                embedDfd.resolve(_this4);
              }).catch(function (err) {
                embedDfd.reject(err);
              });
              return _this4._getEmbedPromise();
            }
            establishSourceHandler();
            return true;
          }).then(function () {
            _this4._setViewIfNotExist(_this4._view, _this4._options.mediaElementId);
            deferred.resolve(_this4);
          }).catch(function (err) {
            (0, _log.error)(NAME, 'Could not embed Flash-based RTMP Player. Reason: ' + err);
            if (_this4._sourceHandler) {
              _this4._sourceHandler.disconnect();
            }
            deferred.reject(err);
            _this4.trigger(new _event.SubscriberEvent(_event.RTMPSubscriberEventTypes.EMBED_FAILURE, _this4));
          });
        } catch (e) {
          deferred.reject('Could not inject Flash-based Player into the page. Reason: ' + e.message);
          this.trigger(new _event.SubscriberEvent(_event.RTMPSubscriberEventTypes.EMBED_FAILURE, this));
        }
      }
      return deferred.promise;
    }

    /**
     * Still in use for assigning document element view management to this instance.
     * API deprecated in 4.0.0.
     *
     * @private
     */

  }, {
    key: 'setView',
    value: function setView(view, elementId) {
      this._view = view;
      this._elementId = elementId;
      this._viewResolver.resolve(this._view);
      return this;
    }

    /**
     * Request to begin subscribing to a stream.
     *
     * @return {Promise}
     *          The returned `Promise` will resolve or reject on successful start of playback.
     */

  }, {
    key: 'subscribe',
    value: function subscribe() {
      return this._getSubscriptionResolverPromise();
    }

    /**
     * Request to stop a subscription.
     * The returned `Promise` will either resolve or reject on successful stop of subscription.
     *
     * @return {Promise}
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      var _this5 = this;

      (0, _log.debug)(NAME, '[unsubscribe]');
      var cb = function cb(resolve, reject) {
        try {
          _this5._sourceHandler.disconnect();
          resolve();
        } catch (e) {
          reject(e.message);
        }
      };
      return new _promise2.default(cb);
    }

    /**
     * Request to start playing the stream.
     */

  }, {
    key: 'play',
    value: function play() {
      var _this6 = this;

      (0, _log.debug)(NAME, '[play]');
      this._getEmbedPromise().then(function () {
        _this6._sourceHandler.play();
      });
    }

    /**
     * Event handler for completion of embedding Flash element into page.
     *
     * @private
     */

  }, {
    key: 'onEmbedComplete',
    value: function onEmbedComplete() {
      (0, _log.debug)(NAME, '[embed:complete]');
      this.trigger(new _event.SubscriberEvent(_event.RTMPSubscriberEventTypes.EMBED_SUCCESS, this));
    }

    /**
     * Event handler for failure in embedding Flash element into page.
     *
     * @private
     */

  }, {
    key: 'onEmbedFailure',
    value: function onEmbedFailure(err) {
      (0, _log.debug)(NAME, '[embed:failure] - ' + err);
      this.trigger(new _event.SubscriberEvent(_event.RTMPSubscriberEventTypes.EMBED_FAILURE, this));
    }

    /**
     * Returns connection handler for playback.
     *
     * @return {Object}
     */

  }, {
    key: 'getConnection',
    value: function getConnection() {
      return this._sourceHandler;
    }

    /**
     * Returns reference to playback controls if available.
     *
     * @return {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._sourceHandler ? this._sourceHandler.getControls() : undefined;
    }

    /**
     * Returns the initialization configuration used in `init()`.
     *
     * @return {Object}
     */

  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }

    /**
     * Returns the target view Element.
     *
     * @return {Element}
     */

  }, {
    key: 'getPlayer',
    value: function getPlayer() {
      return this._sourceHandler ? this._sourceHandler.getEmbeddedView() : undefined;
    }

    /**
     * Returns the type of implementation: `RTMP`.
     *
     * @return {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return _playback3.PlaybackTypes.RTMP.toUpperCase();
    }
  }]);
  return RTMPSubscriber;
}(_controls.PlaybackController);

exports.default = RTMPSubscriber;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _isFinite = __webpack_require__(89);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _translationUtil = __webpack_require__(78);

var _object = __webpack_require__(41);

var _controls = __webpack_require__(24);

var _state = __webpack_require__(34);

var _event = __webpack_require__(15);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'HLSSourceHandler';

/**
 * Source Handler for HLS-based Subscribers, which serves as a Presentation Controller between view and subscriber.
 *
 * @extends EventEmitter
 * @extends SubscriberPlaybackController
 *
 * @private
 */

var HLSSourceHandler = function (_PlaybackController) {
  (0, _inherits3.default)(HLSSourceHandler, _PlaybackController);

  function HLSSourceHandler(media, type) {
    (0, _classCallCheck3.default)(this, HLSSourceHandler);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HLSSourceHandler.__proto__ || (0, _getPrototypeOf2.default)(HLSSourceHandler)).call(this));

    _this.media = media;
    _this.clone = _this.media.cloneNode(true);
    _this.holder = _this._determineHolder(media);
    _this.playerType = type;
    _this._isVOD = false;
    _this._controls = undefined;
    _this._playbackNotificationCenter = _this.media;
    _browser2.default.onFullScreenStateChange(_this._handleFullScreenChange.bind(_this));
    return _this;
  }

  /**
   * Established DOM Element order for playback.
   *
   * @param {Element} media
   *        The target media element: e.g., `video` or `audio`.
   *
   * @private
   */


  (0, _createClass3.default)(HLSSourceHandler, [{
    key: '_determineHolder',
    value: function _determineHolder(media) {
      if (media.parentNode.classList.contains('red5pro-media-container')) {
        return media.parentNode;
      } else {
        var parent = media.parentNode;
        var div = _browser2.default.createElement('div');
        div.classList.add('red5pro-media-container');
        parent.insertBefore(div, media);
        parent.removeChild(media);
        div.appendChild(media);
        return div;
      }
    }

    /**
     * Clean up of DOM Element order upon stop of playback.
     *
     * @private
     */

  }, {
    key: '_cleanUp',
    value: function _cleanUp() {
      // Return to prior DOM manipulation.
      this.media.remove();
      this.media = this.clone.cloneNode(true);
      this.holder.appendChild(this.media);
      if (this._controls) {
        this._controls.detach();
      }
    }

    /**
     * Assigns and handlers event notificiations coming from the media notifier (e.g., `video` or `audio` element).
     *
     * @param {Object} notifier
     *
     * @private
     */

  }, {
    key: '_addPlaybackHandlers',
    value: function _addPlaybackHandlers(notifier) {
      var _this2 = this;

      var controls = this.getControls();
      var hasControls = typeof controls !== 'undefined';

      notifier.oncanplay = function () {
        if (controls) {
          controls.enable(true);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.AVAILABLE,
          state: _state.PlaybackStateReadable[_state.PlaybackState.AVAILABLE]
        }));
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.VOLUME_CHANGE, undefined, {
          volume: notifier.volume
        }));
      };
      notifier.ondurationchange = function (event) {
        // eslint-disable-line no-unused-vars
        if (!isNaN(notifier.duration) && (0, _isFinite2.default)(notifier.duration)) {
          _this2.isVOD = true;
        }
        if (hasControls) {
          controls.setPlaybackDuration(notifier.duration);
        }
      };
      notifier.onended = function () {
        (0, _log.debug)(NAME, '[videoelement:onended]');
        if (hasControls) {
          controls.setState(_state.PlaybackState.IDLE);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.IDLE,
          state: _state.PlaybackStateReadable[_state.PlaybackState.IDLE]
        }));
      };
      notifier.ontimeupdate = function (event) {
        // eslint-disable-line no-unused-vars
        if (hasControls) {
          controls.setSeekTime(notifier.currentTime, self.isVOD ? notifier.duration : undefined);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, undefined, {
          time: notifier.currentTime,
          duration: notifier.duration
        }));
      };
      notifier.onseeked = function (event) {// eslint-disable-line no-unused-vars
        //      debug(NAME, 'Seeked.')
      };
      notifier.onseeking = function (event) {// eslint-disable-line no-unused-vars
        //      debug(NAME, 'Seeking.')
      };
      notifier.onplay = function () {
        if (hasControls) {
          controls.setState(_state.PlaybackState.PLAYING);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.PLAYING,
          state: _state.PlaybackStateReadable[_state.PlaybackState.PLAYING]
        }));
      };
      notifier.onpause = function () {
        if (hasControls) {
          controls.setState(_state.PlaybackState.PAUSED);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.PAUSED,
          state: _state.PlaybackStateReadable[_state.PlaybackState.PAUSED]
        }));
      };
      notifier.onvolumechange = function (event) {
        // eslint-disable-line no-unused-vars
        if (hasControls && controls.getVolume() !== _this2.media.volume) {
          controls.setVolume(_this2.media.volume);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.VOLUME_CHANGE, undefined, {
          volume: notifier.muted ? 0 : notifier.volume
        }));
      };
      // for debugging purposes.
      notifier.onencrypted = function () {
        (0, _log.debug)(NAME, '[videoelement:event] encrypted');
      };
      notifier.onemptied = function () {
        (0, _log.debug)(NAME, '[videoelement:event] emptied');
      };
      notifier.onloadeddata = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadeddata');
      };
      notifier.onloadedmetadata = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadedmetadata');
      };
      notifier.onloadstart = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadedstart');
      };
      notifier.onstalled = function () {
        (0, _log.debug)(NAME, '[videoelement:event] stalled');
      };
      notifier.onsuspend = function () {
        (0, _log.debug)(NAME, '[videoelement:event] suspend');
      };
      notifier.onwaiting = function () {
        (0, _log.debug)(NAME, '[videoelement:event] waiting');
      };
      //    notifier.onprogress = () => { debug(NAME, '[videoelement:event] progress. Played: ' + notifier.played.length + ', Buffered: ' + notifier.buffered.length + '.') }
    }

    /**
     * Event handler for change in fullscreen state.
     *
     * @param {Boolean} isFullScreen
     *
     * @private
     */

  }, {
    key: '_handleFullScreenChange',
    value: function _handleFullScreenChange(isFullScreen) {
      if (isFullScreen) {
        this.holder.classList.add('red5pro-media-container-full-screen');
        this.media.classList.add('red5pro-media-container-full-screen');
      } else {
        this.holder.classList.remove('red5pro-media-container-full-screen');
        this.media.classList.remove('red5pro-media-container-full-screen');
      }
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, undefined, isFullScreen));
    }

    /**
     * Define the source element on the HLS playback element.
     *
     * @param {String} url
     *        The playback endpoint URL.
     * @param {String} type
     *        The mime type of the playback stream.
     * @param {Object} options
     *        The initialization configuration map.
     *
     * @private
     */

  }, {
    key: '_embedMediaSource',
    value: function _embedMediaSource(url, type, options) {
      // eslint-disable-line no-unused-vars
      var self = this;
      var deferred = new _promise.DeferredPromise();
      try {
        var source = _browser2.default.createElement('source');
        source.type = type;
        source.src = url;
        if (this.media.firstChild) {
          this.media.insertBefore(source, this.media.firstChild);
        } else {
          this.media.appendChild(source);
        }
        self.orientation = 0;
        _browser2.default.onOrientationMetadata(this.media, function (metadata) {
          (0, _log.debug)(NAME, 'Metadata received: ' + (0, _stringify2.default)(metadata, null, 2));
          if (self.orientation !== metadata.orientation) {
            self.orientation = metadata.orientation;
            if (options.autoLayoutOrientation) {
              (0, _translationUtil.applyOrientation)(self.media, parseInt(metadata.orientation, 10), (0, _object.metadataResolutionToObject)(metadata.resolution));
              self.handleOrientationChange(parseInt(self.orientation));
            }
            self.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.ORIENTATION_CHANGE, undefined, {
              orientation: parseInt(self.orientation),
              viewElement: self.media
            }));
            self.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.SUBSCRIBE_METADATA, undefined, metadata));
          }
          self.orientation = metadata.orientation;
        });
        deferred.resolve();
      } catch (e) {
        deferred.reject(e.message);
      }
      return deferred.promise;
    }

    /**
     * Request to setup the presentation of a playback stream using HLS.
     *
     * @param {String} url
     *        The endpoint URL for playback.
     * @param {String} type
     *        The mime type for playback.
     * @param {Object} options
     *        The initialization configuration map.
     *
     * @returns {Promise}
     */

  }, {
    key: 'addSource',
    value: function addSource(url, type, options) {
      var _this3 = this;

      (0, _log.debug)(NAME, '[addsource]');
      var deferred = new _promise.DeferredPromise();
      var hasDefinedControls = options.controls;
      var isMuted = _browser2.default.hasAttributeDefined(this.media, 'muted');
      var usePlaybackControls = _browser2.default.hasAttributeDefined(this.media, 'controls') && _browser2.default.hasClassDefined(this.media, 'red5pro-media');
      this._embedMediaSource(url, type, options).then(function () {
        if (hasDefinedControls || usePlaybackControls) {
          if (hasDefinedControls) {
            _this3._controls = options.controls;
          } else {
            _this3._controls = new _controls.PlaybackControlsImpl(_this3, _this3.holder);
          }
          _this3.media.controls = false;
          _this3._controls.setAsVOD(_this3.isVOD);
          _this3._controls.setMutedState(isMuted);
        }
        _this3._addPlaybackHandlers(_this3._playbackNotificationCenter);
        deferred.resolve();
      }).catch(function (e) {
        return deferred.reject(e);
      });
      return deferred.promise;
    }

    /**
     * Request to connect to stream.
     */

  }, {
    key: 'connect',
    value: function connect() {
      (0, _log.debug)(NAME, '[connect]');
    }
  }, {
    key: 'play',
    value: function play() {
      (0, _log.debug)(NAME, '[videoelement:action] play');
      try {
        var maybePromise = this.media.play();
        if (maybePromise) {
          maybePromise.then(function () {
            return (0, _log.debug)(NAME, '[videoelement:action] play (START)');
          }).catch(function (err) {
            return (0, _log.error)(NAME, '[videoelement:action] play (FAULT) ' + (err.message ? err.message : err));
          });
        }
      } catch (e) {
        (0, _log.error)(NAME, '[videoelement:action] play (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      (0, _log.debug)(NAME, '[videoelement:action] pause');
      try {
        this.media.pause();
      } catch (e) {
        (0, _log.debug)(NAME, '[videoelement:action] pause (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'resume',
    value: function resume() {
      (0, _log.debug)(NAME, '[videoelement:action] resume');
      try {
        var maybePromise = this.media.play();
        if (maybePromise) {
          maybePromise.then(function () {
            return (0, _log.debug)(NAME, '[videoelement:action] play (START)');
          }).catch(function (err) {
            return (0, _log.error)(NAME, '[videoelement:action] play (FAULT) ' + (err.message ? err.message : err));
          });
        }
      } catch (e) {
        (0, _log.error)(NAME, '[videoelement:action] resume (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      try {
        this.media.stop();
      } catch (e) {
        // ok.
      }
    }
  }, {
    key: 'mute',
    value: function mute() {
      this.media.muted = true;
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      this.media.muted = false;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(value) {
      this.unmute();
      this.media.volume = value;
    }
  }, {
    key: 'seekTo',
    value: function seekTo(percentage) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      this.media.currentTime = duration ? percentage * duration : percentage;
    }
  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen() {
      try {
        _browser2.default.toggleFullScreen(this.holder);
      } catch (e) {
        throw e;
        // nada.
      }
    }

    /**
     * Notification of current stream being in an unpublished state.
     * The stream enters an unpublished state when the broadcaster stop the stream and the subscriber is still connected.
     */

  }, {
    key: 'unpublish',
    value: function unpublish() {
      try {
        this.stop();
        this.media.onended.call(this.media);
      } catch (e) {
        // nada.
      }
    }

    /**
     * Request to disconnect playback.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      (0, _log.debug)(NAME, '[disconnect]');
      this._cleanUp();
    }

    /**
     * Responder to change in orientation received through metadata.
     *
     * @param {Number} orientation
     *        The orientation value.
     *
     * @private
     */

  }, {
    key: 'handleOrientationChange',
    value: function handleOrientationChange(orientation) {
      if (this._controls && orientation % 180 !== 0) {
        this.holder.classList.add('red5pro-media-background');
        this.media.classList.remove('red5pro-media-background');
      }
    }

    /*
     * || SHARED OBJECT INTEGRATION NOT AVAILABLE FOR HLS PLAYBACK ||
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'addSharedObjectResponseHandler',
    value: function addSharedObjectResponseHandler(handler) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'removeSharedObjectResponseHandler',
    value: function removeSharedObjectResponseHandler(handler) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, message) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(sharedObjectName) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(sharedObjectName) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(sharedObjectName) {}

    /**
     * Returns playback controls if available.
     *
     * @returns {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._controls;
    }

    /**
     * Returns the subscriber type associated with this controller.
     *
     * @returns {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this.playerType;
    }

    /**
     * Returns flag of video being recognized as VOD (Video On Demand).
     *
     * @returns {Boolean}
     */

  }, {
    key: 'isVOD',
    get: function get() {
      return this._isVOD;
    }

    /**
     * Sets flag of video being considered as VOD (Video On Demand).
     *
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isVOD = value;
      if (this._controls) {
        this._controls.setAsVOD(value);
      }
    }
  }]);
  return HLSSourceHandler;
}(_controls.PlaybackController);

exports.default = HLSSourceHandler;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFinite = __webpack_require__(89);

var _isFinite2 = _interopRequireDefault(_isFinite);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _controls = __webpack_require__(24);

var _state = __webpack_require__(34);

var _event = __webpack_require__(15);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'RTCSourceHandler';

/**
 * Source Handler for WebRTC-based Subscribers, which serves as a Presentation Controller between view and subscriber.
 *
 * @extends EventEmitter
 * @extends SubscriberPlaybackController
 *
 * @private
 */

var RTCSourceHandler = function (_PlaybackController) {
  (0, _inherits3.default)(RTCSourceHandler, _PlaybackController);

  function RTCSourceHandler(media, type) {
    (0, _classCallCheck3.default)(this, RTCSourceHandler);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTCSourceHandler.__proto__ || (0, _getPrototypeOf2.default)(RTCSourceHandler)).call(this));

    _this.media = media;
    _this.clone = _this.media.cloneNode(true);
    _this.holder = _this._determineHolder(_this.media);
    _this.playerType = type;
    _this._isVOD = false;
    _this._controls = undefined;
    _this._playbackNotificationCenter = _this.media;
    _browser2.default.onFullScreenStateChange(_this._handleFullScreenChange.bind(_this));
    return _this;
  }

  /**
   * Established DOM Element order for playback.
   *
   * @param {Element} media
   *        The target media element: e.g., `video` or `audio`.
   *
   * @private
   */


  (0, _createClass3.default)(RTCSourceHandler, [{
    key: '_determineHolder',
    value: function _determineHolder(media) {
      if (media.parentNode.classList.contains('red5pro-media-container')) {
        return media.parentNode;
      } else {
        var parent = media.parentNode;
        var div = _browser2.default.createElement('div');
        div.classList.add('red5pro-media-container');
        parent.insertBefore(div, media);
        parent.removeChild(media);
        div.appendChild(media);
        return div;
      }
    }

    /**
     * Established DOM Element order for playback.
     *
     * @param {Element} media
     *        The target media element: e.g., `video` or `audio`.
     *
     * @private
     */

  }, {
    key: '_cleanUp',
    value: function _cleanUp() {
      // Return to prior DOM manipulation.
      this.media.remove();
      this.media = this.clone.cloneNode(true);
      this.holder.appendChild(this.media);
      if (this._controls) {
        this._controls.detach();
      }
    }

    /**
     * Assigns and handlers event notificiations coming from the media notifier (e.g., `video` or `audio` element).
     *
     * @param {Object} notifier
     *
     * @private
     */

  }, {
    key: '_addPlaybackHandlers',
    value: function _addPlaybackHandlers(notifier) {
      var _this2 = this;

      var controls = this.getControls();
      var hasControls = typeof controls !== 'undefined';

      notifier.oncanplay = function () {
        (0, _log.debug)(NAME, '[videoelement:event] canplay');
        if (controls) {
          controls.enable(true);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.AVAILABLE,
          state: _state.PlaybackStateReadable[_state.PlaybackState.AVAILABLE]
        }));
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.VOLUME_CHANGE, undefined, {
          volume: notifier.volume
        }));
      };
      notifier.ondurationchange = function (event) {
        // eslint-disable-line no-unused-vars
        (0, _log.debug)(NAME, '[videoelement:event] durationchange');
        if (!isNaN(notifier.duration) && (0, _isFinite2.default)(notifier.duration)) {
          _this2.isVOD = true;
        }
        if (hasControls) {
          controls.setPlaybackDuration(notifier.duration);
        }
      };
      notifier.onended = function () {
        (0, _log.debug)(NAME, '[videoelement:event] ended');
        if (hasControls) {
          controls.setState(_state.PlaybackState.IDLE);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.IDLE,
          state: _state.PlaybackStateReadable[_state.PlaybackState.IDLE]
        }));
      };
      notifier.ontimeupdate = function (event) {
        // eslint-disable-line no-unused-vars
        if (hasControls) {
          controls.setSeekTime(notifier.currentTime, self.isVOD ? notifier.duration : undefined);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, undefined, {
          time: notifier.currentTime,
          duration: notifier.duration
        }));
      };
      notifier.onseeked = function (event) {// eslint-disable-line no-unused-vars
        //      debug(NAME, 'Seeked.')
      };
      notifier.onseeking = function (event) {// eslint-disable-line no-unused-vars
        //      debug(NAME, 'Seeking.')
      };
      notifier.onplay = function () {
        (0, _log.debug)(NAME, '[videoelement:event] play');
        if (hasControls) {
          controls.setState(_state.PlaybackState.PLAYING);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.PLAYING,
          state: _state.PlaybackStateReadable[_state.PlaybackState.PLAYING]
        }));
      };
      notifier.onpause = function () {
        (0, _log.debug)(NAME, '[videoelement:event] pause');
        if (hasControls) {
          controls.setState(_state.PlaybackState.PAUSED);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.PAUSED,
          state: _state.PlaybackStateReadable[_state.PlaybackState.PAUSED]
        }));
      };
      notifier.onvolumechange = function (event) {
        // eslint-disable-line no-unused-vars
        if (hasControls && controls.getVolume() !== _this2.media.volume) {
          controls.setVolume(_this2.media.volume);
        }
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.VOLUME_CHANGE, undefined, {
          volume: notifier.muted ? 0 : notifier.volume
        }));
      };
      // for debugging purposes.
      notifier.onencrypted = function () {
        (0, _log.debug)(NAME, '[videoelement:event] encrypted');
      };
      notifier.onemptied = function () {
        (0, _log.debug)(NAME, '[videoelement:event] emptied');
      };
      notifier.onloadeddata = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadeddata');
      };
      notifier.onloadedmetadata = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadedmetadata');
      };
      notifier.onloadstart = function () {
        (0, _log.debug)(NAME, '[videoelement:event] loadedstart');
      };
      notifier.onstalled = function () {
        (0, _log.debug)(NAME, '[videoelement:event] stalled');
      };
      notifier.onsuspend = function () {
        (0, _log.debug)(NAME, '[videoelement:event] suspend');
      };
      notifier.onwaiting = function () {
        (0, _log.debug)(NAME, '[videoelement:event] waiting');
      };
      //    notifier.onprogress = () => { debug(NAME, '[videoelement:event] progress. Played: ' + notifier.played.length + ', Buffered: ' + notifier.buffered.length + '.') }
    }

    /**
     * Event handler for change in fullscreen state.
     *
     * @param {Boolean} isFullScreen
     *
     * @private
     */

  }, {
    key: '_handleFullScreenChange',
    value: function _handleFullScreenChange(isFullScreen) {
      if (isFullScreen) {
        this.holder.classList.add('red5pro-media-container-full-screen');
        this.media.classList.add('red5pro-media-container-full-screen');
      } else {
        this.holder.classList.remove('red5pro-media-container-full-screen');
        this.media.classList.remove('red5pro-media-container-full-screen');
      }
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, undefined, isFullScreen));
    }

    /**
     * Request to setup the presentation of a playback stream using WebRTC.
     *
     * @param {Object} options
     *        The initialization configuration map.
     *
     * @returns {Promise}
     */

  }, {
    key: 'addSource',
    value: function addSource(options) {
      (0, _log.debug)(NAME, '[addsource]');
      var deferred = new _promise.DeferredPromise();
      var hasDefinedControls = options.controls;
      var isMuted = _browser2.default.hasAttributeDefined(this.media, 'muted');
      var usePlaybackControls = _browser2.default.hasAttributeDefined(this.media, 'controls') && _browser2.default.hasClassDefined(this.media, 'red5pro-media');
      if (hasDefinedControls || usePlaybackControls) {
        if (hasDefinedControls) {
          this._controls = options.controls;
        } else {
          this._controls = new _controls.PlaybackControlsImpl(this, this.holder);
        }
        this.media.controls = false;
        this._controls.setAsVOD(this.isVOD);
        this._controls.setMutedState(isMuted);
      }
      this._addPlaybackHandlers(this._playbackNotificationCenter);
      deferred.resolve();
      return deferred.promise;
    }

    /**
     * Request to connect to stream.
     */

  }, {
    key: 'connect',
    value: function connect() {
      (0, _log.debug)(NAME, '[connect]');
    }
  }, {
    key: 'play',
    value: function play() {
      (0, _log.debug)(NAME, '[videoelement:action] play');
      try {
        var maybePromise = this.media.play();
        if (maybePromise) {
          maybePromise.then(function () {
            return (0, _log.debug)(NAME, '[videoelement:action] play (START)');
          }).catch(function (err) {
            return (0, _log.error)(NAME, '[videoelement:action] play (FAULT) ' + (err.message ? err.message : err));
          });
        }
      } catch (e) {
        (0, _log.error)(NAME, '[videoelement:action] play (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      (0, _log.debug)(NAME, '[videoelement:action] pause');
      try {
        this.media.pause();
      } catch (e) {
        (0, _log.error)(NAME, '[videoelement:action] pause (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'resume',
    value: function resume() {
      (0, _log.debug)(NAME, '[videoelement:action] resume');
      try {
        var maybePromise = this.media.play();
        if (maybePromise) {
          maybePromise.then(function () {
            return (0, _log.debug)(NAME, '[videoelement:action] play (START)');
          }).catch(function (err) {
            return (0, _log.error)(NAME, '[videoelement:action] play (FAULT) ' + (err.message ? err.message : err));
          });
        }
      } catch (e) {
        (0, _log.error)(NAME, '[videoelement:action] resume (FAULT) - ' + e.message);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      (0, _log.debug)(NAME, '[videoelement:action] stop');
      try {
        this.media.stop();
      } catch (e) {
        // ok.
      }
    }
  }, {
    key: 'mute',
    value: function mute() {
      this.media.muted = true;
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      this.media.muted = false;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(value) {
      this.unmute();
      this.media.volume = value;
    }
  }, {
    key: 'seekTo',
    value: function seekTo(percentage) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      this.media.currentTime = duration ? percentage * duration : percentage;
    }
  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen() {
      try {
        _browser2.default.toggleFullScreen(this.holder);
      } catch (e) {
        throw e;
        // nada.
      }
    }

    /**
     * Notification of current stream being in an unpublished state.
     * The stream enters an unpublished state when the broadcaster stop the stream and the subscriber is still connected.
     */

  }, {
    key: 'unpublish',
    value: function unpublish() {
      try {
        this.stop();
        this.media.onended.call(this.media);
      } catch (e) {
        // nada.
      }
    }

    /**
     * Request to disconnect playback.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      (0, _log.debug)(NAME, '[disconnect]');
      this._cleanUp();
    }

    /**
     * Responder to change in orientation received through metadata.
     *
     * @param {Number} orientation
     *        The orientation value.
     *
     * @private
     */

  }, {
    key: 'handleOrientationChange',
    value: function handleOrientationChange(orientation) {
      if (this._controls && orientation % 180 !== 0) {
        this.holder.classList.add('red5pro-media-background');
        this.media.classList.remove('red5pro-media-background');
      }
    }

    /*
     * || SHARED OBJECT INTEGRATION NOT AVAILABLE FOR HLS PLAYBACK ||
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'addSharedObjectResponseHandler',
    value: function addSharedObjectResponseHandler(handler) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'removeSharedObjectResponseHandler',
    value: function removeSharedObjectResponseHandler(handler) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, message) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(sharedObjectName) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(sharedObjectName) {}

    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(sharedObjectName) {}

    /**
     * Returns playback controls if available.
     *
     * @returns {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._controls;
    }

    /**
     * Returns the subscriber type associated with this controller.
     *
     * @returns {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this.playerType;
    }

    /**
     * Returns flag of video being recognized as VOD (Video On Demand).
     *
     * @returns {Boolean}
     */

  }, {
    key: 'isVOD',
    get: function get() {
      return this._isVOD;
    }

    /**
     * Sets flag of video being considered as VOD (Video On Demand).
     *
     * @param {Boolean} value
     */
    ,
    set: function set(value) {
      this._isVOD = value;
      if (this._controls) {
        this._controls.setAsVOD(value);
      }
    }
  }]);
  return RTCSourceHandler;
}(_controls.PlaybackController);

exports.default = RTCSourceHandler;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(12);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _embed = __webpack_require__(77);

var embed = _interopRequireWildcard(_embed);

var _browser = __webpack_require__(4);

var _browser2 = _interopRequireDefault(_browser);

var _sharedobjectHelperRtmp = __webpack_require__(81);

var _sharedobjectHelperRtmp2 = _interopRequireDefault(_sharedobjectHelperRtmp);

var _controls = __webpack_require__(24);

var _state = __webpack_require__(34);

var _event = __webpack_require__(15);

var _promise = __webpack_require__(5);

var _log = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'RTMPSourceHandler';

/**
 * Simple util to convert value to Integer.
 * @private
 */
var toInt = function toInt(value) {
  if (typeof value === 'string') {
    return parseInt(value, 10);
  } else {
    return Math.round(value);
  }
};

/**
 * Quick test if streamName has an extension which infers VOD.
 * @param {String} streamName
 * @return {Boolean}
 * @private
 */
var isVODStreamName = function isVODStreamName(streamName) {
  return (/^.*\.(flv|mp4|mp3)/.test(streamName)
  );
};

/**
 * Source Handler for Flash-based Subscribers, which serves as a Presentation Controller between view and subscriber.
 *
 * @extends EventEmitter
 * @extends SubscriberPlaybackController
 *
 * @private
 */

var RTMPSourceHandler = function (_PlaybackController) {
  (0, _inherits3.default)(RTMPSourceHandler, _PlaybackController);

  function RTMPSourceHandler(notificationCenter, media, type) {
    var soResponder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    (0, _classCallCheck3.default)(this, RTMPSourceHandler);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RTMPSourceHandler.__proto__ || (0, _getPrototypeOf2.default)(RTMPSourceHandler)).call(this));

    _this.media = media;
    _this.clone = _this.media.cloneNode(true);
    _this.holder = _this._determineHolder(_this.media);
    _this.playerType = type;
    _this._swfId = undefined;
    _this._controls = undefined;
    _this._soResponder = soResponder || new _sharedobjectHelperRtmp2.default();
    _this._playbackNotificationCenter = notificationCenter;
    _browser2.default.onFullScreenStateChange(_this._handleFullScreenChange.bind(_this));
    return _this;
  }

  /**
   * Established DOM Element order for playback.
   *
   * @param {Element} media
   *        The target media element: e.g., `video` or `audio`.
   *
   * @private
   */


  (0, _createClass3.default)(RTMPSourceHandler, [{
    key: '_determineHolder',
    value: function _determineHolder(media) {
      if (media.parentNode.classList.contains('red5pro-media-container')) {
        return media.parentNode;
      } else {
        var parent = media.parentNode;
        var div = _browser2.default.createElement('div');
        div.classList.add('red5pro-media-container');
        parent.insertBefore(div, media);
        parent.removeChild(media);
        div.appendChild(media);
        return div;
      }
    }

    /**
     * Clean up of DOM Element order upon stop of playback.
     *
     * @private
     */

  }, {
    key: '_cleanUp',
    value: function _cleanUp() {
      // Return to prior DOM manipulation.
      this.media.remove();
      this.media = this.clone.cloneNode(true);
      this.holder.appendChild(this.media);
      if (this._controls) {
        this._controls.detach();
      }
    }

    /**
     * Assigns and handlers event notificiations coming from the media notifier (e.g., `video` or `audio` element).
     *
     * @param {Object} notifier
     *
     * @private
     */

  }, {
    key: '_addPlaybackHandlers',
    value: function _addPlaybackHandlers(notifier) {
      var controls = this.getControls();
      if (typeof controls === 'undefined') {
        return;
      }
      notifier.on(_event.SubscriberEventTypes.SUBSCRIBE_START, function () {
        controls.setState(_state.PlaybackState.PLAYING);
      });
      notifier.on(_event.SubscriberEventTypes.SUBSCRIBE_STOP, function () {
        controls.setState(_state.PlaybackState.IDLE);
      });
      notifier.on(_event.SubscriberEventTypes.PLAY_UNPUBLISH, function () {
        controls.setState(_state.PlaybackState.IDLE);
      });
      notifier.on(_event.SubscriberEventTypes.SUBSCRIBE_METADATA, function (event) {
        if (event.data.duration) {
          controls.setPlaybackDuration(event.data.duration);
        }
      });
      notifier.on(_event.SubscriberEventTypes.VOLUME_CHANGE, function (event) {
        controls.setVolume(event.data.volume);
      });
      notifier.on(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, function (event) {
        if (event.data.code === _state.PlaybackState.AVAILABLE) {
          controls.enable(true);
        }
        controls.setState(event.data.code);
      });
      notifier.on(_event.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, function (event) {
        controls.setSeekTime(event.data.time, event.data.duration);
      });
      notifier.on(_event.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, function (event) {
        controls.onFullScreenChange(event.data);
      });
    }

    /**
     * Event handler for change in fullscreen state.
     *
     * @param {Boolean} isFullScreen
     *
     * @private
     */

  }, {
    key: '_handleFullScreenChange',
    value: function _handleFullScreenChange(isFullScreen) {
      var swfobject = this.getEmbeddedView();
      if (isFullScreen) {
        this.holder.classList.add('red5pro-media-container-full-screen');
        swfobject.classList.add('red5pro-media-container-full-screen');
      } else {
        this.holder.classList.remove('red5pro-media-container-full-screen');
        swfobject.classList.remove('red5pro-media-container-full-screen');
      }
      this.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, undefined, isFullScreen));
    }

    /**
     * Establishes event handler for recognizing complete on embed and initialization of Flash-based subscriber.
     *
     * @param {Promise} promise
     *        The target `Promise` object to resolve or reject upon completion.
     *
     * @private
     */

  }, {
    key: '_setUpInitCallback',
    value: function _setUpInitCallback(promise) {
      var self = this;
      _browser2.default.addSubscriptionAssignmentHandler(function (successId) {
        (0, _log.debug)(NAME, 'Embed and init() complete for subscriber swf. successId(' + successId + ').');
        promise.resolve(successId);
        self._tearDownInitCallback();
      });
    }

    /**
     * Tears down established handler for completion of Flash embed and init.
     *
     * @private
     */

  }, {
    key: '_tearDownInitCallback',
    value: function _tearDownInitCallback() {}

    /**
      * Request to setup the presentation of a playback stream using HLS.
      *
      * @param {String} url
      *        The endpoint URL for playback.
      * @param {Object} options
      *        The initialization configuration map.
      * @param {String} swfUrl
      *        The endpoint url to the SWF to embed. Defaults to relative link to red5pro-subscriber.swf of the SDK distribution.
      * @param {String} minFlashVersion
      *        The minimum Flash version for support of playback. Default: `10.0.0`.
      *
      * @returns {Promise}
      */

  }, {
    key: 'addSource',
    value: function addSource(swfId, options) {
      var _this2 = this;

      var swfUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var minFlashVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      (0, _log.debug)(NAME, '[addsource]');
      this._swfId = swfId;
      var soResponder = this._soResponder;
      var deferred = new _promise.DeferredPromise();
      var hasDefinedControls = options.controls;
      var isMuted = _browser2.default.hasAttributeDefined(this.media, 'muted');
      var usePlaybackControls = _browser2.default.hasAttributeDefined(this.media, 'controls') && _browser2.default.hasClassDefined(this.media, 'red5pro-media');
      options.swf = swfUrl || options.swf;
      options.minFlashVersion = minFlashVersion || options.minFlashVersion;
      this._setUpInitCallback(deferred);
      var classList = this.media.classList;
      embed.defineEmbedElement(this.media, this.holder).then(function (elementId) {
        var flashvars = {
          stream: options.streamName,
          app: options.context ? options.app + '/' + options.context : options.app,
          host: options.host,
          muted: _browser2.default.hasAttributeDefined(_this2.media, 'muted'),
          autoplay: _browser2.default.hasAttributeDefined(_this2.media, 'autoplay')
        };
        if (options.backgroundColor) {
          flashvars.backgroundColor = options.backgroundColor;
        }
        if (options.buffer && !isNaN(Number(options.buffer))) {
          flashvars.buffer = options.buffer;
        }
        if (options.width && !isNaN(options.width)) {
          flashvars.width = toInt(options.width);
        }
        if (options.height && !isNaN(options.height)) {
          flashvars.height = toInt(options.height);
        }
        if (options.embedWidth === '100%' || options.embedHeight === '100%') {
          flashvars.autosize = true;
        }
        _this2._swfId = swfId;
        if (typeof options.connectionParams !== 'undefined') {
          flashvars.connectionParams = encodeURIComponent((0, _stringify2.default)(options.connectionParams));
        }
        return embed.embedSwfObject(swfId, options, flashvars, _browser2.default.getSwfObject(), elementId);
      }).then(function () {
        if (hasDefinedControls || usePlaybackControls) {
          if (hasDefinedControls) {
            _this2._controls = options.controls;
          } else {
            _this2._controls = new _controls.PlaybackControlsImpl(_this2, _this2.holder);
          }
          _this2.media.controls = false;
          _this2._controls.setAsVOD(isVODStreamName(options.streamName));
          _this2._controls.setMutedState(isMuted);
          var embedded = _this2.getEmbeddedView();
          var index = classList.length,
              clazz = void 0;
          while (--index > -1) {
            clazz = classList.item(index);
            embedded.classList.add(clazz);
          }
        }
        _this2._addPlaybackHandlers(_this2._playbackNotificationCenter);
        _this2.trigger(new _event.SubscriberEvent(_event.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, undefined, {
          code: _state.PlaybackState.AVAILABLE,
          state: _state.PlaybackStateReadable[_state.PlaybackState.AVAILABLE]
        }));
        return true;
      }).then(function () {
        soResponder.connect(swfId);
        return true;
      }).catch(function (e) {
        return deferred.reject(e);
      });
      return deferred.promise;
    }

    /**
     * Request to connect to stream.
     */

  }, {
    key: 'connect',
    value: function connect() {
      (0, _log.debug)(NAME, '[connect]');
      try {
        this.getEmbeddedView().connect();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'play',
    value: function play() {
      try {
        this.getEmbeddedView().play();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'pause',
    value: function pause() {
      try {
        this.getEmbeddedView().pause();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'resume',
    value: function resume() {
      try {
        this.getEmbeddedView().resume();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      try {
        this.getEmbeddedView().stop();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'mute',
    value: function mute() {
      try {
        this.getEmbeddedView().mute();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      try {
        this.getEmbeddedView().unmute();
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'setVolume',
    value: function setVolume(value) {
      try {
        this.getEmbeddedView().setVolume(value);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'seekTo',
    value: function seekTo(value) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      try {
        this.getEmbeddedView().seekTo(value, duration);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen() {
      try {
        _browser2.default.toggleFullScreen(this.holder);
      } catch (e) {
        throw e;
      }
    }

    /**
     * Request to disconnect from the playback stream.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      (0, _log.debug)(NAME, '[disconnect]');
      try {
        this.getEmbeddedView().disconnect();
      } catch (e) {
        // nada.
      }
      this._cleanUp();
      this._soResponder.disconnect();
    }

    /**
     * Assign response handler for SharedObject communication.
     *
     * @param {Object} handler
     *
     * @private
     */

  }, {
    key: 'addSharedObjectResponseHandler',
    value: function addSharedObjectResponseHandler(handler) {
      this._soResponder.addResponseHandler(handler);
    }

    /**
     * Remove response handler from SharedObject communication.
     *
     * @param {Object} handler
     *
     * @private
     */

  }, {
    key: 'removeSharedObjectResponseHandler',
    value: function removeSharedObjectResponseHandler(handler) {
      this._soResponder.removeResponseHandler(handler);
    }

    /**
     * Send message on SharedObject.
     *
     * @param {String} name
     *        The name of the SharedObject.
     * @param {String} callName
     *        The method name to invoke on the SharedObject.
     * @param {String} message
     *        The message to send along.
     *
     * @private
     */

  }, {
    key: 'sendToSharedObject',
    value: function sendToSharedObject(name, callName, message) {
      this._soResponder.sendToSharedObject(name, callName, message);
    }

    /**
     * Send property update to SharedObject.
     *
     * @param {String} name
     *        The name of the SharedObject.
     * @param {String} key
     *        The property name to update.
     * @param {String} value
     *        The property value to set.
     *
     * @private
     */

  }, {
    key: 'sendPropertyToSharedObject',
    value: function sendPropertyToSharedObject(name, key, value) {
      this._soResponder.sendPropertyToSharedObject(name, key, value);
    }

    /**
     * Request to get the remote SharedObject on the server by name.
     *
     * @param {String} sharedObjectName
     *
     * @private
     */

  }, {
    key: 'getRemoteSharedObject',
    value: function getRemoteSharedObject(sharedObjectName) {
      this._soResponder.getRemoteSharedObject(sharedObjectName);
    }

    /**
     * Request to connect to SharedObject by name.
     *
     * @param {String} sharedObjectName
     *
     * @private
     */

  }, {
    key: 'connectToSharedObject',
    value: function connectToSharedObject(sharedObjectName) {
      this._soResponder.connectToSharedObject(sharedObjectName);
    }

    /**
     * Request to close the SharedObject by name.
     *
     * @param {String} sharedObjectName
     *
     * @private
     */

  }, {
    key: 'closeSharedObject',
    value: function closeSharedObject(sharedObjectName) {
      this._soResponder.closeSharedObject(sharedObjectName);
    }

    /**
     * Returns the embedded Flash object if available.
     *
     * @returns {Element}
     */

  }, {
    key: 'getEmbeddedView',
    value: function getEmbeddedView() {
      return _browser2.default.getEmbedObject(this._swfId);
    }

    /**
     * Returns playback controls if available.
     *
     * @returns {PlaybackControls}
     */

  }, {
    key: 'getControls',
    value: function getControls() {
      return this._controls;
    }

    /**
     * Returns the subscriber type associated with this controller.
     *
     * @returns {String}
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this.playerType;
    }
  }]);
  return RTMPSourceHandler;
}(_controls.PlaybackController);

exports.default = RTMPSourceHandler;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(134);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(133);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(185);
module.exports = __webpack_require__(3).Array.from;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(26);
module.exports = __webpack_require__(183);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(26);
module.exports = __webpack_require__(184);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(3)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(187);
__webpack_require__(202);
module.exports = __webpack_require__(3).Map;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
module.exports = __webpack_require__(3).Number.isFinite;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(189);
module.exports = __webpack_require__(3).Number.isNaN;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(190);
module.exports = __webpack_require__(3).Object.assign;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(192);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
module.exports = __webpack_require__(3).Object.freeze;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(194);
var $Object = __webpack_require__(3).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195);
module.exports = __webpack_require__(3).Object.getPrototypeOf;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(196);
module.exports = __webpack_require__(3).Object.keys;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
module.exports = __webpack_require__(3).Object.setPrototypeOf;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(198);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(199);
__webpack_require__(203);
module.exports = __webpack_require__(3).Set;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(200);
__webpack_require__(39);
__webpack_require__(204);
__webpack_require__(205);
module.exports = __webpack_require__(3).Symbol;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(27);
module.exports = __webpack_require__(75).f('iterator');

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(27);
__webpack_require__(201);
module.exports = __webpack_require__(3).WeakMap;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(36);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22)
  , toLength  = __webpack_require__(51)
  , toIndex   = __webpack_require__(182);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , isArray  = __webpack_require__(101)
  , SPECIES  = __webpack_require__(9)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(168);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__(50)
  , getWeak           = __webpack_require__(30).getWeak
  , anObject          = __webpack_require__(16)
  , isObject          = __webpack_require__(13)
  , anInstance        = __webpack_require__(43)
  , forOf             = __webpack_require__(36)
  , createArrayMethod = __webpack_require__(61)
  , $has              = __webpack_require__(20)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(14)
  , createDesc      = __webpack_require__(37);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31)
  , gOPS    = __webpack_require__(68)
  , pIE     = __webpack_require__(48);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(47)
  , descriptor     = __webpack_require__(37)
  , setToStringTag = __webpack_require__(38)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(31)
  , toIObject = __webpack_require__(22);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(11)
  , macrotask = __webpack_require__(110).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(35)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(14)
  , anObject = __webpack_require__(16)
  , getKeys  = __webpack_require__(31);

module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22)
  , gOPN      = __webpack_require__(106).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13)
  , anObject = __webpack_require__(16);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(67).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(16)
  , aFunction = __webpack_require__(60)
  , SPECIES   = __webpack_require__(9)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(72)
  , defined   = __webpack_require__(45);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(72)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16)
  , get      = __webpack_require__(76);
module.exports = __webpack_require__(3).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(44)
  , ITERATOR  = __webpack_require__(9)('iterator')
  , Iterators = __webpack_require__(29);
module.exports = __webpack_require__(3).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(19)
  , $export        = __webpack_require__(10)
  , toObject       = __webpack_require__(32)
  , call           = __webpack_require__(102)
  , isArrayIter    = __webpack_require__(100)
  , toLength       = __webpack_require__(51)
  , createProperty = __webpack_require__(171)
  , getIterFn      = __webpack_require__(76);

$export($export.S + $export.F * !__webpack_require__(103)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(165)
  , step             = __webpack_require__(104)
  , Iterators        = __webpack_require__(29)
  , toIObject        = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(66)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(96);

// 23.1 Map Objects
module.exports = __webpack_require__(62)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(10)
  , _isFinite = __webpack_require__(11).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(10);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(105)});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(47)});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(13)
  , meta     = __webpack_require__(30).onFreeze;

__webpack_require__(49)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(22)
  , $getOwnPropertyDescriptor = __webpack_require__(67).f;

__webpack_require__(49)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(32)
  , $getPrototypeOf = __webpack_require__(107);

__webpack_require__(49)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(31);

__webpack_require__(49)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(179).set});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(46)
  , global             = __webpack_require__(11)
  , ctx                = __webpack_require__(19)
  , classof            = __webpack_require__(44)
  , $export            = __webpack_require__(10)
  , isObject           = __webpack_require__(13)
  , aFunction          = __webpack_require__(60)
  , anInstance         = __webpack_require__(43)
  , forOf              = __webpack_require__(36)
  , speciesConstructor = __webpack_require__(180)
  , task               = __webpack_require__(110).set
  , microtask          = __webpack_require__(176)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(50)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(38)($Promise, PROMISE);
__webpack_require__(109)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(103)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(96);

// 23.2 Set Objects
module.exports = __webpack_require__(62)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(11)
  , has            = __webpack_require__(20)
  , DESCRIPTORS    = __webpack_require__(17)
  , $export        = __webpack_require__(10)
  , redefine       = __webpack_require__(69)
  , META           = __webpack_require__(30).KEY
  , $fails         = __webpack_require__(25)
  , shared         = __webpack_require__(71)
  , setToStringTag = __webpack_require__(38)
  , uid            = __webpack_require__(52)
  , wks            = __webpack_require__(9)
  , wksExt         = __webpack_require__(75)
  , wksDefine      = __webpack_require__(74)
  , keyOf          = __webpack_require__(175)
  , enumKeys       = __webpack_require__(172)
  , isArray        = __webpack_require__(101)
  , anObject       = __webpack_require__(16)
  , toIObject      = __webpack_require__(22)
  , toPrimitive    = __webpack_require__(73)
  , createDesc     = __webpack_require__(37)
  , _create        = __webpack_require__(47)
  , gOPNExt        = __webpack_require__(178)
  , $GOPD          = __webpack_require__(67)
  , $DP            = __webpack_require__(14)
  , $keys          = __webpack_require__(31)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(106).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(48).f  = $propertyIsEnumerable;
  __webpack_require__(68).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(46)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__(61)(0)
  , redefine     = __webpack_require__(69)
  , meta         = __webpack_require__(30)
  , assign       = __webpack_require__(105)
  , weak         = __webpack_require__(170)
  , isObject     = __webpack_require__(13)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(62)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(10);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(97)('Map')});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(10);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(97)('Set')});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74)('asyncIterator');

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74)('observable');

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(207);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);


/***/ })
/******/ ]);
});