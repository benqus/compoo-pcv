/* global: compoopcv */
(function (pcv, _slice) {
  var utils = pcv.require('utils');
  var isString = utils.isString;
  var attr;
  
  var Smarty = pcv.extend({
    
    remove: function (attribute) {
      delete this[attribute];
      return this;
    },
    
    each: function (iterator) {
      var p;
      
      for (p in this) {
        if (this.has(p)) {
          iterator.call(this, p, this.get(p));
        }
      }
      
      return this;
    },
    
    filter: function () {
      var attributes = _slice.call(arguments);
      var filtered, key, i;
      
      if (attributes.length) {
        filtered = {};
        
        for (i = 0; i < attributes.length; i++) {
          key = attributes[i];
          
          if (isString(key) && this.has(key)) {
            filtered[key] = this[key];
          }
        }
      }
      
      return filtered;
    }
    
  });
  
  var createUtilHandler = function (attr) {
    return function (key) {
      return utils[attr](this[key]);
    }
  }
  
  for (attr in utils) {
    if (utils.has(attr)) {
      Smarty[attr] = createUtilHandler(attr);
    }
  }
  
  pcv.Smarty = Smarty;
  
})(compoopcv, Array.prototype.slice);