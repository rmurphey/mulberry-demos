dojo.provide('client.stores.todos');

mulberry.store('todos', {
  model : 'Todo',

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

mulberry.model('Todo', { complete : false });
