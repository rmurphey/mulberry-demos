dojo.provide('client.components.Twitter');

mulberry.component('Twitter', {
  componentTemplate : dojo.cache('client.components', 'Twitter/Twitter.haml'),
  tweetTemplate : dojo.cache('client.components', 'Twitter/Tweet.haml'),

  _setTweetsAttr : function(tweets) {
    this.populate(
      mulberry.haml(this.tweetTemplate),
      this._prepTweets(tweets)
    );

    dojo.publish('/content/updated');
  },

  _prepTweets : function(tweets) {
    return dojo.map(tweets, function(tweet) {
      tweet.created_at = dojo.date.locale.format(
        new Date(tweet.created_at), {
          datePattern : 'EEE',
          timePattern : 'h:mm a'
        }
      );

      tweet.author = '@' + tweet.from_user;

      tweet.text = tweet.text.replace(
        /@(\S+)/g,
        "<a href='http://twitter.com/#!/$1'>@$1</a>"
      );

      return tweet;
    });
  }
});
