dojo.provide('client.routes');

mulberry.route('/completed', function(params, route) {
  var page = toura.app.PageFactory.createPage({
    name : 'Completed',
    pageController : 'completed'
  });

  toura.app.UI.showPage(page);
});
