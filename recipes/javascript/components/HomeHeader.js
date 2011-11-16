dojo.require('toura.components.HeaderImage');
dojo.provide('client.components.HomeHeader');

// we are doing this as a "core" component to allow inheritance
dojo.declare('client.components.HomeHeader', [ toura.components.HeaderImage ], {
  templateString: dojo.cache('client.components', 'HomeHeader/HomeHeader.haml'),
  "class": 'home-header',
  
  prepareData: function() {
    this.inherited(arguments);
    
    this.title = this.node ? this.node.name : this.title;
    
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
    
    // voffset should always be positive
    if(voffset < 0) { voffset = 0; }
    $node.css('margin-top', -voffset);
    
    // also fire /content/update to be sure scrollers all still work
    dojo.publish('/content/update', [{}]);
  },
  
  _resizeImage: function() {
    this.inherited(arguments);
    this._offsetImage();
  },
    
  _getWidth: function() {
    return toura.app.UI.viewport.width;
  },

  _getHeight: function() {
    return toura.app.UI.viewport.height;
  }
});

