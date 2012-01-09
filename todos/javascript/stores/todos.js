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

mulberry.model('Todo', {
  complete : false,

  finish : function() {
    this.set('complete', true);
  },

  unfinish : function() {
    this.set('complete', false);
  }
});
