dojo.provide('client.components.ImageHeader');

mulberry.component('ImageHeader', {
  componentTemplate : dojo.cache('client.components', 'ImageHeader/ImageHeader.haml'),

  widgetsInTemplate : true,

  prep : function() {
    this.title = this.node ? this.node.name : this.title;
    this.image = this.node ? this.node.featuredImage : false;
  },

  init : function() {
    this.headerNode.set('backgroundImage', this.image.large);
    this.headerNode.loadImage();
  }
});
