function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var AddIcon = _interopDefault(require('@material-ui/icons/Add'));
var styles = require('@material-ui/core/styles');
var Autocomplete = require('@material-ui/lab/Autocomplete');
var Autocomplete__default = _interopDefault(Autocomplete);
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var TableContainer = _interopDefault(require('@material-ui/core/TableContainer'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TablePagination = _interopDefault(require('@material-ui/core/TablePagination'));
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var TableSortLabel = _interopDefault(require('@material-ui/core/TableSortLabel'));
require('@material-ui/core/Typography');
var EditIcon = _interopDefault(require('@material-ui/icons/Edit'));
var ExpandMore = _interopDefault(require('@material-ui/icons/ExpandMore'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));

function List(_ref) {
  var groupName = _ref.groupName,
      _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h1", null, "1.0.3"), /*#__PURE__*/React__default.createElement("h5", null, "Group: ", /*#__PURE__*/React__default.createElement("em", null, groupName)), /*#__PURE__*/React__default.createElement("ul", null, /*#__PURE__*/React__default.createElement("p", null, "Members"), members.map(function (member) {
    return /*#__PURE__*/React__default.createElement("li", {
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

var filter = Autocomplete.createFilterOptions();
var BootstrapInput = styles.withStyles(function (theme) {
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
var useStyles = styles.makeStyles({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%'
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
  actionButton: function actionButton(props) {
    return {
      backgroundColor: props.primaryColor === undefined ? 'grey' : props.primaryColor,
      color: props.actionTextColor === undefined ? 'white' : props.actionTextColor
    };
  }
});

function MButton(props) {
  var action = props.action,
      onCallback = props.onCallback,
      buttonStyle = props.buttonStyle;

  var handleAction = function handleAction(e) {
    e.preventDefault();
    onCallback(e);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: buttonStyle.root
  }, /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
    className: buttonStyle.actionButton,
    variant: "contained",
    style: {
      "float": 'right',
      margin: "5px"
    },
    onClick: function onClick(e) {
      return handleAction(e);
    }
  }, action.icon, action.label)));
}

MButton.propTypes = {
  history: propTypes.object,
  buttonStyle: propTypes.any,
  action: propTypes.object.isRequired,
  onCallback: propTypes.func.isRequired
};

function MkForm(props) {
  var styles = useStyles(props.styles);
  var _props$fields = props.fields,
      fields = _props$fields === void 0 ? [] : _props$fields,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      onDropdownCreateNew = props.onDropdownCreateNew,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions,
      partHeaders = props.partHeaders;

  var _React$useState = React__default.useState(data !== undefined ? data : {}),
      _data = _React$useState[0],
      setDataField = _React$useState[1];

  var _React$useState2 = React__default.useState(false),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React__default.useState("#"),
      selectedPhoto = _React$useState3[0],
      setSelectedPhoto = _React$useState3[1];

  var handleTextString = function handleTextString(e, fieldName) {
    var _extends2;

    setDataField(_extends({}, _data, (_extends2 = {}, _extends2[fieldName] = e.target.value, _extends2)));
  };

  var handleTextNumber = function handleTextNumber(e, fieldName) {
    var _extends3;

    setDataField(_extends({}, _data, (_extends3 = {}, _extends3[fieldName] = e.target.value, _extends3)));
  };

  var handleTextMultiline = function handleTextMultiline(e, fieldName) {
    var _extends4;

    setDataField(_extends({}, _data, (_extends4 = {}, _extends4[fieldName] = e.target.value, _extends4)));
  };

  var handleDate = function handleDate(e, fieldName) {
    var _extends5;

    setDataField(_extends({}, _data, (_extends5 = {}, _extends5[fieldName] = e.target.value, _extends5)));
  };

  var handleDropDownChange = function handleDropDownChange(e, fieldName) {
    var _extends6;

    var selectedIndex = e.target.options.selectedIndex;
    var selectedValue = e.target.options[selectedIndex].getAttribute('name');
    var fn = fieldName.split('_');
    var fieldId = fn[0] + '_' + 'id';
    setDataField(_extends({}, _data, (_extends6 = {}, _extends6[fieldName] = selectedValue, _extends6[fieldId] = e.target.value, _extends6)));
  };

  var handleCanCreateNew = function handleCanCreateNew(data) {
    onDropdownCreateNew(data);
  };

  var onChangeValue = function onChangeValue(fieldName, value) {
    var _extends7;

    setDataField(_extends({}, _data, (_extends7 = {}, _extends7[fieldName] = value, _extends7)));
  };

  var onFileChange = function onFileChange(e, f) {};

  var handleSelectItemDialog = function handleSelectItemDialog() {};

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.root
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12
  }, fields.map(function (f, i) {
    if (f.type === 'text_string') {
      return /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement(core.TextField, {
        id: f.field_name,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        style: {
          width: '100%'
        },
        InputProps: {
          readOnly: f.readOnly ? f.readOnly : false
        },
        value: _data !== undefined ? _data[f.field_name] : '',
        onChange: function onChange(e) {
          return handleTextString(e, f.field_name);
        }
      })));
    } else if (f.type === 'text_number') {
      return /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement(core.TextField, {
        id: f.field_name,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        style: {
          width: '100%'
        },
        type: "number",
        value: _data !== undefined ? _data[f.field_name] : '',
        onChange: function onChange(e) {
          return handleTextNumber(e, f.field_name);
        }
      })));
    } else if (f.type === 'text_multiline') {
      return /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement(core.TextField, {
        id: f.field_name,
        multiline: true,
        autoComplete: "off",
        rows: 3,
        size: "small",
        style: {
          width: '100%'
        },
        value: _data !== undefined ? _data[f.field_name] : '',
        variant: "outlined",
        onChange: function onChange(e) {
          return handleTextMultiline(e, f.field_name);
        }
      })));
    } else if (f.type === 'date') {
      return /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement(core.TextField, {
        id: f.field_name,
        variant: "outlined",
        autoComplete: "off",
        size: "small",
        value: _data !== undefined ? _data[f.field_name] : '',
        type: "date",
        style: {
          width: '100%'
        },
        onChange: function onChange(e) {
          return handleDate(e, f.field_name);
        }
      })));
    } else if (f.type === 'dropdown') {
      if (f.options !== undefined && f.option_label_field !== undefined) {
        if (f.field_name === 'priority') {
          return /*#__PURE__*/React__default.createElement(core.Grid, {
            key: f.field_name,
            container: true,
            style: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }
          }, /*#__PURE__*/React__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 5
          }, /*#__PURE__*/React__default.createElement(core.Box, {
            style: {
              width: '150px'
            }
          }, /*#__PURE__*/React__default.createElement(core.Typography, {
            style: {
              paddingRight: '30px',
              color: 'grey'
            }
          }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 7
          }, /*#__PURE__*/React__default.createElement(core.NativeSelect, {
            value: _data !== undefined ? _data[f.field_name] : '',
            onChange: function onChange(e) {
              return handleDropDownChange(e, f.field_name);
            },
            id: f.field_name,
            input: /*#__PURE__*/React__default.createElement(BootstrapInput, null),
            style: {
              width: '100%'
            }
          }, /*#__PURE__*/React__default.createElement("option", {
            "aria-label": "None",
            value: ""
          }, "Select"), f.options.map(function (d, i) {
            return /*#__PURE__*/React__default.createElement("option", {
              name: d.name,
              value: d.id,
              key: d.id
            }, d.name);
          }))));
        } else {
          return /*#__PURE__*/React__default.createElement(core.Grid, {
            key: f.field_name,
            container: true,
            style: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }
          }, /*#__PURE__*/React__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 5
          }, /*#__PURE__*/React__default.createElement(core.Box, {
            style: {
              width: '150px'
            }
          }, /*#__PURE__*/React__default.createElement(core.Typography, {
            style: {
              paddingRight: '30px',
              color: 'grey'
            }
          }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
            item: true,
            xs: 12,
            sm: 7
          }, /*#__PURE__*/React__default.createElement(Autocomplete__default, {
            id: "combo-box-demo",
            options: f.options,
            getOptionLabel: function getOptionLabel(option) {
              if (typeof option === 'string') {
                return option;
              }

              return option[f.option_label_field];
            },
            style: {
              width: '100%'
            },
            size: "small",
            value: _data !== undefined ? _data[f.field_name] ? _data[f.field_name] : " " : " ",
            filterOptions: function filterOptions(options, params) {
              console.log("Autocomplete", f.can_create);

              if (f.can_create) {
                var newFilter = ['+ Add New'];
                var filtered = filter(options, params);
                return [].concat(newFilter, filtered);
              } else {
                var _filtered = filter(options, params);

                return _filtered;
              }
            },
            onChange: function onChange(event, newValue) {
              if (typeof newValue === 'string') {
                console.log('f.field_name', f.field_name, " f.can_create", f.can_create);
                var d = {
                  "canCreate": f.can_create,
                  "fields": f.fields,
                  "name": f.name,
                  "fieldName": f.field_name
                };
                handleCanCreateNew(d);
              } else {
                if (newValue != null && newValue.inputValue !== '' && newValue.product_desc !== "") {
                  onChangeValue(f.field_name, newValue[f.option_label_field]);
                }
              }
            },
            renderInput: function renderInput(params) {
              return /*#__PURE__*/React__default.createElement(core.TextField, _extends({}, params, {
                variant: "outlined"
              }));
            }
          })));
        }
      }
    } else if (f.type === 'photo_list') {
      console.log('photo_list:', _data);
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement("form", null, /*#__PURE__*/React__default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/React__default.createElement("input", {
        type: "file",
        name: "imgCollection",
        onChange: function onChange(e) {
          return onFileChange();
        },
        multiple: true
      })))))), _data[f.field_name] !== undefined && _data[f.field_name].length !== 0 ? /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.GridList, {
        className: styles.gridList
      }, _data[f.field_name] === undefined ? /*#__PURE__*/React__default.createElement("span", null) : _data[f.field_name].map(function (tile) {
        return /*#__PURE__*/React__default.createElement(core.GridListTile, {
          key: tile,
          style: {
            width: '100px',
            height: '100px'
          }
        }, /*#__PURE__*/React__default.createElement("img", {
          src: tile,
          alt: tile,
          onClick: function onClick(e) {
            setOpen(true);
          }
        }));
      })))), /*#__PURE__*/React__default.createElement(core.Dialog, {
        maxWidth: "lg",
        "aria-labelledby": "customized-dialog-title",
        open: open
      }, /*#__PURE__*/React__default.createElement(core.DialogTitle, {
        id: "customized-dialog-title",
        onClose: function onClose(e) {
          return setOpen(false);
        }
      }, "Photos"), /*#__PURE__*/React__default.createElement(core.DialogContent, {
        dividers: true
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default.createElement(core.Grid, null, /*#__PURE__*/React__default.createElement("img", {
        src: selectedPhoto,
        className: "show-img",
        alt: "logo"
      })), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(core.Grid, {
        container: true,
        spacing: 3
      }, _data[f.field_name].length > 0 ? _data[f.field_name].map(function (value) {
        return /*#__PURE__*/React__default.createElement(core.Grid, {
          key: value,
          item: true
        }, /*#__PURE__*/React__default.createElement(core.Box, {
          className: "square"
        }, " ", /*#__PURE__*/React__default.createElement("img", {
          src: value,
          className: "thumnail-img",
          alt: "logo",
          onClick: function onClick(e) {
            return setSelectedPhoto(value);
          }
        })));
      }) : /*#__PURE__*/React__default.createElement("span", null)))))) : /*#__PURE__*/React__default.createElement(core.Grid, null));
    } else if (f.type === 'list') {
      console.log('list', _data[f.field_name]);
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
        onClick: handleSelectItemDialog
      }, /*#__PURE__*/React__default.createElement(AddIcon, null)))))), /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: 'block',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.TableContainer, null, /*#__PURE__*/React__default.createElement(core.Table, {
        className: styles.table,
        size: "small",
        "aria-label": "a dense table"
      }, /*#__PURE__*/React__default.createElement(core.TableHead, null, /*#__PURE__*/React__default.createElement(core.TableRow, null, partHeaders.map(function (h, i) {
        return /*#__PURE__*/React__default.createElement(core.TableCell, {
          key: h.id,
          align: "left"
        }, h.label);
      }))), /*#__PURE__*/React__default.createElement(core.TableBody, null, _data[f.field_name].length > 0 ? _data[f.field_name].map(function (row) {
        return /*#__PURE__*/React__default.createElement(core.TableRow, {
          key: row.name
        }, partHeaders.map(function (h, i) {
          return /*#__PURE__*/React__default.createElement(core.TableCell, {
            key: h.id,
            align: h.numeric ? 'right' : 'left'
          }, row[h.id]);
        }));
      }) : /*#__PURE__*/React__default.createElement("span", null)))))));
    } else if (f.type === 'time') {
      return /*#__PURE__*/React__default.createElement(core.Grid, {
        key: f.field_name,
        container: true,
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 5
      }, /*#__PURE__*/React__default.createElement(core.Box, {
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/React__default.createElement(core.Typography, {
        style: {
          paddingRight: '30px',
          color: 'grey'
        }
      }, f.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
        item: true,
        xs: 12,
        sm: 7
      }, " ", /*#__PURE__*/React__default.createElement(core.TextField, {
        id: "time",
        variant: "outlined",
        size: "small",
        type: "time",
        className: styles.textField,
        InputLabelProps: {
          shrink: true
        },
        inputProps: {
          step: 300
        }
      })));
    }
  })), actions.length > 0 ? /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12
  }, actions.map(function (a) {
    if (a.status === _data.status) {
      return /*#__PURE__*/React__default.createElement(MButton, {
        action: a,
        onCallback: function onCallback(event) {
          return a.callback(event, _data);
        },
        buttonStyle: styles
      });
    }
  })) : /*#__PURE__*/React__default.createElement(core.Grid, null)));
}

