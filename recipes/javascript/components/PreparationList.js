dojo.provide('client.components.PreparationList');

mulberry.component('PreparationList', {
  componentTemplate : dojo.cache('client.components', 'PreparationList/PreparationList.haml'),

  prep : function() {
    this.data = this.node.data[0];
    this.preparations = this.data.json.preparation;
  },

  setupChildComponents : function() {
    // replace with populate once it's available
    for( var i = 0, l = this.preparations.length, el; i < l; ++i ){
      this.domNode.innerHTML += "<li>"+this.preparations[i]+"</li>";
    }
  }
});
