dojo.provide('client.components.TodoManager');

mulberry.component('TodoManager', {
  componentTemplate : dojo.cache('client.components', 'TodoManager/TodoManager.haml'),

  init : function() {
    this.connect(this.clearCompletedButton, 'click', 'onClearCompleted');
    this.connect(this.clearAllButton, 'click', 'onClearAll');
  },

  onClearCompleted : function() { },
  onClearAll : function() { }
});
