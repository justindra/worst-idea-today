Template.ideaInput.onRendered(function(){	
	$('form').submit(false);
});

Template.ideaList.helpers({
	ideas: function () {
		var ideas = Ideas.find({}, {sort: [["rank", "1"]]}).fetch();
		var text = "";
		for (i = 0; i < ideas.length; i++) { 
			text += "<tr class = 'idea-row' data-id="+ideas[i]._id+">";
		    text += "<td>" + ideas[i].rank + "</td>";
		    text += "<td>" + ideas[i].content + "</td>";
		    text += "<td>" + moment(ideas[i].date).format('MMMM Do YYYY, h:mm:ss a')  + ' (' + moment(ideas[i].date).fromNow()  + ") </td>";
		    if (moment(ideas[i].date).isSame(moment(), 'day')){
		    	text += "<td><a href=''><i class='fa fa-arrow-circle-down downvote'></i></a></td>";
			}else{
		    	text += "<td>Voting has expired</td>";
			}

			text += "</tr>";
		}
		return text;
	},
	ideasTop: function () {
		var topIdeas = Ideas.find({}, {sort: [["rank", "1"]], limit:10}).fetch();
		var text = "";
		for (i = 0; i < topIdeas.length; i++) { 
			text += "<tr class = 'idea-row' data-id="+topIdeas[i]._id+">";
		    text += "<td>" + topIdeas[i].rank + "</td>";
		    text += "<td>" + topIdeas[i].content + "</td>";
		    text += "<td>" + moment(topIdeas[i].date).format('MMM Do YY, h:mm a')  + ' (' + moment(topIdeas[i].date).fromNow()  + ") </td>";
		    text += "<td><a href=''><i class='fa fa-arrow-circle-down downvote'></i></a></td>";


			text += "</tr>";
		}
		return text;
	},
	ideasToday: function () {
		var todaysIdeas = Ideas.find({date: {$gte: today(), $lte: tomorrow()}}, {sort: [["date", "desc"]]}).fetch();
		var text = "";
		for (i = 0; i < todaysIdeas.length; i++) { 
			text += "<tr class = 'idea-row' data-id="+todaysIdeas[i]._id+">";
		    text += "<td>" + todaysIdeas[i].rank + "</td>";
		    text += "<td>" + todaysIdeas[i].content + "</td>";
		    text += "<td>" + moment(todaysIdeas[i].date).format('MMM Do YY, h:mm a')  + ' (' + moment(todaysIdeas[i].date).fromNow()  + ") </td>";
		    text += "<td><a href=''><i class='fa fa-arrow-circle-down downvote'></i></a></td>";
			text += "</tr>";
		}
		return text;
	},
	ideasYesterday: function () {
		var yesterdaysIdeas = Ideas.find({date: {$gte: yesterday(), $lte: today()}}, {sort: [["date", "desc"]]}).fetch();
		var text = "";
		for (i = 0; i < yesterdaysIdeas.length; i++) { 
			text += "<tr class = 'idea-row' data-id="+yesterdaysIdeas[i]._id+">";
		    text += "<td>" + yesterdaysIdeas[i].rank + "</td>";
		    text += "<td>" + yesterdaysIdeas[i].content + "</td>";
		    text += "<td>" + moment(yesterdaysIdeas[i].date).format('MMM Do YY, h:mm a')  + ' (' + moment(yesterdaysIdeas[i].date).fromNow()  + ") </td>";
		    text += "<td><a href=''><i class='fa fa-arrow-circle-down downvote'></i></a></td>";
			text += "</tr>";
		}
		return text;
	}
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



Template.ideaList.events({
	'click a .fa.fa-chevron-up': function (evt, template) {
		Meteor.call('adjustRank', $(template.find('.row')).attr('data-id'), 1);
	},
	'click a .fa-arrow-circle-down': function (evt, template) {
		Meteor.call('adjustRank', $(evt.target).closest('tr').attr('data-id'), -1);
	}
});

Template.ideaInput.events({
	'click .btn.btn-success': function (evt, template) {
		var inputs = template.findAll('input');
		var name = inputs[0].value;
		var idea = inputs[1].value;
		if (name != '' && idea != ''){			
			var content = name +" says \"" + idea + "\"";
			Meteor.call('addIdea', content, function (error, result) {});
			console.log('adding ideas');
		}
	}
});
