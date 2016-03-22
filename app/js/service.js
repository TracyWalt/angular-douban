
var angularDoubanService = angular.module('angularDoubanService',[]);

angularDoubanService.factory('Base',['$http','$routeParams',function($http,$routeParams){
    var Base = {
        getData : function(callback){
            $http.get('js/data.json').success(function(data){
                callback && callback(data);
            });
        },
        getList : function(callback){
            // https://www.douban.com/group/topic/73507847/  豆瓣不支持 带特殊符号的函数名 ，angular ->JONS_CALLBACK = angular.callback._0
            //   $http.jsonp('https://api.douban.com/v2/book/search?callback=JSON_CALLBACK&q=1').success(function(data){
            //       console.log(data);
            //   });
            //   $.get('https://api.douban.com/v2/book/search?q=软件&count=20',function(data){
            //       //使用的是第三方的ajax,所以要手动更新视图
            //       $scope.$apply(function(){
            //           $scope.list = data.books;
            //       });
            //   },'jsonp');
            $.get('https://api.douban.com/v2/book/search?q=软件&count=20',function(data){
                callback && callback(data);
            },'jsonp');
        },
        getDetail : function(callback){
            $.get('https://api.douban.com/v2/book/'+$routeParams.bookId,function(data){
                callback && callback(data);
            },'jsonp');
        }
    };
    return Base;
}]);
