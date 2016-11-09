app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('login',  {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'loginController'
		})
		.state('cadastro',  {
			url: '/cadastro',
			templateUrl: 'templates/cadastro.html',
			controller: 'cadastroController'
		})
		.state('timeline',  {
			url: '/timeline',
			templateUrl: 'templates/timeline.html',
			controller: 'timelineController'
		})		
	$urlRouterProvider.otherwise('/login');
})