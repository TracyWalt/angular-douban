var angularDouban = angular.module('angularDouban', [
  'ngRoute',
  'angularDoubanControllers',
  'angularDoubanService',
  'angularDoubanDirective'
]);

angularDouban.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/app', {
        templateUrl: 'tpl/list.html',
        controller: 'listCtrl'
      }).
      when('/app/:bookId', {
        templateUrl: 'tpl/detail.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/app'
      });
  }]);
