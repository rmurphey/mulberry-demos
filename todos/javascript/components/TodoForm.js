dojo.provide('client.components.TodoForm');

mulberry.component('TodoForm', {
  componentTemplate : dojo.cache('client.components', 'TodoForm/TodoForm.haml'),

  init : function() {
    this.connect(this.domNode, 'submit', function(e) {
      e.preventDefault();
      var item = { description : this.descriptionInput.value };
      this.domNode.reset();
      this.onAdd(item);
    });
  },

  onAdd : function(item) { }
});
