angular
  .module('rent-a-suit')
  .config(Router);


function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('whoiam', {
    url: '/whoiam',
    templateUrl: '/js/views/whoiam.html'
  });
  // .state('whativedone', {
  //   url: '/whativedone',
  //   templateUrl: '/js/views/whativedone.html'
  // });

  $urlRouterProvider.otherwise('/');
}