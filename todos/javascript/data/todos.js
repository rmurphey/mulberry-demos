dojo.provide('client.data.todos');

mulberry.datasource('todos', {
  key : 'todos',

  complete : function(id) {
    var item = this.store.get(id);
    this.put(dojo.mixin(item, { complete : true }));
  },

  uncomplete : function(id) {
    var item = this.store.get(id);
    this.put(dojo.mixin(item, { complete : false }));
  }
});
