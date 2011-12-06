dojo.provide('client.capabilities.TodoPage');

mulberry.capability('TodoPage', {
  requirements : {
    todoList : 'custom.TodoList',
    todoForm : 'custom.TodoForm',
    todoManager : 'custom.TodoManager'
  },

  connects : [
    [ 'todoForm', 'onAdd', '_add' ],
    [ 'todoList', 'onComplete', '_complete' ],
    [ 'todoList', 'onDelete', '_delete' ],
    [ 'todoManager', 'onCompleteAll', '_completeAll' ]
  ],

  init : function() {
    this.todos = client.stores.todos;
    this._updateList();
  },

  _delete : function(id) {
    this.todos.remove(id);
    this._updateList();
  },

  _add : function(item) {
    this.todos.add(item);
    this._updateList();
  },

  _complete : function(id) {
    this.todos.complete(id);
    this._updateList();
  },

  _updateList : function() {
    var items = this.todos.query({ complete : false });
    console.log('items are', items);
    this.todoList.set('todos', items);
  },

  _completeAll : function() {
    this.todos.setData([]);
    this._updateList();
  }
});

