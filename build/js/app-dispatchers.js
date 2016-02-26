// var Dispatcher = require('flux').Dispatcher;
// var assign = require('../../node_modules/react/lib/Object.assign');
//
// var AppDispatcher = assign(new Dispatcher(), {
//   handleViewAction: function(action) {
//     this.dispatch({
//       source: 'VIEW_ACTION',
//       action: action
//     })
//   }
// });
//
// module.exports = AppDispatcher;
var guid = require('guid');

var listeners = {};

module.exports = {
  register: function(cb){
    var id = guid.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch: function(payload){
    console.info("Dispatching...." , payload);
    for (var id in listeners) {
      var listener = listeners[id];
      listener(payload);
    }
  }
};
