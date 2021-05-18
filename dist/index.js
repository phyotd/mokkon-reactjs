function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
var core = require('@material-ui/core');
var styles$1 = require('@material-ui/core/styles');
var Popper = _interopDefault(require('@material-ui/core/Popper'));
var ListSubheader = _interopDefault(require('@material-ui/core/ListSubheader'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Chip = _interopDefault(require('@material-ui/core/Chip'));
var utils = require('@material-ui/core/utils');
var Table$1 = _interopDefault(require('@material-ui/core/Table'));
var TableBody$1 = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell$1 = _interopDefault(require('@material-ui/core/TableCell'));
var TableContainer$1 = _interopDefault(require('@material-ui/core/TableContainer'));
var TableHead$1 = _interopDefault(require('@material-ui/core/TableHead'));
var TablePagination = _interopDefault(require('@material-ui/core/TablePagination'));
var TableRow$1 = _interopDefault(require('@material-ui/core/TableRow'));
var TableSortLabel = _interopDefault(require('@material-ui/core/TableSortLabel'));

function List(_ref) {
  var groupName = _ref.groupName,
      _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members;
  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement("h1", null, "1.0.3"), /*#__PURE__*/React$1__default.createElement("h5", null, "Group: ", /*#__PURE__*/React$1__default.createElement("em", null, groupName)), /*#__PURE__*/React$1__default.createElement("ul", null, /*#__PURE__*/React$1__default.createElement("p", null, "Members"), members.map(function (member) {
    return /*#__PURE__*/React$1__default.createElement("li", {
      key: member
    }, member);
  })));
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

/**
 * @ignore - internal component.
 */

var CloseIcon = utils.createSvgIcon( /*#__PURE__*/React$1.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

/**
 * @ignore - internal component.
 */

var ArrowDropDownIcon = utils.createSvgIcon( /*#__PURE__*/React$1.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

// Give up on IE 11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$ignoreAccents = config.ignoreAccents,
      ignoreAccents = _config$ignoreAccents === void 0 ? true : _config$ignoreAccents,
      _config$ignoreCase = config.ignoreCase,
      ignoreCase = _config$ignoreCase === void 0 ? true : _config$ignoreCase,
      limit = config.limit,
      _config$matchFrom = config.matchFrom,
      matchFrom = _config$matchFrom === void 0 ? 'any' : _config$matchFrom,
      stringify = config.stringify,
      _config$trim = config.trim,
      trim = _config$trim === void 0 ? false : _config$trim;
  return function (options, _ref) {
    var inputValue = _ref.inputValue,
        getOptionLabel = _ref.getOptionLabel;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(function (option) {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE 11 support.

function findIndex(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'useAutocomplete' : _props$componentName,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$filterOptions = props.filterOptions,
      filterOptions = _props$filterOptions === void 0 ? defaultFilterOptions : _props$filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabelProp = _props$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _props$getOptionLabel,
      _props$getOptionSelec = props.getOptionSelected,
      getOptionSelected = _props$getOptionSelec === void 0 ? function (option, value) {
    return option === value;
  } : _props$getOptionSelec,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      options = props.options,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      valueProp = props.value;
  var id = utils.unstable_useId(idProp);
  var getOptionLabel = getOptionLabelProp;

  if (process.env.NODE_ENV !== 'production') {
    getOptionLabel = function getOptionLabel(option) {
      var optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {
        var erroneousReturn = optionLabel === undefined ? 'undefined' : "".concat(_typeof(optionLabel), " (").concat(optionLabel, ")");
        console.error("Material-UI: The `getOptionLabel` method of ".concat(componentName, " returned ").concat(erroneousReturn, " instead of a string for ").concat(JSON.stringify(option), "."));
      }

      return optionLabel;
    };
  }

  var ignoreFocus = React$1.useRef(false);
  var firstFocus = React$1.useRef(true);
  var inputRef = React$1.useRef(null);
  var listboxRef = React$1.useRef(null);

  var _React$useState = React$1.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React$1.useState(-1),
      focusedTag = _React$useState2[0],
      setFocusedTag = _React$useState2[1];

  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = React$1.useRef(defaultHighlighted);

  var _useControlled = utils.useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var _useControlled3 = utils.useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  }),
      _useControlled4 = _slicedToArray(_useControlled3, 2),
      inputValue = _useControlled4[0],
      setInputValue = _useControlled4[1];

  var _React$useState3 = React$1.useState(false),
      focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var resetInputValue = utils.useEventCallback(function (event, newValue) {
    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  React$1.useEffect(function () {
    resetInputValue(null, value);
  }, [value, resetInputValue]);

  var _useControlled5 = utils.useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  }),
      _useControlled6 = _slicedToArray(_useControlled5, 2),
      open = _useControlled6[0],
      setOpenState = _useControlled6[1];

  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(function (option) {
    if (filterSelectedOptions && (multiple ? value : [value]).some(function (value2) {
      return value2 !== null && getOptionSelected(option, value2);
    })) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue ? '' : inputValue,
    getOptionLabel: getOptionLabel
  }) : [];

  if (process.env.NODE_ENV !== 'production') {
    if (value !== null && !freeSolo && options.length > 0) {
      var missingValue = (multiple ? value : [value]).filter(function (value2) {
        return !options.some(function (option) {
          return getOptionSelected(option, value2);
        });
      });

      if (missingValue.length > 0) {
        console.warn(["Material-UI: The value provided to ".concat(componentName, " is invalid."), "None of the options match with `".concat(missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0]), "`."), 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  var focusTag = utils.useEventCallback(function (tagToFocus) {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  React$1.useEffect(function () {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : option && (option.disabled || option.getAttribute('aria-disabled') === 'true');

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = utils.useEventCallback(function (_ref2) {
    var event = _ref2.event,
        index = _ref2.index,
        _ref2$reason = _ref2.reason,
        reason = _ref2$reason === void 0 ? 'auto' : _ref2$reason;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true'); // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = utils.useEventCallback(function (_ref3) {
    var event = _ref3.event,
        diff = _ref3.diff,
        _ref3$direction = _ref3.direction,
        direction = _ref3$direction === void 0 ? 'next' : _ref3$direction,
        _ref3$reason = _ref3.reason,
        reason = _ref3$reason === void 0 ? 'auto' : _ref3$reason;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = function getNextIndex() {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason: reason,
      event: event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = React$1.useCallback(function () {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (!filterSelectedOptions && valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, function (val) {
        return getOptionSelected(currentOption, val);
      }) !== -1) {
        return;
      }

      var itemIndex = findIndex(filteredOptions, function (optionItem) {
        return getOptionSelected(optionItem, valueItem);
      });

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  // eslint-disable-next-line react-hooks/exhaustive-deps
  filteredOptions.length === 0, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = utils.useEventCallback(function (node) {
    utils.setRef(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  React$1.useEffect(function () {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = function handleOpen(event) {
    if (open) {
      return;
    }

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event, reason) {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = function handleValue(event, newValue, reason, details) {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  var isTouch = React$1.useRef(false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'select-option';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (process.env.NODE_ENV !== 'production') {
        var matches = newValue.filter(function (val) {
          return getOptionSelected(option, val);
        });

        if (matches.length > 1) {
          console.error(["Material-UI: The `getOptionSelected` method of ".concat(componentName, " do not handle the arguments correctly."), "The component expects a single value to match a given option but found ".concat(matches.length, " matches.")].join('\n'));
        }
      }

      var itemIndex = findIndex(newValue, function (valueItem) {
        return getOptionSelected(option, valueItem);
      });

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option: option
    });

    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (option && (!option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true')) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = function handleFocusTag(event, direction) {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = function handleClear(event) {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = function handleKeyDown(other) {
    return function (event) {
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          // Wait until IME is settled.
          if (event.which === 229) {
            break;
          }

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // We don't want to validate the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;
      }

      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    // Ignore the event when using the scrollbar with IE 11
    if (listboxRef.current !== null && document.activeElement === listboxRef.current.parentElement) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = function handleOptionMouseOver(event) {
    setHighlightedIndex({
      event: event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = function handleOptionTouchStart() {
    isTouch.current = true;
  };

  var handleOptionClick = function handleOptionClick(event) {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  var handleTagDelete = function handleTagDelete(index) {
    return function (event) {
      var newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };
  };

  var handlePopupIndicator = function handlePopupIndicator(event) {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = function handleMouseDown(event) {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = function handleClick() {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = function handleInputMouseDown(event) {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce(function (acc, option, index) {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (indexBy.get(group) && !warn) {
            console.warn("Material-UI: The options provided combined with the `groupBy` method of ".concat(componentName, " returns duplicated headers."), 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index: index,
          group: group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _extends$1({
        'aria-owns': popupOpen ? "".concat(id, "-popup") : null,
        role: 'combobox',
        'aria-expanded': popupOpen
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: function getInputLabelProps() {
      return {
        id: "".concat(id, "-label"),
        htmlFor: id
      };
    },
    getInputProps: function getInputProps() {
      return {
        id: id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': popupOpen ? "".concat(id, "-popup") : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      };
    },
    getClearProps: function getClearProps() {
      return {
        tabIndex: -1,
        onClick: handleClear
      };
    },
    getPopupIndicatorProps: function getPopupIndicatorProps() {
      return {
        tabIndex: -1,
        onClick: handlePopupIndicator
      };
    },
    getTagProps: function getTagProps(_ref4) {
      var index = _ref4.index;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: function getListboxProps() {
      return {
        role: 'listbox',
        id: "".concat(id, "-popup"),
        'aria-labelledby': "".concat(id, "-label"),
        ref: handleListboxRef,
        onMouseDown: function onMouseDown(event) {
          // Prevent blur
          event.preventDefault();
        }
      };
    },
    getOptionProps: function getOptionProps(_ref5) {
      var index = _ref5.index,
          option = _ref5.option;
      var selected = (multiple ? value : [value]).some(function (value2) {
        return value2 != null && getOptionSelected(option, value2);
      });
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id: id,
    inputValue: inputValue,
    value: value,
    dirty: dirty,
    popupOpen: popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    focusedTag: focusedTag,
    groupedOptions: groupedOptions
  };
}

var styles = function styles(theme) {
  var _option;

  return {
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicatorDirty': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicatorDirty': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-marginDense"]': {
        '& $input': {
          padding: '4px 4px 5px'
        },
        '& $input:first-child': {
          padding: '3px 0 6px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
        padding: 6,
        '& $input': {
          padding: '4.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '4.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the clear indicator if the input is dirty. */
    clearIndicatorDirty: {},

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the `Paper` component. */
    paper: _extends$1({}, theme.typography.body1, {
      overflow: 'hidden',
      margin: '4px 0'
    }),

    /* Styles applied to the `listbox` component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: (_option = {
      minHeight: 48,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16
    }, _defineProperty(_option, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    }), _defineProperty(_option, '&[aria-selected="true"]', {
      backgroundColor: theme.palette.action.selected
    }), _defineProperty(_option, '&[data-focus="true"]', {
      backgroundColor: theme.palette.action.hover
    }), _defineProperty(_option, '&:active', {
      backgroundColor: theme.palette.action.selected
    }), _defineProperty(_option, '&[aria-disabled="true"]', {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }), _option),

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  };
};

function DisablePortal(props) {
  // eslint-disable-next-line react/prop-types
  var other = _objectWithoutProperties(props, ["anchorEl", "open"]);

  return /*#__PURE__*/React$1.createElement("div", other);
}

var _ref = /*#__PURE__*/React$1.createElement(CloseIcon, {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/React$1.createElement(ArrowDropDownIcon, null);

var Autocomplete = /*#__PURE__*/React$1.forwardRef(function Autocomplete(props, ref) {
  /* eslint-disable no-unused-vars */
  var ChipProps = props.ChipProps,
      classes = props.classes,
      className = props.className,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? _ref : _props$closeIcon,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$forcePopupIcon = props.forcePopupIcon,
      forcePopupIcon = _props$forcePopupIcon === void 0 ? 'auto' : _props$forcePopupIcon,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$getLimitTagsTe = props.getLimitTagsText,
      getLimitTagsText = _props$getLimitTagsTe === void 0 ? function (more) {
    return "+".concat(more);
  } : _props$getLimitTagsTe,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabel = _props$getOptionLabel === void 0 ? function (x) {
    return x;
  } : _props$getOptionLabel,
      groupBy = props.groupBy,
      _props$limitTags = props.limitTags,
      limitTags = _props$limitTags === void 0 ? -1 : _props$limitTags,
      _props$ListboxCompone = props.ListboxComponent,
      ListboxComponent = _props$ListboxCompone === void 0 ? 'ul' : _props$ListboxCompone,
      ListboxProps = props.ListboxProps,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? 'Loading…' : _props$loadingText,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$noOptionsText = props.noOptionsText,
      noOptionsText = _props$noOptionsText === void 0 ? 'No options' : _props$noOptionsText,
      _props$openText = props.openText,
      openText = _props$openText === void 0 ? 'Open' : _props$openText,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? Paper : _props$PaperComponent,
      _props$PopperComponen = props.PopperComponent,
      PopperComponentProp = _props$PopperComponen === void 0 ? Popper : _props$PopperComponen,
      _props$popupIcon = props.popupIcon,
      popupIcon = _props$popupIcon === void 0 ? _ref2 : _props$popupIcon,
      renderGroupProp = props.renderGroup,
      renderInput = props.renderInput,
      renderOptionProp = props.renderOption,
      renderTags = props.renderTags,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = _objectWithoutProperties(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearOnBlur", "clearOnEscape", "clearText", "closeIcon", "closeText", "debug", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable no-unused-vars */


  var PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  var _useAutocomplete = useAutocomplete(_extends$1({}, props, {
    componentName: 'Autocomplete'
  })),
      getRootProps = _useAutocomplete.getRootProps,
      getInputProps = _useAutocomplete.getInputProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getPopupIndicatorProps = _useAutocomplete.getPopupIndicatorProps,
      getClearProps = _useAutocomplete.getClearProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      value = _useAutocomplete.value,
      dirty = _useAutocomplete.dirty,
      id = _useAutocomplete.id,
      popupOpen = _useAutocomplete.popupOpen,
      focused = _useAutocomplete.focused,
      focusedTag = _useAutocomplete.focusedTag,
      anchorEl = _useAutocomplete.anchorEl,
      setAnchorEl = _useAutocomplete.setAnchorEl,
      inputValue = _useAutocomplete.inputValue,
      groupedOptions = _useAutocomplete.groupedOptions;

  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = function getCustomizedTagProps(params) {
      return _extends$1({
        className: clsx(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled: disabled
      }, getTagProps(params));
    };

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map(function (option, index) {
        return /*#__PURE__*/React$1.createElement(Chip, _extends$1({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index: index
        }), ChipProps));
      });
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/React$1.createElement("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  var defaultRenderGroup = function defaultRenderGroup(params) {
    return /*#__PURE__*/React$1.createElement("li", {
      key: params.key
    }, /*#__PURE__*/React$1.createElement(ListSubheader, {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/React$1.createElement("ul", {
      className: classes.groupUl
    }, params.children));
  };

  var renderGroup = renderGroupProp || defaultRenderGroup;
  var renderOption = renderOptionProp || getOptionLabel;

  var renderListOption = function renderListOption(option, index) {
    var optionProps = getOptionProps({
      option: option,
      index: index
    });
    return /*#__PURE__*/React$1.createElement("li", _extends$1({}, optionProps, {
      className: classes.option
    }), renderOption(option, {
      selected: optionProps['aria-selected'],
      inputValue: inputValue
    }));
  };

  var hasClearIcon = !disableClearable && !disabled;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", _extends$1({
    ref: ref,
    className: clsx(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id: id,
    disabled: disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment: startAdornment,
      endAdornment: /*#__PURE__*/React$1.createElement("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/React$1.createElement(IconButton, _extends$1({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: clsx(classes.clearIndicator, dirty && classes.clearIndicatorDirty)
      }), closeIcon) : null, hasPopupIcon ? /*#__PURE__*/React$1.createElement(IconButton, _extends$1({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: clsx(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: _extends$1({
      className: clsx(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled: disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/React$1.createElement(PopperComponent, {
    className: clsx(classes.popper, disablePortal && classes.popperDisablePortal),
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/React$1.createElement(PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/React$1.createElement("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/React$1.createElement("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/React$1.createElement(ListboxComponent, _extends$1({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map(function (option, index) {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map(function (option2, index2) {
          return renderListOption(option2, option.index + index2);
        })
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
process.env.NODE_ENV !== "production" ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: propTypes.bool,

  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: propTypes.bool,

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: propTypes.bool,

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   */
  blurOnSelect: propTypes.oneOfType([propTypes.oneOf(['mouse', 'touch']), propTypes.bool]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: propTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: propTypes.object,

  /**
   * @ignore
   */
  className: propTypes.string,

  /**
   * If `true`, the input's text will be cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   */
  clearOnBlur: propTypes.bool,

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: propTypes.bool,

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  clearText: propTypes.string,

  /**
   * The icon to display in place of the default close icon.
   */
  closeIcon: propTypes.node,

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: propTypes.string,

  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: propTypes.bool,

  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: propTypes.any,

  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: propTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: propTypes.bool,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: propTypes.bool,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: propTypes.bool,

  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: propTypes.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: propTypes.bool,

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: propTypes.func,

  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: propTypes.bool,

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: propTypes.oneOfType([propTypes.oneOf(['auto']), propTypes.bool]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: propTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: propTypes.bool,

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   */
  getLimitTagsText: propTypes.func,

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: propTypes.func,

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel: propTypes.func,

  /**
   * Used to determine if an option is selected, considering the current value.
   * Uses strict equality by default.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: propTypes.func,

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: propTypes.func,

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: propTypes.bool,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: propTypes.string,

  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: propTypes.bool,

  /**
   * The input value.
   */
  inputValue: propTypes.string,

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   */
  limitTags: propTypes.number,

  /**
   * The component used to render the listbox.
   */
  ListboxComponent: propTypes.elementType,

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: propTypes.object,

  /**
   * If `true`, the component is in a loading state.
   */
  loading: propTypes.bool,

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  loadingText: propTypes.node,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: propTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  noOptionsText: propTypes.node,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: propTypes.func,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose: propTypes.func,

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: propTypes.func,

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: propTypes.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: propTypes.func,

  /**
   * Control the popup` open state.
   */
  open: propTypes.bool,

  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: propTypes.bool,

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  openText: propTypes.string,

  /**
   * Array of options.
   */
  options: propTypes.array.isRequired,

  /**
   * The component used to render the body of the popup.
   */
  PaperComponent: propTypes.elementType,

  /**
   * The component used to position the popup.
   */
  PopperComponent: propTypes.elementType,

  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon: propTypes.node,

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: propTypes.func,

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: propTypes.func.isRequired,

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: propTypes.func,

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: propTypes.func,

  /**
   * If `true`, the input's text will be selected on focus.
   * It helps the user clear the selected value.
   */
  selectOnFocus: propTypes.bool,

  /**
   * The size of the autocomplete.
   */
  size: propTypes.oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: propTypes.any
} : void 0;
var Autocomplete$1 = styles$1.withStyles(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete);

var filter = createFilterOptions();
var BootstrapInput = styles$1.withStyles(function (theme) {
  return {
    root: {
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'transparent',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  };
})(core.InputBase);
var useStyles = styles$1.makeStyles(function (theme) {
  return {
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    }
  };
});

function FieldList(props) {
  var classes = useStyles();
  var _props$fields = props.fields,
      fields = _props$fields === void 0 ? [] : _props$fields,
      _props$updateData = props.updateData,
      updateData = _props$updateData === void 0 ? {} : _props$updateData,
      _props$isNew = props.isNew,
      isNew = _props$isNew === void 0 ? false : _props$isNew,
      currentTabName = props.currentTabName,
      onCanCreateNew = props.onCanCreateNew,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions;

  var _React$useState = React$1__default.useState(updateData != undefined ? updateData : {}),
      data = _React$useState[0],
      setDataField = _React$useState[1];

  var handleTextString = function handleTextString(e, fieldName) {
    var _extends2;

    setDataField(_extends({}, data, (_extends2 = {}, _extends2[fieldName] = e.target.value, _extends2)));
  };

  var handleTextNumber = function handleTextNumber(e, fieldName) {
    var _extends3;

    setDataField(_extends({}, data, (_extends3 = {}, _extends3[fieldName] = e.target.value, _extends3)));
  };

  var handleTextMultiline = function handleTextMultiline(e, fieldName) {
    var _extends4;

    setDataField(_extends({}, data, (_extends4 = {}, _extends4[fieldName] = e.target.value, _extends4)));
  };

  var handleDate = function handleDate(e, fieldName) {
    var _extends5;

    setDataField(_extends({}, data, (_extends5 = {}, _extends5[fieldName] = e.target.value, _extends5)));
  };

  var handleDropDownChange = function handleDropDownChange(e, fieldName) {
    var _extends6;

    var selectedIndex = e.target.options.selectedIndex;
    var selectedValue = e.target.options[selectedIndex].getAttribute('name');
    var fn = fieldName.split('_');
    var fieldId = fn[0] + '_' + 'id';
    setDataField(_extends({}, data, (_extends6 = {}, _extends6[fieldName] = selectedValue, _extends6[fieldId] = e.target.value, _extends6)));
  };

  var handleCanCreateNew = function handleCanCreateNew(data) {
    onCanCreateNew(data);
  };

  var onChangeValue = function onChangeValue(fieldName, value) {
    var fn = fieldName.split('_');
    var fieldId = fn[0] + '_' + 'id';
    var d = value['name'] != undefined ? value['name'] : value['product_desc'];

    if (isNew) {
      var _extends8;

      setDataField(_extends({}, data, (_extends8 = {}, _extends8[fieldName] = d, _extends8[fieldId] = value['id'], _extends8)));
    } else {
      var _extends9;

      setDataField(_extends({}, data, (_extends9 = {}, _extends9[fieldName] = d, _extends9[fieldId] = value['id'], _extends9)));
    }
  };

  return /*#__PURE__*/React$1__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    container: true
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12
  }, fields.map(function (f, i) {
    if (f.type == 'text_string') {
      return /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement(core.TextField, {
        id: f.fieldName,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        style: {
          width: '100%'
        },
        InputProps: {
          readOnly: f.readOnly ? f.readOnly : false
        },
        value: data != undefined ? data[f.fieldName] : '',
        onChange: function onChange(e) {
          return handleTextString(e, f.fieldName);
        }
      })));
    } else if (f.type == 'text_number') {
      return /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement(core.TextField, {
        id: f.fieldName,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        style: {
          width: '100%'
        },
        type: "number",
        value: data != undefined ? data[f.fieldName] : '',
        onChange: function onChange(e) {
          return handleTextNumber(e, f.fieldName);
        }
      })));
    } else if (f.type == 'text_multiline') {
      return /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement(core.TextField, {
        id: f.fieldName,
        multiline: true,
        autoComplete: "off",
        rows: 3,
        size: "small",
        style: {
          width: '100%'
        },
        value: data != undefined ? data[f.fieldName] : '',
        variant: "outlined",
        onChange: function onChange(e) {
          return handleTextMultiline(e, f.fieldName);
        }
      })));
    } else if (f.type == 'date') {
      return /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement(core.TextField, {
        id: f.fieldName,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        value: data != undefined ? data[f.fieldName] : '',
        type: "date",
        style: {
          width: '100%'
        },
        onChange: function onChange(e) {
          return handleDate(e, f.fieldName);
        }
      })));
    } else if (f.type == 'dropdown') {
      if (f.options != undefined) {
        if (f.fieldName == 'priority') {
          var _React$createElement;

          return /*#__PURE__*/React$1__default.createElement(core.Grid, {
            key: f.fieldName,
            container: true,
            style: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }
          }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 5
          }, /*#__PURE__*/React$1__default.createElement(core.Box, {
            style: {
              width: '150px'
            }
          }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
            style: {
              paddingRight: '30px',
              color: 'grey'
            }
          }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 7
          }, /*#__PURE__*/React$1__default.createElement(core.NativeSelect, (_React$createElement = {
            id: "demo-customized-select-native",
            value: data != undefined ? data[f.fieldName] : '',
            onChange: function onChange(e) {
              return handleDropDownChange(e, f.fieldName);
            }
          }, _React$createElement["id"] = f.fieldName, _React$createElement.input = /*#__PURE__*/React$1__default.createElement(BootstrapInput, null), _React$createElement.style = {
            width: '100%'
          }, _React$createElement), /*#__PURE__*/React$1__default.createElement("option", {
            "aria-label": "None",
            value: ""
          }, "Select"), f.options.map(function (d, i) {
            return /*#__PURE__*/React$1__default.createElement("option", {
              name: d.name,
              value: d.id
            }, d.name);
          }))));
        } else {
          var fn = f.fieldName.split('_');
          var fieldId = fn[0] + '_' + 'id';

          if (isNew) {
            return /*#__PURE__*/React$1__default.createElement(core.Grid, {
              key: f.fieldName,
              container: true,
              style: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }
            }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
              item: true,
              xs: 12,
              sm: 5
            }, /*#__PURE__*/React$1__default.createElement(core.Box, {
              style: {
                width: '150px'
              }
            }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
              style: {
                paddingRight: '30px',
                color: 'grey'
              }
            }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
              item: true,
              xs: 12,
              sm: 7
            }, /*#__PURE__*/React$1__default.createElement(Autocomplete$1, {
              id: "combo-box-demo",
              options: f.options,
              getOptionLabel: function getOptionLabel(option) {
                if (typeof option === 'string') {
                  return option;
                }

                return option[f.fieldName] != undefined ? option[f.fieldName] : option.name != undefined ? option.name : option.product_desc != undefined ? option.product_desc : '';
              },
              style: {
                width: '100%'
              },
              size: "small",
              value: data != undefined ? data[f.fieldName] ? data[f.fieldName] : " " : " ",
              filterOptions: function filterOptions(options, params) {
                console.log("Autocomplete", f.canCreate);

                if (f.canCreate) {
                  var newFilter = ['+ Add New'];
                  var filtered = filter(options, params);
                  return [].concat(newFilter, filtered);
                } else {
                  var filtered = filter(options, params);
                  return filtered;
                }
              },
              onChange: function onChange(event, newValue) {
                if (typeof newValue === 'string') {
                  console.log('f.fieldName', f.fieldName, " f.canCreate", f.canCreate);
                  var d = {
                    "canCreate": f.canCreate,
                    "fields": f.fields,
                    "name": f.name,
                    "fieldName": f.fieldName
                  };
                  handleCanCreateNew(d);
                } else {
                  if (newValue != null && newValue.inputValue != '' && newValue.product_desc != "") {
                    onChangeValue(f.fieldName, newValue);
                  }
                }
              },
              renderInput: function renderInput(params) {
                return /*#__PURE__*/React$1__default.createElement(core.TextField, _extends({}, params, {
                  variant: "outlined"
                }));
              }
            })));
          } else {
            var _React$createElement2;

            return /*#__PURE__*/React$1__default.createElement(core.Grid, {
              key: f.fieldName,
              container: true,
              style: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }
            }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
              item: true,
              xs: 12,
              sm: 5
            }, /*#__PURE__*/React$1__default.createElement(core.Box, {
              style: {
                width: '150px'
              }
            }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
              style: {
                paddingRight: '30px',
                color: 'grey'
              }
            }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
              item: true,
              xs: 12,
              sm: 7
            }, /*#__PURE__*/React$1__default.createElement(core.NativeSelect, (_React$createElement2 = {
              id: "demo-customized-select-native",
              value: data != undefined ? data[fieldId] : '',
              onChange: function onChange(e) {
                return handleDropDownChange(e, f.fieldName);
              }
            }, _React$createElement2["id"] = f.fieldName, _React$createElement2.input = /*#__PURE__*/React$1__default.createElement(BootstrapInput, null), _React$createElement2.style = {
              width: '100%'
            }, _React$createElement2), /*#__PURE__*/React$1__default.createElement("option", {
              "aria-label": "None",
              value: ""
            }, "Select"), f.options.map(function (d, i) {
              var name = d[f.fieldName] != undefined ? d[f.fieldName] : d.name;
              return /*#__PURE__*/React$1__default.createElement("option", {
                name: name,
                value: d.id
              }, name);
            }))));
          }
        }
      }
    } else if (f.type == 'photo_list') {
      console.log('photo_list:', data);
      return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement("form", null, /*#__PURE__*/React$1__default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React$1__default.createElement("input", {
        type: "file",
        name: "imgCollection",
        onChange: function onChange(e) {
          return onFileChange(e, f.fieldName);
        },
        multiple: true
      })))))), data[f.fieldName] != undefined && data[f.fieldName].length != 0 ? /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React$1__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(GridList, {
        className: classes.gridList
      }, data[f.fieldName] == undefined ? /*#__PURE__*/React$1__default.createElement("span", null) : data[f.fieldName].map(function (tile) {
        return /*#__PURE__*/React$1__default.createElement(GridListTile, {
          key: tile,
          style: {
            width: '100px',
            height: '100px'
          }
        }, /*#__PURE__*/React$1__default.createElement("img", {
          src: tile,
          alt: tile,
          onClick: function onClick(e) {
            setSelectedPhoto(tile);
            setOpen(true);
          }
        }));
      })))), /*#__PURE__*/React$1__default.createElement(Dialog, {
        maxWidth: "lg",
        "aria-labelledby": "customized-dialog-title",
        open: open
      }, /*#__PURE__*/React$1__default.createElement(DialogTitle, {
        id: "customized-dialog-title",
        onClose: function onClose(e) {
          return setOpen(false);
        }
      }, "Photos"), /*#__PURE__*/React$1__default.createElement(DialogContent, {
        dividers: true
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, null, /*#__PURE__*/React$1__default.createElement("img", {
        src: selectedPhoto,
        className: "show-img",
        alt: "logo"
      })), /*#__PURE__*/React$1__default.createElement("br", null), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        container: true,
        spacing: 3
      }, data[f.fieldName].length > 0 ? data[f.fieldName].map(function (value) {
        return /*#__PURE__*/React$1__default.createElement(core.Grid, {
          key: value,
          item: true
        }, /*#__PURE__*/React$1__default.createElement(core.Box, {
          className: "square"
        }, " ", /*#__PURE__*/React$1__default.createElement("img", {
          src: value,
          className: "thumnail-img",
          alt: "logo",
          onClick: function onClick(e) {
            return setSelectedPhoto(value);
          }
        })));
      }) : /*#__PURE__*/React$1__default.createElement("span", null)))))) : /*#__PURE__*/React$1__default.createElement(core.Grid, null));
    } else if (f.type == 'list') {
      console.log('list', data[f.fieldName]);
      return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React$1__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
        onClick: handleSelectItemDialog
      }, /*#__PURE__*/React$1__default.createElement(AddIcon, null)))))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(TableContainer, null, /*#__PURE__*/React$1__default.createElement(Table, {
        className: classes.table,
        size: "small",
        "aria-label": "a dense table"
      }, /*#__PURE__*/React$1__default.createElement(TableHead, null, /*#__PURE__*/React$1__default.createElement(TableRow, null, partHeaders.map(function (h, i) {
        return /*#__PURE__*/React$1__default.createElement(TableCell, {
          key: h.id,
          align: "left"
        }, h.label);
      }))), /*#__PURE__*/React$1__default.createElement(TableBody, null, data[f.fieldName].length > 0 ? data[f.fieldName].map(function (row) {
        return /*#__PURE__*/React$1__default.createElement(TableRow, {
          key: row.name
        }, partHeaders.map(function (h, i) {
          return /*#__PURE__*/React$1__default.createElement(TableCell, {
            key: h.id,
            align: h.numeric ? 'right' : 'left'
          }, row[h.id]);
        }));
      }) : /*#__PURE__*/React$1__default.createElement("span", null)))))));
    } else if (f.type == 'time') {
      return /*#__PURE__*/React$1__default.createElement(core.Grid, {
        key: f.fieldName,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React$1__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, " ", /*#__PURE__*/React$1__default.createElement(core.TextField, {
        id: "time",
        variant: "outlined",
        size: "small",
        type: "time",
        className: classes.textField,
        InputLabelProps: {
          shrink: true
        },
        inputProps: {
          step: 300
        },
        onChange: function onChange(e) {
          return handleTime(e, f.fieldName);
        }
      })));
    }
  })), actions.length > 0 ? currentTabName === 'account' ? /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12
  }, data != undefined ? actions.map(function (a) {
    if (a.status === data.status) {
      return /*#__PURE__*/React$1__default.createElement(MButton, {
        action: a,
        onCallback: a.callback(data)
      });
    }
  }) : /*#__PURE__*/React$1__default.createElement(core.Grid, null)) : /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12
  }, actions.map(function (a) {
    if (a.status === data.status && currentTabName !== 'account') {
      return /*#__PURE__*/React$1__default.createElement(MButton, {
        action: a,
        onCallback: a.callback(data)
      });
    }
  })) : /*#__PURE__*/React$1__default.createElement(core.Grid, null)));
}

FieldList.propTypes = {
  history: propTypes.object,
  fields: propTypes.array.isRequired,
  updateData: propTypes.object,
  isNew: propTypes.bool,
  currentTabName: propTypes.string,
  onCancel: propTypes.func,
  actions: propTypes.array,
  onCanCreateNew: propTypes.func
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function EnhancedTableHead(props) {
  var classes = props.classes,
      order = props.order,
      orderBy = props.orderBy,
      onRequestSort = props.onRequestSort,
      onRefreshData = props.onRefreshData,
      headCells = props.headCells;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
      onRefreshData();
    };
  };

  return /*#__PURE__*/React$1__default.createElement(TableHead$1, null, /*#__PURE__*/React$1__default.createElement(TableRow$1, null, headCells.map(function (headCell) {
    return /*#__PURE__*/React$1__default.createElement(TableCell$1, {
      key: headCell.id,
      align: headCell.numeric ? 'right' : 'left',
      padding: headCell.disablePadding ? 'none' : 'default',
      sortDirection: orderBy === headCell.id ? order : false
    }, headCell.id != 'id' ? /*#__PURE__*/React$1__default.createElement(TableSortLabel, {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : 'asc',
      onClick: createSortHandler(headCell.id)
    }, headCell.label, orderBy === headCell.id ? /*#__PURE__*/React$1__default.createElement("span", {
      className: classes.visuallyHidden
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null) : /*#__PURE__*/React$1__default.createElement(TableSortLabel, {
      hideSortIcon: true
    }, headCell.label));
  })));
}

EnhancedTableHead.propTypes = {
  classes: propTypes.object.isRequired,
  numSelected: propTypes.number.isRequired,
  onRequestSort: propTypes.func.isRequired,
  onRefreshData: propTypes.func.isRequired,
  onSelectAllClick: propTypes.func.isRequired,
  order: propTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: propTypes.string.isRequired,
  rowCount: propTypes.number.isRequired
};
var useStyles$1 = styles$1.makeStyles(function (theme) {
  return {
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    }
  };
});

function TableTemplate(props) {
  var _React$createElement;

  var classes = useStyles$1();
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$headers = props.headers,
      headers = _props$headers === void 0 ? [] : _props$headers,
      onUpdateData = props.onUpdateData,
      onReloadData = props.onReloadData,
      onChangePage = props.onChangePage,
      onChangeRowsPerPage = props.onChangeRowsPerPage,
      _props$rowsPerPage = props.rowsPerPage,
      rowsPerPage = _props$rowsPerPage === void 0 ? 10 : _props$rowsPerPage,
      _props$page = props.page,
      page = _props$page === void 0 ? 0 : _props$page,
      _props$order = props.order,
      order = _props$order === void 0 ? 'asc' : _props$order,
      orderBy = props.orderBy;

  var _React$useState = React$1__default.useState([]),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  var _React$useState2 = React$1__default.useState(false),
      dense = _React$useState2[0];

  var _React$useState3 = React$1__default.useState(rowsPerPage != undefined ? rowsPerPage : 10),
      rowDataPerPage = _React$useState3[0],
      setRowsPerPage = _React$useState3[1];

  var _React$useState4 = React$1__default.useState(page != undefined ? page : 0),
      paginatePage = _React$useState4[0];

  var _React$useState5 = React$1__default.useState(order != undefined ? order : 'asc'),
      setOrder = _React$useState5[1];

  var _React$useState6 = React$1__default.useState(orderBy != undefined ? orderBy : 'name'),
      setOrderBy = _React$useState6[1];

  var offset = paginatePage * rowDataPerPage;

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = data.map(function (n) {
        return n.name;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, rowdata) {
    onUpdateData(true, rowdata);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    onChangePage(newPage);
  };

  var handleReloadData = function handleReloadData() {
    onReloadData();
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    onChangeRowsPerPage(parseInt(event.target.value));
    onReloadData();
  };

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return /*#__PURE__*/React$1__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    container: true
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    style: {
      marginRight: '10%'
    }
  }, /*#__PURE__*/React$1__default.createElement(TableContainer$1, null, /*#__PURE__*/React$1__default.createElement(Table$1, {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: dense ? 'small' : 'medium',
    "aria-label": "enhanced table"
  }, /*#__PURE__*/React$1__default.createElement(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    headCells: headers,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    onRefreshData: handleReloadData,
    rowCount: data.length
  }), /*#__PURE__*/React$1__default.createElement(TableBody$1, null, data.length != 0 ? stableSort(data, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.name);
    return /*#__PURE__*/React$1__default.createElement(TableRow$1, {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, row);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: index,
      selected: isItemSelected
    }, headers.map(function (h, i) {
      if (h.id == 'id') {
        return /*#__PURE__*/React$1__default.createElement(TableCell$1, {
          key: h.id,
          align: "right"
        }, ++offset);
      } else {
        return /*#__PURE__*/React$1__default.createElement(TableCell$1, {
          key: h.id,
          align: "right"
        }, row[h.id]);
      }
    }));
  }) : /*#__PURE__*/React$1__default.createElement("div", null), emptyRows > 0 && /*#__PURE__*/React$1__default.createElement(TableRow$1, {
    style: {
      height: (dense ? 33 : 53) * emptyRows
    }
  }, /*#__PURE__*/React$1__default.createElement(TableCell$1, {
    colSpan: 6
  }))))), /*#__PURE__*/React$1__default.createElement(TablePagination, (_React$createElement = {
    rowsPerPageOptions: [5, 10, 20, 30],
    labelDisplayedRows: function labelDisplayedRows(_ref) {
    },
    component: "div",
    count: data.length,
    rowsPerPage: rowsPerPage
  }, _React$createElement["rowsPerPage"] = rowsPerPage, _React$createElement.page = page, _React$createElement.onChangePage = handleChangePage, _React$createElement.onChangeRowsPerPage = handleChangeRowsPerPage, _React$createElement)))));
}

TableTemplate.propTypes = {
  history: propTypes.object,
  headers: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
  onUpdateData: propTypes.func,
  onReloadData: propTypes.func,
  onChangePage: propTypes.func,
  onChangeRowsPerPage: propTypes.func,
  query: propTypes.object,
  page: propTypes.any,
  rowsPerPage: propTypes.any,
  order: propTypes.any,
  orderBy: propTypes.any
};

var useStyles$2 = styles$1.makeStyles(function (theme) {
  var _button, _ref;

  return _ref = {
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    button: (_button = {
      color: 'white'
    }, _button["color"] = theme.palette.primary.main, _button.width = 150, _button.height = 55, _button),
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    headText: {
      fontSize: 14,
      "float": "left",
      color: theme.palette.primary.main,
      fontWeight: "bold"
    }
  }, _ref["paper"] = {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }, _ref;
});

function getDataString(data, fieldName) {
  return data[fieldName];
}

function InfoPage(props) {
  var classes = useStyles$2();
  var infoData = props.infoData,
      displayFields = props.displayFields,
      _props$isNew = props.isNew,
      isNew = _props$isNew === void 0 ? false : _props$isNew,
      isEditable = props.isEditable,
      currentTabName = props.currentTabName,
      actions = props.actions;

  var _React$useState = React$1__default.useState(isEditable != undefined ? isEditable : true),
      editable = _React$useState[0],
      setEditable = _React$useState[1];

  var _React$useState2 = React$1__default.useState({}),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var handleEdit = function handleEdit() {
    setEditable(false);
  };

  var handleUpdateData = function handleUpdateData(data) {
    console.log('handle update date:', data);
    setData(data);
  };

  return /*#__PURE__*/React$1__default.createElement("div", {
    className: classes.root
  }, isNew ? /*#__PURE__*/React$1__default.createElement(core.Grid, {
    container: true,
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/React$1__default.createElement(FieldList, {
    updateData: infoData,
    fields: displayFields,
    isNew: isNew,
    onDataCallback: function onDataCallback(d) {
      return handleUpdateData(d);
    }
  }))) : /*#__PURE__*/React$1__default.createElement(core.Grid, {
    container: true,
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  }, !editable ? /*#__PURE__*/React$1__default.createElement(FieldList, {
    fields: displayFields,
    isNew: isNew,
    updateData: infoData,
    onDataCallback: function onDataCallback(d) {
      return handleUpdateData(d);
    }
  }) : displayFields.map(function (d, i) {
    return /*#__PURE__*/React$1__default.createElement(core.Grid, {
      container: true
    }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      sm: 5
    }, /*#__PURE__*/React$1__default.createElement(core.Box, {
      style: {
        width: '250px'
      }
    }, /*#__PURE__*/React$1__default.createElement(core.Typography, {
      style: {
        paddingRight: '30px',
        color: 'grey'
      }
    }, d.label))), /*#__PURE__*/React$1__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      sm: 7
    }, d.type == 'photo' ? /*#__PURE__*/React$1__default.createElement("img", {
      src: infoData['photo_url'],
      style: {
        width: '120px',
        height: '120px',
        border: '1px solid grey'
      }
    }) : /*#__PURE__*/React$1__default.createElement(core.Typography, {
      style: {
        paddingRight: '30px'
      }
    }, infoData != undefined ? getDataString(infoData, d.fieldName) : ''))));
  })), /*#__PURE__*/React$1__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/React$1__default.createElement(core.Grid, {
    container: true,
    direction: "row",
    alignItems: "flex-end"
  }, actions.map(function (a, i) {
    if (currentTabName == 'account') {
      if (infoData.status == 'invited') {
        return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          },
          onClick: function onClick() {
            return a.callback(data);
          }
        }, a.label));
      }

      if (infoData.status == 'joined') {
        return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          },
          onClick: function onClick() {
            return a.callback(data);
          }
        }, a.label));
      }

      if (infoData.status == 'disabled') {
        return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          },
          onClick: function onClick() {
            return a.callback(data);
          }
        }, a.label));
      }

      if (infoData.status == 'requested') {
        if (editable) {
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            },
            onClick: handleEdit
          }, a.icon, a.label));
        } else {
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              color: 'white',
              backgroundColor: 'grey',
              "float": 'right',
              marginLeft: '10px'
            },
            onClick: function onClick() {
              return a.callback(data);
            }
          }, a.label));
        }
      }
    } else {
      if (editable) {
        if (a.action_type == 'edit') {
          console.log('type: ', a.action_type, 'editable: ', editable);
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            },
            onClick: handleEdit
          }, a.icon, a.label));
        }

        if (a.action_type == 'delete') {
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              "float": 'right',
              marginLeft: '10px'
            },
            onClick: function onClick() {
              return a.callback(data);
            }
          }, a.icon, a.label));
        }
      } else {
        if (a.action_type == 'save') {
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            },
            onClick: function onClick() {
              return a.callback(data);
            }
          }, a.icon, a.label));
        }

        if (a.action_type == 'cancel') {
          return /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
            style: {
              "float": 'right',
              marginLeft: '10px'
            },
            onClick: function onClick() {
              return a.callback(data);
            }
          }, a.icon, a.label));
        }
      }
    }
  })))));
}

