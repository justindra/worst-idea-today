Template.ideaList.helpers({
	ideas: function () {
		return Ideas.find({}, {sort: [["rank", "desc"]]});
	}
});

Template.idea.events({
	'click a .fa.fa-chevron-up': function (evt, template) {
		Meteor.call('adjustRank', $(template.find('.row')).attr('data-id'), 1);
	},
	'click a .fa.fa-chevron-down': function (evt, template) {
		Meteor.call('adjustRank', $(template.find('.row')).attr('data-id'), -1);
	}
});

Template.ideaInput.events({
	'click .btn.btn-success': function (evt, template) {
		Meteor.call('addIdea', template.find('input').value, function (error, result) {});
	}
});

Template.home.helpers({
	today: function () {
		return Date.now();
	}
});