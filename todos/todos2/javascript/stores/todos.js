dojo.provide('client.stores.todos');

mulberry.store('todos', {
  model : 'Todo',

  finish : function(id) {
    this.invoke(id, 'finish');
  },

  unfinish : function(id) {
    this.invoke(id, 'unfinish');
  }
});
