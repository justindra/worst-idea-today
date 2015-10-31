Template.unsubscribe.helpers({
  unsubscribe: function() {
	Meteor.call('removeSubscriber', this.userId,'', '', function (error, result) {});
  }
});