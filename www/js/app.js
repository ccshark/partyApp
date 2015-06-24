// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
        })

        // the party tab has its own child nav-view and history
        .state('tab.party-index', {
          url: '/party',
          views: {
            'party-tab': {
              templateUrl: 'templates/party-index.html'
            }
          }
        })

        // tab for the map.
        .state('tab.map', {
          url: '/map',
          views: {
            'map-tab': {
              templateUrl: 'templates/map.html',
              controller: 'MapCtrl'
            }
          }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/party');

    });

