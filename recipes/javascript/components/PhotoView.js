dojo.provide('client.components.PhotoView');

mulberry.component('PhotoView', {
  componentTemplate : dojo.cache('client.components', 'PhotoView/PhotoView.haml'),
  widgetsInTemplate : true,

  prep : function() {
    this.title = this.node ? this.node.title : this.title;
    this.node.populateChildren();
  }
});
