// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCookies', 'starter.controllers', 'starter.factories', 'chart.js', 'tc.chartjs' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('root', {
    url: '/',
    cache: false,
    controller: 'SessionCtrl',
    templateUrl: 'templates/loading.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  .state('localLogin', {
    url: '/locallogin',
    templateUrl: 'templates/localLogin.html'
  })

  .state('localSigup', {
    url: '/localsignup',
    templateUrl: 'templates/localSignup.html'
  })

  .state('goaltype', {
    cache: false,
    url: '/goaltype',
    templateUrl: 'templates/goaltype.html',
    controller: 'GoalCtrl',
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html'
  })
  .state('comingsoon', {
    url: '/comingsoon',
    templateUrl: 'templates/comingsoon.html'
  })

  .state('deviceAuth', {
    url: '/deviceauth',
    templateUrl: 'templates/deviceAuth.html',
    controller: 'GoalCtrl'
  })

  .state('goaldetails', {
    cache: false,
    url: '/goaldetails',
    templateUrl: 'templates/goaldetails.html',
    controller: 'GoalDetailCtrl'
  })

  .state('goalsuccess', {
    cache: false,
    url: '/goalsuccess',
    templateUrl: 'templates/goalsuccess.html',
    controller: 'GoalSuccessCtrl'
  })

  .state('goalfailure', {
    cache: false,
    url: '/goalfailure',
    templateUrl: 'templates/goalfailure.html',
    controller: 'GoalFailureCtrl'
  })

  .state('payment', {
    url: '/payment',
    templateUrl: 'templates/payment.html',
    controller: 'PaymentCtrl'
  })

  .state('progress', {
    cache: false,
    url: '/progress',
    templateUrl: 'templates/tab-progress.html',
    controller: 'ProgressCtrl'
  })

  .state('successreport', {
    url: '/successreport',
    templateUrl: 'templates/success.html',
    controller: 'SuccessReportCtrl'
  })

  .state('failurereport', {
    url: '/failurereport',
    templateUrl: 'templates/tab-failure.html',
    controller: 'FailureReportCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/tab-settings.html'
  });

  $urlRouterProvider.otherwise('/');

});
