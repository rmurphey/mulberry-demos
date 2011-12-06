dojo.provide('client.components.TodoManager');

mulberry.component('TodoManager', {
  componentTemplate : dojo.cache('client.components', 'TodoManager/TodoManager.haml'),

  init : function() {
    this.connect(this.completeAll, 'click', 'onCompleteAll');
  },

  onCompleteAll : function() { }
});
