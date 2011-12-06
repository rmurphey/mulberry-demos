dojo.provide('client.capabilities.CompletedPage');

mulberry.capability('CompletedPage', {
  requirements : {
    todoList : 'custom.TodoList'
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
    this.todos.uncomplete(id);
    this._updateList();
  },

  _updateList : function() {
    this.todoList.set('todos', this.todos.query({ complete : true }));
  }
});

