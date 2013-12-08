/* global: compoopcv */
(function (pcv, Array, RegExp) {
  
  pcv.utils = pcv.Compoo.extend({
    isFunction: function (arg) {
      return (typeof arg === 'function');
    },
    
    isUndefined: function (arg) {
      return (typeof arg === 'undefined');
    },
    
    isDefined: function (arg) {
      return (typeof arg !== 'undefined');
    },
    
    isNumber: function (arg) {
      return (typeof arg === 'number' && !isNaN(arg) && isFinite(arg));
    },
    
    isString: function (arg) {
      return (typeof arg === 'string');
    },
    
    isRegExp: function (arg) {
      return (arg instanceof RegExp);
    },
    
    isArray: function (arg) {
      return (arg instanceof Array);
    },
    
    isNull: function (arg) {
      return (arg === null);
    }
  });
  
})(compoopcv, Array, RegExp);