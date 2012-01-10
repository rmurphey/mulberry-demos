dojo.provide('client.routes');

mulberry.route('/completed', function(params, route) {
  var page = mulberry.createPage({
    name : 'Completed',
    pageDef : 'completed'
  });

  mulberry.showPage(page);
});
