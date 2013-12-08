/* global: compoopcv */
(function (global, pcv, _slice) {
  var Compoo = pcv.require('Compoo');
  
  var isString = pcv.require('utils.isString');
  var isFunction = pcv.require('utils.isFunction');
  var isDefined = pcv.require('utils.isDefined');
  
  pcv.EventHub = Compoo.extend({
    /**
     * @type {Object}
     */
    events: {},
    
    /**
     * @type {Number}
     */
    eventId: 0,
    
    /**
     * @public
     * @param {String} type
     * @param {Function} callback
     * @param {Object} [context]
     * @param {Boolean} [once]
     */
    on: function (type, callback, context, once) {
      var events = this.events;
      var id;
  
      if (isString(type) && isFunction(callback)) {
        if (!events.hasOwnProperty(type)) {
          events[type] = {};
        }
  
        id = this.eventId++;
        events[type][id] = {
          id: id,
          once: (once === true),
          context: (context || global),
          callback: callback
        };
      }
  
      return this;
    },
    
    /**
     * @public
     * @param {String} type
     * @param {Function} callback
     * @param {Object} [context]
     */
    once: function (type, callback, context) {
      this.on(type, callback, context, true);
      return this;
    },
    
    /**
     * @public
     * @param {String} type
     * @param {Function} [callback]
     * @param {Object} [context]
     */
    off: function (type, callback, context) {
      var events = this.events;
      var types, i, j;
  
      if (isString(type)) {
        types = events[type];
  
        for (i in types) {
          if (types.hasOwnProperty(i)) {
            this.offListener(types, types[i], callback, context);
          }
        }
      } else if (isFunction(callback) || isDefined(context)) {
        for (i in events) {
          if (events.hasOwnProperty(i)) {
            types = events[i];
  
            for (j in types) {
              if (types.hasOwnProperty(j)) {
                this.offListener(types, types[j], callback, context);
              }
            }
          }
        }
      } else {
        this.events = {};
      }
  
      return this;
    },
    
    /**
     * @public
     * @param {String} type
     * @param {*} [param1, [param2, [...]]
     */
    trigger: function (type) {
      var args = _slice.call(arguments, 1);
      var types = this.events[type];
      var listener, i;
  
      if (types instanceof Array) {
        for (i in types) {
          if (types.hasOwnProperty(i)) {
            listener = types[i];
            listener.callback.apply(listener.context, args);
  
            if (listener.once === true) {
              delete types[listener.id];
            }
          }
        }
      }
  
      return this;
    },
    
    /**
     * @private
     * @param {String} type
     * @param {Object} listener
     * @param {Function} [callback]
     * @param {Object} [context]
     */
    offListener: function (types, listener, callback, context) {
      if (listener.callback === callback || !isFunction(callback)) {
        //remove only when context is not defined or
        //when context matches listener's context
        if (listener.context === context || !isDefined(context)) {
          delete types[listener.id];
        }
      }
    }
  });
  
})(function (){
  return this;
}(), compoopcv, Array.prototype.slice);