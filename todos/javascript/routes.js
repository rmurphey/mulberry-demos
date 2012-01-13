dojo.provide('client.routes');

mulberry.page('/todos', {
  name : 'Todos',
  pageDef : 'todos'
}, true);

mulberry.page('/completed', {
  name : 'Completed',
  pageDef : 'completed'
});
