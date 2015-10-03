Meteor.publish('ideas', function () {
	return Ideas.find({});
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