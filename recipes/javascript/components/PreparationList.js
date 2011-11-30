dojo.provide('client.components.PreparationList');

mulberry.component('PreparationList', {
  componentTemplate : dojo.cache('client.components', 'PreparationList/PreparationList.haml'),

  prep : function() {
    this.preparations = this.node.getData('recipe').preparation;
  }/* FOR LATER,

  init : function() {
    var $lis = $(this.domNode).children('li');
    // provide a random number for the styling...

    $lis.each(function() {
      console.log(this);
      $(this).css('-webkit-transform', 'rotate(' + Math.rand * 4 - 2 + 'deg)');
    });
    //dojo.style(this.domNode, '-webkit-transform', 'rotate('+Math.rand * 4 - 2+')deg');
  }*/
});
