dojo.provide('client.capabilities.TodoPage');

mulberry.capability('TodoPage', {
  requirements : {
    todoList : 'custom.TodoList',
    todoForm : 'custom.TodoForm',
    todoManager : 'custom.TodoManager'
  },

  connects : [
    [ 'todoForm', 'onSave', '_save' ],
    [ 'todoList', 'onComplete', '_complete' ],
    [ 'todoList', 'onUncomplete', '_uncomplete' ],
    [ 'todoManager', 'onClearCompleted', '_clearCompleted' ],
    [ 'todoManager', 'onClearAll', '_clearAll' ]
  ],

  init : function() {
    this.todos = new client.data.todos();
    this.todoList.set('todos', this.todos.query());
  },

  _save : function(item) {
    this.todos.add(item, { id : 'id' });
    this.todoList.set('todos', this.todos.query());
  },

  _complete : function(id) {
    this.todos.complete(id);
  },

  _uncomplete : function(id) {
    this.todos.uncomplete(id);
  },

  _clearCompleted : function() {
    var t = this.todos;

    this.todoList.clearComplete();
    t.query({ complete : true }).forEach(function(item) { t.remove(item.id); });
  },

  _clearAll : function() {
    this.todos.setData([]);
    this.todoList.set('todos', []);
  }
});

