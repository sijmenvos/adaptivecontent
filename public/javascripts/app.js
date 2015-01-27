angular.module('lego', ['ui.router', 'ngMaterial', 'ui.select', 'ui.calendar'])

.run(function($rootScope){
	console.log('run');

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
    console.log(error);
  })
})

.config(function($sceDelegateProvider, $stateProvider, $urlRouterProvider, $httpProvider, $sceProvider){
	console.log('config');

  $sceProvider.enabled(false);

	$sceDelegateProvider.resourceUrlWhitelist([
	    // Allow same origin resource loads.
	    'self'
	    // Allow loading from our assets domain.  Notice the difference between * and **.
  	]);

  $urlRouterProvider.otherwise("/");

	$stateProvider
    .state('home', {
      url: "/",
      // controller: 'homeCtrl',
      templateUrl: '/views/home'
    })
    .state('bezoeker', {
      url: "/bezoeker",
      // controller: 'homeCtrl',
      templateUrl: '/views/bezoeker'
    })
    .state('patient', {
      url: "/patient",
      // controller: 'homeCtrl',
      templateUrl: '/views/patient'
    })
    .state('arts', {
      url: "/arts",
      // controller: 'homeCtrl',
      templateUrl: '/views/arts'
    })
})