Meteor.methods({
	addIdea: function (idea) {
		Ideas.insert({
			content: idea,
			rank: 0,
			date: Date.now()
		}, function(err) {
			if (err) console.log(err);
		});
	},
	adjustRank: function(id, adjustment) {
		// console.log(id, adjustment);
		Ideas.update({_id: id}, {$inc: {rank: adjustment}}, function(err) {
			if(err) console.log(err);
		});
	}, 
	addSubscriber: function(name, email) {
		var sub_id = Subscribers.insert({
			email: email,
			name: name,
			verified: false,
			date: Date.now()
		}, function(err) {
			if (err) console.log(err);
		});
		var to = "jaredrpage@gmail.com";
		var from = "mail@meteor.com";
		var subject = "herro testing";
		var text = "Yay? Click here to <a href = 'http://worstidea.today/unsubscribe/"+sub_id+"'> Un-subscribe </a>";
		//Validation check
		//check([to, from, subject, text], [String]);
		//Check if it isn't in the database
		//if in db
		//Send email

    // // Let other method calls from the same client start running,
    // // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });



	}, 
	removeSubscriber: function(id, name, email) {
		// if (name == '' && email == ''){
			Subscribers.remove(id);			
		// }
	}
});