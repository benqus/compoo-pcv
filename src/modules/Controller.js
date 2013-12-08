/* global: compoopcv */
(function (pcv) {
  var Smarty = pcv.require('Smarty');
  var $ = pcv.require('$');
  
  pcv.Controller = Smarty.extend({
    events: {},
    
    constructor: function (view) {
      Smarty.constructor.apply(this, arguments);
      this.view = view;
    },
    
    initialize: function () {
      var $el = $(this.getElement());
      
    },
    
    getElement: function () {
      return this.view.root;
    }
  });
  
})(compoopcv);