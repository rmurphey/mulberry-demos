dojo.provide('client.stores.Twitter');

mulberry.store('Twitter', {
  url : 'http://search.twitter.com/search.json',
  model : 'Tweet',

  search : function(term) {
    return mulberry.jsonp({
      url : this.url,
      content : { q : escape(term) },
      callbackParamName : 'callback'
    }).then(dojo.hitch(this, 'process'));
  },

  prepareData : function(data) {
    return data.results;
  }
});

mulberry.model('Tweet', {
  format : function() {
    this.set('created_at', dojo.date.locale.format(
      new Date(this.created_at), {
        datePattern : 'EEE',
        timePattern : 'h:mm a'
      }
    ));

    this.set('author', '@' + this.from_user);

    this.set('text', this.text.replace(
      /@(\S+)/g,
      "<a href='http://twitter.com/#!/$1'>@$1</a>"
    ));
  }
});
