dojo.provide('client.components.TodoForm');

mulberry.component('TodoForm', {
  componentTemplate : dojo.cache('client.components', 'TodoForm/TodoForm.haml'),

  init : function() {
    this.connect(this.saveButton, 'click',  function(e) {
      var item = { description : this.descriptionInput.value };

      console.log('item is', item);
      this.onSave(item);
      this.domNode.reset();
    });

    this.connect(this.domNode, 'submit', function(e) {
      e.preventDefault();
    });
  },

  onSave : function(item) { }
});
