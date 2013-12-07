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
    "resolve": function (namespace) {
      var resolver = new Function('return this.' + namespace);
      return resolver.call(this);
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