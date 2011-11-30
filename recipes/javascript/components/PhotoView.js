dojo.provide('client.components.PhotoView');

mulberry.component('PhotoView', {
  componentTemplate : dojo.cache('client.components', 'PhotoView/PhotoView.haml'),
  widgetsInTemplate : true,

  prep : function() {
    this.title = this.node ? this.node.title : this.title;

    // get the children
    this.node.populateChildren();
    this.children = dojo.filter(this.node.children || [], function(child) {
      return child.featuredImage !== undefined;
    });
  },

  init : function() {
    // TODO: snappy action!
  }
});
