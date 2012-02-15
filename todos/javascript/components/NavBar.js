dojo.provide('client.components.NavBar');

mulberry.component('NavBar', {
  componentTemplate : dojo.cache('client.components', 'NavBar/NavBar.haml'),
  init : function() {
    this.connect(this.query('a.back')[0], 'click', $m.app.Router.back);
  }
});
