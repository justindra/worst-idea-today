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
	}),
	this.route('team', {
		path: '/team',
		template: 'team'
	}),
	this.route('about', {
		path: '/about',
		template: 'about'
	}),
	this.route('subscribe', {
		path: '/subscribe',
		template: 'subscribe'
	}),
	this.route('unsubscribe', {
		path: '/unsubscribe',
		template: 'unsubscribe'
	})
});
