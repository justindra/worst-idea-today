Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'appLoading'
});
Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	})
});
