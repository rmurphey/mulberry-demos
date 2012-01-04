dojo.provide('client.capabilities.PageTwitterSearch');

mulberry.capability('PageTwitterSearch', {
  requirements : {
    twitter : 'custom.Twitter'
  },

  init : function() {
    var twitterComponent = this.twitter,
        term = this.baseObj.search;

    client.stores.Twitter.search(term).then(function(data) {
      twitterComponent.set('tweets', data);
    });
  }
});
