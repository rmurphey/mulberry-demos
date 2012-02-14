dojo.provide('client.components.TodoList');

mulberry.component('TodoList', {
  componentTemplate : dojo.cache('client.components', 'TodoList/TodoList.haml'),
  itemTemplate : mulberry.haml(dojo.cache('client.components', 'TodoList/Item.haml')),

  init : function() {
    this.connect(this.domNode, 'click', '_handleClick');
  },

  _handleClick : function(e) {
    var t = e.target,
        input, id, deleting;

    if (t.nodeName.match(/INPUT|SPAN|DIV/)) {
      if (dojo.hasClass(t, 'delete')) {
        deleting = true;
      }

      t = t.parentNode;
    }

    if (t.nodeName === 'LI') {
      id = dojo.attr(t, 'data-id');

      if (deleting) {
        this.onDelete(id);
        return;
      }

      input = t.querySelector('input');

      if (input.checked) {
        input.checked = false;
        this.onComplete(id);
      } else {
        input.checked = true;
        this.onUncomplete(id);
      }
    }
  },

  _setTodosAttr : function(todos) {
    if (!todos.length) {
      this.domNode.innerHTML = '<li class="no-items">No items yet</li>';
      return;
    }

    todos = dojo.map(todos, function(t) {
      t.checked = !!t.complete;
      return t;
    });

    this.populate(this.itemTemplate, todos);
  },

  onComplete : function(id) { },
  onUncomplete : function(id) { },
  onDelete : function(id) { }
});
