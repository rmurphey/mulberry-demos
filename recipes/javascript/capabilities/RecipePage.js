dojo.provide('client.capabilities.RecipePage');

mulberry.capability('RecipePage', {
  requirements : {
    pageNav : 'PageNav'
  },

  init : function() {
    this.pageNav.set('screenTitle', this.page.baseObj.parent.name);
  }
});

