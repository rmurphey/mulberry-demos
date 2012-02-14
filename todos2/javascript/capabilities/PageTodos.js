dojo.provide('client.capabilities.PageTodos');

console.log('mulberry', mulberry);
mulberry.capability('PageTodos', {
  /*
   * The capability expects the following components to be present in order for
   * the capability to work.
   */
  requirements : {
    todoList : 'TodoList',
    todoForm : 'TodoForm',
    todoTools : 'TodoTools'
  },

  /*
   * These "listeners" will be set up as part of setting up the page. So, for
   * example, when the TodoForm component instance announces that a user has
   * added a todo (by calling its `onAdd` method), then the capability's `_add`
   * method will be run.
   */
  connects : [
    [ 'todoForm', 'onAdd', '_add' ],
    [ 'todoList', 'onComplete', '_complete' ],
    [ 'todoList', 'onDelete', '_delete' ],
    [ 'todoTools', 'onCompleteAll', '_completeAll' ]
  ],

  /*
   * When the page is set up, we'll grab a reference to the todos store, and
   * then update the list of todos.
   */
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
    this.todos.finish(id);
    this._updateList();
  },

  _updateList : function() {
    var items = this.todos.query(function(item) {
      return !item.complete;
    });

    this.todoList.set('todos', items);
  },

  _completeAll : function() {
    this.todos.query(function(item) {
      return !item.complete;
    }).forEach(dojo.hitch(this, function(t) {
      t.finish();
      this.todos.put(t);
    }));

    this._updateList();
  }
});
