dojo.provide('client.components.Twitter');

mulberry.component('Twitter', {
  componentTemplate : dojo.cache('client.components', 'Twitter/Twitter.haml'),
  tweetTemplate : dojo.cache('client.components', 'Twitter/Tweet.haml'),

  _setTweetsAttr : function(tweets) {
    this.populate(mulberry.haml(this.tweetTemplate), tweets);
    dojo.publish('/content/updated');
  }
});
