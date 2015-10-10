Template.ideaList.helpers({
	ideas: function () {
		// return Ideas.find({}, {sort: [["rank", "desc"]]});
		var ideas = Ideas.find({}, {sort: [["rank", "desc"]]}).fetch();
		var text = "";
		for (i = 0; i < ideas.length; i++) { 
			text += "<tr>";
		    text += "<td>" + ideas[i].rank + "</td>";
		    text += "<td>" + ideas[i].content + "</td>";
		    text += "<td>" + ideas[i].date + "</td>";
			text += "</tr>";
		}
		return text;
	},
	ideasTop: function () {
		var topIdeas = Ideas.find({}, {sort: [["rank", "desc"]], limit:10}).fetch();
		var text = "";
		for (i = 0; i < topIdeas.length; i++) { 
			text += "<tr>";
		    text += "<td>" + topIdeas[i].rank + "</td>";
		    text += "<td>" + topIdeas[i].content + "</td>";
		    text += "<td>" + topIdeas[i].date + "</td>";
			text += "</tr>";
		}
		return text;
	},
	ideasToday: function () {
		var todaysIdeas = Ideas.find({date: {$gte: today(), $lte: tomorrow()}}, {sort: [["rank", "desc"]]}).fetch();
		var text = "";
		for (i = 0; i < todaysIdeas.length; i++) { 
			text += "<tr>";
		    text += "<td>" + todaysIdeas[i].rank + "</td>";
		    text += "<td>" + todaysIdeas[i].content + "</td>";
		    text += "<td>" + todaysIdeas[i].date + "</td>";
			text += "</tr>";
		}
		return text;
	},
	ideasYesterday: function () {
		var yesterdaysIdeas = Ideas.find({date: {$gte: yesterday(), $lte: today()}}, {sort: [["rank", "desc"]]}).fetch();
		var text = "";
		for (i = 0; i < yesterdaysIdeas.length; i++) { 
			text += "<tr>";
		    text += "<td>" + yesterdaysIdeas[i].rank + "</td>";
		    text += "<td>" + yesterdaysIdeas[i].content + "</td>";
		    text += "<td>" + yesterdaysIdeas[i].date + "</td>";
			text += "</tr>";
		}
		return text;
	}
});

Template.registerHelper('compare', function(v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});

Template.history.onRendered(function(){
  window.scrollTo(0, 0);
});

function today() {
	var today = new Date();
	return new Date(today.getFullYear(), today.getMonth(), today.getDate()).valueOf();
}

function tomorrow() {
	var today = new Date();
	return new Date(today.getFullYear(), today.getMonth(), today.getDate()+1).valueOf();
}

function yesterday() {
	var today = new Date();
	return new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).valueOf();
}

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


