dojo.provide('client.routes');

mulberry.page('/todo', {
  name : 'Todos',
  pageDef : 'todos'
}, true);

mulberry.page('/completed', {
  name : 'Completed',
  pageDef : 'completed'
});
