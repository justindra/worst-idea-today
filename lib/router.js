Router.configure({
	notFoundTemplate: 'notFound',
	loadingTemplate: 'appLoading'
});
Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	}),
	this.route('history', {
		path: '/history',
		template: 'history'
	})
});
