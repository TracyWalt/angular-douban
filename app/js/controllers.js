
var angularDoubanControllers = angular.module('angularDoubanControllers', []);

//nav
angularDoubanControllers.controller('navCtrl',['$scope','Base',function($scope,Base){
    Base.getData(function(data){
        $scope.navs = data.nav;
    });
}]);

//tag
angularDoubanControllers.controller('tagCtrl',['$scope','Base',function($scope,Base){
    Base.getData(function(data){
        $scope.tags = data.tags;
    });
}]);

//list
angularDoubanControllers.controller('listCtrl', ['$scope','Base',
  function($scope,Base) {
    Base.getList(function(data){
        $scope.list = data.books;
        $scope.$apply();
    });
  }]);


//detail
angularDoubanControllers.controller('detailCtrl', ['$scope','Base',
function($scope,Base) {
    Base.getDetail(function(data){
        $scope.book = data;
        $scope.$apply();
    });
}]);
