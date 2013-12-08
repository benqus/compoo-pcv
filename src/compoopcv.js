/* global: Compoo, jquery */
(function (global, Compoo, $, Handlebars) {
  /**
   * @class compoopcv
   * @extends {Compoo}
   */
  var compoopcv = Compoo.extend({
    /**
     * Resolves the given namespace on the current context.
     * @param {String} namespace
     * @return {*}
     */
    "require": function (namespace) {
      var resolver;
      
      if (typeof namespace === 'string' && namespace) {
        resolver = new Function('return this.' + namespace);
      }
      
      return resolver && resolver.call(this);
    },
    
    /**
     * @class jQuery
     */
    "$": $,
    
    /**
     * @class Compoo
     */
    "Compoo": Compoo,
    
    /**
     * @type {Object}
     */
    "Handlebars": Handlebars
  });
  
  if (global.compoopcv) {
    compoopcv._compoopcv = global.compoopcv;
  }
  
  global.compoopcv = compoopcv;
  
})(function () {
  return this;
}(), Compoo, jQuery);