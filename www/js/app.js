// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('shoppingApp', ['ionic', 'shoppingApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    })
    .state('app.shoppingList', {
      url: '/shoppingList',
      views: {
        'menuContent': {
          templateUrl: 'templates/shopping-list.html',
          controller: 'ShoppingListCtrl'
        }
      }
    })
    .state('app.expenses', {
      url: '/expenses',
      views: {
        'menuContent': {
          templateUrl: 'templates/expenses.html',
          controller: 'ExpensesCtrl'
        }
      }
    })
    .state('app.addItem', {
    url: '/addItem',
    views: {
      'menuContent': {
        templateUrl: 'templates/add-item.html',
        controller: 'AddItemCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shoppingList');
});
