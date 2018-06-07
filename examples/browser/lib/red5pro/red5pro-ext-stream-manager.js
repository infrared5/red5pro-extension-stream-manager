/*!
 * 
 *   red5pro-extension-stream-manager - Library extension for Stream Manager support
 *   Author: 
 *   Version: 1.0.0
 *   Url: undefined
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["red5prosdk_ext_stream_manager"] = factory();
	else
		root["red5prosdk_ext_stream_manager"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

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

/***/ "./node_modules/browser-bunyan/lib/index.m.js":
/*!****************************************************!*\
  !*** ./node_modules/browser-bunyan/lib/index.m.js ***!
  \****************************************************/
/*! exports provided: TRACE, DEBUG, INFO, WARN, ERROR, FATAL, resolveLevel, levelFromName, nameFromLevel, stdSerializers, Logger, createLogger, safeCycles, ConsoleFormattedStream, ConsoleRawStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE", function() { return TRACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARN", function() { return WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FATAL", function() { return FATAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLevel", function() { return resolveLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelFromName", function() { return levelFromName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameFromLevel", function() { return nameFromLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdSerializers", function() { return stdSerializers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeCycles", function() { return safeCycles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleFormattedStream", function() { return ConsoleFormattedStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleRawStream", function() { return ConsoleRawStream; });
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
function resolveLevel(nameOrNum) {
    return typeof nameOrNum === 'string' ? levelFromName[nameOrNum.toLowerCase()] : nameOrNum;
}

var CALL_STACK_ERROR = 'call-stack-error';
function objCopy(obj) {
    if (typeof obj === 'undefined' || obj === null) {
        return obj;
    } else if (Array.isArray(obj)) {
        return obj.slice();
    } else if (typeof obj === 'object') {
        var copy = {};
        Object.keys(obj).forEach(function (k) {
            copy[k] = obj[k];
        });
        return copy;
    } else {
        return obj;
    }
}

function inspect(obj) {
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (Array.isArray(obj)) {
        var items = obj.map(function (obj) { return inspect(obj); });
        return '[ ' + items.join(', ') + ' ]';
    }
    if (typeof obj === 'object') {
        return JSON.stringify(obj);
    }
    if (typeof obj === 'function') {
        return '[Function: ' + obj.name + ']';
    }
    if (typeof obj === 'boolean' || typeof obj === 'number') {
        return obj;
    }
    return '\'' + obj.toString() + '\'';
}

function format(f) {
    var arguments$1 = arguments;

    if (typeof f !== 'string') {
        var objects = new Array(arguments.length);
        for (var i$1 = 0;i$1 < arguments.length; i$1++) {
            objects[i$1] = inspect(arguments$1[i$1]);
        }
        return objects.join(' ');
    }
    var formatRegExp = /%[sdj%]/g;
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') {
            return '%';
        }
        if (i >= len) {
            return x;
        }
        switch (x) {
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for (var x = args[i];i < len; x = args[++i]) {
        str += ' ' + x;
    }
    return str;
}

function extractSrcFromStacktrace(stack, level) {
    var stackLines = stack.split('\n');
    if (stackLines[0] && stackLines[0].indexOf(CALL_STACK_ERROR) >= 0) {
        stackLines.shift();
    }
    var targetLine = stackLines[level];
    var lineInfo = null;
    if (targetLine) {
        var execResult = /^\s*(at|.*@)\s*(.+)?$/.exec(targetLine);
        if (Array.isArray(execResult) && execResult[2]) {
            lineInfo = execResult[2];
        } else {
            lineInfo = targetLine;
        }
    }
    return lineInfo;
}

function _indent(s, indent) {
    if (!indent) {
        indent = '    ';
    }
    var lines = s.split(/\r?\n/g);
    return indent + lines.join('\n' + indent);
}

var _warned = {};
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

function safeCycles() {
    var seen = [];
    return function (key, val) {
        if (!val || typeof val !== 'object') {
            return val;
        }
        if (seen.indexOf(val) !== -1) {
            return '[Circular]';
        }
        seen.push(val);
        return val;
    };
}

var TRACE$1 = 10;
var DEBUG$1 = 20;
var INFO$1 = 30;
var WARN$1 = 40;
var ERROR$1 = 50;
var FATAL$1 = 60;
var levelFromName$1 = {
    'trace': TRACE$1,
    'debug': DEBUG$1,
    'info': INFO$1,
    'warn': WARN$1,
    'error': ERROR$1,
    'fatal': FATAL$1
};
Object.keys(levelFromName$1).forEach(function (name) {});
var ConsoleRawStream = function ConsoleRawStream() {};
ConsoleRawStream.prototype.write = function write(rec) {
    if (rec.level < INFO$1) {
        console.log(rec);
    } else if (rec.level < WARN$1) {
        console.info(rec);
    } else if (rec.level < ERROR$1) {
        console.warn(rec);
    } else {
        console.error(rec);
    }
    if (rec.err && rec.err.stack) {
        console.error(rec.err.stack);
    }
    if (rec.obj) {
        console.log(rec.obj);
    }
};

var LOG_VERSION = 1;
var Logger = function Logger(options, _childOptions, _childSimple) {
    var this$1 = this;

    if (!(this instanceof Logger)) {
        return new Logger(options, _childOptions);
    }
    var parent;
    if (_childOptions !== undefined) {
        parent = options;
        options = _childOptions;
        if (!(parent instanceof Logger)) {
            throw new TypeError('invalid Logger creation: do not pass a second arg');
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
            throw new TypeError('invalid options.name: child cannot set logger name');
        }
    }
    if (options.stream && options.streams) {
        throw new TypeError('cannot mix "streams" and "stream" options');
    }
    if (options.streams && !Array.isArray(options.streams)) {
        throw new TypeError('invalid options.streams: must be an array');
    }
    if (options.serializers && (typeof options.serializers !== 'object' || Array.isArray(options.serializers))) {
        throw new TypeError('invalid options.serializers: must be an object');
    }
    var fields, name, i;
    if (parent && _childSimple) {
        this._level = parent._level;
        this.streams = parent.streams;
        this.serializers = parent.serializers;
        this.src = parent.src;
        fields = (this.fields = {});
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
    if (parent) {
        this._level = parent._level;
        this.streams = [];
        for (i = 0; i < parent.streams.length; i++) {
            var s = objCopy(parent.streams[i]);
            this$1.streams.push(s);
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
    if (options.stream) {
        this.addStream({
            type: 'stream',
            stream: options.stream,
            level: options.level
        });
    } else if (options.streams) {
        options.streams.forEach(function (s) {
            this$1.addStream(s, options.level);
        });
    } else if (parent && options.level) {
        this.level(options.level);
    } else if (!parent) {
        this.addStream({
            type: 'raw',
            stream: new ConsoleRawStream(),
            level: options.level
        });
    }
    if (options.serializers) {
        this.addSerializers(options.serializers);
    }
    if (options.src) {
        this.src = true;
    }
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
        this$1.fields[k] = fields[k];
    });
};
Logger.prototype.addStream = function addStream (s, defaultLevel) {
        if ( defaultLevel === void 0 ) defaultLevel = INFO;

    s = objCopy(s);
    s.type = 'raw';
    s.level = resolveLevel(s.level || defaultLevel);
    if (s.level < this._level) {
        this._level = s.level;
    }
    this.streams.push(s);
    delete this.haveNonRawStreams;
};
Logger.prototype.addSerializers = function addSerializers (serializers) {
        var this$1 = this;

    if (!this.serializers) {
        this.serializers = {};
    }
    Object.keys(serializers).forEach(function (field) {
        var serializer = serializers[field];
        if (typeof serializer !== 'function') {
            throw new TypeError(format('invalid serializer for "%s" field: must be a function', field));
        }
        this$1.serializers[field] = serializer;
    });
};
Logger.prototype.child = function child (options, simple) {
    return new this.constructor(this, options || {}, simple);
};
Logger.prototype.level = function level (value) {
        var this$1 = this;

    if (value === undefined) {
        return this._level;
    }
    var newLevel = resolveLevel(value);
    var len = this.streams.length;
    for (var i = 0;i < len; i++) {
        this$1.streams[i].level = newLevel;
    }
    this._level = newLevel;
};
Logger.prototype.levels = function levels (name, value) {
        var this$1 = this;

    if (name === undefined) {
        return this.streams.map(function (s) { return s.level; });
    }
    var stream;
    if (typeof name === 'number') {
        stream = this.streams[name];
        if (stream === undefined) {
            throw new Error('invalid stream index: ' + name);
        }
    } else {
        var len = this.streams.length;
        for (var i = 0;i < len; i++) {
            var s = this$1.streams[i];
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
Logger.prototype._applySerializers = function _applySerializers (fields, excludeFields) {
        var this$1 = this;

    Object.keys(this.serializers).forEach(function (name) {
        if (fields[name] === undefined || excludeFields && excludeFields[name]) {
            return;
        }
        try {
            fields[name] = this$1.serializers[name](fields[name]);
        } catch (err) {
            _warn(format('bunyan: ERROR: Exception thrown from the "%s" ' + 'Bunyan serializer. This should never happen. This is a bug' + 'in that serializer function.\n%s', name, err.stack || err));
            fields[name] = format('(Error in Bunyan log "%s" serializer broke field. See stderr for details.)', name);
        }
    });
};
Logger.prototype._emit = function _emit (rec, noemit) {
        var this$1 = this;

    var i;
    if (this.haveNonRawStreams === undefined) {
        this.haveNonRawStreams = false;
        for (i = 0; i < this.streams.length; i++) {
            if (!this$1.streams[i].raw) {
                this$1.haveNonRawStreams = true;
                break;
            }
        }
    }
    var str;
    if (noemit || this.haveNonRawStreams) {
        try {
            str = JSON.stringify(rec, safeCycles()) + '\n';
        } catch (e) {
            var dedupKey = e.stack.split(/\n/g, 2).join('\n');
            _warn('bunyan: ERROR: Exception in ' + '`JSON.stringify(rec)`. You can install the ' + '"safe-json-stringify" module to have Bunyan fallback ' + 'to safer stringification. Record:\n' + _indent(format('%s\n%s', rec, e.stack)), dedupKey);
            str = format('(Exception in JSON.stringify(rec): %j. See stderr for details.)\n', e.message);
        }
    }
    if (noemit) {
        return str;
    }
    var level = rec.level;
    for (i = 0; i < this.streams.length; i++) {
        var s = this$1.streams[i];
        if (s.level <= level) {
            s.stream.write(rec);
        }
    }
    return str;
};
function mkLogEmitter(minLevel) {
    return function () {
        var log = this;
        function mkRecord(args) {
            var excludeFields;
            if (args[0] instanceof Error) {
                fields = {
                    err: log.serializers && log.serializers.err ? log.serializers.err(args[0]) : stdSerializers.err(args[0])
                };
                excludeFields = {
                    err: true
                };
                if (args.length === 1) {
                    msgArgs = [fields.err.message];
                } else {
                    msgArgs = Array.prototype.slice.call(args, 1);
                }
            } else if (typeof args[0] !== 'object' && args[0] !== null || Array.isArray(args[0])) {
                fields = null;
                msgArgs = Array.prototype.slice.call(args);
            } else {
                fields = args[0];
                if (args.length === 1 && fields.err && fields.err instanceof Error) {
                    msgArgs = [fields.err.message];
                } else {
                    msgArgs = Array.prototype.slice.call(args, 1);
                }
            }
            var rec = objCopy(log.fields);
            rec.level = minLevel;
            var recFields = fields ? objCopy(fields) : null;
            if (recFields) {
                if (log.serializers) {
                    log._applySerializers(recFields, excludeFields);
                }
                Object.keys(recFields).forEach(function (k) {
                    rec[k] = recFields[k];
                });
            }
            rec.levelName = nameFromLevel[minLevel];
            rec.msg = msgArgs.length ? format.apply(log, msgArgs) : '';
            if (!rec.time) {
                rec.time = new Date();
            }
            if (log.src && !rec.src) {
                try {
                    throw new Error(CALL_STACK_ERROR);
                } catch (err) {
                    var src = extractSrcFromStacktrace(err.stack, 2);
                    if (!src && !_haveWarned('src')) {
                        _warn('Unable to determine src line info', 'src');
                    }
                    rec.src = src || '';
                }
            }
            rec.v = LOG_VERSION;
            return rec;
        }
        
        var fields = null;
        var msgArgs = arguments;
        var rec = null;
        if (arguments.length === 0) {
            return this._level <= minLevel;
        } else if (this._level > minLevel) {} else {
            rec = mkRecord(msgArgs);
            this._emit(rec);
        }
    };
}

Logger.prototype.trace = mkLogEmitter(TRACE);
Logger.prototype.debug = mkLogEmitter(DEBUG);
Logger.prototype.info = mkLogEmitter(INFO);
Logger.prototype.warn = mkLogEmitter(WARN);
Logger.prototype.error = mkLogEmitter(ERROR);
Logger.prototype.fatal = mkLogEmitter(FATAL);
function getFullErrorStack(ex) {
    var ret = ex.stack || ex.toString();
    if (ex.cause && typeof ex.cause === 'function') {
        var cex = ex.cause();
        if (cex) {
            ret += '\nCaused by: ' + getFullErrorStack(cex);
        }
    }
    return ret;
}

var stdSerializers = {
    err: function (err) {
        if (!err || !err.stack) {
            return err;
        }
        return {
            message: err.message,
            name: err.name,
            stack: getFullErrorStack(err),
            code: err.code,
            signal: err.signal
        };
    }
};
function createLogger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return new (Function.prototype.bind.apply( Logger, [ null ].concat( args) ));
}

var TRACE$2 = 10;
var DEBUG$2 = 20;
var INFO$2 = 30;
var WARN$2 = 40;
var ERROR$2 = 50;
var FATAL$2 = 60;
var levelFromName$2 = {
    'trace': TRACE$2,
    'debug': DEBUG$2,
    'info': INFO$2,
    'warn': WARN$2,
    'error': ERROR$2,
    'fatal': FATAL$2
};
var nameFromLevel$1 = {};
Object.keys(levelFromName$2).forEach(function (name) {
    nameFromLevel$1[levelFromName$2[name]] = name;
});
var DEFAULT_CSS = {
    levels: {
        trace: 'color: DeepPink',
        debug: 'color: GoldenRod',
        info: 'color: DarkTurquoise',
        warn: 'color: Purple',
        error: 'color: Crimson',
        fatal: 'color: Black'
    },
    def: 'color: DimGray',
    msg: 'color: SteelBlue',
    src: 'color: DimGray; font-style: italic; font-size: 0.9em'
};
var ConsoleFormattedStream = function ConsoleFormattedStream(ref) {
    if (ref === void 0) 
        { ref = {}; }
    var logByLevel = ref.logByLevel;
    if (logByLevel === void 0) 
        { logByLevel = false; }
    var css = ref.css;
    if (css === void 0) 
        { css = DEFAULT_CSS; }
    this.logByLevel = logByLevel;
    this.css = css;
};
ConsoleFormattedStream.prototype.write = function write(rec) {
    var levelCss, consoleMethod;
    var defaultCss = this.css.def;
    var msgCss = this.css.msg;
    var srcCss = this.css.src;
    var loggerName = rec.childName ? rec.name + '/' + rec.childName : rec.name;
    var levelName = nameFromLevel$1[rec.level];
    var formattedLevelName = (Array(6 - levelName.length).join(' ') + levelName).toUpperCase();
    if (this.logByLevel) {
        if (rec.level === TRACE$2) {
            levelName = 'debug';
        } else if (rec.level === FATAL$2) {
            levelName = 'error';
        }
        consoleMethod = typeof console[levelName] === 'function' ? console[levelName] : console.log;
    } else {
        consoleMethod = console.log;
    }
    if (rec.level < DEBUG$2) {
        levelCss = this.css.levels.trace;
    } else if (rec.level < INFO$2) {
        levelCss = this.css.levels.debug;
    } else if (rec.level < WARN$2) {
        levelCss = this.css.levels.info;
    } else if (rec.level < ERROR$2) {
        levelCss = this.css.levels.warn;
    } else if (rec.level < FATAL$2) {
        levelCss = this.css.levels.error;
    } else {
        levelCss = this.css.levels.fatal;
    }
    var padZeros = function (number, len) {
        return Array(len + 1 - (number + '').length).join('0') + number;
    };
    var logArgs = [];
    logArgs.push("[%s:%s:%s:%s] %c%s%c: %s: %c%s " + (rec.src ? '%c%s' : ''));
    logArgs.push(padZeros(rec.time.getHours(), 2));
    logArgs.push(padZeros(rec.time.getMinutes(), 2));
    logArgs.push(padZeros(rec.time.getSeconds(), 2));
    logArgs.push(padZeros(rec.time.getMilliseconds(), 4));
    logArgs.push(levelCss);
    logArgs.push(formattedLevelName);
    logArgs.push(defaultCss);
    logArgs.push(loggerName);
    logArgs.push(msgCss);
    logArgs.push(rec.msg);
    if (rec.src) {
        logArgs.push(srcCss);
        logArgs.push(rec.src);
    }
    consoleMethod.apply(console, logArgs);
    if (rec.err && rec.err.stack) {
        consoleMethod.call(console, '%c%s,', levelCss, rec.err.stack);
    }
    if (rec.obj) {
        consoleMethod.call(console, rec.obj);
    }
};
ConsoleFormattedStream.getDefaultCss = function getDefaultCss() {
    return DEFAULT_CSS;
};


//# sourceMappingURL=index.m.js.map


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./src/js/env/browser.js":
/*!*******************************!*\
  !*** ./src/js/env/browser.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getRed5ProSDK: function getRed5ProSDK() {
    return window.red5prosdk;
  }
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorate = exports.getLogger = exports.LOG_LEVELS = exports.setLogLevel = undefined;

var _log = __webpack_require__(/*! ./log */ "./src/js/log/index.js");

