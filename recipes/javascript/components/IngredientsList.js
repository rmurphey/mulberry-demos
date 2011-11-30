dojo.provide('client.components.IngredientsList');

mulberry.component('IngredientsList', {
  componentTemplate : dojo.cache('client.components', 'IngredientsList/IngredientsList.haml'),

  prep : function() {
    this.ingredients = this.node.ingredients;
  }
});
