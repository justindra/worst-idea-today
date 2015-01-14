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
	}
});