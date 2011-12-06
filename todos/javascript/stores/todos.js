dojo.provide('client.stores.todos');

mulberry.stores.local('todos', {
  add : function(item) {
    this.put(dojo.mixin(item, {
      complete : false,
      id : this._createId()
    }));
  },

  complete : function(id) {
    var item = this.get(id);
    this.put(dojo.mixin(item, { complete : true }));
  },

  uncomplete : function(id) {
    var item = this.get(id);
    this.put(dojo.mixin(item, { complete : false }));
  }
});
