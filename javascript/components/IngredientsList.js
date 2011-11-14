dojo.provide('client.components.IngredientsList');

mulberry.component('IngredientsList', {
  componentTemplate : dojo.cache('client.components', 'IngredientsList/IngredientsList.haml'),
  ingredientTemplate: dojo.cache('client.components', 'IngredientsList/Ingredient.haml'),

  prep : function() {
    this.data = this.node.data[0];
    this.ingredients = this.data.json.ingredients;
  },

  init : function() {
    for( var i = 0, l = this.ingredients.length; i < l; ++i ){
      mulberry.populate(this.domNode, this.ingredientTemplate, { ingredient: this.ingredients[i] });
    }
  }
});
