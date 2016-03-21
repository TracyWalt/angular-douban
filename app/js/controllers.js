
var angularDoubanControllers = angular.module('angularDoubanControllers', []);

//nav
angularDoubanControllers.controller('navCtrl',['$scope','$http',function($scope,$http){
    $http.get('js/data.json').success(function(data){
        $scope.navs = data.nav;
    });
}]);

//tag
angularDoubanControllers.controller('tagCtrl',['$scope','$http',function($scope,$http){
    $http.get('js/data.json').success(function(data){
        $scope.tags = data.tags;
    });
}]);

//list
angularDoubanControllers.controller('listCtrl', ['$scope',
  function($scope) {
    // https://www.douban.com/group/topic/73507847/  豆瓣不支持 带特殊符号的函数名 ，angular ->JONS_CALLBACK = angular.callback._0
    //   $http.jsonp('https://api.douban.com/v2/book/search?callback=JSON_CALLBACK&q=1').success(function(data){
    //       console.log(data);
    //   });
      $.get('https://api.douban.com/v2/book/search?q=软件&count=20',function(data){
          //使用的是第三方的ajax,所以要手动更新视图
          $scope.$apply(function(){
              $scope.list = data.books;
          });
      },'jsonp');

  }]);


//detail
angularDoubanControllers.controller('detailCtrl', ['$scope','$routeParams',
function($scope,$routeParams) {
    $.get('https://api.douban.com/v2/book/'+$routeParams.bookId,function(data){
        //使用的是第三方的ajax,所以要手动更新视图
        $scope.$apply(function(){
            $scope.book = data;
        });
    },'jsonp');
}]);