var _browser = __webpack_require__(/*! ./env/browser */ "./src/js/env/browser.js");

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _log.establishLogger)('' + "debug" || _log.LEVELS.DEBUG); // eslint-disable-line no-undef

/**
 * Sets the log level for logs from the SDK
 * @param {string} level
 *    The specified log level.
 * @see LOG_LEVELS
 */
/**
 * Main entry of Stream Manager Extension for Red5 Pro HTML SDK, accessible on the `window` global at `red5prosdk_ext_stream_manager`.
 *
 * @file red5pro-ext-stream-manager.min.js
 * @module red5prosdk_ext_stream_manager
 *
 *
 */

// SDK_VERSION, LOG_LEVEL injected from webpack build.
var setLogLevel = exports.setLogLevel = function setLogLevel(level) {
  if (_log.LEVELS.hasOwnProperty(level.toUpperCase())) {
    (0, _log.establishLogger)(level);
    if (console) {
      console.log('Red5 Pro Stream Manager Extension ' + "1.0.0"); // eslint-disable-line no-undef,no-console
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

var decorate = exports.decorate = function decorate() {
  var red5prosdk = _browser2.default.getRed5ProSDK();
  if (red5prosdk) {
    getLogger().debug('Will Decorate U+1F987');
  } else {
    getLogger().warn('Could not decorate the red5prosdk global. It does not exist.');
  }
};

/***/ }),

/***/ "./src/js/log/bunyan-writer.js":
/*!*************************************!*\
  !*** ./src/js/log/bunyan-writer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawStream = undefined;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _browserBunyan = __webpack_require__(/*! browser-bunyan */ "./node_modules/browser-bunyan/lib/index.m.js");

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