MkForm.propTypes = {
  history: propTypes.object,
  fields: propTypes.array.isRequired,
  data: propTypes.object,
  isNew: propTypes.bool,
  actions: propTypes.array,
  onDropdownCreateNew: propTypes.func,
  styles: propTypes.any
};

function descendingComparator(a, b, _orderBy) {
  if (b[_orderBy] < a[_orderBy]) {
    return -1;
  }

  if (b[_orderBy] > a[_orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(_order, _orderBy) {
  return _order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, _orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, _orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var _order = comparator(a[0], b[0]);

    if (_order !== 0) return _order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function EnhancedTableHead(props) {
  var headerStyles = props.headerStyles,
      _order = props._order,
      _orderBy = props._orderBy,
      onRequestSort = props.onRequestSort,
      headCells = props.headCells;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  var sortedStyle = core.createMuiTheme({
    overrides: {
      MuiTableSortLabel: {
        root: {
          "&$active": {
            color: headerStyles.sortedHeader === undefined ? 'grey' : headerStyles.sortedHeader,
            "&& $icon": {
              color: headerStyles.sortedHeader === undefined ? 'grey' : headerStyles.sortedHeader
            }
          }
        }
      }
    }
  });
  return /*#__PURE__*/React__default.createElement(core.ThemeProvider, {
    theme: sortedStyle
  }, /*#__PURE__*/React__default.createElement(TableHead, null, /*#__PURE__*/React__default.createElement(TableRow, null, headCells.map(function (headCell) {
    return /*#__PURE__*/React__default.createElement(TableCell, {
      className: headerStyles.head,
      key: headCell.id,
      align: headCell.numeric ? 'right' : 'left',
      padding: headCell.disablePadding ? 'none' : 'default',
      sortDirection: _orderBy === headCell.id ? _order : false,
      style: {
        width: headCell.id === 'sr' ? '15px' : headCell.width ? headCell.width : ''
      }
    }, headCell.id !== 'sr' ? /*#__PURE__*/React__default.createElement(TableSortLabel, {
      active: _orderBy === headCell.id,
      direction: _orderBy === headCell.id ? _order : 'asc',
      onClick: createSortHandler(headCell.id),
      style: {
        whiteSpace: "nowrap"
      }
    }, headCell.label, _orderBy === headCell.id ? /*#__PURE__*/React__default.createElement("span", {
      className: headerStyles.visuallyHidden
    }, _order === 'desc' ? 'sorted descending' : 'sorted ascending') : null) : /*#__PURE__*/React__default.createElement(TableSortLabel, {
      hideSortIcon: "true",
      align: "right"
    }, headCell.label));
  }), /*#__PURE__*/React__default.createElement(TableCell, {
    className: headerStyles.head,
    style: {
      width: '100px'
    }
  }))));
}

EnhancedTableHead.propTypes = {
  headerStyles: propTypes.object.isRequired,
  onRequestSort: propTypes.func.isRequired,
  onSelectAllClick: propTypes.func.isRequired,
  _order: propTypes.oneOf(['asc', 'desc']).isRequired,
  _orderBy: propTypes.string.isRequired,
  rowCount: propTypes.number.isRequired
};
var useStyles$1 = styles.makeStyles({
  root: {
    width: '100%'
  },
  table: {
    tableLayout: 'fixed'
  },
  visuallyHidden: {
    b_order: 0,
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
      b_orderBottom: "none"
    },
    "&&:after": {
      b_orderBottom: "none"
    }
  },
  head: function head(props) {
    return {
      backgroundColor: props.headerBackgroundColor === undefined ? '#0d47a1a8' : props.headerBackgroundColor,
      color: props.headerTextColor === undefined ? 'white' : props.headerTextColor
    };
  },
  sortedHeader: function sortedHeader(props) {
    return {
      color: props.headerTextColor === undefined ? 'grey' : props.headerTextColor
    };
  },
  styledTableRow: function styledTableRow(props) {
    return {
      '&:nth-of-type(even)': {
        backgroundColor: props.primaryColor === undefined ? '#0d47a11c' : props.primaryColor
      }
    };
  }
});

function getUpdatedDate(p) {
  var statusDate = p.updated_date;
  var day = '';

  if (statusDate !== undefined) {
    var convertDate = new Date(statusDate.toDate());
    var dd = String(convertDate.getDate()).padStart(2, '0');
    var mm = String(convertDate.getMonth() + 1).padStart(2, '0');
    var yyyy = convertDate.getFullYear();
    day = mm + '/' + dd + '/' + yyyy;
  }

  return day.toString();
}

function RowMenu(props) {
  var row = props.row,
      actions = props.actions,
      onSelectedAction = props.onSelectedAction,
      onRowEdit = props.onRowEdit;

  var _React$useState = React__default.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var handleMenuClick = function handleMenuClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  var handleSelectMenu = function handleSelectMenu(e, row, action) {
    e.stopPropagation();
    onSelectedAction(row, action.action_name);
    setAnchorEl(null);
  };

  var handleClose = function handleClose(e) {
    setAnchorEl(null);
    e.stopPropagation();
  };

  var handleEdit = function handleEdit(e) {
    onRowEdit(row);
    e.stopPropagation();
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(core.Menu, {
    id: "actions-" + row.id,
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, actions.map(function (action) {
    return /*#__PURE__*/React__default.createElement(core.MenuItem, {
      key: action.display_name,
      onClick: function onClick(e) {
        return handleSelectMenu(e, row, action);
      }
    }, action.display_name);
  })), /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React__default.createElement(core.IconButton, {
    id: "edit-" + row.id,
    "aria-label": "more",
    "aria-controls": "long-menu",
    "aria-haspopup": "true",
    onClick: handleEdit,
    size: "small"
  }, /*#__PURE__*/React__default.createElement(EditIcon, null)), /*#__PURE__*/React__default.createElement(core.Box, {
    style: {
      width: '10px'
    }
  }), /*#__PURE__*/React__default.createElement(core.IconButton, {
    id: "dropdown-" + row.id,
    "aria-label": "more",
    "aria-controls": "long-menu",
    "aria-haspopup": "true",
    size: "small",
    onClick: handleMenuClick
  }, /*#__PURE__*/React__default.createElement(ExpandMore, null))));
}

RowMenu.propTypes = {
  row: propTypes.object.isRequired,
  actions: propTypes.array.isRequired,
  onSelectedAction: propTypes.func.isRequired,
  onRowEdit: propTypes.func
};

function ConfirmDialog(props) {
  var type = props.type,
      itemName = props.itemName,
      openDialog = props.openDialog,
      onCancel = props.onCancel,
      onContinue = props.onContinue;

  var _React$useState2 = React__default.useState(openDialog),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClose = function handleClose() {
    setOpen(false);
    onCancel(false);
  };

  var handleContinue = function handleContinue() {
    onContinue(true);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(core.Dialog, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(core.DialogTitle, {
    id: "alert-dialog-title"
  }, "Delete this " + type + ' "' + itemName + '"?'), /*#__PURE__*/React__default.createElement(core.DialogActions, null, /*#__PURE__*/React__default.createElement(core.Button, {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), /*#__PURE__*/React__default.createElement(core.Button, {
    onClick: handleContinue,
    color: "primary",
    autoFocus: true
  }, "Delete"))));
}

ConfirmDialog.propTypes = {
  history: propTypes.object,
  type: propTypes.string,
  itemName: propTypes.string,
  openDialog: propTypes.bool,
  onCancel: propTypes.func,
  onContinue: propTypes.func
};

function MkTable(props) {
  console.log("props.styles:", props.styles);
  var classes = useStyles$1(props.styles);
  var dispatch = props.dispatch,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$headers = props.headers,
      headers = _props$headers === void 0 ? [] : _props$headers,
      actions = props.actions,
      onActions = props.onActions,
      title = props.title,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      _props$noMoreToLoad = props.noMoreToLoad,
      noMoreToLoad = _props$noMoreToLoad === void 0 ? false : _props$noMoreToLoad,
      order = props.order,
      orderBy = props.orderBy,
      _props$isLoading = props.isLoading,
      isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
      onChangePaginatePage = props.onChangePaginatePage,
      onGetData = props.onGetData,
      onUpdateDataRow = props.onUpdateDataRow,
      onChangeRowPerPage = props.onChangeRowPerPage,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? true : _props$dense;

  var _React$useState3 = React__default.useState(rowsPerPage),
      _rowsPerPage = _React$useState3[0],
      setRowsPerPage = _React$useState3[1];

  var _React$useState4 = React__default.useState(page),
      _page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _React$useState5 = React__default.useState(noMoreToLoad),
      _noMoreToLoad = _React$useState5[0],
      setNoMoreToLoad = _React$useState5[1];

  var _React$useState6 = React__default.useState(order),
      _order = _React$useState6[0],
      setOrder = _React$useState6[1];

  var _React$useState7 = React__default.useState(orderBy),
      _orderBy = _React$useState7[0],
      setOrderBy = _React$useState7[1];

  var _React$useState8 = React__default.useState(isLoading),
      _isLoading = _React$useState8[0],
      setIsLoading = _React$useState8[1];

  var _React$useState9 = React__default.useState(false),
      _isConfirm = _React$useState9[0],
      setIsConfirm = _React$useState9[1];

  var _React$useState10 = React__default.useState(''),
      itemName = _React$useState10[0],
      setItemName = _React$useState10[1];

  var _React$useState11 = React__default.useState({}),
      row = _React$useState11[0],
      setRow = _React$useState11[1];

  var _React$useState12 = React__default.useState(''),
      action = _React$useState12[0],
      setAction = _React$useState12[1];

  var _React$useState13 = React__default.useState(dense),
      _dense = _React$useState13[0],
      setDense = _React$useState13[1];

  var handleSelectMenu = function handleSelectMenu(row, action) {
    if (action === 'delete') {
      setItemName(row.name === undefined ? row.product_desc : row.name);
      setIsConfirm(true);
      setRow(row);
      setAction(action);
    } else {
      onActions(row, action);
    }
  };

  var handleDelete = function handleDelete(v) {
    setIsConfirm(false);
    onActions(row, action);
  };

  var handleCancel = function handleCancel(v) {
    setIsConfirm(false);
  };

  var handleRowEdit = function handleRowEdit(row) {
    onUpdateDataRow(row);
  };

  var offset = _page * _rowsPerPage;
  React.useEffect(function () {
    setNoMoreToLoad(noMoreToLoad);
    setPage(page);
    setOrder(order);
    setOrderBy(orderBy);
    setIsLoading(isLoading);
    setRowsPerPage(rowsPerPage);
    setDense(dense);
  }, []);

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = _orderBy === property && _order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    if (!_noMoreToLoad && (newPage + 1) * _rowsPerPage >= data.length) {
      onGetData();
    }

    setPage(newPage);
    onChangePaginatePage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value));
    onChangeRowPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(TableContainer, null, /*#__PURE__*/React__default.createElement(Table, {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: _dense ? 'small' : 'medium',
    "aria-label": "enhanced table"
  }, /*#__PURE__*/React__default.createElement(EnhancedTableHead, {
    headerStyles: classes,
    headCells: headers,
    _order: _order,
    _orderBy: _orderBy,
    onRequestSort: handleRequestSort,
    rowCount: data.length !== undefined ? data.length : 0,
    dispatch: dispatch
  }), /*#__PURE__*/React__default.createElement(TableBody, null, _isLoading ? /*#__PURE__*/React__default.createElement(TableRow, {
    className: classes.styledTableRow
  }, /*#__PURE__*/React__default.createElement(TableCell, {
    colSpan: headers.length,
    align: "center"
  }, " ", /*#__PURE__*/React__default.createElement(CircularProgress, null))) : data.length !== 0 ? stableSort(data, getComparator(_order, _orderBy)).slice(_page * _rowsPerPage, _page * _rowsPerPage + _rowsPerPage).map(function (row, index) {
    return /*#__PURE__*/React__default.createElement(TableRow, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.id,
      id: row.id,
      className: classes.styledTableRow
    }, headers.map(function (h, i) {
      if (h.id === 'sr') {
        return /*#__PURE__*/React__default.createElement(TableCell, {
          key: h.id,
          align: "right",
          style: {
            width: '15px'
          }
        }, ++offset);
      }

      if (h.id === 'status') {
        return /*#__PURE__*/React__default.createElement(TableCell, {
          key: h.id,
          align: h.numeric ? 'right' : 'left'
        }, row[h.id]);
      }

      if (h.id === 'updated_date') {
        return /*#__PURE__*/React__default.createElement(TableCell, {
          key: h.id,
          align: h.numeric ? 'right' : 'left',
          style: {
            width: h.width ? h.width : null
          }
        }, getUpdatedDate(row));
      } else {
        return /*#__PURE__*/React__default.createElement(TableCell, {
          key: h.id,
          align: h.numeric ? 'right' : 'left',
          style: {
            width: h.width ? h.width : null
          }
        }, row[h.id]);
      }
    }), actions ? /*#__PURE__*/React__default.createElement(TableCell, {
      style: {
        width: '150px'
      },
      align: "right"
    }, /*#__PURE__*/React__default.createElement(RowMenu, {
      actions: actions,
      row: row,
      onRowEdit: function onRowEdit(data) {
        return handleRowEdit(data);
      },
      onSelectedAction: function onSelectedAction(data, actionName) {
        return handleSelectMenu(data, actionName);
      }
    })) : /*#__PURE__*/React__default.createElement(TableCell, {
      style: {
        width: '150px'
      },
      align: "right"
    }, /*#__PURE__*/React__default.createElement(core.IconButton, {
      onClick: function onClick(event) {
        return handleRowEdit(row);
      },
      size: dense ? "small" : "medium"
    }, /*#__PURE__*/React__default.createElement(EditIcon, null))));
  }) : /*#__PURE__*/React__default.createElement(TableRow, {
    className: classes.styledTableRow,
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React__default.createElement(TablePagination, {
    rowsPerPageOptions: [10, 30, 50],
    labelDisplayedRows: function labelDisplayedRows(_ref) {
      var from = _ref.from,
          to = _ref.to,
          count = _ref.count;
      console.log(from, to, count);
    },
    component: "div",
    count: data.length,
    rowsPerPage: _rowsPerPage,
    page: _page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }))), _isConfirm ? /*#__PURE__*/React__default.createElement(ConfirmDialog, {
    type: title,
    itemName: itemName,
    openDialog: _isConfirm,
    onCancel: function onCancel(v) {
      return handleCancel();
    },
    onContinue: function onContinue(v) {
      return handleDelete();
    }
  }) : /*#__PURE__*/React__default.createElement("div", null));
}

MkTable.propTypes = {
  history: propTypes.object,
  headers: propTypes.array.isRequired,
  data: propTypes.array.isRequired,
  query: propTypes.object,
  onProductBOMClick: propTypes.func,
  onActions: propTypes.func,
  actions: propTypes.array,
  title: propTypes.string,
  order: propTypes.any,
  orderBy: propTypes.any,
  rowsPerPage: propTypes.any,
  noMoreToLoad: propTypes.any,
  isLoading: propTypes.any,
  onChangePaginatePage: propTypes.any,
  onGetData: propTypes.any,
  onChangeRowPerPage: propTypes.any,
  dense: propTypes.any,
  styles: propTypes.any
};

var useStyles$2 = styles.makeStyles(function (theme) {
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
    },
    button: {
      color: 'white',
      width: 150,
      height: 55
    },
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
  };
});

function getDataString(data, fieldName) {
  return data[fieldName];
}

function MkInfo(props) {
  var classes = useStyles$2();
  var infoData = props.infoData,
      displayFields = props.displayFields,
      _props$isNew = props.isNew,
      isNew = _props$isNew === void 0 ? false : _props$isNew,
      isEditable = props.isEditable,
      currentTabName = props.currentTabName,
      actions = props.actions;

  var _React$useState = React__default.useState(isEditable !== undefined ? isEditable : true),
      editable = _React$useState[0],
      setEditable = _React$useState[1];

  var handleEdit = function handleEdit() {
    setEditable(false);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.root
  }, isNew ? /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  })) : /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  }, !editable ?
  /*#__PURE__*/
  React__default.createElement("div", null) : displayFields.map(function (d, i) {
    return /*#__PURE__*/React__default.createElement(core.Grid, {
      container: true,
      key: i
    }, /*#__PURE__*/React__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      sm: 5
    }, /*#__PURE__*/React__default.createElement(core.Box, {
      style: {
        width: '250px'
      }
    }, /*#__PURE__*/React__default.createElement(core.Typography, {
      style: {
        paddingRight: '30px',
        color: 'grey'
      }
    }, d.label))), /*#__PURE__*/React__default.createElement(core.Grid, {
      item: true,
      xs: 12,
      sm: 7
    }, d.type === 'photo' ? /*#__PURE__*/React__default.createElement("img", null) :
    /*#__PURE__*/
    React__default.createElement(core.Typography, {
      style: {
        paddingRight: '30px'
      }
    }, infoData !== undefined ? getDataString(infoData, d.fieldName) : ''))));
  })), /*#__PURE__*/React__default.createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/React__default.createElement(core.Grid, {
    container: true,
    direction: "row",
    alignItems: "flex-end"
  }, actions.map(function (a, i) {
    if (currentTabName === 'account') {
      if (infoData.status === 'invited') {
        return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          }
        }, a.label));
      }

      if (infoData.status === 'joined') {
        return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          }
        }, a.label));
      }

      if (infoData.status === 'disabled') {
        return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
          style: {
            color: 'white',
            backgroundColor: 'grey',
            "float": 'right',
            marginLeft: '10px'
          }
        }, a.label));
      }

      if (infoData.status === 'requested') {
        if (editable) {
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            },
            onClick: handleEdit
          }, a.icon, a.label));
        } else {
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              color: 'white',
              backgroundColor: 'grey',
              "float": 'right',
              marginLeft: '10px'
            }
          }, a.label));
        }
      }
    } else {
      if (editable) {
        if (a.action_type === 'edit') {
          console.log('type: ', a.action_type, 'editable: ', editable);
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            },
            onClick: handleEdit
          }, a.icon, a.label));
        }

        if (a.action_type === 'delete') {
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              "float": 'right',
              marginLeft: '10px'
            }
          }, a.icon, a.label));
        }
      } else {
        if (a.action_type === 'save') {
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              marginLeft: '10px'
            }
          }, a.icon, a.label));
        }

        if (a.action_type === 'cancel') {
          return /*#__PURE__*/React__default.createElement(core.Box, null, /*#__PURE__*/React__default.createElement(core.Button, {
            style: {
              "float": 'right',
              marginLeft: '10px'
            }
          }, a.icon, a.label));
        }
      }
    }
  })))));
}

MkInfo.propTypes = {
  history: propTypes.object,
  infoData: propTypes.object,
  displayFields: propTypes.array,
  isNew: propTypes.bool,
  isEditable: propTypes.bool,
  actions: propTypes.any
};

exports.List = List;
exports.MkForm = MkForm;
exports.MkInfo = MkInfo;
exports.MkTable = MkTable;
//# sourceMappingURL=index.js.map
