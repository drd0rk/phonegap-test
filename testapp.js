(function () {
  'use strict';

  angular.module('TestApp', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/toll', {template: '<div>ist toll</div>'});
      $routeProvider.when('/scheiße', {template: '<div>ist scheiße</div>'});
      $routeProvider.otherwise({redirectTo: '/toll'});
    }]);

}());
