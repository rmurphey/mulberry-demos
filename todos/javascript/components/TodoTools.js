dojo.provide('client.components.TodoTools');

mulberry.component('TodoTools', {
  componentTemplate : dojo.cache('client.components', 'TodoTools/TodoTools.haml'),

  init : function() {
    this.connect(this.completeAll, 'click', 'onCompleteAll');
  },

  onCompleteAll : function() { }
});
