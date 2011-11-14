dojo.provide('client.components.IngredientsList');

mulberry.component('IngredientsList', {
  componentTemplate : dojo.cache('client.components', 'IngredientsList/IngredientsList.haml'),
  ingredientTemplate: dojo.cache('client.components', 'IngredientsList/Ingredient.haml'),

  prep : function() {
    this.data = this.node.data[0];
    this.ingredients = this.data.json.ingredients;
  },

  init : function() {
    // replace with populate once it's available
    for( var i = 0, l = this.ingredients.length, el; i < l; ++i ){
      this.domNode.innerHTML += "<li>"+this.ingredients[i]+"</li>";
    }
  }
});
