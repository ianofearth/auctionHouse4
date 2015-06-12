Auction.ApplicationController = Ember.ObjectController.extend({
  needs: ['auctions'],
  auctions: function() {
    var auctions = this.get('controllers.auction.model')
  }.property()
});
