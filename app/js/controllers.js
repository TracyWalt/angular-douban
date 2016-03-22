
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
angularDoubanControllers.controller('listCtrl', ['$scope','Base','$timeout',
  function($scope,Base,$timeout) {
    Base.getList(function(data){
        $scope.list = data.books;
        $scope.$apply();  //手动更新视图

        //添加动画
        $timeout(function(){
            $('#list li').each(function(index){
                $(this).css({
                    'opacity':1,
                    'position':'absolute',
                    'left':108*(index%5)+15*(index%5)+'px',
                    'top':177*(Math.floor(index/5))+Math.floor(index/5)*15+'px'
                });
            }).parent().css('height',Math.ceil($('#list li').length/5)*192);
        },0);

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
