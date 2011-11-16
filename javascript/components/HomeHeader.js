dojo.require('toura.components.HeaderImage');
dojo.provide('client.components.HomeHeader');

// we are doing this as a "core" component to allow inheritance
// that means it is loaded in as though it's a core component, rather
// than as a custom component
dojo.declare('toura.components.HomeHeader', [ toura.components.HeaderImage ], {
  "class": 'home-header',
  
  prepareData: function() {
    this.inherited(arguments);
    
    if (this.viewImage) {
      dojo.mixin(this.viewImage, this._calculateDimensions());
    }
  },
  
  postCreate: function() {
    this.inherited(arguments);
    
    this._offsetImage();
  },
  
  _offsetImage: function() {
    var img = this.image,
        h = this._getHeight(),
        $node = $(this.imageNode),
        imgheight = $node.height(),
        voffset = img ? imgheight - h/2 : 0;
    
    $node.css('margin-top', -voffset);
  },
  
  _resizeImage: function() {
    this.inherited(arguments);
    this._offsetImage();
  },
    
  _getHeight: function() {
    return toura.app.UI.viewport.height;
  }
});

