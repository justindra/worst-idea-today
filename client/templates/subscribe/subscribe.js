Template.subscribe.events({
	'click .btn.btn-success': function (evt, template) {
		var inputs = template.findAll('input');
		var name = inputs[0].value;
		var email = inputs[1].value;
		if (name != '' && email != ''){			
			var content = name +" says \"" + email + "\"";
			Meteor.call('addSubscriber', name, email, function (error, result) {});
			// Meteor.call('addIdea', content, function (error, result) {});
			// console.log('adding ideas');
		}
	}
});

Template.subscribe.helpers({
	getSubscribers: function () {
		var subscribers = Subscribers.find().fetch();
		var text = "";
		for (i = 0; i < subscribers.length; i++) { 
			text += "<tr class = 'idea-row' data-id="+subscribers[i]._id+">";
		    text += "<td>" + subscribers[i].name + "</td>";
		    text += "<td>" + subscribers[i].email + "</td>";
		    text += "<td>" + moment(subscribers[i].date).format('MMMM Do YYYY, h:mm:ss a')  + ' (' + moment(subscribers[i].date).fromNow()  + ") </td>";
		    // if (moment(subscribers[i].date).isSame(moment(), 'day')){
		    	// text += "<td><a href=''><i class='fa fa-arrow-circle-down downvote'></i></a></td>";
			// }else{
		    	// text += "<td>Voting has expired</td>";
			// }

			text += "</tr>";
		}
		return text;
	}
});


