/* global: compoopcv */
(function (pcv) {
  var Smarty = pcv.require('Smarty');
  var isFunction = pcv.require('utils.isFunction');
  
  var Presenter = pcv.Presenter = pcv.extend({
    
    controllerClass: undefined,
    
    viewClass: pcv.View,
    
    constuctor: function () {
      var view = this.viewClass.create();
      var controllerClass = this.controllerClass;
      var controller;
      
      if (isFunction(controllerClass)) {
        controller = controllerClass.create(view);
      }
      
      this.controller = controller;
      this.view = view;
    },
    
    display: function () {
      
    },
    
    destroy: function () {
      this.controller.destroy();
      this.view.destroy();
      return Smarty.destroy.apply(this, arguments);
    }
  });
  
})(compoopcv);