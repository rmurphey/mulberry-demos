dojo.provide('client.stores.todos');

dojo.require('dojo.Stateful');

mulberry.stores.local('todos', {
  add : function(item) {
    var item = new client.models.Todo(item);
    item.set('id', this._createId());
    this.put(item);
  },

  complete : function(id) {
    var item = this.get(id);
    item.set('complete', true);
    this.put(item);
  },

  uncomplete : function(id) {
    var item = this.get(id);
    item.set('complete', false);
    this.put(item);
  }
});

dojo.declare('client.models.Todo', dojo.Stateful, { complete : false });
