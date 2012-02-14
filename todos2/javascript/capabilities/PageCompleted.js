dojo.provide('client.capabilities.PageCompleted');

mulberry.capability('PageCompleted', {
  requirements : {
    todoList : 'TodoList'
  },

  connects : [
    [ 'todoList', 'onUncomplete', '_uncomplete' ],
    [ 'todoList', 'onDelete', '_delete' ]
  ],

  init : function() {
    this.todos = client.stores.todos;
    this._updateList();
  },

  _delete : function(id) {
    this.todos.remove(id);
    this._updateList();
  },

  _uncomplete : function(id) {
    this.todos.unfinish(id);
    this._updateList();
  },

  _updateList : function() {
    this.todoList.set('todos', this.todos.query({ complete : true }));
  }
});