/***/ "./src/js/log/index.js":
/*!*****************************!*\
  !*** ./src/js/log/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fatal = exports.error = exports.warn = exports.debug = exports.info = exports.trace = exports.getLogger = exports.establishLogger = exports.LEVELS = undefined;

var _browserBunyan = __webpack_require__(/*! browser-bunyan */ "./node_modules/browser-bunyan/lib/index.m.js");

var _bunyanWriter = __webpack_require__(/*! ./bunyan-writer */ "./src/js/log/bunyan-writer.js");

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
    name: 'red5pro-ext-sm',
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

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/toddanderson/Documents/Workplace/red5pro/red5pro-extension-stream-manager/src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9icm93c2VyLWJ1bnlhbi9saWIvaW5kZXgubS5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9yZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovL3JlZDVwcm9zZGtfZXh0X3N0cmVhbV9tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9zcmMvanMvZW52L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9zcmMvanMvbG9nL2J1bnlhbi13cml0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXIvLi9zcmMvanMvbG9nL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFJlZDVQcm9TREsiLCJ3aW5kb3ciLCJyZWQ1cHJvc2RrIiwiTEVWRUxTIiwiREVCVUciLCJzZXRMb2dMZXZlbCIsImxldmVsIiwiaGFzT3duUHJvcGVydHkiLCJ0b1VwcGVyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJMT0dfTEVWRUxTIiwiZ2V0TG9nZ2VyIiwiX2dldExvZ2dlciIsImRlY29yYXRlIiwiZW52aXJvbm1lbnQiLCJkZWJ1ZyIsIndhcm4iLCJSYXdTdHJlYW0iLCJyZWMiLCJ0aW1lIiwidG9JU09TdHJpbmciLCJuYW1lIiwibmFtZUZyb21MZXZlbCIsIm1zZyIsImxvZ2dlciIsImZvcm1hdE1lc3NhZ2UiLCJkaXNwYXRjaGVyIiwibWVzc2FnZSIsInNvdXJjZSIsIlRSQUNFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsIkZBVEFMIiwiZXN0YWJsaXNoTG9nZ2VyIiwic3RyZWFtTGlzdCIsInVuZGVmaW5lZCIsInN0cmVhbXMiLCJwdXNoIiwic3RyZWFtIiwidHlwZSIsImxpc3QiLCJtYXAiLCJpdGVtIiwiY29uY2F0IiwidHJhY2UiLCJpbmZvIiwiZXJyb3IiLCJmYXRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFrQixvSzs7Ozs7Ozs7Ozs7O0FDQWxCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGdCQUFnQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBQWQ7QUFDQSxJQUFNYSxzQkFBT0gsU0FBU1gsT0FBTzZCLElBQWhCLENBQWI7QUFDQSxJQUFNZ0Isd0JBQVFsQyxTQUFTWCxPQUFPOEIsS0FBaEIsQ0FBZDtBQUNBLElBQU1nQix3QkFBUW5DLFNBQVNYLE9BQU8rQixLQUFoQixDQUFkLEMiLCJmaWxlIjoicmVkNXByby1leHQtc3RyZWFtLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwidmFyIFRSQUNFID0gMTA7XG52YXIgREVCVUcgPSAyMDtcbnZhciBJTkZPID0gMzA7XG52YXIgV0FSTiA9IDQwO1xudmFyIEVSUk9SID0gNTA7XG52YXIgRkFUQUwgPSA2MDtcbnZhciBsZXZlbEZyb21OYW1lID0ge1xuICAgICd0cmFjZSc6IFRSQUNFLFxuICAgICdkZWJ1Zyc6IERFQlVHLFxuICAgICdpbmZvJzogSU5GTyxcbiAgICAnd2Fybic6IFdBUk4sXG4gICAgJ2Vycm9yJzogRVJST1IsXG4gICAgJ2ZhdGFsJzogRkFUQUxcbn07XG52YXIgbmFtZUZyb21MZXZlbCA9IHt9O1xuT2JqZWN0LmtleXMobGV2ZWxGcm9tTmFtZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIG5hbWVGcm9tTGV2ZWxbbGV2ZWxGcm9tTmFtZVtuYW1lXV0gPSBuYW1lO1xufSk7XG5mdW5jdGlvbiByZXNvbHZlTGV2ZWwobmFtZU9yTnVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuYW1lT3JOdW0gPT09ICdzdHJpbmcnID8gbGV2ZWxGcm9tTmFtZVtuYW1lT3JOdW0udG9Mb3dlckNhc2UoKV0gOiBuYW1lT3JOdW07XG59XG5cbnZhciBDQUxMX1NUQUNLX0VSUk9SID0gJ2NhbGwtc3RhY2stZXJyb3InO1xuZnVuY3Rpb24gb2JqQ29weShvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5zbGljZSgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICBjb3B5W2tdID0gb2JqW2tdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluc3BlY3Qob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IG9iai5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gaW5zcGVjdChvYmopOyB9KTtcbiAgICAgICAgcmV0dXJuICdbICcgKyBpdGVtcy5qb2luKCcsICcpICsgJyBdJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbjogJyArIG9iai5uYW1lICsgJ10nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiAnXFwnJyArIG9iai50b1N0cmluZygpICsgJ1xcJyc7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChmKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKHR5cGVvZiBmICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSQxID0gMDtpJDEgPCBhcmd1bWVudHMubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgb2JqZWN0c1tpJDFdID0gaW5zcGVjdChhcmd1bWVudHMkMVtpJDFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKHggPT09ICclJScpIHtcbiAgICAgICAgICAgIHJldHVybiAnJSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPj0gbGVuKSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgIGNhc2UgJyVzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICAgICAgICBjYXNlICclZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgICAgICAgY2FzZSAnJWonOlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZm9yICh2YXIgeCA9IGFyZ3NbaV07aSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFNyY0Zyb21TdGFja3RyYWNlKHN0YWNrLCBsZXZlbCkge1xuICAgIHZhciBzdGFja0xpbmVzID0gc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIGlmIChzdGFja0xpbmVzWzBdICYmIHN0YWNrTGluZXNbMF0uaW5kZXhPZihDQUxMX1NUQUNLX0VSUk9SKSA+PSAwKSB7XG4gICAgICAgIHN0YWNrTGluZXMuc2hpZnQoKTtcbiAgICB9XG4gICAgdmFyIHRhcmdldExpbmUgPSBzdGFja0xpbmVzW2xldmVsXTtcbiAgICB2YXIgbGluZUluZm8gPSBudWxsO1xuICAgIGlmICh0YXJnZXRMaW5lKSB7XG4gICAgICAgIHZhciBleGVjUmVzdWx0ID0gL15cXHMqKGF0fC4qQClcXHMqKC4rKT8kLy5leGVjKHRhcmdldExpbmUpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleGVjUmVzdWx0KSAmJiBleGVjUmVzdWx0WzJdKSB7XG4gICAgICAgICAgICBsaW5lSW5mbyA9IGV4ZWNSZXN1bHRbMl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5lSW5mbyA9IHRhcmdldExpbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVJbmZvO1xufVxuXG5mdW5jdGlvbiBfaW5kZW50KHMsIGluZGVudCkge1xuICAgIGlmICghaW5kZW50KSB7XG4gICAgICAgIGluZGVudCA9ICcgICAgJztcbiAgICB9XG4gICAgdmFyIGxpbmVzID0gcy5zcGxpdCgvXFxyP1xcbi9nKTtcbiAgICByZXR1cm4gaW5kZW50ICsgbGluZXMuam9pbignXFxuJyArIGluZGVudCk7XG59XG5cbnZhciBfd2FybmVkID0ge307XG5mdW5jdGlvbiBfd2Fybihtc2csIGRlZHVwS2V5KSB7XG4gICAgaWYgKGRlZHVwS2V5KSB7XG4gICAgICAgIGlmIChfd2FybmVkW2RlZHVwS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF93YXJuZWRbZGVkdXBLZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihtc2cgKyAnXFxuJyk7XG59XG5cbmZ1bmN0aW9uIF9oYXZlV2FybmVkKGRlZHVwS2V5KSB7XG4gICAgcmV0dXJuIF93YXJuZWRbZGVkdXBLZXldO1xufVxuXG5mdW5jdGlvbiBzYWZlQ3ljbGVzKCkge1xuICAgIHZhciBzZWVuID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgICAgICBpZiAoIXZhbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vlbi5pbmRleE9mKHZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICAgIHNlZW4ucHVzaCh2YWwpO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH07XG59XG5cbnZhciBUUkFDRSQxID0gMTA7XG52YXIgREVCVUckMSA9IDIwO1xudmFyIElORk8kMSA9IDMwO1xudmFyIFdBUk4kMSA9IDQwO1xudmFyIEVSUk9SJDEgPSA1MDtcbnZhciBGQVRBTCQxID0gNjA7XG52YXIgbGV2ZWxGcm9tTmFtZSQxID0ge1xuICAgICd0cmFjZSc6IFRSQUNFJDEsXG4gICAgJ2RlYnVnJzogREVCVUckMSxcbiAgICAnaW5mbyc6IElORk8kMSxcbiAgICAnd2Fybic6IFdBUk4kMSxcbiAgICAnZXJyb3InOiBFUlJPUiQxLFxuICAgICdmYXRhbCc6IEZBVEFMJDFcbn07XG5PYmplY3Qua2V5cyhsZXZlbEZyb21OYW1lJDEpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHt9KTtcbnZhciBDb25zb2xlUmF3U3RyZWFtID0gZnVuY3Rpb24gQ29uc29sZVJhd1N0cmVhbSgpIHt9O1xuQ29uc29sZVJhd1N0cmVhbS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZShyZWMpIHtcbiAgICBpZiAocmVjLmxldmVsIDwgSU5GTyQxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlYyk7XG4gICAgfSBlbHNlIGlmIChyZWMubGV2ZWwgPCBXQVJOJDEpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHJlYyk7XG4gICAgfSBlbHNlIGlmIChyZWMubGV2ZWwgPCBFUlJPUiQxKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihyZWMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVjKTtcbiAgICB9XG4gICAgaWYgKHJlYy5lcnIgJiYgcmVjLmVyci5zdGFjaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKHJlYy5lcnIuc3RhY2spO1xuICAgIH1cbiAgICBpZiAocmVjLm9iaikge1xuICAgICAgICBjb25zb2xlLmxvZyhyZWMub2JqKTtcbiAgICB9XG59O1xuXG52YXIgTE9HX1ZFUlNJT04gPSAxO1xudmFyIExvZ2dlciA9IGZ1bmN0aW9uIExvZ2dlcihvcHRpb25zLCBfY2hpbGRPcHRpb25zLCBfY2hpbGRTaW1wbGUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMb2dnZXIpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTG9nZ2VyKG9wdGlvbnMsIF9jaGlsZE9wdGlvbnMpO1xuICAgIH1cbiAgICB2YXIgcGFyZW50O1xuICAgIGlmIChfY2hpbGRPcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50ID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IF9jaGlsZE9wdGlvbnM7XG4gICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIExvZ2dlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgTG9nZ2VyIGNyZWF0aW9uOiBkbyBub3QgcGFzcyBhIHNlY29uZCBhcmcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyAob2JqZWN0KSBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucy5uYW1lIChzdHJpbmcpIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG9wdGlvbnMubmFtZTogY2hpbGQgY2Fubm90IHNldCBsb2dnZXIgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0cmVhbSAmJiBvcHRpb25zLnN0cmVhbXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2Fubm90IG1peCBcInN0cmVhbXNcIiBhbmQgXCJzdHJlYW1cIiBvcHRpb25zJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0cmVhbXMgJiYgIUFycmF5LmlzQXJyYXkob3B0aW9ucy5zdHJlYW1zKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG9wdGlvbnMuc3RyZWFtczogbXVzdCBiZSBhbiBhcnJheScpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zZXJpYWxpemVycyAmJiAodHlwZW9mIG9wdGlvbnMuc2VyaWFsaXplcnMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucy5zZXJpYWxpemVycykpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgb3B0aW9ucy5zZXJpYWxpemVyczogbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgdmFyIGZpZWxkcywgbmFtZSwgaTtcbiAgICBpZiAocGFyZW50ICYmIF9jaGlsZFNpbXBsZSkge1xuICAgICAgICB0aGlzLl9sZXZlbCA9IHBhcmVudC5fbGV2ZWw7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IHBhcmVudC5zdHJlYW1zO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZXJzID0gcGFyZW50LnNlcmlhbGl6ZXJzO1xuICAgICAgICB0aGlzLnNyYyA9IHBhcmVudC5zcmM7XG4gICAgICAgIGZpZWxkcyA9ICh0aGlzLmZpZWxkcyA9IHt9KTtcbiAgICAgICAgdmFyIHBhcmVudEZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyhwYXJlbnQuZmllbGRzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudEZpZWxkTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWUgPSBwYXJlbnRGaWVsZE5hbWVzW2ldO1xuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gcGFyZW50LmZpZWxkc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBmaWVsZHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLl9sZXZlbCA9IHBhcmVudC5fbGV2ZWw7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyZW50LnN0cmVhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzID0gb2JqQ29weShwYXJlbnQuc3RyZWFtc1tpXSk7XG4gICAgICAgICAgICB0aGlzJDEuc3RyZWFtcy5wdXNoKHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VyaWFsaXplcnMgPSBvYmpDb3B5KHBhcmVudC5zZXJpYWxpemVycyk7XG4gICAgICAgIHRoaXMuc3JjID0gcGFyZW50LnNyYztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBvYmpDb3B5KHBhcmVudC5maWVsZHMpO1xuICAgICAgICBpZiAob3B0aW9ucy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbChvcHRpb25zLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xldmVsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB0aGlzLnN0cmVhbXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuc3JjID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmllbGRzID0ge307XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0cmVhbSkge1xuICAgICAgICB0aGlzLmFkZFN0cmVhbSh7XG4gICAgICAgICAgICB0eXBlOiAnc3RyZWFtJyxcbiAgICAgICAgICAgIHN0cmVhbTogb3B0aW9ucy5zdHJlYW0sXG4gICAgICAgICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbFxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc3RyZWFtcykge1xuICAgICAgICBvcHRpb25zLnN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgdGhpcyQxLmFkZFN0cmVhbShzLCBvcHRpb25zLmxldmVsKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnQgJiYgb3B0aW9ucy5sZXZlbCkge1xuICAgICAgICB0aGlzLmxldmVsKG9wdGlvbnMubGV2ZWwpO1xuICAgIH0gZWxzZSBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aGlzLmFkZFN0cmVhbSh7XG4gICAgICAgICAgICB0eXBlOiAncmF3JyxcbiAgICAgICAgICAgIHN0cmVhbTogbmV3IENvbnNvbGVSYXdTdHJlYW0oKSxcbiAgICAgICAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zZXJpYWxpemVycykge1xuICAgICAgICB0aGlzLmFkZFNlcmlhbGl6ZXJzKG9wdGlvbnMuc2VyaWFsaXplcnMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zcmMpIHtcbiAgICAgICAgdGhpcy5zcmMgPSB0cnVlO1xuICAgIH1cbiAgICBmaWVsZHMgPSBvYmpDb3B5KG9wdGlvbnMpO1xuICAgIGRlbGV0ZSBmaWVsZHMuc3RyZWFtO1xuICAgIGRlbGV0ZSBmaWVsZHMubGV2ZWw7XG4gICAgZGVsZXRlIGZpZWxkcy5zdHJlYW1zO1xuICAgIGRlbGV0ZSBmaWVsZHMuc2VyaWFsaXplcnM7XG4gICAgZGVsZXRlIGZpZWxkcy5zcmM7XG4gICAgaWYgKHRoaXMuc2VyaWFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlTZXJpYWxpemVycyhmaWVsZHMpO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgdGhpcyQxLmZpZWxkc1trXSA9IGZpZWxkc1trXTtcbiAgICB9KTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uIGFkZFN0cmVhbSAocywgZGVmYXVsdExldmVsKSB7XG4gICAgICAgIGlmICggZGVmYXVsdExldmVsID09PSB2b2lkIDAgKSBkZWZhdWx0TGV2ZWwgPSBJTkZPO1xuXG4gICAgcyA9IG9iakNvcHkocyk7XG4gICAgcy50eXBlID0gJ3Jhdyc7XG4gICAgcy5sZXZlbCA9IHJlc29sdmVMZXZlbChzLmxldmVsIHx8IGRlZmF1bHRMZXZlbCk7XG4gICAgaWYgKHMubGV2ZWwgPCB0aGlzLl9sZXZlbCkge1xuICAgICAgICB0aGlzLl9sZXZlbCA9IHMubGV2ZWw7XG4gICAgfVxuICAgIHRoaXMuc3RyZWFtcy5wdXNoKHMpO1xuICAgIGRlbGV0ZSB0aGlzLmhhdmVOb25SYXdTdHJlYW1zO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuYWRkU2VyaWFsaXplcnMgPSBmdW5jdGlvbiBhZGRTZXJpYWxpemVycyAoc2VyaWFsaXplcnMpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuc2VyaWFsaXplcnMpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVycyA9IHt9O1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzZXJpYWxpemVycykuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZXIgPSBzZXJpYWxpemVyc1tmaWVsZF07XG4gICAgICAgIGlmICh0eXBlb2Ygc2VyaWFsaXplciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmb3JtYXQoJ2ludmFsaWQgc2VyaWFsaXplciBmb3IgXCIlc1wiIGZpZWxkOiBtdXN0IGJlIGEgZnVuY3Rpb24nLCBmaWVsZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMkMS5zZXJpYWxpemVyc1tmaWVsZF0gPSBzZXJpYWxpemVyO1xuICAgIH0pO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuY2hpbGQgPSBmdW5jdGlvbiBjaGlsZCAob3B0aW9ucywgc2ltcGxlKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMsIG9wdGlvbnMgfHwge30sIHNpbXBsZSk7XG59O1xuTG9nZ2VyLnByb3RvdHlwZS5sZXZlbCA9IGZ1bmN0aW9uIGxldmVsICh2YWx1ZSkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgICB9XG4gICAgdmFyIG5ld0xldmVsID0gcmVzb2x2ZUxldmVsKHZhbHVlKTtcbiAgICB2YXIgbGVuID0gdGhpcy5zdHJlYW1zLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDtpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcyQxLnN0cmVhbXNbaV0ubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWwgPSBuZXdMZXZlbDtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmxldmVscyA9IGZ1bmN0aW9uIGxldmVscyAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbXMubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmxldmVsOyB9KTtcbiAgICB9XG4gICAgdmFyIHN0cmVhbTtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHN0cmVhbSA9IHRoaXMuc3RyZWFtc1tuYW1lXTtcbiAgICAgICAgaWYgKHN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RyZWFtIGluZGV4OiAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5zdHJlYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7aSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMkMS5zdHJlYW1zW2ldO1xuICAgICAgICAgICAgaWYgKHMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHN0cmVhbSA9IHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXQoJ25vIHN0cmVhbSB3aXRoIG5hbWUgXCIlc1wiJywgbmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdHJlYW0ubGV2ZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld0xldmVsID0gcmVzb2x2ZUxldmVsKHZhbHVlKTtcbiAgICAgICAgc3RyZWFtLmxldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgIGlmIChuZXdMZXZlbCA8IHRoaXMuX2xldmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICB9XG4gICAgfVxufTtcbkxvZ2dlci5wcm90b3R5cGUuX2FwcGx5U2VyaWFsaXplcnMgPSBmdW5jdGlvbiBfYXBwbHlTZXJpYWxpemVycyAoZmllbGRzLCBleGNsdWRlRmllbGRzKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5zZXJpYWxpemVycykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoZmllbGRzW25hbWVdID09PSB1bmRlZmluZWQgfHwgZXhjbHVkZUZpZWxkcyAmJiBleGNsdWRlRmllbGRzW25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IHRoaXMkMS5zZXJpYWxpemVyc1tuYW1lXShmaWVsZHNbbmFtZV0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF93YXJuKGZvcm1hdCgnYnVueWFuOiBFUlJPUjogRXhjZXB0aW9uIHRocm93biBmcm9tIHRoZSBcIiVzXCIgJyArICdCdW55YW4gc2VyaWFsaXplci4gVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLiBUaGlzIGlzIGEgYnVnJyArICdpbiB0aGF0IHNlcmlhbGl6ZXIgZnVuY3Rpb24uXFxuJXMnLCBuYW1lLCBlcnIuc3RhY2sgfHwgZXJyKSk7XG4gICAgICAgICAgICBmaWVsZHNbbmFtZV0gPSBmb3JtYXQoJyhFcnJvciBpbiBCdW55YW4gbG9nIFwiJXNcIiBzZXJpYWxpemVyIGJyb2tlIGZpZWxkLiBTZWUgc3RkZXJyIGZvciBkZXRhaWxzLiknLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbkxvZ2dlci5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbiBfZW1pdCAocmVjLCBub2VtaXQpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5oYXZlTm9uUmF3U3RyZWFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaGF2ZU5vblJhd1N0cmVhbXMgPSBmYWxzZTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzJDEuc3RyZWFtc1tpXS5yYXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzJDEuaGF2ZU5vblJhd1N0cmVhbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzdHI7XG4gICAgaWYgKG5vZW1pdCB8fCB0aGlzLmhhdmVOb25SYXdTdHJlYW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdHIgPSBKU09OLnN0cmluZ2lmeShyZWMsIHNhZmVDeWNsZXMoKSkgKyAnXFxuJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIGRlZHVwS2V5ID0gZS5zdGFjay5zcGxpdCgvXFxuL2csIDIpLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgX3dhcm4oJ2J1bnlhbjogRVJST1I6IEV4Y2VwdGlvbiBpbiAnICsgJ2BKU09OLnN0cmluZ2lmeShyZWMpYC4gWW91IGNhbiBpbnN0YWxsIHRoZSAnICsgJ1wic2FmZS1qc29uLXN0cmluZ2lmeVwiIG1vZHVsZSB0byBoYXZlIEJ1bnlhbiBmYWxsYmFjayAnICsgJ3RvIHNhZmVyIHN0cmluZ2lmaWNhdGlvbi4gUmVjb3JkOlxcbicgKyBfaW5kZW50KGZvcm1hdCgnJXNcXG4lcycsIHJlYywgZS5zdGFjaykpLCBkZWR1cEtleSk7XG4gICAgICAgICAgICBzdHIgPSBmb3JtYXQoJyhFeGNlcHRpb24gaW4gSlNPTi5zdHJpbmdpZnkocmVjKTogJWouIFNlZSBzdGRlcnIgZm9yIGRldGFpbHMuKVxcbicsIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZW1pdCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICB2YXIgbGV2ZWwgPSByZWMubGV2ZWw7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcyA9IHRoaXMkMS5zdHJlYW1zW2ldO1xuICAgICAgICBpZiAocy5sZXZlbCA8PSBsZXZlbCkge1xuICAgICAgICAgICAgcy5zdHJlYW0ud3JpdGUocmVjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcbmZ1bmN0aW9uIG1rTG9nRW1pdHRlcihtaW5MZXZlbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsb2cgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBta1JlY29yZChhcmdzKSB7XG4gICAgICAgICAgICB2YXIgZXhjbHVkZUZpZWxkcztcbiAgICAgICAgICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycjogbG9nLnNlcmlhbGl6ZXJzICYmIGxvZy5zZXJpYWxpemVycy5lcnIgPyBsb2cuc2VyaWFsaXplcnMuZXJyKGFyZ3NbMF0pIDogc3RkU2VyaWFsaXplcnMuZXJyKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBleGNsdWRlRmllbGRzID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnI6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtc2dBcmdzID0gW2ZpZWxkcy5lcnIubWVzc2FnZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIGZpZWxkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgbXNnQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBmaWVsZHMuZXJyICYmIGZpZWxkcy5lcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBtc2dBcmdzID0gW2ZpZWxkcy5lcnIubWVzc2FnZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZWMgPSBvYmpDb3B5KGxvZy5maWVsZHMpO1xuICAgICAgICAgICAgcmVjLmxldmVsID0gbWluTGV2ZWw7XG4gICAgICAgICAgICB2YXIgcmVjRmllbGRzID0gZmllbGRzID8gb2JqQ29weShmaWVsZHMpIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChyZWNGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9nLnNlcmlhbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5fYXBwbHlTZXJpYWxpemVycyhyZWNGaWVsZHMsIGV4Y2x1ZGVGaWVsZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZWNGaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjW2tdID0gcmVjRmllbGRzW2tdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjLmxldmVsTmFtZSA9IG5hbWVGcm9tTGV2ZWxbbWluTGV2ZWxdO1xuICAgICAgICAgICAgcmVjLm1zZyA9IG1zZ0FyZ3MubGVuZ3RoID8gZm9ybWF0LmFwcGx5KGxvZywgbXNnQXJncykgOiAnJztcbiAgICAgICAgICAgIGlmICghcmVjLnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZWMudGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9nLnNyYyAmJiAhcmVjLnNyYykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihDQUxMX1NUQUNLX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IGV4dHJhY3RTcmNGcm9tU3RhY2t0cmFjZShlcnIuc3RhY2ssIDIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiAhX2hhdmVXYXJuZWQoJ3NyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd2FybignVW5hYmxlIHRvIGRldGVybWluZSBzcmMgbGluZSBpbmZvJywgJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlYy5zcmMgPSBzcmMgfHwgJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjLnYgPSBMT0dfVkVSU0lPTjtcbiAgICAgICAgICAgIHJldHVybiByZWM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBmaWVsZHMgPSBudWxsO1xuICAgICAgICB2YXIgbXNnQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIHJlYyA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWwgPD0gbWluTGV2ZWw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGV2ZWwgPiBtaW5MZXZlbCkge30gZWxzZSB7XG4gICAgICAgICAgICByZWMgPSBta1JlY29yZChtc2dBcmdzKTtcbiAgICAgICAgICAgIHRoaXMuX2VtaXQocmVjKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbkxvZ2dlci5wcm90b3R5cGUudHJhY2UgPSBta0xvZ0VtaXR0ZXIoVFJBQ0UpO1xuTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IG1rTG9nRW1pdHRlcihERUJVRyk7XG5Mb2dnZXIucHJvdG90eXBlLmluZm8gPSBta0xvZ0VtaXR0ZXIoSU5GTyk7XG5Mb2dnZXIucHJvdG90eXBlLndhcm4gPSBta0xvZ0VtaXR0ZXIoV0FSTik7XG5Mb2dnZXIucHJvdG90eXBlLmVycm9yID0gbWtMb2dFbWl0dGVyKEVSUk9SKTtcbkxvZ2dlci5wcm90b3R5cGUuZmF0YWwgPSBta0xvZ0VtaXR0ZXIoRkFUQUwpO1xuZnVuY3Rpb24gZ2V0RnVsbEVycm9yU3RhY2soZXgpIHtcbiAgICB2YXIgcmV0ID0gZXguc3RhY2sgfHwgZXgudG9TdHJpbmcoKTtcbiAgICBpZiAoZXguY2F1c2UgJiYgdHlwZW9mIGV4LmNhdXNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjZXggPSBleC5jYXVzZSgpO1xuICAgICAgICBpZiAoY2V4KSB7XG4gICAgICAgICAgICByZXQgKz0gJ1xcbkNhdXNlZCBieTogJyArIGdldEZ1bGxFcnJvclN0YWNrKGNleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIHN0ZFNlcmlhbGl6ZXJzID0ge1xuICAgIGVycjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIWVyciB8fCAhZXJyLnN0YWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgIG5hbWU6IGVyci5uYW1lLFxuICAgICAgICAgICAgc3RhY2s6IGdldEZ1bGxFcnJvclN0YWNrKGVyciksXG4gICAgICAgICAgICBjb2RlOiBlcnIuY29kZSxcbiAgICAgICAgICAgIHNpZ25hbDogZXJyLnNpZ25hbFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIExvZ2dlciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbn1cblxudmFyIFRSQUNFJDIgPSAxMDtcbnZhciBERUJVRyQyID0gMjA7XG52YXIgSU5GTyQyID0gMzA7XG52YXIgV0FSTiQyID0gNDA7XG52YXIgRVJST1IkMiA9IDUwO1xudmFyIEZBVEFMJDIgPSA2MDtcbnZhciBsZXZlbEZyb21OYW1lJDIgPSB7XG4gICAgJ3RyYWNlJzogVFJBQ0UkMixcbiAgICAnZGVidWcnOiBERUJVRyQyLFxuICAgICdpbmZvJzogSU5GTyQyLFxuICAgICd3YXJuJzogV0FSTiQyLFxuICAgICdlcnJvcic6IEVSUk9SJDIsXG4gICAgJ2ZhdGFsJzogRkFUQUwkMlxufTtcbnZhciBuYW1lRnJvbUxldmVsJDEgPSB7fTtcbk9iamVjdC5rZXlzKGxldmVsRnJvbU5hbWUkMikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIG5hbWVGcm9tTGV2ZWwkMVtsZXZlbEZyb21OYW1lJDJbbmFtZV1dID0gbmFtZTtcbn0pO1xudmFyIERFRkFVTFRfQ1NTID0ge1xuICAgIGxldmVsczoge1xuICAgICAgICB0cmFjZTogJ2NvbG9yOiBEZWVwUGluaycsXG4gICAgICAgIGRlYnVnOiAnY29sb3I6IEdvbGRlblJvZCcsXG4gICAgICAgIGluZm86ICdjb2xvcjogRGFya1R1cnF1b2lzZScsXG4gICAgICAgIHdhcm46ICdjb2xvcjogUHVycGxlJyxcbiAgICAgICAgZXJyb3I6ICdjb2xvcjogQ3JpbXNvbicsXG4gICAgICAgIGZhdGFsOiAnY29sb3I6IEJsYWNrJ1xuICAgIH0sXG4gICAgZGVmOiAnY29sb3I6IERpbUdyYXknLFxuICAgIG1zZzogJ2NvbG9yOiBTdGVlbEJsdWUnLFxuICAgIHNyYzogJ2NvbG9yOiBEaW1HcmF5OyBmb250LXN0eWxlOiBpdGFsaWM7IGZvbnQtc2l6ZTogMC45ZW0nXG59O1xudmFyIENvbnNvbGVGb3JtYXR0ZWRTdHJlYW0gPSBmdW5jdGlvbiBDb25zb2xlRm9ybWF0dGVkU3RyZWFtKHJlZikge1xuICAgIGlmIChyZWYgPT09IHZvaWQgMCkgXG4gICAgICAgIHsgcmVmID0ge307IH1cbiAgICB2YXIgbG9nQnlMZXZlbCA9IHJlZi5sb2dCeUxldmVsO1xuICAgIGlmIChsb2dCeUxldmVsID09PSB2b2lkIDApIFxuICAgICAgICB7IGxvZ0J5TGV2ZWwgPSBmYWxzZTsgfVxuICAgIHZhciBjc3MgPSByZWYuY3NzO1xuICAgIGlmIChjc3MgPT09IHZvaWQgMCkgXG4gICAgICAgIHsgY3NzID0gREVGQVVMVF9DU1M7IH1cbiAgICB0aGlzLmxvZ0J5TGV2ZWwgPSBsb2dCeUxldmVsO1xuICAgIHRoaXMuY3NzID0gY3NzO1xufTtcbkNvbnNvbGVGb3JtYXR0ZWRTdHJlYW0ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUocmVjKSB7XG4gICAgdmFyIGxldmVsQ3NzLCBjb25zb2xlTWV0aG9kO1xuICAgIHZhciBkZWZhdWx0Q3NzID0gdGhpcy5jc3MuZGVmO1xuICAgIHZhciBtc2dDc3MgPSB0aGlzLmNzcy5tc2c7XG4gICAgdmFyIHNyY0NzcyA9IHRoaXMuY3NzLnNyYztcbiAgICB2YXIgbG9nZ2VyTmFtZSA9IHJlYy5jaGlsZE5hbWUgPyByZWMubmFtZSArICcvJyArIHJlYy5jaGlsZE5hbWUgOiByZWMubmFtZTtcbiAgICB2YXIgbGV2ZWxOYW1lID0gbmFtZUZyb21MZXZlbCQxW3JlYy5sZXZlbF07XG4gICAgdmFyIGZvcm1hdHRlZExldmVsTmFtZSA9IChBcnJheSg2IC0gbGV2ZWxOYW1lLmxlbmd0aCkuam9pbignICcpICsgbGV2ZWxOYW1lKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmICh0aGlzLmxvZ0J5TGV2ZWwpIHtcbiAgICAgICAgaWYgKHJlYy5sZXZlbCA9PT0gVFJBQ0UkMikge1xuICAgICAgICAgICAgbGV2ZWxOYW1lID0gJ2RlYnVnJztcbiAgICAgICAgfSBlbHNlIGlmIChyZWMubGV2ZWwgPT09IEZBVEFMJDIpIHtcbiAgICAgICAgICAgIGxldmVsTmFtZSA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZU1ldGhvZCA9IHR5cGVvZiBjb25zb2xlW2xldmVsTmFtZV0gPT09ICdmdW5jdGlvbicgPyBjb25zb2xlW2xldmVsTmFtZV0gOiBjb25zb2xlLmxvZztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlTWV0aG9kID0gY29uc29sZS5sb2c7XG4gICAgfVxuICAgIGlmIChyZWMubGV2ZWwgPCBERUJVRyQyKSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLnRyYWNlO1xuICAgIH0gZWxzZSBpZiAocmVjLmxldmVsIDwgSU5GTyQyKSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLmRlYnVnO1xuICAgIH0gZWxzZSBpZiAocmVjLmxldmVsIDwgV0FSTiQyKSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLmluZm87XG4gICAgfSBlbHNlIGlmIChyZWMubGV2ZWwgPCBFUlJPUiQyKSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLndhcm47XG4gICAgfSBlbHNlIGlmIChyZWMubGV2ZWwgPCBGQVRBTCQyKSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLmVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsQ3NzID0gdGhpcy5jc3MubGV2ZWxzLmZhdGFsO1xuICAgIH1cbiAgICB2YXIgcGFkWmVyb3MgPSBmdW5jdGlvbiAobnVtYmVyLCBsZW4pIHtcbiAgICAgICAgcmV0dXJuIEFycmF5KGxlbiArIDEgLSAobnVtYmVyICsgJycpLmxlbmd0aCkuam9pbignMCcpICsgbnVtYmVyO1xuICAgIH07XG4gICAgdmFyIGxvZ0FyZ3MgPSBbXTtcbiAgICBsb2dBcmdzLnB1c2goXCJbJXM6JXM6JXM6JXNdICVjJXMlYzogJXM6ICVjJXMgXCIgKyAocmVjLnNyYyA/ICclYyVzJyA6ICcnKSk7XG4gICAgbG9nQXJncy5wdXNoKHBhZFplcm9zKHJlYy50aW1lLmdldEhvdXJzKCksIDIpKTtcbiAgICBsb2dBcmdzLnB1c2gocGFkWmVyb3MocmVjLnRpbWUuZ2V0TWludXRlcygpLCAyKSk7XG4gICAgbG9nQXJncy5wdXNoKHBhZFplcm9zKHJlYy50aW1lLmdldFNlY29uZHMoKSwgMikpO1xuICAgIGxvZ0FyZ3MucHVzaChwYWRaZXJvcyhyZWMudGltZS5nZXRNaWxsaXNlY29uZHMoKSwgNCkpO1xuICAgIGxvZ0FyZ3MucHVzaChsZXZlbENzcyk7XG4gICAgbG9nQXJncy5wdXNoKGZvcm1hdHRlZExldmVsTmFtZSk7XG4gICAgbG9nQXJncy5wdXNoKGRlZmF1bHRDc3MpO1xuICAgIGxvZ0FyZ3MucHVzaChsb2dnZXJOYW1lKTtcbiAgICBsb2dBcmdzLnB1c2gobXNnQ3NzKTtcbiAgICBsb2dBcmdzLnB1c2gocmVjLm1zZyk7XG4gICAgaWYgKHJlYy5zcmMpIHtcbiAgICAgICAgbG9nQXJncy5wdXNoKHNyY0Nzcyk7XG4gICAgICAgIGxvZ0FyZ3MucHVzaChyZWMuc3JjKTtcbiAgICB9XG4gICAgY29uc29sZU1ldGhvZC5hcHBseShjb25zb2xlLCBsb2dBcmdzKTtcbiAgICBpZiAocmVjLmVyciAmJiByZWMuZXJyLnN0YWNrKSB7XG4gICAgICAgIGNvbnNvbGVNZXRob2QuY2FsbChjb25zb2xlLCAnJWMlcywnLCBsZXZlbENzcywgcmVjLmVyci5zdGFjayk7XG4gICAgfVxuICAgIGlmIChyZWMub2JqKSB7XG4gICAgICAgIGNvbnNvbGVNZXRob2QuY2FsbChjb25zb2xlLCByZWMub2JqKTtcbiAgICB9XG59O1xuQ29uc29sZUZvcm1hdHRlZFN0cmVhbS5nZXREZWZhdWx0Q3NzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdENzcygpIHtcbiAgICByZXR1cm4gREVGQVVMVF9DU1M7XG59O1xuXG5leHBvcnQgeyBUUkFDRSwgREVCVUcsIElORk8sIFdBUk4sIEVSUk9SLCBGQVRBTCwgcmVzb2x2ZUxldmVsLCBsZXZlbEZyb21OYW1lLCBuYW1lRnJvbUxldmVsLCBzdGRTZXJpYWxpemVycywgTG9nZ2VyLCBjcmVhdGVMb2dnZXIsIHNhZmVDeWNsZXMsIENvbnNvbGVGb3JtYXR0ZWRTdHJlYW0sIENvbnNvbGVSYXdTdHJlYW0gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm0uanMubWFwXG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGdldFJlZDVQcm9TREs6ICgpID0+IHtcbiAgICByZXR1cm4gd2luZG93LnJlZDVwcm9zZGtcbiAgfVxufVxuIiwiLyoqXG4gKiBNYWluIGVudHJ5IG9mIFN0cmVhbSBNYW5hZ2VyIEV4dGVuc2lvbiBmb3IgUmVkNSBQcm8gSFRNTCBTREssIGFjY2Vzc2libGUgb24gdGhlIGB3aW5kb3dgIGdsb2JhbCBhdCBgcmVkNXByb3Nka19leHRfc3RyZWFtX21hbmFnZXJgLlxuICpcbiAqIEBmaWxlIHJlZDVwcm8tZXh0LXN0cmVhbS1tYW5hZ2VyLm1pbi5qc1xuICogQG1vZHVsZSByZWQ1cHJvc2RrX2V4dF9zdHJlYW1fbWFuYWdlclxuICpcbiAqXG4gKi9cblxuLy8gU0RLX1ZFUlNJT04sIExPR19MRVZFTCBpbmplY3RlZCBmcm9tIHdlYnBhY2sgYnVpbGQuXG5pbXBvcnQgeyBMRVZFTFMsIGVzdGFibGlzaExvZ2dlciB9IGZyb20gJy4vbG9nJ1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIGFzIF9nZXRMb2dnZXIgfSBmcm9tICcuL2xvZydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudi9icm93c2VyJ1xuXG5lc3RhYmxpc2hMb2dnZXIoYCR7TE9HX0xFVkVMfWAgfHwgTEVWRUxTLkRFQlVHKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbi8qKlxuICogU2V0cyB0aGUgbG9nIGxldmVsIGZvciBsb2dzIGZyb20gdGhlIFNES1xuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsXG4gKiAgICBUaGUgc3BlY2lmaWVkIGxvZyBsZXZlbC5cbiAqIEBzZWUgTE9HX0xFVkVMU1xuICovXG5leHBvcnQgY29uc3Qgc2V0TG9nTGV2ZWwgPSAobGV2ZWwpID0+IHtcbiAgaWYgKExFVkVMUy5oYXNPd25Qcm9wZXJ0eShsZXZlbC50b1VwcGVyQ2FzZSgpKSkge1xuICAgIGVzdGFibGlzaExvZ2dlcihsZXZlbClcbiAgICBpZiAoY29uc29sZSkge1xuICAgICAgY29uc29sZS5sb2coYFJlZDUgUHJvIFN0cmVhbSBNYW5hZ2VyIEV4dGVuc2lvbiAke1NES19WRVJTSU9OfWApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYsbm8tY29uc29sZVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoZSBlbnVtZXJhdGVkIGxvZyBsZXZlbCBTdHJpbmdzLlxuICogICAgKiBgVFJBQ0VgXG4gKiAgICAqIGBJTkZPYFxuICogICAgKiBgREVCVUdgXG4gKiAgICAqIGBXQVJOYFxuICogICAgKiBgRVJST1JgXG4gKiAgICAqIGBGQVRBTGBcbiAqL1xuZXhwb3J0IGNvbnN0IExPR19MRVZFTFMgPSBMRVZFTFNcbi8qKlxuICogUmV0cmlldmVzIHRoZSBMb2dnZXIgaW5zdGFuY2UgdXNlZCBieSB0aGUgU0RLLlxuICpcbiAqIEByZXR1cm5zIHtMb2dnZXJ9XG4gKiAgICAgICAgICBUaGUgbG9nZ2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VyID0gX2dldExvZ2dlclxuXG5leHBvcnQgY29uc3QgZGVjb3JhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZDVwcm9zZGsgPSBlbnZpcm9ubWVudC5nZXRSZWQ1UHJvU0RLKClcbiAgaWYgKHJlZDVwcm9zZGspIHtcbiAgICBnZXRMb2dnZXIoKS5kZWJ1ZygnV2lsbCBEZWNvcmF0ZSBVKzFGOTg3JylcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKCdDb3VsZCBub3QgZGVjb3JhdGUgdGhlIHJlZDVwcm9zZGsgZ2xvYmFsLiBJdCBkb2VzIG5vdCBleGlzdC4nKVxuICB9XG59XG4iLCJpbXBvcnQgeyBuYW1lRnJvbUxldmVsIH0gZnJvbSAnYnJvd3Nlci1idW55YW4nXG5cbi8qKlxuICogQ3VzdG9tIGxvZ2dlciBmb3IgYnVueW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBSYXdTdHJlYW0ge1xuICB3cml0ZSAocmVjKSB7XG4gICAgY29uc29sZS5sb2coJyVzIC0gWyVzXSAlczogJXMnLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIHJlYy50aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICByZWMubmFtZSxcbiAgICAgIG5hbWVGcm9tTGV2ZWxbcmVjLmxldmVsXSxcbiAgICAgIHJlYy5tc2dcbiAgICApXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnYnJvd3Nlci1idW55YW4nXG5pbXBvcnQgeyBSYXdTdHJlYW0gfSBmcm9tICcuL2J1bnlhbi13cml0ZXInXG5cbmxldCBsb2dnZXJcblxuY29uc3QgZm9ybWF0TWVzc2FnZSA9IChkaXNwYXRjaGVyKSA9PiB7XG4gIHJldHVybiBtZXNzYWdlID0+IHtcbiAgICByZXR1cm4gYCgke2Rpc3BhdGNoZXJ9KSAke21lc3NhZ2V9YFxuICB9XG59XG5cbmNvbnN0IGRlY29yYXRlID0gKGxldmVsKSA9PiB7XG4gIHJldHVybiAoc291cmNlLCBtZXNzYWdlKSA9PiB7XG4gICAgbG9nZ2VyW2xldmVsXShmb3JtYXRNZXNzYWdlKHNvdXJjZSkobWVzc2FnZSkpXG4gIH1cbn1cblxuLypcbiAqIFRoZSBsb2cgbGV2ZWxzIHN1cHBvcnRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IExFVkVMUyA9IHtcbiAgVFJBQ0U6ICd0cmFjZScsXG4gIElORk86ICdpbmZvJyxcbiAgREVCVUc6ICdkZWJ1ZycsXG4gIFdBUk46ICd3YXJuJyxcbiAgRVJST1I6ICdlcnJvcicsXG4gIEZBVEFMOiAnZmF0YWwnXG59XG5cbi8qKlxuICogRXN0YWJsaXNoIGxvZ2dlciB0byB1c2UgYXQgbGV2ZWwuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxldmVsXG4gKiAgICAgICAgVGhlIGxldmVsIHR5cGUgZnJvbSBgTEVWRUxTYC5cbiAqIEBwYXJhbSB7QXJyYXl9IHN0cmVhbUxpc3RcbiAqICAgICAgICBUaGUgc3RyZWFtTGlzdCB0byB1c2UgaW4gY3JlYXRpbmcgYnVueW9uLWJhc2VkIGxvZ2dlci5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZXN0YWJsaXNoTG9nZ2VyID0gKGxldmVsLCBzdHJlYW1MaXN0ID0gdW5kZWZpbmVkKSA9PiB7XG4gIGxldCBzdHJlYW1zID0gW11cbiAgc3RyZWFtcy5wdXNoKHtcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAgc3RyZWFtOiBuZXcgUmF3U3RyZWFtKCksXG4gICAgdHlwZTogJ3JhdydcbiAgfSlcbiAgaWYgKHN0cmVhbUxpc3QpIHtcbiAgICBjb25zdCBsaXN0ID0gc3RyZWFtTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLmxldmVsID0gbGV2ZWxcbiAgICB9KVxuICAgIHN0cmVhbXMgPSBzdHJlYW1zLmNvbmNhdChsaXN0KVxuICB9XG4gIGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XG4gICAgbGV2ZWw6IGxldmVsLFxuICAgIG5hbWU6ICdyZWQ1cHJvLWV4dC1zbScsXG4gICAgc3RyZWFtczogc3RyZWFtc1xuICB9KVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgZGV0ZXJtaW5lZCBsb2dnZXIgaW5zdGFuY2UuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRMb2dnZXIgPSAoKSA9PiB7XG4gIHJldHVybiBsb2dnZXJcbn1cblxuLyogUXVpY2sgYWNjZXNzIHRvIGxvZ2dlciBsZXZlbCB0eXBlcy4gKi9cbmV4cG9ydCBjb25zdCB0cmFjZSA9IGRlY29yYXRlKExFVkVMUy5UUkFDRSlcbmV4cG9ydCBjb25zdCBpbmZvID0gZGVjb3JhdGUoTEVWRUxTLklORk8pXG5leHBvcnQgY29uc3QgZGVidWcgPSBkZWNvcmF0ZShMRVZFTFMuREVCVUcpXG5leHBvcnQgY29uc3Qgd2FybiA9IGRlY29yYXRlKExFVkVMUy5XQVJOKVxuZXhwb3J0IGNvbnN0IGVycm9yID0gZGVjb3JhdGUoTEVWRUxTLkVSUk9SKVxuZXhwb3J0IGNvbnN0IGZhdGFsID0gZGVjb3JhdGUoTEVWRUxTLkZBVEFMKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==