(function () {
  'use strict';

  angular.module('TestApp', [])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/test', {template: '<div>Bla</div>'});
      $routeProvider.otherwise({redirectTo: '/test'});
    }]);

}());
