var angularDoubanDirective = angular.module('angularDoubanDirective',[]);

angularDoubanDirective.directive('liblock',['$timeout',function($timeout){
    return {
        restrict : 'E',
        templateUrl : 'tpl/liblock.html',
        replace : true,
        link : function(scope, element, attrs){
            //添加动画
            $timeout(function(){
                $('#list li').each(function(index){
                    $(this).css({
                        'position':'absolute',
                        'left':108*(index%5)+15*(index%5)+'px',
                        'top':177*(Math.floor(index/5))+Math.floor(index/5)*15+'px'
                    });
                }).parent().css('height',Math.ceil($('#list li').length/5)*192).css('opacity',1);
            },0);
        }
    }
}]);
