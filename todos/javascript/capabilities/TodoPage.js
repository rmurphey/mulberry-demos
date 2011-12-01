dojo.provide('client.capabilities.TodoPage');

mulberry.capability('TodoPage', {
  requirements : {
    todoList : 'TodoList',
    todoForm : 'TodoForm',
    todoManager : 'TodoManager'
  },

  connects : [
    [ 'todoForm', 'onSave', '_save' ],
    [ 'todoList', 'onComplete', '_complete' ],
    [ 'todoManager', 'onClearComplete', '_clearComplete' ]
  ],

  init : function() {
    this.todos = new client.data.todos();
  }
});

