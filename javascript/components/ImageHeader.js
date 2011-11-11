dojo.provide('client.components.ImageHeader');

mulberry.component('ImageHeader', {
  componentTemplate : dojo.cache('client.components', 'ImageHeader/ImageHeader.haml'),

  prep : function() {
    this.title = this.node ? this.node.name : this.title;
    this.image = this.node ? this.node.images[0].original.url : false;
  },

  init : function() {
    //console.log(this);
    // gotta fix this eventually to use the BackgroundImage class right
    this.$domNode.css('background-image', 'url('+this.image+')')
  },
  
  // WHY DOES THIS FUNCTION NOT RUN?
  postCreate: function() {
    //toura.ui.BackgroundImage.loadImage();
  }
  
});
