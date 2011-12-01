dojo.provide('client.components.TodoList');

mulberry.component('TodoList', {
  componentTemplate : dojo.cache('client.components', 'TodoList/TodoList.haml'),
  itemTemplate : toura.haml(dojo.cache('client.components', 'TodoList/Item.haml')),

  prep : function() {

  },

  init : function() {
    this.connect(this.domNode, 'click', '_handleClick');
  },

  _handleClick : function(e) {
    var t = e.target,
        input, id;

    console.log('click', t.nodeName);

    if (t.nodeName.toLowerCase().match(/input|span/)) {
      t = t.parentNode;
    }

    if (t.nodeName.toLowerCase() == 'li') {
      input = t.querySelector('input');
      id = dojo.attr(t, 'data-id');

      if (input.checked) {
        dojo.removeClass(t, 'completed');
        input.checked = false;
        this.onUncomplete(id);
      } else {
        dojo.addClass(t, 'completed');
        this._complete(id);
        input.checked = true;
        this.onComplete(id);
      }
    }
  },

  _setTodosAttr : function(todos) {
    if (!todos.length) {
      this.domNode.innerHTML = 'No items yet';
      return;
    }

    this.populate(this.itemTemplate, todos);
  },

  onUncomplete : function(id) { },

  onComplete : function(id) { },

  clearComplete : function() {
    dojo.forEach(this.domNode.querySelectorAll('.completed'), dojo.destroy);
  }
});
