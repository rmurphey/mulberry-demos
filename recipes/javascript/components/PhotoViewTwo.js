dojo.provide('client.components.PhotoViewTwo');

mulberry.component('PhotoViewTwo', {
  componentTemplate : dojo.cache('client.components', 'PhotoViewTwo/PhotoViewTwo.haml'),
  widgetsInTemplate : true,

  prep : function() {
    this.title = this.node ? this.node.title : this.title;
    this.node.populateChildren();
    this.children = dojo.filter(this.node.children || [], function(child) {
      return child.featuredImage !== undefined;
    });
  },

});
