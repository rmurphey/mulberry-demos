dojo.provide('client.capabilities.PageTwitterSearch');

mulberry.capability('PageTwitterSearch', {
  requirements : {
    twitter : 'custom.Twitter'
  },

  init : function() {
    var url = this._urlForTerm(this.baseObj.search),
        twitterComponent = this.twitter;

    mulberry.jsonp(url).then(function(data) {
      twitterComponent.set('tweets', data.results);
    });
  },

  _urlForTerm : function(term) {
    return 'http://search.twitter.com/search.json?q=' + escape(term);
  }
});

