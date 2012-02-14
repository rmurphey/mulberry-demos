dojo.provide('client.models.Todo');

mulberry.model('Todo', {
  complete : false,

  finish : function() {
    this.set('complete', true);
  },

  unfinish : function() {
    this.set('complete', false);
  }
});