InfoPage.propTypes = {
  history: propTypes.object,
  infoData: propTypes.object,
  displayFields: propTypes.array,
  isNew: propTypes.bool,
  isEditable: propTypes.bool,
  actions: propTypes.any
};

function CheckboxList() {
  return /*#__PURE__*/React.createElement("div", null, "checkbox list");
}

function RadioList() {
  return /*#__PURE__*/React.createElement("div", null, "radio list");
}

var useStyles$3 = styles$1.makeStyles(function (theme) {
  return {
    root: {
      width: '100%'
    }
  };
});

function MButton(props) {
  var classes = useStyles$3();
  var action = props.action;

  return /*#__PURE__*/React$1__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React$1__default.createElement(core.Box, null, /*#__PURE__*/React$1__default.createElement(core.Button, {
    variant: "contained",
    style: {
      "float": 'right',
      margin: "5px"
    },
    onClick: function onClick(e) {
    }
  }, action.icon, action.label)));
}

MButton.propTypes = {
  history: propTypes.object,
  action: propTypes.object,
  onCallback: propTypes.func
};

exports.CheckboxList = CheckboxList;
exports.FieldList = FieldList;
exports.InfoPage = InfoPage;
exports.List = List;
exports.MButton = MButton;
exports.RadioList = RadioList;
exports.TableTemplate = TableTemplate;
//# sourceMappingURL=index.js.map
