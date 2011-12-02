dojo.provide('client.components.ImageHeader');

mulberry.component('ImageHeader', {
  componentTemplate : dojo.cache('client.components', 'ImageHeader/ImageHeader.haml'),

  widgetsInTemplate : true,

  prep : function() {
    this.title = this.node ? this.node.name : this.title;
    var image = this.node.featuredImage.large;
    this.url = image.url;
    this.height = image.height;
    this.width = image.width;
  }
});
