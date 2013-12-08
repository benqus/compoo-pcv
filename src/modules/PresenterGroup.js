/* global: compoopcv */
(function (pcv) {
  var Smarty = pcv.require('Smarty');
  var Presenter = pcv.require('Presenter');
  
  var PresenterGroup = pcv.PresenterGroup = Presenter.extend({
    
    render: Smarty.extend({
      method: {},
      order:[],
      map: {}
    }),
    
    constructor: function () {
      Presenter.constructor.apply(this, arguments);
      this.children = Smarty.create();
    },
    
    add: function (name, child) {
      if (name && child.is(Presenter)) {
        this.children.set(name, child);
      }
      
      return this;
    },
    
    remove: function (name) {
      if (this.children.has(name)) {
        this.children.remove(name);
      }
      
      return this;
    },
    
    removeAll: function () {
      var children = this.children;
      
      children.each(function (name, child) {
        child.destroy();
        children.remove(name);
      });
      
      return this;
    },
    
    display: function () {
      var ret = Presenter.display.apply(this, arguments);
      
      //display chidren in render.order with the render.map and the rnde.method
      
      return ret;
    },
    
    destroy: function () {
      this.removeAll();
      return Presenter.destroy.apply(this, arguments);
    }
  });
  
})(compoopcv);