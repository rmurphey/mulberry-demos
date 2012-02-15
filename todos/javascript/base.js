/**
 * You can write custom JavaScript here; this is also where Mulberry will add
 * any dependencies you introduce via `mulberry create component`.
 */

dojo.subscribe('/app/deviceready', function() {
  mulberry.app.Config.set('app', { name : 'MyApp' });
  mulberry.registerComponentNamespace(client.components);

  setTimeout(function() {
    dojo.publish('/app/ready');
  }, 10);
});

dojo.require('client.routes');
dojo.require('client.capabilities.PageTodos');
dojo.require('client.capabilities.PageCompleted');
dojo.require('client.components.TodoForm');
dojo.require('client.components.TodoList');
dojo.require('client.components.TodoTools');
dojo.require('client.stores.todos');
dojo.require('client.models.Todo');
dojo.require('client.components.NavBar');
