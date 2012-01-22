dojo.require('toura.components.HeaderImage');
dojo.provide('client.components.HomeHeader');

dojo.declare('client.components.HomeHeader', [ toura.components.HeaderImage ], {
  templateString: dojo.cache(
    'client.components',
    'HomeHeader/HomeHeader.haml'
  ),

  resizeElements : function() {
    this.inherited(arguments);
    this._offsetImage();
  },

  _offsetImage: function() {
    var img = this.image,
        h = this._getHeight(),
        imgheight = dojo.position(this.imageNode).h,
        voffset = img ? imgheight - h/2 : 0;

    // voffset should always be positive
    if (voffset < 0) { voffset = 0; }
    voffset += 50;  // fudging it for good looks
    dojo.style(this.imageNode, 'margin-top', -voffset + 'px');

    dojo.publish('/content/update');
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

